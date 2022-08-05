<?php

namespace JobStatus\Tests;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Routing\Router;
use JobStatus\JobStatusServiceProvider;
use JobStatus\Tests\fakes\JobFake;
use Prophecy\PhpUnit\ProphecyTrait;

class TestCase extends \Orchestra\Testbench\TestCase
{
    use ProphecyTrait, RefreshDatabase;

    protected function getPackageProviders($app)
    {
        return [JobStatusServiceProvider::class];
    }

    protected function setUp(): void
    {
        parent::setUp();
        $this->loadMigrationsFrom(realpath(__DIR__.'/../database/migrations'));
    }

    /**
     * Define environment setup.
     *
     * @param  \Illuminate\Foundation\Application  $app
     * @return void
     */
    protected function getEnvironmentSetUp($app)
    {
        $app['config']->set('database.default', 'test');
        $app['config']->set('database.connections.test', [
            'driver'   => 'sqlite',
            'database' => ':memory:',
            'prefix'   => '',
        ]);
    }

    protected function tearDown(): void
    {
        JobFake::$canSeeTracking = null;
        parent::tearDown();
    }


}
