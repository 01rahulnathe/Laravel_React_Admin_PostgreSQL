<?php

use App\Http\Controllers\Api\TeamController;
use App\Http\Controllers\Api\ChannelController;
use App\Http\Controllers\Api\ConversationController;
use App\Http\Controllers\Api\MessageController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('teams', TeamController::class);
    Route::apiResource('channels', ChannelController::class);
    Route::apiResource('conversations', ConversationController::class);
    Route::apiResource('messages', MessageController::class);
});