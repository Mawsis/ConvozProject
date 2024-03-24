import {
    Contact,
    Home,
    LogIn,
    LogOut,
    MessageCircle,
    Server,
    Settings,
    User,
} from "lucide-react";
import { Link } from "@inertiajs/react";

const Nav = ({ auth }) => {
    return (
        <nav className=" w-[15%] h-full bg-primary flex flex-col justify-between items-center text-primary-content">
            <h1 className="text-3xl h-[20%] flex justify-center items-center font-bold">
                Convoz
            </h1>
            <div className="h-[50%] flex flex-col gap-2 items-start w-full px-1 text-xl">
                <Link
                    href={route("Home")}
                    className={`flex items-center gap-2 w-full rounded-sm py-8 px-1 hover:text-neutral-content hover:bg-neutral  ease-in transition duration-100 ${
                        location.pathname == "/"
                            ? "bg-neutral text-neutral-content"
                            : ""
                    }`}
                >
                    <Home />
                    <div> Home </div>
                </Link>
                <Link
                    href={route("Chat")}
                    className={`flex items-center gap-2 w-full rounded-sm py-8 px-1 hover:text-neutral-content hover:bg-neutral  ease-in transition duration-100 ${
                        location.pathname == "/Chat"
                            ? "bg-neutral text-neutral-content"
                            : ""
                    }`}
                >
                    <MessageCircle />
                    <div> Chat </div>
                </Link>
            </div>
            <div className="h-[35%] flex flex-col justify-end items-center p-2 w-full">
                <div className="flex flex-col divide-y-2 divide-neutral justify-center items-center text-center h-1/3 w-full border-y-2 border-neutral">
                    {!auth.user ? (
                        <Link
                            href={route("login")}
                            className="w-full py-2 h-full flex justify-center gap-5 items-center hover:bg-neutral hover:text-neutral-content"
                        >
                            <div>Login</div>
                            <LogIn />
                        </Link>
                    ) : (
                        <Link
                            method="post"
                            href={route("logout")}
                            as="button"
                            className="w-full py-2 h-full flex justify-center gap-5 items-center hover:bg-neutral hover:text-neutral-content"
                        >
                            <div>Logout</div>
                            <LogOut />
                        </Link>
                    )}
                    <Link
                        href={route("Settings")}
                        className="w-full py-2 h-full flex justify-center gap-5 items-center hover:bg-neutral hover:text-neutral-content"
                    >
                        <div>Settings</div>
                        <Settings />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
