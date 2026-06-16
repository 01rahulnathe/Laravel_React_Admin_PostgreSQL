<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    protected $fillable = [
        'team_id',
        'name'
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    public function conversations()
    {
        return $this->hasMany(Conversation::class);
    }
}