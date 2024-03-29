import Nav from "@/Components/Nav";
import ServerChats from "@/Components/ServerChats";
import ServerChat from "@/Components/ServerChat";
import React, { useState } from "react";

const Servers = ({ auth, servers }) => {
    const [actualServer, setActualServer] = useState(
        servers ? servers[0] : null
    );
    const [actualChat, setActualChat] = useState(actualServer.chats[0]);
    return (
        <div className="w-full h-full flex">
            <Nav auth={auth} />
            <div className="w-[85%] h-full p-5 grid grid-cols-10 grid-rows-10 gap-3">
                <div className="flex flex-col gap-2 row-span-full rounded border border-primary bg-base-300 p-2">
                    {servers.map((server) => {
                        return (
                            <div
                                key={server.id}
                                className="w-full"
                                onClick={() => {
                                    setActualServer(server);
                                    setActualChat(server.chats[0]);
                                }}
                            >
                                <div className="avatar placeholder aspect-square w-full">
                                    <div className="bg-neutral text-neutral-content rounded-full hover:border-2 hover:border-primary">
                                        <span className="text-xl">AI</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-2 row-span-full col-span-2 rounded border border-primary bg-base-300 p-2">
                    <ServerChats
                        chats={actualServer.chats}
                        server={actualServer}
                        chatState={[actualChat, setActualChat]}
                    />
                </div>
                <div className="flex flex-col justify-center items-center h-full w-full row-span-full p-2 col-span-7 rounded border border-primary bg-base-300">
                    <ServerChat
                        key={actualChat.id}
                        chat={actualChat}
                        user={auth.user}
                    />
                </div>
            </div>
        </div>
    );
};

export default Servers;
