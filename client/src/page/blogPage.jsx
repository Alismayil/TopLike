import React from 'react'
import BlogsDownSection from '../components/BlogsPageComponents/blogsDownSection'
import BlogsUpSection from '../components/BlogsPageComponents/blogsUpSection'
import NotMeanSection from '../components/notMeanSection'


function BlogPage() {
 
  return (
   <>
   <NotMeanSection/>
   <BlogsUpSection/>
   <BlogsDownSection/>
   </>
  )
}

export default BlogPage