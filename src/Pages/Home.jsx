import React from "react";
import { useSelector } from "react-redux";
import CardProducts from "../COMPONENTS/HOME/CardProducts";
import '../Pages/Home_CSS.css'
const Home = () => {
  const { productsGlobal } = useSelector((state) => state);


  return (
    <div className="containerCards">
      {productsGlobal?.map((prod) => (
        <CardProducts key={prod.id}
        product={prod} 
        
        />
      ))
      }
    </div>
  );
};

export default Home;
