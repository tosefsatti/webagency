import React from 'react'

const BlogCard = (props) => {
  return (
   <div className='space-y-5 mx-3 mb-8'>
    <h1 className='text-2xl tracking-wide font-semibold'>{props.title}</h1>
     <img src={props.image} className='w-96'/>
     <div>
        <span>{props.date}</span>
        <span className='ml-4'>{props.admin}</span>
     </div>
     <p className='text-[#A0A0B4] text-xl leading-8'>{props.description}</p>

   </div>
  )
}

export default BlogCard;
