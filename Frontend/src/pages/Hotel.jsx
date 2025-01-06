import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import MailList from '../components/MailList'
import Footer from '../components/Footer'
import { IoLocationSharp } from "react-icons/io5";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import useFetch from '../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import Modal from '../components/Modal.jsx'

function Hotel() {
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const[slideNumber, setSlideBumber] = useState(0);
  const[open, SetOpen] = useState(false);
  const[openModal, setOpenModal] = useState(false);

  const { data, loading, error, reFetch} = useFetch(`/api/hotels/find/${id}`);
  
  const { dates, options } = useContext(SearchContext);
  // console.log(dates);
  
  const{ user } = useContext(AuthContext)
  const navigate = useNavigate();
  const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());  
    const daysDiff = Math.ceil(timeDiff / MILLISECOND_PER_DAY);
    return daysDiff;
  }
  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate)

  // console.log(data);
  // const photos = [
  //   {
  //     src: 'https://cf2.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o='
  //   },
  //   {
  //     src: 'https://cf2.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o='
  //   },
  //   {
  //     src: 'https://cf2.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o='
  //   },
  //   {
  //     src: 'https://cf2.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o='
  //   },
  //   {
  //     src: 'https://cf2.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o='
  //   },
  //   {
  //     src: 'https://cf2.bstatic.com/xdata/images/hotel/square600/87375132.webp?k=a3eff4ea2475f3a4de01f017463acd719bddada5e63f87f6c0952f8590498865&o='
  //   },
  // ]

  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideBumber(newSlideNumber)
  }

  const handleClick = () => {
    if(user){
      setOpenModal(true);
    }else{
      navigate('/signin');
    }
  }

  return (
    <div>
      <Navbar />
      <Header type='list'/>
      {loading ? "loading..." : <div className="hotelContainer flex flex-col items-center justify-center">
        { open &&
          <div className="slider sticky top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.426)] z-10 flex items-center">
            <FaCircleXmark className='absolute top-12 right-16 text-[25px] text-slate-200 cursor-pointer' onClick={() => SetOpen(false)}/>
            <FaCircleArrowLeft className='m-8 text-[35px] cursor-pointer text-slate-200' onClick={() => handleMove('l')} />
            <div className="sliderWrapper w-full h-full flex justify-center items-center ">
              <img src={data.hotel?.photos[slideNumber]} alt="" className="sliderImg  w-[50%] h-[50%]" />
            </div>
            <FaArrowCircleRight className='m-8 text-[35px] cursor-pointer text-slate-200' onClick={() => handleMove('r')}/>
          </div>
        }

        <div className="hotelWrapper relative flex flex-col w-full max-w-[1024px] gap-2 mt-4">
          <button className="bookNow absolute top-2 right-0 rounded cursor-pointer bg-[#0071c2] text-white font-semibold py-2 px-4">Reserve or Book Now!</button>
          <h1 className="hotelTitle text-xl font-bold">{data.hotel?.name}</h1>
          <div className="hotelAddress text-[15px] flex items-center gap-2">
            <IoLocationSharp />
            <span className="font-medium">{data.hotel?.address}</span>
          </div>
          <span className="hotelDistance text-[#0071c2] font-medium"> Excellent location - {data.hotel?.distance}m from center </span>
          <span className="hotelPriceHilight text-[#008009] font-medium">Book a stay over {data.hotel?.cheapestPrice}$ at this property and get a free airport taxi</span>
          <div className="hotelImages flex flex-wrap justify-between gap-1">
            {
              data.hotel?.photos?.map((photo, ind) => {
                return <div key={ind} className="hotelImgWrapper w-[33%]"> <img onClick={() => {
                  setSlideBumber(ind);
                  SetOpen(true);
                }} src={photo} alt="" className="hotelImg w-full object-cover" /> </div>
              })
            }
          </div>
          <div className="homeDetails flex justify-between gap-4 mt-4">
            <div className="hotelDetailText w-[75%]">
              <h1 className="hotelTitle text-2xl font-bold">{data.hotel?.title}</h1>
              <p className="hotelDesc text-sm">{data.hotel?.desc}</p>
              </div>
            <div className="hotelDetailPrice w-[25%] bg-[#ebf3ff] p-4 flex flex-col rounded">
              <h1 className="text-[17px] text-[#555] font-bold">Perfect for a {days}-night stay!</h1>
              <span className="text-sm my-2">Located in the real heart of krakow, this property has an excellent location score of 9.8!</span>
              <h2 className="text-xl font-semibold my-2"><b>${days * data.hotel?.cheapestPrice * options.room}</b>({days} nights)</h2>
              <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn rounded cursor-pointer bg-[#0071c2] text-white font-semibold py-1 px-2">Rserve or Book Now!</button>
              <Modal hotelId={id}/>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>}
    </div>
  )
}

export default Hotel