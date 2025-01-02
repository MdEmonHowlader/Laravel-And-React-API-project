import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/home';
import Layout from './Pages/layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

