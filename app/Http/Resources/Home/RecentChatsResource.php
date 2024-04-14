<?php

namespace App\Http\Resources\Home;

use App\Http\Resources\UserSimpleResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecentChatsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "message" => $this->messages()->latest()->first()->message,
            "message_time" => $this->messages()->latest()->first()->created_at->diffForHumans(),
            "user" => UserSimpleResource::make($this->users()->latest()->first()),
        ];
    }
}
