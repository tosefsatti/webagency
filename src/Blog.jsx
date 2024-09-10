import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {

const blogs =[
  {
    title: "Amplify your Blockchain team",
    image: "https://thumbs.dreamstime.com/b/young-happy-black-man-communicates-online-laptop-random-guy-sitting-couch-living-room-young-happy-black-man-239286454.jpg",
    date: "June 01, 2020",
    admin: "ADMIN 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    title: "Amplify your Blockchain team",
    image: "https://thumbs.dreamstime.com/b/young-happy-black-man-communicates-online-laptop-random-guy-sitting-couch-living-room-young-happy-black-man-239286454.jpg",
    date: "June 01, 2020",
    admin: "ADMIN 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    title: "Amplify your Blockchain team",
    image: "https://thumbs.dreamstime.com/b/young-happy-black-man-communicates-online-laptop-random-guy-sitting-couch-living-room-young-happy-black-man-239286454.jpg",
    date: "June 01, 2020",
    admin: "ADMIN 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    title: "Amplify your Blockchain team",
    image: "https://thumbs.dreamstime.com/b/young-happy-black-man-communicates-online-laptop-random-guy-sitting-couch-living-room-young-happy-black-man-239286454.jpg",
    date: "June 01, 2020",
    admin: "ADMIN 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    title: "Amplify your Blockchain team",
    image: "https://thumbs.dreamstime.com/b/young-happy-black-man-communicates-online-laptop-random-guy-sitting-couch-living-room-young-happy-black-man-239286454.jpg",
    date: "June 01, 2020",
    admin: "ADMIN 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    title: "Amplify your Blockchain team",
    image: "https://thumbs.dreamstime.com/b/young-happy-black-man-communicates-online-laptop-random-guy-sitting-couch-living-room-young-happy-black-man-239286454.jpg",
    date: "June 01, 2020",
    admin: "ADMIN 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    title: "Amplify your Blockchain team",
    image: "https://thumbs.dreamstime.com/b/young-happy-black-man-communicates-online-laptop-random-guy-sitting-couch-living-room-young-happy-black-man-239286454.jpg",
    date: "June 01, 2020",
    admin: "ADMIN 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
  {
    title: "Amplify your Blockchain team",
    image: "https://thumbs.dreamstime.com/b/young-happy-black-man-communicates-online-laptop-random-guy-sitting-couch-living-room-young-happy-black-man-239286454.jpg",
    date: "June 01, 2020",
    admin: "ADMIN 3",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
  },
]

  return (
    <>
    <div className='my-16'>
    <h3 className="text-red-500 text-3xl font-bold mb-10 text-center ">BLOG</h3>
    <div className='grid grid-cols-1 md:grid-cols-4 md:mx-20 space-x-4 space-y'>
    {
      
     blogs.map((item, index) =>{
      return (
        <BlogCard key={index}title={item.title} image={item.image} date={item.date} admin={item.admin} description={item.description}/>
      )
     })
    
    }</div>

    </div>
    
    </>
  )
}

export default Blog
