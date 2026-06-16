<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Message::with([
            'sender',
            'attachments'
        ])->latest()->paginate(20);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([

            'conversation_id' => 'required',
            'body' => 'nullable',
            'message_type' => 'required'

        ]);

        return Message::create([

            'conversation_id' => $request->conversation_id,
            'sender_id' => auth()->id(),
            'body' => $request->body,
            'message_type' => $request->message_type

        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
