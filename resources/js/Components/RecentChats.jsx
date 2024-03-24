import React from "react";

const RecentChats = () => {
    return (
        <div className="w-full h-full flex flex-col gap-2 p-2">
            <div className=" h-1/4 w-full bg-secondary text-secondary-content rounded flex p-2 gap-5">
                <div className="avatar online placeholder aspect-square">
                    <div className="bg-neutral text-neutral-content rounded-full">
                        <span className="text-xl">AI</span>
                    </div>
                </div>
                <div className="h-full flex flex-col py-3 justify-between">
                    <h1 className="text-lg font-bold">Wassim</h1>
                    <p>Hey where have you been</p>
                    <p className="font-light text-sm">3 Hours ago</p>
                </div>
            </div>
            <div className=" h-1/4 w-full bg-secondary text-secondary-content rounded flex p-2 gap-5">
                <div className="avatar online placeholder aspect-square">
                    <div className="bg-neutral text-neutral-content rounded-full">
                        <span className="text-xl">AI</span>
                    </div>
                </div>
                <div className="h-full flex flex-col py-3 justify-between">
                    <h1 className="text-lg font-bold">Wassim</h1>
                    <p>Hey where have you been</p>
                    <p className="font-light text-sm">3 Hours ago</p>
                </div>
            </div>
            <div className=" h-1/4 w-full bg-secondary text-secondary-content rounded flex p-2 gap-5">
                <div className="avatar online placeholder aspect-square">
                    <div className="bg-neutral text-neutral-content rounded-full">
                        <span className="text-xl">AI</span>
                    </div>
                </div>
                <div className="h-full flex flex-col py-3 justify-between">
                    <h1 className="text-lg font-bold">Wassim</h1>
                    <p>Hey where have you been</p>
                    <p className="font-light text-sm">3 Hours ago</p>
                </div>
            </div>
            <div className=" h-1/4 w-full bg-secondary text-secondary-content rounded flex p-2 gap-5">
                <div className="avatar online placeholder aspect-square">
                    <div className="bg-neutral text-neutral-content rounded-full">
                        <span className="text-xl">AI</span>
                    </div>
                </div>
                <div className="h-full flex flex-col py-3 justify-between">
                    <h1 className="text-lg font-bold">Wassim</h1>
                    <p>Hey where have you been</p>
                    <p className="font-light text-sm">3 Hours ago</p>
                </div>
            </div>
        </div>
    );
};

export default RecentChats;
