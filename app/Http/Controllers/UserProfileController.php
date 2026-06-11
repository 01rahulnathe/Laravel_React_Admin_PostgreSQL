<?php

namespace App\Http\Controllers;

use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\UserProfile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users = UserProfile::when(
            $request->search,
            fn($query, $search) =>
            $query->where('name', 'like', "%{$search}%")
                ->orWhere('email', 'like', "%{$search}%")
        )
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Users/Index', [
            'users' => $users,
            'filters' => $request->only('search'),
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([

            'name' => 'required|max:100',

            'email' => 'required|email|unique:user_profiles',

            'password' => 'required|min:6',

            'status' => 'required'

        ]);

        UserProfile::create([

            'name' => $validated['name'],

            'email' => $validated['email'],

            'password' => bcrypt($validated['password']),

            'status' => $validated['status']

        ]);

        return redirect()
            ->route('users.index')
            ->with('success', 'User created successfully');
    }

    public function edit(UserProfile $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => $user
        ]);
    }


    public function update(Request $request, UserProfile $user)
    {
        $validated = $request->validate([
            'name' => 'required|max:100',
            'email' => 'required|email|unique:user_profiles,email,' . $user->id,
            'status' => 'required'
        ]);

        $user->update($validated);

        return redirect()
            ->route('users.index')
            ->with('success', 'User updated successfully');
    }


    public function destroy(UserProfile $user)
    {
        $user->delete();

        return redirect()
            ->route('users.index')
            ->with('success', 'User deleted successfully');
    }

    public function exportExcel()
    {
        return Excel::download(
            new UsersExport(),
            'users.xlsx'
        );
    }
}
