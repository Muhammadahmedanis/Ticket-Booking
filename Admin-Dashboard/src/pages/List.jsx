import React from 'react'
import Datatable from '../components/Datatable'
import { Link, useLocation } from 'react-router-dom'

function List({columns}) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <div>
      <div className='flex justify-between mb-3'>
        <p className='text-gray-500 text-2xl'>{path}</p>
        <Link to={`/${path}/new`}><button className='cursor-pointer border px-3 py-1 hover:text-black dark:text-gray-400 text-[15px] shadow font-medium rounded border-green-500'>Add New</button></Link>
      </div>
      <Datatable columns={columns}  />
    </div>
  )
}

export default List