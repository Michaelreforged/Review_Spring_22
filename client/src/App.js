import { Route, Routes } from "react-router-dom";
import Navbar from "./Compenents/Navbar";
import About from "./Pages/About";
import Functions from "./Pages/Functions";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/functions' element={<Functions/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
