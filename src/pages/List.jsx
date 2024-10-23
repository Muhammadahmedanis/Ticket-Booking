import { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../components/SearchItem';
function List() {
  const location = useLocation();
  const[destination, setDestination] = useState(location.state.destination);
  const[date, setDate] = useState(location.state.date);
  const[openDate, setOpenDate] = useState(false);
  const[options, setOptions] = useState(location.state.options);

  return (
    <>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer flex justify-around mt-4">
        <div className="listWrapper w-full max-w-[1024px] flex gap-5">
          <div className="listSearch w-[330px] max-h-fit bg-[#febb02] p-5 rounded-lg sticky top-2">
            <h1 className="lsTitle text-[22px] text-[#555] mb-2 font-bold">Search</h1>
            <div className="lsItem flex flex-col gap-2 mb-2">
              <label className='mb-0 font-bold'>Destination</label>
              <input type="text" placeholder={destination} className='p-2 h-9 rounded border-none outline-none text-[14px]'/>
            </div>
            <div className="lsItem flex flex-col gap-2">
              <label className='font-bold'>Check-in-Date</label>
              <span onClick={() => setOpenDate(!openDate)} className='bg-white p-2 h-9 rounded font-semibold cursor-pointer'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && 
                (
                  <DateRange onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date} />
                )
              }
            </div>
            <div className="liItem mb-6 mt-2">
              <label className='font-bold'>Options</label>
              <div className="listOptions p-2">
                <div className="lsOptionItem flex justify-between text-[#555] my-2">
                  <span className="lsOptionText">Min price <small>per night</small> </span>
                  <input type="number" className="lsOptionInput rounded w-12 p"/>
                </div>
                <div className="lsOptionItem flex justify-between text-[#555] my-2">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput rounded w-12 px-1" placeholder={options.adult}/>
                </div>
                <div className="lsOptionItem flex justify-between text-[#555] my-2">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} className="lsOptionInput rounded w-12 px-1" placeholder={options.children}/>
                </div>
                <div className="lsOptionItem flex justify-between text-[#555] my-2">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} className="lsOptionInput rounded w-12 px-1" placeholder={options.room}/>
                </div>
              </div>
            </div>
            <button className='py-1.5 text-center rounded bg-[#0071c2] text-white w-full font-semibold'>Search</button>
          </div>
          <div className="listResult w-[850px]">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </>
  )
}

export default List