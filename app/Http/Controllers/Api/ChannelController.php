<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Channel;
use Illuminate\Http\Request;

class ChannelController extends Controller
{
    public function index()
    {
        return Channel::with('team')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'team_id'=>'required|exists:teams,id',
            'name'=>'required'
        ]);

        return Channel::create([
            'team_id'=>$request->team_id,
            'name'=>$request->name
        ]);
    }

    public function show(Channel $channel)
    {
        return $channel->load('team');
    }

    public function update(Request $request, Channel $channel)
    {
        $channel->update($request->only('name'));

        return $channel;
    }

    public function destroy(Channel $channel)
    {
        $channel->delete();

        return response()->json([
            'message'=>'Deleted'
        ]);
    }
}