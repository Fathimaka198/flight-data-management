<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use File;

class ClearLogs extends Command
{
    protected $signature = 'log:clear';
    protected $description = 'Clear the Laravel log files';

    public function handle()
    {
        File::put(storage_path('logs/laravel.log'), ''); // Empty the log file
        $this->info('Logs have been cleared!');
    }
}
