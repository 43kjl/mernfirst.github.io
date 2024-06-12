import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./pages/Footer";




export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<App />

);
