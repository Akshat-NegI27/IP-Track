import Home from "./pages/home/home";
import About from "./pages/about/About"
import Legal from "./pages/legal/Legal"
import Contact from "./pages/contact/Contact"
import Ip from "./pages/ip/Ip"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/Legal" element = {<Legal/>}/>
          <Route exact path = "/About" element = {<About/>}/>
          <Route exact path = "/Contact" element = {<Contact/>}/>
          <Route exact path = "/IpTracker" element = {<Ip/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
