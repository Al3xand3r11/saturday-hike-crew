import Home from "./components/Home"
import Navbar from "./components/NavBar"
import Events from "./components/Events"
import About from "./components/About"
import Rsvp from "./components/Rsvp"
import Unsubscribe from "./components/Unsubscribe"
import Newsletter from "./components/Newsletter"
import { Route, Routes } from "react-router"
function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/rsvp" element={<Rsvp/>}/>
          <Route path="/unsubscribe" element={<Unsubscribe/>}/>
          <Route path="/newsletter" element={<Newsletter/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
