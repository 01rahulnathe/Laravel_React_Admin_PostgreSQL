<?php

namespace App\Http\Controllers;

use App\Models\UserProfile;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [

            'stats' => [

                'totalUsers' => UserProfile::count(),

                'activeUsers' => UserProfile::where('status', 1)->count(),

                'inactiveUsers' => UserProfile::where('status', 0)->count(),

                'totalRoles' => Role::count(),

                'totalPermissions' => Permission::count(),

            ],

        ]);
    }
}
