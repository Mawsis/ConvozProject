import Nav from "@/Components/Nav";
import UserChat from "@/Components/UserChat";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { HashLoader } from "react-spinners";

const Chat = ({ auth, chats, chat }) => {
    const [actualChat, setActualChat] = useState(chat);
    useEffect(() => {
        chats.forEach((chat) => {
            window.Echo.private("Chat." + chat.id).listen(
                "ChatMessageSent",
                (event) => {
                    chat.messages.push(event.message);
                }
            );
        });
    }, []);
    return (
        <div className="w-full h-full flex">
            <Nav auth={auth} />
            <div className="w-[85%] h-full p-5 grid grid-cols-4 grid-rows-4 gap-3">
                <div className="flex flex-col gap-2 row-span-4 rounded border border-primary bg-base-300 p-2">
                    {chats.map((chat) => {
                        return (
                            <div
                                key={chat.id}
                                className="w-full h-1/6 bg-secondary text-secondary-content rounded-md relative"
                                onClick={(e) => setActualChat(chat)}
                            >
                                <div className="w-full items-center h-full p-1 flex gap-4">
                                    <div className="avatar online placeholder aspect-square h-2/3 rounded-full">
                                        <div className="bg-neutral text-neutral-content rounded-full">
                                            <span className="text-xl">
                                                {chat.users[0].name.slice(0, 2)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-full flex flex-col justify-between py-3">
                                        <h2 className="text-xl font-bold">
                                            {chat.users[0].name}
                                        </h2>
                                        <p className=" line-clamp-2">
                                            {chat.messages[
                                                chat.messages.length - 1
                                            ]
                                                ? chat.messages[
                                                      chat.messages.length - 1
                                                  ].message
                                                : "nothing"}
                                        </p>
                                        <p className="text-sm font-light">
                                            {chat.messages[
                                                chat.messages.length - 1
                                            ]
                                                ? chat.messages[
                                                      chat.messages.length - 1
                                                  ].created_at
                                                : "nothing"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col justify-center items-center h-full w-full row-span-4 p-2 col-span-3 rounded border border-primary bg-base-300">
                    {actualChat ? (
                        <UserChat
                            key={actualChat.id}
                            user={auth.user}
                            chat={actualChat}
                        />
                    ) : (
                        <HashLoader color="#1eb854" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Chat;
