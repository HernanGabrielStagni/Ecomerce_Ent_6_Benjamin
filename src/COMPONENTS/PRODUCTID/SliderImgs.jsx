import React from 'react'
import './SliderImgs_CSS.css'
const SliderImgs = ({product}) => {

    // console.log(product)

  return (
    <div className='container_imgId'>
        <img src={product?.images[2].url} alt="" />
    </div>
  )
}

export default SliderImgs