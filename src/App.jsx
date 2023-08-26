import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <div className="wrapper" style={{ backgroundColor:"gray"}}>
     <Router>
        <Navbar/>
       <Routes>
          <Route path="/" exact element={<Home/>} />
       </Routes>
         <Footer/>
     </Router>

    </div>
  );
}

export default App;
