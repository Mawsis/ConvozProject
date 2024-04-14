<?php

namespace App\Services;

use App\Http\Resources\ChatResource;
use App\Http\Resources\Home\RecentChatsResource;

class ChatService
{
    public function recentChats($user)
    {
        $chats = $user->chats()->get();
        return RecentChatsResource::collection($chats);
    } 
}
