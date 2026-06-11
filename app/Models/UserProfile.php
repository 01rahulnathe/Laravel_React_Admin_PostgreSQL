<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class UserProfile extends Model
{
    use LogsActivity;

    protected $fillable = [

        'name',
        'email',
        'password',
        'status',

    ];

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()

            ->logOnly([
                'name',
                'email',
                'status',
            ])

            ->logOnlyDirty()

            ->setDescriptionForEvent(
                fn (string $eventName) => "User {$eventName}"
            );
    }
}
