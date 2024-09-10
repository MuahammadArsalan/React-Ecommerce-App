

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Card from '../Componenets/Card'
function Home() {
     let [products,setProducts  ] =useState('')
     
     



useEffect(()=>{

    axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
  
    setProducts(res.data)
    console.log(products);
    
}).catch((error)=>{console.log(error);
})

},[])


  return (

    <>
    <div>Home</div>
    {products ? products.map((items)=>{
return <div id='div'
style={{
    display:"inline-flex",
    justifyContent:"center",
    marginTop:"100px",
    alignItems:"center",
    gap:"40px",
    flexWrap:"wrap"
}}
>
    <Card title={items.category} price={items.price}  description={items.description} src={items.image}/>
</div>

    }): console.log('loading')
    }
   
  
   
    </>
  )
}

export default Home