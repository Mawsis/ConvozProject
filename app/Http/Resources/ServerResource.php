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
            "id" => $this->id,
            "name" => $this->name,
            "users" => UserSimpleResource::collection($this->users),
            "chats" => ChatResource::collection($this->chats),
            "users_count" => $this->whenCounted('users'),
        ];
    }
}