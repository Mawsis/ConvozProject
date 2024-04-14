<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\ChatMessageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class,"index"])->name('Home');

Route::get('/Settings', [ProfileController::class, 'test'])->name('Settings');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/Chats/{chat}', [ChatController::class, 'index'])->middleware('auth')->name('Chats');
Route::get('/Chats', [ChatController::class, 'index'])->middleware('auth')->name('Chats');
Route::post('/Chat/Message',[ChatMessageController::class,"store"])->middleware("auth")->name("ChatMessage.store");
Route::get('/Servers', [ServerController::class, 'index'])->middleware('auth')->name('Servers');

require __DIR__.'/auth.php';