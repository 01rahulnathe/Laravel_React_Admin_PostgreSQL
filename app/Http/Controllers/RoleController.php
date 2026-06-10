<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $roles = Role::when(
            $request->search,
            fn($query) =>
            $query->where(
                'name',
                'like',
                '%' . $request->search . '%'
            )
        )
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Roles/Index', [
            'roles' => $roles,
            'filters' => $request->only('search')
        ]);
    }

    public function create()
    {
        return Inertia::render('Roles/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:roles,name'
        ]);

        Role::create([
            'name' => $validated['name']
        ]);

        return redirect()
            ->route('roles.index')
            ->with('success', 'Role created successfully.');
    }

    public function edit(Role $role)
    {
        return Inertia::render('Roles/Edit', [
            'role' => $role
        ]);
    }

    public function update(Request $request, Role $role)
    {
        $validated = $request->validate([
            'name' => 'required|unique:roles,name,' . $role->id
        ]);

        $role->update([
            'name' => $validated['name']
        ]);

        return redirect()
            ->route('roles.index')
            ->with('success', 'Role updated successfully.');
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()
            ->route('roles.index')
            ->with('success', 'Role deleted successfully.');
    }



    public function permissions(Role $role)
    {
        return Inertia::render('Roles/Permissions', [

            'role' => $role,

            'permissions' => Permission::orderBy('name')
                ->get(),

            'rolePermissions' => $role
                ->permissions
                ->pluck('id')

        ]);
    }


    public function updatePermissions(
        Request $request,
        Role $role
    ) {
        $role->syncPermissions(
            $request->permissions
        );

        return redirect()
            ->route('roles.index')
            ->with(
                'success',
                'Permissions assigned successfully.'
            );
    }
}
