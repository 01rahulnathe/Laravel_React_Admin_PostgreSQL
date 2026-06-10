<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\UserProfile;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

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

            ]

        ]);
    }
}