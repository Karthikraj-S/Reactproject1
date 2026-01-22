import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PropertyList from "./pages/PropertyList";
import PropertyType from "./pages/PropertyType";
import PropertyAgent from "./pages/PropertyAgent";
import Testimonial from "./pages/testimonial";
import Error from "./pages/error";
import About from "./pages/About";
export default function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
         <Route index element={<Home/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="propertylist" element={<PropertyList/>}/>
         <Route path="propertytype" element={<PropertyType/>}/>
         <Route path="propertyagent" element={<PropertyAgent/>}/>
         <Route path="testimonial" element={<Testimonial/>}/>
         <Route path="error" element={<Error/>}/>
         
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)