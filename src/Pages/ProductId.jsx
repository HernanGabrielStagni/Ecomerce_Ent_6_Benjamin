import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../HOOKS/useFetch'

const ProductId = () => {

    const {id}= useParams()
    const url=`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    const [product, getProductById ]=useFetch(url)

    useEffect(()=>{
      getProductById()

    },[])

    console.log(product)

  return (
    <div>

    </div>
  )
}

export default ProductId