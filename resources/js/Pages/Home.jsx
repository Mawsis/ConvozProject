import Nav from "@/Components/Nav";
import RecentChats from "@/Components/RecentChats";
import RecentServers from "@/Components/RecentServers";

const Home = ({ auth, recentChats }) => {
    return (
        <div className="w-full h-full flex">
            <Nav auth={auth} />
            <div className="w-[85%] flex">
                <div className="text-white p-5 grid grid-cols-3 grid-rows-3 gap-3 w-full h-full">
                    <div className=" rounded border border-primary row-span-2 bg-base-300">
                        <RecentChats recentChats={recentChats} />
                    </div>
                    <div className=" rounded border border-primary col-span-2 bg-base-300">
                        <RecentServers />
                    </div>
                    <div className=" rounded border border-primary bg-base-300">
                        <div className="w-full h-full flex flex-col justify-between items-center p-8">
                            <div className="text-2xl font-semibold text-center">
                                Enjoy Chatting with your <br />
                                <span className="text-primary font-bold">
                                    FRIENDS
                                </span>
                            </div>
                            <div className="flex justify-center items-center"></div>
                        </div>
                    </div>
                    <div className=" rounded border border-primary row-span-2 bg-base-300"></div>
                    <div className=" rounded border border-primary col-span-2 bg-base-300"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
