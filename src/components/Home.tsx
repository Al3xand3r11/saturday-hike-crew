
function Home() {

    return (
        <div className="bg-[url('/HeroImage.webp')] h-screen bg-cover">
          <div className="flex flex-col items-center pt-40">
            <div className="text-center text-sand font-extrabold text-[128px] tracking-tight leading-none drop-shadow-2xl">
                The Saturday <br/> Hike Crew
            </div>
            <div className="w-1/2 text-center text-white font-semibold text-xl drop-shadow-xl">
            Welcome to The Saturday Hike Crew, where we create meaningful outdoor experiences for our community. From invigorating hikes to peaceful walks, we&apos;re all about connecting people with nature and each other. Join us as we explore and embrace the beauty around us!
            </div>
            <div className="flex flex-row w-2/12 justify-between mt-4">
              <a className=" rounded-3xl px-8 py-2 bg-sand text-white font-semibold drop-shadow-lg" href="/about">
                Who we are
              </a>
              <a className="border border-sand rounded-3xl px-8 py-2 font-semibold text-white drop-shadow-lg hover:bg-sand" href="events">
                Hikes
              </a>
            </div>
          </div>
        </div>
    )
  }
  
  export default Home