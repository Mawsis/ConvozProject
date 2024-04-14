import React from "react";

const RecentChats = ({ recentChats }) => {
    return (
        <div className="w-full h-full flex flex-col gap-2 p-2">
            {recentChats.map((chat) => {
                console.log(chat);
                return (
                    <div
                        key={chat.id}
                        className=" h-1/4 w-full bg-secondary text-secondary-content rounded flex p-2 gap-5"
                    >
                        <div className="avatar online placeholder aspect-square">
                            <div className="bg-neutral text-neutral-content rounded-full">
                                <span className="text-xl">
                                    {chat.user.name.substring(0, 2)}
                                </span>
                            </div>
                        </div>
                        <div className="h-full flex flex-col py-3 justify-between">
                            <h1 className="text-lg font-bold">
                                {chat.user.name}
                            </h1>
                            <p>{chat.message}</p>
                            <p className="font-light text-sm">
                                {chat.message_time}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RecentChats;
