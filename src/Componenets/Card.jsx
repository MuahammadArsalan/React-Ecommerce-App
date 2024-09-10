

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
        width :' 200px',
        height :' 200px'
      }} />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <p>{props.price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Show More</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card