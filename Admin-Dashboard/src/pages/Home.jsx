import React from 'react'
import Widget from '../components/Widget'
import Feature from '../components/Feature'
import Chart from '../components/Chart'
import Table from '../components/Table'

function Home() {
  return (
    <div className='dark:bg-[#222] w-auto dark:text-[rgb(156,156,156)]'>
      <div className='flex flex-wrap gap-3'>
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className='charts flex flex-wrap pt-4 gap-3'> 
        <div className='w-full md:w-72 lg:w-72'>
          <Feature />
        </div>
        <div className="w-full md:w-[calc(100%-20rem)] lg:w-[calc(100%-20rem)]">
          <Chart aspect={2 / 1} title="Last 6 Months ( Revenue )" />
        </div>
      </div>
      <div className='p-3 mt-4 shadow-custom dark:border-white dark:border'>
        <div className='text-[18px] text-gray-500 font-semibold my-3'>Latest Transactions</div>
        <Table />
      </div>
    </div>
  )
}

export default Home