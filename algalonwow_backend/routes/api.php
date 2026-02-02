<?php

use App\Http\Controllers\WowController;
use Illuminate\Support\Facades\Route;

Route::get('/ping', function () {
    return response()->
        json([
            'app' => 'AlgalonWoW',
            'status' => 'ok',
        ]);
});

Route::get('/wow/classes', [WowController::class, 'classes']);
