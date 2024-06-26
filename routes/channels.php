<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('Chat.{id}', function () {
    return true;
});

Broadcast::channel('User.{id}', function ($user,$id) {
    return (int) $user->id === (int) $id;
});