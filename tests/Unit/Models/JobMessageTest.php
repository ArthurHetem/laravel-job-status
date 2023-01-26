<?php

namespace JobStatus\Tests\Unit\Models;

use JobStatus\Models\JobMessage;
use JobStatus\Models\JobStatus;
use JobStatus\Tests\TestCase;

class JobMessageTest extends TestCase
{
    /** @test */
    public function a_model_can_be_created()
    {
        $attributes = [
            'message' => 'My message',
            'type' => \JobStatus\Enums\MessageType::INFO,
            'job_status_id' => JobStatus::factory()->create()->id,
        ];

        JobMessage::factory()->create($attributes);
        $this->assertDatabaseHas('job_status_job_messages', $attributes);
    }

    /** @test */
    public function it_has_a_relationship_with_job_status()
    {
        $jobStatus = JobStatus::factory()->create();
        $message = JobMessage::factory()->create(['job_status_id' => $jobStatus->id]);

        $this->assertTrue(
            $jobStatus->is(
                $message->jobStatus
            )
        );
    }

    /** @test */
    public function it_saves_timestamps_with_milliseconds(){
        $this->markTestIncomplete();
    }
}
