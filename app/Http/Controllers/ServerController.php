<?php

namespace App\Http\Controllers;

use App\Http\Resources\ServerResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServerController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Servers',[
            "servers" => ServerResource::collection($request->user()->servers()->withCount("users")->get())
        ]);
    }
}