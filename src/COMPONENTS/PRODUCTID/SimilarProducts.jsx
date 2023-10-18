import React from 'react'
import { useSelector } from 'react-redux'
import { setProductsGlobal } from '../../store/slices/products.slice'
import CardProducts from '../HOME/CardProducts'



const SimilarProducts = ({categoryId}) => {
    const { productsGlobal }=useSelector(state => state)
    // console.log(productsGlobal)
    console.log('cat'+categoryId)

  return (
    <div>
        {
        productsGlobal?.map( prod =>{
           if ( prod.categoryId === categoryId){
           return (
            // <h3>categoryId</h3>
           <CardProducts 
           key={prod.id}
           product={prod}
            />
           )
        }
        
        })
    }

    </div>
  )
}

export default SimilarProducts