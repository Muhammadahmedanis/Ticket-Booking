import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Featured from '../components/Featured'
import PropetyList from '../components/PropetyList'
import FeaturedProperties from '../components/FeaturedProperties'
import MailList from '../components/MailList'
import Footer from '../components/Footer'
function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='homeContainer mt-12 flex flex-col items-center gap-x-7'>
          <Featured />
          <h1 className="homeTitle w-[1024px] font-bold text-2xl my-4">Browse by property type </h1>
          <PropetyList />
          <h1 className="homeTitle w-[1024px] font-bold text-2xl">Homes guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home