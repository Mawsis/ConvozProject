import { router, useForm } from "@inertiajs/react";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { HashLoader } from "react-spinners";

const UserChat = ({ user, chat }) => {
    const loading = useRef("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState(chat.messages);
    const [loadingMessage, setLoadingMessage] = useState("");
    const handleSendMessage = async (e) => {
        setLoadingMessage(loading.current);
        e.preventDefault();
        router.post(route("ChatMessage.store"), {
            message: message,
            user_id: user.id,
            chat_id: chat.id,
        });
        setMessage("");
    };
    useEffect(() => {
        window.Echo.private("Chat.1").listen("ChatMessageSent", (event) => {
            console.log(loadingMessage);
            setMessages((prev) => [...prev, event.message]);
            setLoadingMessage("");
        });
    }, []);

    return (
        <>
            <div className="h-[92%] w-full flex flex-col gap-2 justify-end py-10 items-center overflow-auto">
                {messages.map((message) => {
                    return (
                        <div
                            key={message.id}
                            className={
                                message.user_id === user.id
                                    ? "ml-auto p-2 bg-primary text-primary-content rounded"
                                    : "mr-auto p-2 bg-secondary text-primary-content rounded"
                            }
                        >
                            {message.message}
                        </div>
                    );
                })}
                {loadingMessage && (
                    <div className="ml-auto p-2 bg-neutral text-neutral-content rounded">
                        {loadingMessage}
                    </div>
                )}
            </div>
            <form
                onSubmit={handleSendMessage}
                className="h-[8%] w-full flex justify-center items-center px-2 bg-neutral text-neutral-content rounded-xl"
            >
                <div className=" cursor-pointer">
                    <PlusCircle size={30} />
                </div>
                <input
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

export default UserChat;
