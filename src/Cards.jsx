import React from 'react'

const Cards = (props) => {


  return (
    <div className="inline-block card bg-base-100 w-96 shadow-xl mx-4 my-3">
    <figure>
      <img
        src={props.image} className='w-full'
        alt="Shoes" />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">{props.name}</h2>
      <p className='text-red-600 text-left text-2xl'>{props.work}</p>
      
    </div>
  </div>
  )
}

export default Cards


