import React from 'react'

const SliderImgs = ({product}) => {

    // console.log(product)

  return (
    <div>
        <img src={product?.images[2].url} alt="" />
    </div>
  )
}

export default SliderImgs