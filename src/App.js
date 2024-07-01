import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Room from './Components/Room';
import Economy from './Components/Economy';
import Business from './Components/Business';
import Luxury from './Components/Luxury';
import Register from './Components/Register'
import Login from './Components/Login';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Footer from './Components/Footer';
import Detailpage from './Components/Detailpage';
import Detailpage2 from './Components/Detailpage2';
import Detail3 from './Components/Details3';
import SideBar from './Components/SideBar';


function App() {  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/rooms' element={<Room/>} />
        <Route path='/economy' element={<Economy/>} />
        <Route path="/economy/:roomId" element={<Detailpage />} />
        <Route path='/business' element={<Business/>} />
        <Route path="/business/:roomId2" element={<Detailpage2 />} />
        <Route path='/luxury' element={<Luxury/>} />
        <Route path="/luxury/:roomId3" element={<Detail3 />} />
        <Route path='/*' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sidebar' element={<SideBar/>} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
