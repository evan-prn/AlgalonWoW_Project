<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class BlizzardApiService
{
    public function getAccessToken()
    {
        return Cache::remember('blizzard_token', 3500, function () {
            $response = Http::asForm()->post(config('blizzard.oauth_url'), [
                'grant_type' => 'client_credentials',
                'client_id' => config('blizzard.client_id'),
                'client_secret' => config('blizzard.client_secret'),
            ]);

            return $response->json()['access_token'];
        });
    }

    public function get(string $endpoint, array $params = [])
    {
        $token = $this->getAccessToken();

        $url = str_replace('{region}', config('blizzard.region'), config('blizzard.api_base')) . $endpoint;

        return Http::withToken($token)->get($url, array_merge([
            'locale' => config('blizzard.locale'),
        ], $params))->json();
    }

    /**
     * Récupère les classes jouables sur le jeu World of Warcraft
     *
     * @return array|mixed
     */
    public function getPlayableClasses()
    {
        return $this->get('/data/wow/playable-class/index');
    }
}
