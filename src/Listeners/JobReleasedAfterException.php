<?php

namespace JobStatus\Listeners;

use JobStatus\Enums\Status;
use JobStatus\JobStatusModifier;
use JobStatus\Models\JobStatus;

/**
 * When a job has finished processing but is going to be released to try again.
 *
 * - Create a new job status.
 */
class JobReleasedAfterException extends BaseListener
{
    /**
     * @param \Illuminate\Queue\Events\JobReleasedAfterException $event
     */
    public function handle(\Illuminate\Queue\Events\JobReleasedAfterException $event)
    {
        if ($this->isTrackingEnabled()) {
            $modifier = $this->getJobStatusModifier($event->job);
            if ($modifier === null) {
                return;
            }
            $jobStatus = JobStatus::create([
                'job_class' => $modifier->getJobStatus()?->job_class,
                'job_alias' => $modifier->getJobStatus()?->job_alias,
                'percentage' => 0,
                'status' => Status::QUEUED,
                'uuid' => $event->job->uuid(),
                'connection_name' => $event->job->getConnectionName(),
                'job_id' => $event->job->getJobId(),
                'public' => $modifier->getJobStatus()?->public
            ]);


            JobStatusModifier::forJobStatus($jobStatus)->setStatus(Status::QUEUED);

            foreach ($modifier->getJobStatus()->tags()->get() as $tag) {
                $jobStatus->tags()->create([
                    'key' => $tag->key,
                    'value' => $tag->value,
                ]);
            }

            foreach ($modifier->getJobStatus()->users()->get() as $user) {
                $jobStatus->users()->create([
                    'user_id' => $user->user_id,
                ]);
            }
        }
    }
}
