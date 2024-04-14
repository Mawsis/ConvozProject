import React from "react";

const RecentServers = () => {
    return (
        <div className="w-full h-full flex gap-2 p-2">
            <div className="w-1/5 justify-center items-center gap-4 flex flex-col">
                <div className="avatar placeholder aspect-square w-full">
                    <div className="bg-secondary text-secondary-content rounded-full hover:border-2 hover:border-primary">
                        <span className="text-xl">AI</span>
                    </div>
                </div>
                <div className=" text-xl font-bold text-primary">
                    Server's name
                </div>
            </div>
            <div className=" w-1/5 justify-center items-center gap-4 flex flex-col">
                <div className="avatar placeholder aspect-square w-full">
                    <div className="bg-secondary text-secondary-content rounded-full hover:border-2 hover:border-primary">
                        <span className="text-xl">AI</span>
                    </div>
                </div>
                <div className=" text-xl font-bold text-primary">
                    Server's name
                </div>
            </div>
        </div>
    );
};

export default RecentServers;
