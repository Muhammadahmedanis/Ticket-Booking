import React, { useState } from 'react'
import { FaBed } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";
import { FaTaxi } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import { useNavigate } from 'react-router-dom';

function Header({type}) {
    const[destination, setDestination] = useState('');
    const[openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const[openOptions, setOpenOptions] = useState(false)
  const[options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions( (prev) =>{
        return {...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1}
    })
  }

  const handleSearch = () => {
        navigate("/hotels", {state:{destination, date, options } })
  }

  return (
    <div className='header bg-[#003b95] text-white flex justify-center relative'>
        <div className={`headerContainer ${type == "list" ?  'w-full flex flex-col items-center mt-5 mx-0 mb-0 ps-20 pe-32' : 'w-full flex flex-col max-w-[1024px] mt-5 mx-0 mb-16 '}`}>
            <div className='headerList flex flex-wrap gap-x-8 gap-y-2 mb-10'>
                <div className='headerListItem flex items-center gap-2  active  bg-[rgba(223,227,232,28%)] border py-[7px] px-4 rounded-full'>
                    <FaBed />
                    <span>Stays</span>
                </div>
                <div className='headerListItem flex items-center gap-2'>
                    <IoAirplaneSharp />
                    <span>Flights</span>
                </div>
                <div className='headerListItem flex items-center gap-2'>
                    <FaCar />
                    <span>Car rentals</span>
                </div>
                <div className='headerListItem flex items-center gap-2'>
                    <FaBed />
                    <span>Attractions</span>
                </div>
                <div className='headerListItem flex items-center gap-2'>
                    <FaTaxi />
                    <span>Airport taxis</span>
                </div>
            </div>
            { type != 'list' &&
            <>
            <h1 className='headerTitle font-bold text-xl md:text-2xl lg:text-3xl'>A lifetime of discounts? It's Genius.</h1>
            <p className='headerDescription my-5 mx-0'>Get reward for your travels - unlock instant savings of 10% or more with a free Lanmbooking account</p>
            {/* <button className='headerBtn bg-[#0071c2] font-semibold border-none w-fit rounded cursor-pointer p-2'>Sign in /  Register</button> */}
            <div className='headerSearch h-[60px] bg-white text-gray-400 border-[5px] border-[#febb02] flex items-center justify-between py-8 px-3 rounded absolute -bottom-6 w-[67.5%]'>
                <div className='headerSearchItem flex items-center gap-2'>
                    <FaBed />
                    <input onChange={e => setDestination(e.target.value)} type="text" placeholder='Where are you going?' className='headerSearchInput border-none outline-none'/>
                </div>
                <div className='headerSearchItem flex items-center gap-2' onClick={() => setOpenDate(!openDate)}>
                    <FaRegCalendarAlt />
                    <span className='headerSearchText cursor-pointer'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                    {
                        openDate && 
                        <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date z-20 absolute  top-12'
                        minDate={new Date()}
                        />
                    }
                </div>
                <div className='headerSearchItem flex items-center gap-2'>
                    <FaPerson />
                    <span onClick={() => setOpenOptions(!openOptions)} className='headerSearch cursor-pointer text-gray-400'>{`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}</span>
                    {
                    openOptions && 
                        <div className='options absolute top-12 bg-white text-gray-400 rounded p shadow-[0_0_10px_-5px_rgba(0,0,0,0.4)] p-2 z-20'>
                            <div className='optionsItems w-[200px] flex justify-between m-2'>
                                <span className='optionsText'>Adult</span>
                                <div className='optionCounter flex items-center gap-2 text-[14px] text-black'>
                                    <button disabled={options.adult <= 1} className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer text-[17px] border-[2px] font-semibold px-1' onClick={() => handleOption('adult', 'd')}>-</button>
                                    <span className='optionsCounterNumber  '>{options.adult}</span>
                                    <button className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer text-[17px] border-[2px] font-semibold px-1' onClick={() => handleOption('adult', 'i')}>+</button>
                                </div>
                            </div>
                            <div className='optionsItems w-[200px] flex justify-between m-2'>
                                <span className='optionsText'>Children</span>
                                <div className='optionCounter flex items-center gap-2 text-[14px] text-black'>
                                    <button disabled={options.children <= 0} className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer border-[2px] text-[17px] font-semibold px-1' onClick={() => handleOption('children', 'd')}>-</button>
                                    <span className='optionsCounterNumber  '>{options.children}</span>
                                    <button className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer border-[2px] text-[17px] font-semibold  px-1' onClick={() => handleOption('children', 'i')}>+</button>
                                </div>
                            </div>
                            <div className='optionsItems w-[200px] flex justify-between m-2'>
                                <span className='optionsText'>Room</span>
                                <div className='optionCounter flex items-center gap-2 text-[14px] text-black'>
                                    <button disabled={options.room <= 1} className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer border-[2px] text-[17px] font-semibold px-1' onClick={() => handleOption('room', 'd')}>-</button>
                                    <span className='optionsCounterNumber  '>{options.room}</span>
                                    <button className='optionsCounterButton w-[30px] h-[30px] rounded border-[#0071c2] text-[#0071c2] cursor-pointer border-[2px] text-[17px] font-semibol px-1' onClick={() => handleOption('room', 'i')}>+</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className='headerSearchItem flex items-center gap-2'>
                   <button className='headerBtn bg-[#0071c2] text-white border-none font-semibold text-[18px] rounded cursor-pointer px-8 py-2' onClick={handleSearch}>Search</button>
                </div>
            </div>
            </>
            }
        </div>
    </div>
  )
}

export default Header