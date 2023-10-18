import React from 'react'
import { useSelector } from 'react-redux'
import './CardProducts_CSS.css'
import { useNavigate } from 'react-router-dom'


const CardProducts = ({product}) => {
 console.log(product)


 const navigate=useNavigate()
//******************************* */
const handleSelecProduct= () => {

navigate (`/product/${product.id}`)
}
//********************************** */
const handleBtnClick=(e)=>{
e.stopPropagation()
}


    return (
    <article className='product' onClick={handleSelecProduct}>
        <header className='product__header'>
            <img className='product__img product__img-1' src={product.images[0].url} alt="" />
            <img className='product__img product__img-2' src={product.images[1].url} alt="" />
        
        </header>
      <div className='product__body'>
        <section className='product__section'>
            <h4 className='product__subtitle'>{product.brand}</h4>
            <h3 className='product__title'>{product.title}</h3>
        </section>

        
        <div className='product__price'>
            <span className='product__price-label'>Price</span>
            <span className='product__price-value'>{product.price}</span>
        </div>

        <button className='product__btn' onClick={handleBtnClick}>
        <i className='bx bxs-cart icon-1' ></i>
         <i className='bx bxs-cart bx-tada icon-2' ></i>
         
        </button>
      </div>


   </article>
  )
}

export default CardProducts