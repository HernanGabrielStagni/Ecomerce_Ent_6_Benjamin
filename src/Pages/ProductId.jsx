import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../HOOKS/useFetch";
import ProductIdInfo from "../COMPONENTS/PRODUCTID/ProductIdInfo";
import SliderImgs from "../COMPONENTS/PRODUCTID/SliderImgs";
import SimilarProducts from "../COMPONENTS/PRODUCTID/SimilarProducts";
import "../Pages/ProductId_CSS.css";

const ProductId = () => {
  const { id } = useParams();

  const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`;
  const [product, getProductById] = useFetch(url);

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <section className="container__productId">
      <article className="productId__header">
        
        <div className="slider">
          {/* <SliderImgs className="productId__img" product={product} /> */}
          <SliderImgs product={product} />
        </div>
        
        <div className="info">
          {/* <ProductIdInfo className="productId__info" product={product} /> */}
          <ProductIdInfo  product={product} />
        </div>
         
       
      </article>
      
        <div className="productId__footer">
        <h2 className='h2'> Similar Products</h2>
        <SimilarProducts
          
            categoryId={product?.categoryId}
            currentId={id}
          />
          
        </div>

      
    </section>
  );
};

export default ProductId;
