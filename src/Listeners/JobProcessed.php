<?php

namespace JobStatus\Listeners;

use JobStatus\Enums\Status;
use JobStatus\JobStatusModifier;
use JobStatus\Models\JobStatus;

/**
 * When the job has finished.
 *
 * This could happen by itself if the job is successful, in which case mark the job as succeeded. It could be after an exception (job failed),
 * which could be a cancellation, so we need to respect the status of the job status unless it's running, in which case set it to sucessful.
 *
 * - Job status to successful if it's running.
 * - Set percentage to 100%.
 */
class JobProcessed extends BaseListener
{
    /**
     * @param \Illuminate\Queue\Events\JobProcessed $event
     */
    public function handle(\Illuminate\Queue\Events\JobProcessed $event)
    {
        if ($this->isTrackingEnabled()) {
            $modifier = $this->getJobStatusModifier($event->job);
            if ($modifier === null) {
                return;
            }

            if ($modifier->getJobStatus()->status === Status::STARTED) {
                $modifier->setFinishedAt(now());
                $modifier->setPercentage(100.0);
                if ($event->job->hasFailed()) {
                    $modifier->setStatus(Status::FAILED);
                } else {
                    $modifier->setStatus(Status::SUCCEEDED);
                }
            }

            if ($event->job->isReleased()) {
                $jobStatus = JobStatus::create([
                    'class' => $modifier->getJobStatus()?->class,
                    'alias' => $modifier->getJobStatus()?->alias,
                    'batch_id' => $modifier->getJobStatus()->batch_id,
                    'percentage' => 0,
                    'status' => Status::QUEUED,
                    'uuid' => $event->job->uuid(),
                    'connection_name' => $event->job->getConnectionName(),
                    'job_id' => $event->job->getJobId(),
                    'public' => $modifier->getJobStatus()?->public,
                ]);

                $newModifier = JobStatusModifier::forJobStatus($jobStatus)->setStatus(Status::QUEUED);

                foreach ($modifier->getJobStatus()->tags()->get() as $tag) {
                    $jobStatus->tags()->create([
                        'key' => $tag->key,
                        'value' => $tag->value,
                    ]);
                }

                foreach ($modifier->getJobStatus()?->users()->get() as $user) {
                    $newModifier->grantAccessTo($user->user_id);
                }
            }

            $modifier->setPercentage(100);
        }
    }
}
