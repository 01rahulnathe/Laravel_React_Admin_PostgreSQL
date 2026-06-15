<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        // Create Admin Role
        $adminRole = Role::firstOrCreate([
            'name' => 'admin'
        ]);

        // Create Admin User
        $admin = User::firstOrCreate(
            [
                'email' => 'admin@example.com'
            ],
            [
                'name' => 'Administrator',
                'password' => bcrypt('Admin@123'),
                'email_verified_at' => now(),
            ]
        );

        // Assign Role
        $admin->assignRole($adminRole);
    }
}