import React from 'react'
import { useSelector } from 'react-redux'
import { setProductsGlobal } from '../../store/slices/products.slice'
import CardProducts from '../HOME/CardProducts'
import '../PRODUCTID/SimilarProducts_CSS.css'


const SimilarProducts = ({categoryId, currentId}) => {
    const { productsGlobal }=useSelector(state => state)
    // console.log(productsGlobal)
    // console.log('current__'+currentId+'cat '+categoryId)

  return (
    <div className='card__similarProducts'>
        {
        productsGlobal?.map( prod =>{
           if ( prod.categoryId === categoryId && prod.id != currentId ){
           return (
            <>
            <h3>{prod.id}__{currentId}</h3>
           <CardProducts 
           key={prod.id}
           product={prod}
           />
            </>
           )
        }
        
        })
    }

    </div>
  )
}

export default SimilarProducts