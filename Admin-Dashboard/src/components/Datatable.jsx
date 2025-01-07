// import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
// import { userRows, userColumns } from '../dummydata.jsx';
import { Link, useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable({columns}) {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const[list, setList] = useState([])
  const { data, loading, error } = useFetch(`/api/${path}`)
  console.log(data);
  

  useEffect(() => {
    setList(data?.users ? data.users : data?.hotels ? data.hotels :  data?.rooms ? data.rooms : [])
  }, [data])

  const handleDelete = async(id) => {
    try {
      await axios.delete(`/api/${path}/${id}`)
      setList(list.filter(item => item._id !== id))
    } catch (error) {

    }
  }

    const actionColumn = [{ field: "action", headerName: "Action", width: 200,  renderCell: (params) => {
        return (
            <div className='cursor-pointer'>
              <Link to="/users/test">
                <span className="px-3 py-1.5 me-2 text-blue-900 border-[rgba(0,0,139,0.596)] border rounded shadow">View</span>
              </Link>
              {/* <Link to="/"> */}
                 <span onClick={() => handleDelete(params.row._id)} className="px-3 py-1.5 me-2 text-red-700 border-[rgba(220,20,60,0.6)] border rounded shadow">Delete</span>
              {/* </Link> */}
            </div>
        )
    }}]
    
  return (
    <Paper className="dark:bg-[#111]" sx={{ height: "auto", width: '100%' }}>
      <DataGrid
        className='dark:text-gray-400'
        rows={list}
        columns={columns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        getRowId={row => row._id}
        />
    </Paper>
  );
}