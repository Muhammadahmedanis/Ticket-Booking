import { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../components/SearchItem';
import useFetch from '../hooks/useFetch.js';

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const[min, setMin] = useState(undefined);
  const[max, setMax] = useState(undefined);
  
  const { data, loading, error, reFetch} = useFetch(`/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)
  // console.log(data);

  const handleClick = () => {
    reFetch()
  }
  
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="drawer-content text-center">
        <label htmlFor="my-drawer" className="btn m-2 btn-primary drawer-button">Check details</label>
      </div>
      <div className="listContainer flex justify-center gap-3 m-4 relative">
      <div className="drawer w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="menu bg-[#febb02] text-base-content min-h-full w-80 p-4">
          <h1 className="lsTitle text-[22px] text-[#555] mb-2 font-bold">Search</h1>
          <div className="lsItem flex flex-col gap-2 mb-2">
            <label className="mb-0 font-bold">Destination</label>
            <input
              type="text"
              placeholder={destination}
              className="p-2 h-9 rounded border-none outline-none text-[14px]"
            />
          </div>
          <div className="lsItem flex flex-col gap-2">
            <label className="font-bold">Check-in-Date</label>
            <span
              onClick={() => setOpenDate(!openDate)}
              className="bg-white p-2 h-9 rounded font-semibold cursor-pointer"
            >
              {`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(
                dates[0].endDate,
                'MM/dd/yyyy'
              )}`}
            </span>
            {openDate && (
              <DateRange
                onChange={(item) => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />
            )}
          </div>
          <div className="liItem mb-6 mt-2">
            <label className="font-bold">Options</label>
            <div className="listOptions p-2">
              <div className="lsOptionItem flex justify-between text-[#555] my-2">
                <span className="lsOptionText">
                  Min price <small>per night</small>{' '}
                </span>
                <input type="number" onChange={(e) => setMin(e.target.value)} className="lsOptionInput rounded w-12 p" />
              </div>
              <div className="lsOptionItem flex justify-between text-[#555] my-2">
                <span className="lsOptionText">
                  Max price <small>per night</small>{' '}
                </span>
                <input type="number" onChange={(e) => setMax(e.target.value)} className="lsOptionInput rounded w-12 p" />
              </div>
              <div className="lsOptionItem flex justify-between text-[#555] my-2">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput rounded w-12 px-1"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem flex justify-between text-[#555] my-2">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput rounded w-12 px-1"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem flex justify-between text-[#555] my-2">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput rounded w-12 px-1"
                  placeholder={options.room}
                />
              </div>
            </div>
          </div>
          <button onClick={handleClick} className="py-1.5 text-center rounded bg-[#0071c2] text-white w-full font-semibold">
            Search
          </button>
          </div>
        </div>
      </div>
        <div className="listResult w-auto">
          { loading ? "loading" : <>
            {data.hotels?.map(item => (
              <SearchItem key={item._id} item={item} />
            ))}
          </>}
        </div>
      </div>
    </>
  );
}

export default List;