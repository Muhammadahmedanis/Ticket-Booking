import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, BarChart } from 'recharts';

const data = [
  { name: "January", Total: 1200},
  { name: "February", Total: 2100},
  { name: "March", Total: 800},
  { name: "April", Total: 1600},
  { name: "May", Total: 900},
  { name: "June", Total: 1700},

];

function Chart({aspect, title}) {
  return (
    <div className="shadow-custom dark:border-white dark:border dark:text-[rgb(156,156,156)] px-3 py-1">
      <p className='text-gray-400 font-semibold text-[17px] mb-2'>{title}</p>
      <ResponsiveContainer className="sm:h-auto md:max-h-[410px]" width="100%" aspect={aspect}>
      <BarChart width={530} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Total" fill="#8884d8" barSize={30} />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
