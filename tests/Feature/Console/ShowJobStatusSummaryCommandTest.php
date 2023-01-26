<?php

namespace JobStatus\Tests\Feature\Console;

use Illuminate\Support\Facades\Artisan;
use JobStatus\Models\JobStatus;
use JobStatus\Models\JobStatusTag;
use JobStatus\Tests\TestCase;

class ShowJobStatusSummaryCommandTest extends TestCase
{

    /** @test */
    public function it_shows_the_right_data_for_one_job_type()
    {
        $this->markTestIncomplete('Tags is no longer a thing on the trackable job');

        JobStatus::factory()->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::QUEUED]);
        JobStatus::factory()->count(20)->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::FAILED]);
        JobStatus::factory()->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::STARTED]);

        $response = $this->artisan('job-status:summary')
            ->assertOk()
            ->expectsTable([
                'Job', 'Tags', 'Queued', 'Running', 'Succeeded', 'Failed', 'Cancelled'
            ], [
                [
                    'MyFirstJob', 'keyone = valueone', 1, 1, 0, 20, 0
                ]
            ]);
    }

    /** @test */
    public function it_shows_multiple_tags()
    {
        $this->markTestIncomplete('Tags is no longer a thing on the trackable job');
        JobStatus::factory()
            ->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')
            ->has(JobStatusTag::factory()->state(['key' => 'keytwo', 'value' => 'valuetwo']), 'tags')
            ->create(['job_class' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::QUEUED]);


        $response = $this->artisan('job-status:summary')
            ->assertOk()
            ->expectsTable([
                'Job', 'Tags', 'Queued', 'Running', 'Succeeded', 'Failed', 'Cancelled'
            ], [
                [
                    'MyFirstJob', 'keyone = valueone, keytwo = valuetwo', 1, 0, 0, 0, 0
                ]
            ]);
    }

    /** @test */
    public function it_shows_multiple_jobs()
    {
        $this->markTestIncomplete('Tags is no longer a thing on the trackable job');
        JobStatus::factory()
            ->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')
            ->has(JobStatusTag::factory()->state(['key' => 'keytwo', 'value' => 'valuetwo']), 'tags')
            ->create(['job_class' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::QUEUED]);
        JobStatus::factory()->count(20)->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::FAILED]);
        JobStatus::factory()->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'MySecondJob', 'status' => \JobStatus\Enums\Status::STARTED]);


        $response = $this->artisan('job-status:summary')
            ->assertOk()
            ->expectsTable([
                'Job', 'Tags', 'Queued', 'Running', 'Succeeded', 'Failed', 'Cancelled'
            ], [
                ['MyFirstJob', 'keyone = valueone, keytwo = valuetwo', 1, 0, 0, 0, 0],
                ['MyFirstJob', 'keyone = valueone', 0, 0, 0, 20, 0],
                ['MySecondJob', 'keyone = valueone', 0, 1, 0, 0, 0],
            ]);
    }

    /** @test */
    public function it_can_filter_by_job_class()
    {
        $this->markTestIncomplete('Tags is no longer a thing on the trackable job');
        JobStatus::factory()->count(20)->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::FAILED]);
        JobStatus::factory()->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'MySecondJob', 'status' => \JobStatus\Enums\Status::STARTED]);

        $response = $this->artisan('job-status:summary --class=MySecondJob')
            ->assertOk()
            ->expectsTable([
                'Job', 'Tags', 'Queued', 'Running', 'Succeeded', 'Failed', 'Cancelled'
            ], [
                ['MySecondJob', 'keyone = valueone', 0, 1, 0, 0, 0],
            ])
            // Test the table excludes any mention of MyFirstJob
            ->doesntExpectOutputToContain('MyFirstJob');
    }

    /** @test */
    public function it_can_filter_by_job_alias()
    {
        $this->markTestIncomplete('Tags is no longer a thing on the trackable job');
        JobStatus::factory()->count(20)->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'SomeJobOne', 'job_alias' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::FAILED]);
        JobStatus::factory()->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'SomeJobTwo', 'job_alias' => 'MySecondJob', 'status' => \JobStatus\Enums\Status::STARTED]);


        $response = $this->artisan('job-status:summary --alias=MySecondJob')
            ->assertOk()
            ->expectsTable([
                'Job', 'Tags', 'Queued', 'Running', 'Succeeded', 'Failed', 'Cancelled'
            ], [
                ['SomeJobTwo', 'keyone = valueone', 0, 1, 0, 0, 0],
            ])
            // Test the table excludes any mention of MyFirstJob
            ->doesntExpectOutputToContain('SomeJobOne');
    }

    /** @test */
    public function it_can_filter_by_tags()
    {
        $this->markTestIncomplete('Tags is no longer a thing on the trackable job');
        JobStatus::factory()->count(20)->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')->create(['job_class' => 'SomeJobOne', 'job_alias' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::FAILED]);
        JobStatus::factory()->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valuetwo']), 'tags')->create(['job_class' => 'SomeJobTwo', 'job_alias' => 'MySecondJob', 'status' => \JobStatus\Enums\Status::STARTED]);


        $response = $this->artisan('job-status:summary --tag=keyone:valuetwo')
            ->assertOk()
            ->expectsTable([
                'Job', 'Tags', 'Queued', 'Running', 'Succeeded', 'Failed', 'Cancelled'
            ], [
                ['SomeJobTwo', 'keyone = valuetwo', 0, 1, 0, 0, 0],
            ])
            // Test the table excludes any mention of MyFirstJob
            ->doesntExpectOutputToContain('SomeJobOne');
    }

    /** @test */
    public function it_can_filter_by_multiple_tags()
    {
        $this->markTestIncomplete('Tags is no longer a thing on the trackable job');
        JobStatus::factory()->count(20)
            ->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')
            ->has(JobStatusTag::factory()->state(['key' => 'keytwo', 'value' => 'valueone']), 'tags')
            ->create(['job_class' => 'SomeJobOne', 'job_alias' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::FAILED]);
        JobStatus::factory()
            ->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')
            ->has(JobStatusTag::factory()->state(['key' => 'keytwo', 'value' => 'valuetwo']), 'tags')
            ->create(['job_class' => 'SomeJobTwo', 'job_alias' => 'MySecondJob', 'status' => \JobStatus\Enums\Status::STARTED]);


        $response = $this->artisan('job-status:summary --tag=keyone:valueone --tag=keytwo:valuetwo')
            ->assertOk()
            ->expectsTable([
                'Job', 'Tags', 'Queued', 'Running', 'Succeeded', 'Failed', 'Cancelled'
            ], [
                ['SomeJobTwo', 'keyone = valueone, keytwo = valuetwo', 0, 1, 0, 0, 0],
            ])
            // Test the table excludes any mention of MyFirstJob
            ->doesntExpectOutputToContain('SomeJobOne');
    }

    /** @test */
    public function it_takes_the_final_tag_if_same_key_given_twice()
    {
        $this->markTestIncomplete('Tags is no longer a thing on the trackable job');
        JobStatus::factory()->count(20)
            ->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valueone']), 'tags')
            ->create(['job_class' => 'SomeJobOne', 'job_alias' => 'MyFirstJob', 'status' => \JobStatus\Enums\Status::FAILED]);
        JobStatus::factory()
            ->has(JobStatusTag::factory()->state(['key' => 'keyone', 'value' => 'valuetwo']), 'tags')
            ->create(['job_class' => 'SomeJobTwo', 'job_alias' => 'MySecondJob', 'status' => \JobStatus\Enums\Status::STARTED]);


        $response = $this->artisan('job-status:summary --tag=keyone:valueone --tag=keyone:valuetwo')
            ->assertOk()
            ->expectsTable([
                'Job', 'Tags', 'Queued', 'Running', 'Succeeded', 'Failed', 'Cancelled'
            ], [
                ['SomeJobTwo', 'keyone = valuetwo', 0, 1, 0, 0, 0],
            ])
            // Test the table excludes any mention of MyFirstJob
            ->doesntExpectOutputToContain('SomeJobOne');
    }
}
