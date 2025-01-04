import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';


import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
