<?php

namespace App\Http\Controllers;

use App\Services\ChatService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request, ChatService $chatService)
    {
        $recentChats = $chatService->recentChats($request->user());
        return Inertia::render('Home',[
            "recentChats" => $recentChats
        ]);
    }
}
