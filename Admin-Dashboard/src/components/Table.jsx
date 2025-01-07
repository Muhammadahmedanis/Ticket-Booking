import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  {
    id: 234774,
    product: "Razar blud 15",
    img: '',
    customer: 'John',
    date: "1 March",
    amount: 891,
    method: "Online",
    status: "Approved",
  },
  {
    id: 235774,
    product: "Razar blud 15",
    img: '',
    customer: 'John',
    date: "1 March",
    amount: 891,
    method: "Online",
    status: "Approved",
  },
  {
    id: 236774,
    product: "Razar blud 15",
    img: '',
    customer: 'John',
    date: "1 March",
    amount: 891,
    method: "Online",
    status: "Pending",
  }
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <div className='overflow-x-auto'>
  <TableContainer className="dark:!bg-[#111] bg-white" component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell className="dark:text-gray-500 text-black">Tracking ID</TableCell>
        <TableCell align="center" className="dark:text-gray-500 text-[17px] text-black">Product</TableCell>
        <TableCell align="center" className="dark:text-gray-500 text-[17px] text-black">Customer</TableCell>
        <TableCell align="center" className="dark:text-gray-500 text-[17px] text-black">Date</TableCell>
        <TableCell align="center" className="dark:text-gray-500 text-[17px] text-black">Amount</TableCell>
        <TableCell align="center" className="dark:text-gray-500 text-[17px] text-black">Payment Method</TableCell>
        <TableCell align="center" className="dark:text-gray-500 text-[17px] text-black">Status</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell className="dark:text-gray-500 text-black" component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell align="center" className="dark:text-gray-500 text-black">
            <div className="flex items-center gap-2 justify-center">
              <img className="h-12 w-12 rounded-full border" src={row.img || null} alt="" />
              {row.product}
            </div>
          </TableCell>
          <TableCell align="center" className="dark:text-gray-500 text-black">
            {row.customer}
          </TableCell>
          <TableCell align="center" className="dark:text-gray-500 text-black">
            {row.date}
          </TableCell>
          <TableCell align="center" className="dark:text-gray-500 text-black">
            {row.amount}
          </TableCell>
          <TableCell align="center" className="dark:text-gray-500 text-black">
            {row.method}
          </TableCell>
          <TableCell align="center">
            <span
              className={`px-4 py-2 font-bold rounded ${
                row.status === "Approved"
                  ? "text-green-500 dark:text-green-300 bg-[rgba(0,128,0,0.13)]"
                  : "text-yellow-500 dark:text-yellow-300 bg-[rgba(225,217,0,0.13)]"
              }`}
            >
              {row.status}
            </span>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</div>
  );
}
