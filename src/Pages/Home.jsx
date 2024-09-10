

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Card from '../Componenets/Card'
import { useNavigate } from 'react-router-dom'
function Home() {
     let [products,setProducts  ] =useState('')
     let navigate  = useNavigate();



     
     
useEffect(()=>{

    axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
  
    setProducts(res.data)
    console.log(products);
    
}).catch((error)=>{console.log(error);
})

},[])

function singleAd(items){
   console.log(items);
navigate(`singleProduct/${items.id}`)
}

return (

    
    <>
  <div className='bg-slate-100'> 

    
  <h1 className='text-center text-5xl mt-[20px] font-bold'>Home</h1>
    {products ? products.map((items,index)=>{
return <div key={items.id} className='gap-4 flex flex-wrap' id='div'
style={{
    display:"inline-flex",
    justifyContent:"center",
    marginTop:"100px",
    alignItems:"center",
    gap:"40px",
    flexWrap:"wrap"
}}
>
    <Card title={items.category} price={items.price}  description={items.description} src={items.image} btn={<button className="btn btn-primary" onClick={()=>{singleAd(items)}}>Show More</button>}/>
</div>

    }): <p>Loading....</p>
    }


    {/* //footer */}
   <footer className="footer bg-base-200 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  </div>
   
    </>
  )
}

export default Home