import { createRoot } from "react-dom/client";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//  pages
import { Login } from "./pages/login/Login";
import { Home } from "./pages/Home/Home";
import { Cadastro } from "./pages/Cadastro/Cadastro";



createRoot(document.getElementById("root")).render(
  <div className="container">
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/Cadastro"element={<Cadastro />} />
        <Route path="/Contato" element={<Home />}/>
        <Route path="/Faq" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  </div>
);
