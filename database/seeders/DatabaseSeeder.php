<?php

namespace Database\Seeders;

use App\Models\Chat;
use App\Models\ChatUser;
use App\Models\Message;
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
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $user2 = User::factory()->create([
            'name' => 'Mawsis',
            'email' => 'mawsis@example.com',
        ]);
        $user3 = User::factory()->create([
            'name' => 'Younes',
            'email' => 'wassim@example.com',
        ]);
        $chat = Chat::factory()->create();
        $chat2 = Chat::factory()->create();

        $chat->users()->attach($user1);
        $chat->users()->attach($user2);
        $chat2->users()->attach($user1);
        $chat2->users()->attach($user3);
        
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