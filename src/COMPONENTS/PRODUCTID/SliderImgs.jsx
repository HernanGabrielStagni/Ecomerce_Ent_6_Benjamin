import React from 'react'
import './SliderImgs_CSS.css'
const SliderImgs = ({product}) => {

    // console.log(product)

  return (
 
        <img  className='img' src={product?.images[0].url} alt="" />
  )
}

export default SliderImgs