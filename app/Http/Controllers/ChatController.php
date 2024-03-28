<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user()->id;
        return Inertia::render("Chats", [
            "chats" => $request->user()->chats()
            ->where('type',"chat")
            ->with(['users' => function ($query) use ($userId) {
                $query->where('users.id', '!=', $userId);
            }, 'messages'])
            ->get()
        ]);
    }
}