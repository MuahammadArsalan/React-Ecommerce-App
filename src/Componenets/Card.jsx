

import React from 'react'

function Card(props) {
  return (
    
    <>

<div className="card bg-base-100 w-96 shadow-2xl ">
  <figure className="px-10 pt-10">
    <img
      src={props.src}
      alt="Shoes"
      className="rounded-xl" style={{
        width :' 120px',
        height :' 120px'
      }} />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.title}</h2>
    <p className='text-sm'>{props.description}</p>
    <p>Rs.{props.price} </p>
    <div className="card-actions">
      <p>{props.btn}</p>
    </div>
  </div>
</div>
    </>
  )
}

export default Card