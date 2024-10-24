import React from 'react'

function PropetyList() {
  return (
    <div className="pList w-full flex flex-wrap justify-center gap-12">
        <div className="pListItem rounded cursor-pointer overflow-hidden">
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className="pListImg w-full h-[175px] object-cover" />
            <div className="pListTitle">
                <h1 className="text-[18px] font-semibold text-center">Hotels</h1>
                {/* <h2 className="text-[14px] font-semibold">233 hotels</h2> */}
            </div>
        </div>
        <div className="pListItem rounded cursor-pointer overflow-hidden">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" className="pListImg w-full h-[175px] object-cover rounded" />
            <div className="pListTitle">
                <h1 className="text-[18px] font-semibold text-center">Appartments</h1>
                {/* <h2 className="text-[14px] font-semibold">2331 hotels</h2> */}
            </div>
        </div>
        <div className="pListItem rounded cursor-pointer overflow-hidden">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className="pListImg w-full h-[175px] object-cover rounded" />
            <div className="pListTitle">
                <h1 className="text-[18px] font-semibold text-center">Resorts</h1>
                {/* <h2 className="text-[14px] font-semibold">2331 hotels</h2> */}
            </div>
        </div>
        <div className="pListItem rounded cursor-pointer overflow-hidden">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" className="pListImg w-full h-[175px] object-cover rounded" />
            <div className="pListTitle">
                <h1 className="text-[18px] font-semibold text-center">Villas</h1>
                {/* <h2 className="text-[14px] font-semibold">233 hotels</h2> */}
            </div>
        </div>
    </div>
  )
}

export default PropetyList