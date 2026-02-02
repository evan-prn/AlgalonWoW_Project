<?php

return [
    'client_id' => env('BLIZZARD_CLIENT_ID'),
    'client_secret' => env('BLIZZARD_CLIENT_SECRET'),
    'region' => env('BLIZZARD_REGION', 'eu'),
    'locale' => env('BLIZZARD_LOCALE', 'fr_FR'),
    'oauth_url' => 'https://oauth.battle.net/token',
    'api_base' => 'https://{region}.api.blizzard.com',
];
