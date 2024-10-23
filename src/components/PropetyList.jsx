import React from 'react'

function PropetyList() {
  return (
    <div className="pList w-full flex flex-wrap justify-center gap-8">
        <div className="pListItem rounded cursor-pointer overflow-hidden">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x2…70eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className="pListImg w-full h-[170px] object-cover" />
            <div className="pListTitle">
                <h1 className="text-[18px] font-bold">Hotels</h1>
                {/* <h2 className="text-[14px] font-semibold">233 hotels</h2> */}
            </div>
        </div>
        <div className="pListItem rounded cursor-pointer overflow-hidden">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x21…44e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" className="pListImg w-full h-[170px] object-cover rounded rounded" />
            <div className="pListTitle">
                <h1 className="text-[18px] font-bold">Appartments</h1>
                {/* <h2 className="text-[14px] font-semibold">2331 hotels</h2> */}
            </div>
        </div>
        <div className="pListItem rounded cursor-pointer overflow-hidden">
            <img src="	https://q-xx.bstatic.com/xdata/images/xphoto/263x2…79909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className="pListImg w-full h-[170px] object-cover rounded" />
            <div className="pListTitle">
                <h1 className="text-[18px] font-bold">Resorts</h1>
                {/* <h2 className="text-[14px] font-semibold">2331 hotels</h2> */}
            </div>
        </div>
        <div className="pListItem rounded cursor-pointer overflow-hidden">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" className="pListImg w-full rounded h-[170px] object-cover" />
            <div className="pListTitle">
                <h1 className="text-[18px] font-bold">Villas</h1>
                {/* <h2 className="text-[14px] font-semibold">233 hotels</h2> */}
            </div>
        </div>
    </div>
  )
}

export default PropetyList