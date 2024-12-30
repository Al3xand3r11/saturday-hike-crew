export default function Newsletter() {
    return(
        <div className="flex flex-col h-auto bg-black">
            <div className="bg-[url('/newsletter.webp')] h-screen bg-cover content-center bg-blend-darken">
                    <div className="w-full flex flex-row-2 divide-x-2 divide-stone-300 h-1/2">
                        <div className="w-1/2 text-white text-center place-items-center content-center ">
                        <p className="w-2/3 items-center font-semibold text-3xl drop-shadow-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        </div>
                        <div className="w-1/2 content-center">
                            <div className=" flex-col place-items-center content-center text-center ">
                                <div className=" w-1/2 mb-4 py-2 rounded-2xl bg-white bg-opacity-35 drop-shadow-2xl">
                                    Email
                                </div>
                                <div className=" w-1/2 py-2 rounded-2xl bg-sand bg-opacity-70 font-semibold drop-shadow-2xl">
                                    Submit
                                </div>                              
                            </div>
                        </div>
                    </div>
            </div>
            <div className="flex flex-row w-full">
                <div className="w-1/3 h-screen bg-sand">
                        Uocoming Events
                </div>
                <div className="w-1/3 text-white">
                        Event Recaps
                </div>
                <div className="w-1/3 bg-white">
                        Announcements
                </div>

            </div>
        </div>
    )
}