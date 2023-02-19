<?php

namespace JobStatus\Search\Collections;

use Illuminate\Database\Eloquent\Collection;
use JobStatus\Models\JobBatch;
use JobStatus\Models\JobStatus;
use JobStatus\Search\Result\Batch;
use JobStatus\Search\Result\JobRun;
use JobStatus\Search\Result\Queue;
use JobStatus\Search\Result\TrackedJob;

class JobStatusCollection extends Collection
{
    private function createJobRunCollection(Collection $jobStatusesGroupedByUuid): JobRunCollection
    {
        $jobRuns = new JobRunCollection();

        foreach ($jobStatusesGroupedByUuid as $uuid => $runs) {
            $runs = $runs->sortBy('created_at')->values();
            if ($uuid === null || $uuid === '') {
                foreach ($runs as $run) {
                    $jobRuns->push(new JobRun($run, null));
                }
            } else {
                $jobRuns->push($runs->reduce(
                    fn (?JobRun $result, JobStatus $jobStatus, int $key) => new JobRun($jobStatus, $result)
                ));
            }
        }

        return $jobRuns;
    }

    public function runs(): JobRunCollection
    {
        $queryResult = $this
            ->sortBy([['created_at', 'desc'], ['id', 'desc']])
            ->groupBy(['uuid']);

        return $this->createJobRunCollection($queryResult);
    }

    public function jobs(): TrackedJobCollection
    {
        $queryResult = $this
            ->sortBy([['created_at', 'desc'], ['id', 'desc']])
            ->groupBy(['alias']);

        $trackedJobs = new TrackedJobCollection();
        foreach ($queryResult as $jobAlias => $sameJobTypes) {
            // Groups of the same run
            $exactJobGrouped = $sameJobTypes->groupBy('uuid');
            $jobClass = $sameJobTypes->filter(fn (JobStatus $jobStatus) => $jobStatus->alias !== null)
                ->sortBy([['created_at', 'desc'], ['id', 'desc']])
                ->first()
                ?->class;

            $jobRuns = $this->createJobRunCollection($exactJobGrouped);
            $trackedJobs->push(
                new TrackedJob($jobClass, $jobRuns, $jobAlias)
            );
        }

        return $trackedJobs;
    }

    public function queues(): QueueCollection
    {
        $queryResult = $this
            ->sortBy([['created_at', 'desc'], ['id', 'desc']])
            ->groupBy(['queue']);

        $queues = new QueueCollection();
        foreach ($queryResult as $queueName => $sameQueueJobs) {
            if ($queueName === null) {
                continue;
            }
            // Groups of the same run
            $exactJobGrouped = $sameQueueJobs->groupBy('uuid');
            $jobRuns = $this->createJobRunCollection($exactJobGrouped);

            $queues->push(
                new Queue($queueName, $jobRuns)
            );
        }

        return $queues;
    }

    public function batches(): BatchCollection
    {
        $queryResult = $this
            ->sortBy([['created_at', 'desc'], ['id', 'desc']])
            ->groupBy(['batch_id']);

        $batches = new BatchCollection();
        foreach ($queryResult as $batchId => $sameJobTypes) {
            if ($batchId === null || $batchId === '') {
                // Remove any results without a batch ID
                continue;
            }

            // Groups of the same run
            $exactJobGrouped = $sameJobTypes->groupBy('uuid');
            $jobRuns = $this->createJobRunCollection($exactJobGrouped);

            $batches->push(
                new Batch(JobBatch::findOrFail($batchId), $jobRuns)
            );
        }

        return $batches;
    }
}
