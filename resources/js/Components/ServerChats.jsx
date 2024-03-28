import { Hash } from "lucide-react";
import React from "react";

const ServerChats = ({ chats, server }) => {
    console.log(chats);
    return (
        <div className="h-full space-y-5">
            <div className="w-full flex flex-col justify-center items-center bg-secondary text-secondary-content h-[10%] rounded">
                <h1 className="text-lg font-bold">{server.name}</h1>
                <p className="text-sm font-light">
                    public server - {server.users_count} users
                </p>
            </div>
            <div className="flex flex-col gap-2">
                {chats.map((chat) => {
                    return (
                        <div
                            key={chat.id}
                            className="flex gap-3 w-full py-4 px-2 rounded-md bg-neutral text-neutral-content"
                        >
                            <Hash /> {chat.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ServerChats;
