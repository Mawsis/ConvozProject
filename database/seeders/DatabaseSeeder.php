<?php

namespace Database\Seeders;

use App\Models\Chat;
use App\Models\ChatUser;
use App\Models\Message;
use App\Models\Server;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $user1 = User::factory()->create([
            'name' => 'Grrbou3a',
            'email' => 'test@example.com',
        ]);
        $user2 = User::factory()->create([
            'name' => 'Mawsis',
            'email' => 'mawsis@example.com',
        ]);
        $user3 = User::factory()->create([
            'name' => 'Zviti',
            'email' => 'wassim@example.com',
        ]);
        $chat = Chat::factory()->create();
        $server = Server::factory()->create();
        $chat2 = Chat::factory()->create([
            "type" => "server",
            "server_id" => $server->id,
        ]);
        $chat3 = Chat::factory()->create([
            "type" => "server",
            "server_id" => $server->id,
        ]);
        $server->users()->attach($user1);
        $server = Server::factory()->create();
        $chat2 = Chat::factory()->create([
            "type" => "server",
            "server_id" => $server->id,
        ]);
        $chat3 = Chat::factory()->create([
            "type" => "server",
            "server_id" => $server->id,
        ]);
        $server->users()->attach($user1);
        $server->users()->attach($user2);
        $server->users()->attach($user3);
        
        $chat->users()->attach($user1);
        $chat->users()->attach($user2);
        
        for ($i = 0; $i < 10; $i++) {
            Message::factory()->create([
                'chat_id' => $chat->id,
                'user_id' => [$user1->id,$user2->id][rand(0,1)]
            ]);
            Message::factory()->create([
                'chat_id' => $chat2->id,
                'user_id' => [$user1->id,$user3->id][rand(0,1)],
            ]);
        }
    }
}