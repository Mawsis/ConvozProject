<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ServerController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Servers',[
            "servers" => $request->user()->servers()->with("chats")->withCount("users")->get()
        ]);
    }
}