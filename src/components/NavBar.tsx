
export default function Navbar () {
    return (
        <>
            <div className="w-full fixed bg-transparent">
                    <div className="flex h-full w-full text-white justify-around ">
                        <div>
                        <img src="./SHC.PNG" width={150} height={150}
                        />
                        </div>
                        <div className=" rounded-2xl h-12 mt-8 w-2/5 content-center bg-white bg-opacity-35 drop-shadow-2xl">
                            <div className="justify-between flex flex-row px-8 font-bold text-sand text-xl">
                                <a className="" href="/">
                                    Home
                                </a>
                                <a className="" href="/events">
                                    Hikes
                                </a>
                                <a href="/about">
                                    About
                                </a>
                            </div>
                            
                        </div>
                        <div className="mt-12 ">
                            <a href="/newsletter" className="px-3 py-2.5 relative group overflow-hidden border text-white text-center mt-6">
                                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-sand group-hover:h-full opacity-90"></span>
                                <span className="relative group-hover:text-grey text-xl">Newsletter</span>
                            </a>
                        </div>
                        

                    </div>
            </div>
        </>
    )
}