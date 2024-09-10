import React from 'react'

function SingleProductCard(props) {
  return (
    <div className="card sm:card-side bg-base-100 shadow-xl w-[80vw] border-4 mt-5 h-[70vh] m-[auto] text-center">
  <figure>
    <img 
      src={props.src}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h1 className="card-title">{props.title}</h1>
    <p>{props.description}</p>
    <p>{props.price}</p>
    <div className="card-actions justify-end">
     <p>{props.btn}</p>
    </div>
  </div>
</div>
  )
}

export default SingleProductCard