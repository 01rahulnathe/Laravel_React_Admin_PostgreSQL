<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class ActivityLogController extends Controller
{
    public function index()
    {
        return Inertia::render(
            'ActivityLogs/Index',
            [
                'logs' => Activity::with('causer')

                    ->latest()

                    ->paginate(20)
            ]
        );
    }
}