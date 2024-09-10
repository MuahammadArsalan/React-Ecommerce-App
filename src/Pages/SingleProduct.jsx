

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../Componenets/Card'
import SingleProductCard from '../Componenets/SingleProductCard'



function SingleProduct() {

let [singleProduct,setSingleProduct] = useState('')
   
let {id} = useParams();

let navigateToHome = useNavigate() 

    useEffect(()=>{

    axios(`https://fakestoreapi.com/products/${id}`)
.then((res)=>{
 
    
    // console.log(res.data)
    setSingleProduct(res.data)
    console.log(singleProduct);
    
})
.catch((error)=>{console.log(error);
})
},[])

function goPrevious(){
navigateToHome(`/`)
setSingleProduct('')
}



  return (
   
    <>
<div className='m-[auto] text-center'>

{/* 
    <Card title={singleProduct.category} src={singleProduct.image} description={singleProduct.description} price={singleProduct.price} btn={<button className='btn btn-primary' onClick={()=>{goPrevious()}} >Back</button>}/> */}
    <SingleProductCard title={singleProduct.category} src={singleProduct.image} description={singleProduct.description} price={singleProduct.price} btn={<button className='btn btn-primary' onClick={()=>{goPrevious()}} >Back</button>}/>
  
</div>
    </>
  )
}

export default SingleProduct