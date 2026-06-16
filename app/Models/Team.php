<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name',
        'description',
        'created_by'
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function members()
    {
        return $this->belongsToMany(
            User::class,
            'team_members'
        )->withPivot('role')
         ->withTimestamps();
    }

    public function channels()
    {
        return $this->hasMany(Channel::class);
    }
}