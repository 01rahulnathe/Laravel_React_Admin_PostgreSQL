<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class ActivityLogController extends Controller
{
    public function index(Request $request)
    {
        $logs = Activity::with('causer')

            ->when(
                $request->user,
                fn ($q) => $q->whereHas(
                    'causer',
                    fn ($x) => $x->where(
                        'name',
                        'ilike',
                        '%'.$request->user.'%'
                    )
                )
            )

            ->when(
                $request->description,
                fn ($q) => $q->where(
                    'description',
                    'ilike',
                    '%'.$request->description.'%'
                )
            )

            ->latest()

            ->paginate(20)

            ->withQueryString();

        return Inertia::render(
            'ActivityLogs/Index',

            compact('logs')
        );
    }
}
