import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import { getAllProductsThunk } from "./store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./COMPONENTS/SHARED/Header";

import Home from "./Pages/Home";
import ProductId from "./Pages/ProductId";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
 }, []);

  return (
    <div className="app">
      <Header/>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
        
        <Route path='/product/:id' element={<ProductId/>} />
      </Routes>
    </div>
  );
}

export default App
