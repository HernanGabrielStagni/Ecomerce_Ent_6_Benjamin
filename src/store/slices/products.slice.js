import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name:'products',
    initialState: null,
    //state es el estado actual del estado
    //action.pailot: es lo que el usuario nos manda como parametro
    reducers:{
        setProductsGlobal: (state, action) =>action.payload

    }
})

//debo exportar las actions
export const {setProductsGlobal}= productsSlice.actions

export default productsSlice.reducer
//este es el representante

//Documentacion del Backend 
//https://documenter.getpostman.com/view/17877993/2s8ZDczLBj


//hago la peticion asincronica
// la url para axios la saco de la api
export const getAllProductsThunk= () => (dispatch) =>{
    const url='https://e-commerce-api-v2.academlo.tech/api/v1/products'
    axios.get(url)
    .then(res => dispatch(setProductsGlobal(res.data)))
    .catch(err => console.log(err))
}