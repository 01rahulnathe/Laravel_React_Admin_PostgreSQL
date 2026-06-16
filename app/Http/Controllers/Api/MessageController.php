<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index()
    {
        return Message::with([
            'sender',
            'attachments'
        ])->latest()->paginate(20);
    }

    public function store(Request $request)
    {
        $request->validate([

            'conversation_id' => 'required',

            'body' => 'required',

            'message_type' => 'required'

        ]);

        $message = Message::create([

            'conversation_id' => $request->conversation_id,

            // temporary
            'sender_id' => 1,

            'body' => $request->body,

            'message_type' => $request->message_type

        ]);

        return $message->load('sender');

    }
}