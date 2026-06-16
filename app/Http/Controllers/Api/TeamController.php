<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function index()
    {
        return Team::with('members')->latest()->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|max:255',
            'description'=>'nullable'
        ]);

        $team = Team::create([
            'name'=>$request->name,
            'description'=>$request->description,
            'created_by'=>auth()->id()
        ]);

        $team->members()->attach(auth()->id(),[
            'role'=>'owner'
        ]);

        return response()->json($team,201);
    }

    public function show(Team $team)
    {
        return $team->load('members','channels');
    }

    public function update(Request $request, Team $team)
    {
        $team->update($request->only([
            'name',
            'description'
        ]));

        return $team;
    }

    public function destroy(Team $team)
    {
        $team->delete();

        return response()->json([
            'message'=>'Deleted'
        ]);
    }
}