<?php

namespace App\Http\Controllers;

use App\Http\Resources\ChatResource;
use App\Models\Chat;
use Error;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index(Request $request, $chat = 0)
    {
        $chats = ChatResource::collection($request->user()->chats()
            ->where('type',"chat")->get());
        if($chat == 0 || !$request->user()->chats()->get()->pluck("id")->search($chat))
            $chat = $chats[0];
        else
            $chat = ChatResource::make(Chat::find($chat));
        return Inertia::render("Chats", [
            "chats" => $chats,
            "chat" => $chat
        ]);
    }
}