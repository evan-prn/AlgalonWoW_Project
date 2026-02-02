<?php

namespace App\Http\Controllers;

use App\Services\BlizzardApiService as BlizzardApiService;
use Illuminate\Http\JsonResponse;

class WowController
{
    /**
     * Récupère les classes jouables en format JSON
     *
     * @param BlizzardApiService $api
     * @return JsonResponse
     */
    public function classes(BlizzardApiService $api): JsonResponse
    {
        $data = $api->getPlayableClasses();

        return response()->json([
            'classes' => $data['classes'] ?? [],
        ]);
    }

}


