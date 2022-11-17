<?php

namespace JobStatus\Listeners;

use JobStatus\Concerns\Trackable;
use JobStatus\JobStatusModifier;
use JobStatus\Models\JobStatus;

class BaseListener
{

    protected function getJobStatusModifier(\Illuminate\Contracts\Queue\Job $job): ?JobStatusModifier
    {
        if($this->validateJob($job) === false) {
            return null;
        }
        $jobStatus = $this->getJobStatus($job);
        return new JobStatusModifier($jobStatus);
    }

    protected function validateJob(mixed $job): bool
    {
        if(is_string($job) || $job instanceof \Closure) {
            return false;
        }
        if(!is_object($job)) {
            return false;
        }

        if(method_exists($job, 'resolveName')) {
            if(!$job->resolveName() || !class_exists($job->resolveName())) {
                return false;
            }
            if(!in_array(Trackable::class, class_uses_recursive($job->resolveName()))) {
                return false;
            }
        } else {
            if(!in_array(Trackable::class, class_uses_recursive($job))) {
                return false;
            }
        }

        return true;
    }

    protected function getJobStatus(\Illuminate\Contracts\Queue\Job $job): JobStatus
    {
        return JobStatus::query()->where('uuid', $job->uuid())->latest()->orderBy('id')->first();
    }

}
