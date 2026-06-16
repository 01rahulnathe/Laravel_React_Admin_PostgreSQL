<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $fillable = [
        'message_id',
        'file_name',
        'file_path',
        'size',
        'mime_type'
    ];

    public function message()
    {
        return $this->belongsTo(Message::class);
    }
}