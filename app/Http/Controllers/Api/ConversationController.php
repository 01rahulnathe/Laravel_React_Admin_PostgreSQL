<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Conversation;
use Illuminate\Http\Request;

class ConversationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Conversation::with([
            'participants',
            'messages'
        ])->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|in:private,group',
            'channel_id' => 'nullable|exists:channels,id',
            'participants' => 'required|array'
        ]);

        $conversation = Conversation::create([

            'type' => $request->type,

            'channel_id' => $request->channel_id

        ]);

        $conversation
            ->participants()
            ->attach($request->participants);

        return $conversation->load('participants');
    }

    /**
     * Display the specified resource.
     */
    public function show(Conversation $conversation)
    {
        return $conversation->load([
            'participants',
            'messages.sender',
            'messages.attachments'
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
