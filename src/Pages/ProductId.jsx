import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../HOOKS/useFetch'
import ProductIdInfo from '../COMPONENTS/PRODUCTID/ProductIdInfo'
import SliderImgs from '../COMPONENTS/PRODUCTID/SliderImgs'

const ProductId = () => {

    const {id}= useParams()
    const url=`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    const [product, getProductById ]=useFetch(url)

    useEffect(()=>{
      getProductById()

    },[])

  

  return (
    <div>
      {/* <h1>hola ${id}</h1> */}
      <SliderImgs product={product}/>
      <ProductIdInfo product={product}/>


    </div>
  )
}

export default ProductId