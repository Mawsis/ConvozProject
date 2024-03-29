import { router } from "@inertiajs/react";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ServerChat = ({ user, chat }) => {
    const loading = useRef("");
    const lastMessage = useRef(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState(chat.messages);
    const [loadingMessages, setLoadingMessages] = useState([]);
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (message === "") return;
        setLoadingMessages([...loadingMessages, loading.current]);
        lastMessage.current?.scrollIntoView({ behavior: "smooth" });
        router.post(route("ChatMessage.store"), {
            message: message,
            user_id: user.id,
            chat_id: chat.id,
        });
        setMessage("");
    };
    useEffect(() => {
        window.Echo.private("Chat." + chat.id).listen(
            "ChatMessageSent",
            (event) => {
                setMessages((prev) => [...prev, event.message]);
                setLoadingMessages((loadingMessages) => {
                    const newArray = loadingMessages.slice(1);
                    return newArray;
                });
                console.log(event);
                lastMessage.current?.scrollIntoView({ behavior: "smooth" });
            }
        );
        return () => {
            window.Echo.leave("Chat." + chat.id);
        };
    }, [chat, lastMessage]);
    useEffect(() => {
        lastMessage.current?.scrollIntoView();
    }, [lastMessage]);
    return (
        <>
            <div className="h-[92%] w-full flex flex-col gap-2 py-5 px-1 overflow-y-scroll">
                {messages.map((message) => {
                    return (
                        <div
                            key={message.id}
                            className={
                                message.user_id === user.id
                                    ? "ml-auto max-w-[80%]"
                                    : "mr-auto max-w-[80%]"
                            }
                        >
                            <div
                                className={`text-sm ${
                                    message.user_id === user.id && " text-right"
                                }`}
                            >
                                {/* {message.user.name} */}
                            </div>
                            <div
                                className={
                                    message.user_id === user.id
                                        ? "p-2 bg-primary text-primary-content rounded"
                                        : "p-2 bg-secondary text-primary-content rounded"
                                }
                            >
                                {message.message}
                            </div>
                        </div>
                    );
                })}
                {loadingMessages.map((message, index) => {
                    return (
                        <div
                            key={index}
                            className="ml-auto p-2 bg-neutral text-neutral-content rounded"
                        >
                            {message}
                        </div>
                    );
                })}
                <div
                    key={lastMessage}
                    ref={lastMessage}
                    className=" w-0 h-0"
                ></div>
            </div>
            <form
                onSubmit={handleSendMessage}
                className="h-[8%] w-full flex justify-center items-center px-2 bg-neutral text-neutral-content rounded-xl"
            >
                <div className=" cursor-pointer">
                    <PlusCircle size={30} />
                </div>
                <input
                    autoFocus={true}
                    type="text"
                    className="input input-ghost w-full focus:outline-none focus:border-0 focus:bg-inherit"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        loading.current = e.target.value;
                    }}
                />
            </form>
        </>
    );
};

export default ServerChat;
