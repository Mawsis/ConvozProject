import React, { useEffect, useState } from "react";

const Notification = ({ user }) => {
    const [message, setMessage] = useState(null);
    const [isNotified, setIsNotified] = useState(false);

    useEffect(() => {
        window.Echo.private("User." + user.id).listen(
            "ChatMessageSent",
            (event) => {
                setMessage(event.message);
                setIsNotified(true);
                setTimeout(() => {
                    setIsNotified(false);
                }, 3000);
            }
        );
        return () => {
            window.Echo.leave("User." + user.id);
        };
    }, []);

    return (
        isNotified && (
            <div
                role="alert"
                className="alert shadow-lg absolute z-50 right-2 top-2 w-1/6"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <div>
                    <h3 className="font-bold">
                        New message From {message.user.name}
                    </h3>
                    <div className="text-xs">{message.message}</div>
                </div>
                <button className="btn btn-sm">See</button>
            </div>
        )
    );
};

export default Notification;
