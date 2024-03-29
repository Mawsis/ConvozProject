<?php

namespace App\Http\Controllers;

use App\Http\Resources\ChatResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render("Chats", [
            "chats" => ChatResource::collection($request->user()->chats()
            ->where('type',"chat")->get())
        ]);
    }
}