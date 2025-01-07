import React from 'react'
import { EditOutlined } from '@ant-design/icons';
import Chart from '../components/Chart';
import Table from '../components/Table'

function Single() {
  return (
    <div className=''>
    <div className='flex gap-2 h-fit'>
      <div className='l shadow-custom p-4 rounded min-w-80 w-fit relative'>
        <div className='absolute right-2'>
        <EditOutlined style={{fontSize: '20px', color:"#7451f8"}}/>
        </div>
        <div className='px-2'>
          <h1 className='text-[23px] font-semibold mb-5'>Information</h1>
          <div className='flex gap-4'>
            <img className='rounded-full h-20 w-20 object-cover' src="/" alt="" />
            <div className='max-w-64'>
              <h1 className='text-xl font-bold m-1'>Jam Doe</h1>
              <div className='text-[15px] text-gray-500 m-1'>
                <span>Email: </span>
                <span>Jam@gmail.com</span>
              </div>
              <div className='text-[15px] text-gray-500 m-1'>
                <span>Phone: </span>
                <span>+1 2333 23 14</span>
              </div>
              <div className='text-[15px] text-gray-500 m-1'>
                <span>Address: </span>
                <span>Elton St 234 Garden Yd. Netwrok</span>
              </div>
              <div className='text-[15px] text-gray-500 m-1'>
                <span>Country: </span>
                <span>UK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full shadow-custom rounded'>
        <Chart aspect={3 / 1} title="User's Transaction ( Last 6 Months )"/>
      </div>
    </div>

    <div className='p-3 mt-4 shadow-custom '>
      <div className='text-[18px] text-gray-500 font-semibold my-3'>Latest Transactions</div>
      <Table />
    </div>


    </div>
  )
}

export default Single