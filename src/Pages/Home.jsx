import React from "react";
import { useSelector } from "react-redux";
import CardProducts from "../COMPONENTS/HOME/CardProducts";

const Home = () => {
  const { productsGlobal } = useSelector((state) => state);
  console.log(productsGlobal);

  return (
    <div>
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
