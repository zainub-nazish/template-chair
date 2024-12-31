import React from 'react'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Latestproduct from '@/components/Latestproduct'
import What from '@/components/What'
import Unique from '@/components/Unique'
import Trending from '@/components/Trending'
import Leatestblog from '@/components/Leatestblog'
import Top from '@/components/Top'





const page = () => {
  return (
    <div>
      
      <Hero/>
     <Feature />
     <Latestproduct/>
     <What/>
    <Unique/>
    <Trending/>
    <Leatestblog/>
    <Top/>
    </div>
  )
}

export default page


