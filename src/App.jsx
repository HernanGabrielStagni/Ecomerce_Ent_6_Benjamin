import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { getAllProductsThunk } from "./store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./COMPONENTS/SHARED/Header";
import Login from "./Pages/Login";
import ProductId from "./Pages/ProductId";

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
        <Route path='/product/:id' element={<ProductId/>} />
      </Routes>
    </div>
  );
}

export default App
