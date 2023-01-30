<?php

namespace JobStatus\Tests;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;
use JobStatus\JobStatusServiceProvider;
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
        $this->loadMigrationsFrom(realpath(__DIR__ . '/../database/migrations'));
    }

    /**
     * Define environment setup.
     *
     * @param  \Illuminate\Foundation\Application  $app
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
}
