import { useLocation } from "react-router"

export default function Rsvp() {

    const location = useLocation();
    const data = location.state

    return(
        <div className="bg-[url('/rsvp.webp')] h-screen bg-cover">
            <div className="flex flex-row w-full">
                <div className="w-1/3 content-center place-items-center flex ">
                    <div className=" h-96 w-5/6 rounded-2xl bg-white bg-opacity-30">
                        <div>
                            <p>
                                Name
                            </p>
                            <p>
                                Email
                            </p>
                            <p>
                                First Time Hiking?
                            </p>
                            <p>
                                Submit
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="w-2/3 ">
                    <div className="h-1/4 w-3/5 rounded-2xl bg-white bg-opacity-30">

                    </div>
                </div>
            </div>
        </div>
    )
}