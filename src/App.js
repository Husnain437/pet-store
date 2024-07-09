import './main.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Slider from './Components/Slider/Slider'
import Slider2 from './Components/Slider2/Slider2'
import Banner2 from'./Components/Banner2/Banner2'
import OtherCard from './Components/OtherCard/OtherCard'
import Auth from './Pages/Auth/Auth';




function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home/>} /> 
          <Route path="/productdetails" element= {<ProductDetails/>} /> 
          <Route path='/auth' element={<Auth/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
