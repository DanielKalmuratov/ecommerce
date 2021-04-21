import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

export const  StateContext = createContext()
export const  ProductContext = createContext()




export const ProductProvider = props =>{

  const [product, setProduct] =useState({
    loading: true, 
    user: [],
    error: null,
    category: 2,
  })
  
  useEffect(()=>{
    axios
    .get('http://127.0.0.1:8000/api/products/')
    .then(res=>{
      getProduct(res.data)
    })
    .catch(err=>{console.log(err)}) 
  }
, [])

  const getProduct = (data, n=null) =>{

    setProduct({
      loading: false, 
      user: data,
      error: null,
      category: n,
    })

  }

  return(
    
      <ProductContext.Provider value={[product, setProduct]}>
          {props.children}
      </ProductContext.Provider>
  )
}



export const StateProvider = props => {
  
  const [nav, setNav] =useState({
    category:[],
    islogin: true,
    count: 0,
  })
  
  

  useEffect(()=>{
        axios
        .get('http://127.0.0.1:8000/api/category')
        .then(res=>{
          getCat(res.data)
        })
        .catch(err=>{console.log(err)}) 
      }
    , [])

   const getCat=(data)=>{
      setNav({
        category:data,
        islogin: true,
        count: 0})
   }
  
  

  return(
    <StateContext.Provider value={[nav, setNav]}>
         {props.children}     
    </StateContext.Provider>
  )
}

