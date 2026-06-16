<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $fillable = [
        'type',
        'channel_id'
    ];

    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }

    public function participants()
    {
        return $this->belongsToMany(
            User::class,
            'conversation_participants'
        );
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}