<?php

use App\Events\ChatMessageSent;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ChatMessageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServerController;
use App\Models\Chat;
use App\Models\Message;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ProfileController::class, 'test'])->name('Home');
Route::get('/User', [ProfileController::class, 'test'])->name('User');
Route::get('/Friends', [ProfileController::class, 'test'])->name('Friends');
Route::get('/Settings', [ProfileController::class, 'test'])->name('Settings');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/Chats', [ChatController::class, 'index'])->middleware('auth')->name('Chats');
Route::post("/Chat/Message",[ChatMessageController::class,"store"])->middleware("auth")->name("ChatMessage.store");
Route::get('/Servers', [ServerController::class, 'index'])->middleware('auth')->name('Servers');
Route::get("/test", function(){
    ChatMessageSent::dispatch(Message::first());
});

require __DIR__.'/auth.php';