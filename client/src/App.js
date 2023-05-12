import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
// import Attractions from "./components/attractions/Attractions";
import About from "./pages/about/About"
import Explore from "./pages/explore/Explore"
import Contactus from "./pages/contactus/Contactus";
import Register from "./pages/register/Register";
import Travelplan from "./pages/travelplan/Travelplan";
//import Combine from "./pages/combine/Combine";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/travelplan" element={<Travelplan/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/register" element={<Register/>}/>
        
        
        
        
     
     
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
