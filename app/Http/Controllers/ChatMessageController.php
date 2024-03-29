<?php

namespace App\Http\Controllers;

use App\Events\ChatMessageSent;
use App\Http\Resources\MessageResource;
use App\Models\Chat;
use App\Models\Message;
use Illuminate\Http\Request;

class ChatMessageController extends Controller
{
    public function store(Request $request)
    {
        $message = Message::create([
            "message"=>$request->message,
            "user_id"=>$request->user()->id,
            "chat_id"=>$request->chat_id
        ]);
        ChatMessageSent::dispatch(new MessageResource($message));
    }
}