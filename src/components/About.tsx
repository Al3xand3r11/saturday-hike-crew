export default function About() {
    return(
        <div className="bg-darkbrown h-auto flex-col">
                <div className="h-screen flex flex-row-2 w-full place-items-center content-center">
                    <div className="w-1/2  place-items-center content-center">
                        <h1 className="font-bold text-6xl mb-6 text-center">
                            Who we are
                        </h1>
                        <p className="w-3/4 text-3xl font-semibold text-left">
                        The Saturday Hike Crew began as a few friends hiking on Saturdays together and quickly blossomed into a thriving community of adventurers. 
                        Started in 2022 and officially launching in 2023, we&apos;ve grown by thousands and have proudly introduced hundreds to the beauty of the outdoors.

                        Our mission is simple: to create meaningful connections, foster friendships, and encourage personal growth by exploring the trails together. 
                        We believe that through shared experiences in nature, we can inspire a sense of belonging, deepen our appreciation for the world around us, 
                        and empower each other to step outside our comfort zones—one trail at a time. Don&apos;t you want to Join the Crew?

                        </p>
                    </div>
                    <div className="w-1/2 text-center place-items-center content-center">
                        <img  className="rounded-2xl drop-shadow-2xl" src="./about.webp" width={500} height={500}/>
                    </div>
                </div>
                <div className="text-center place-items-center content-center text-6xl font-bold">
                    Collaborations
                </div>
            
        </div>
    )
}