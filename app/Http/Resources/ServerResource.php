<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name" => $this->name,
            "users" => UserResource::collection($this->users),
            "users_count" => $this->whenCounted('users'),
            "chats" => ChatResource::collection($this->chats)
        ];
    }
}