import React from 'react'
import useFetch from '../hooks/useFetch'

function PropetyList() {
    const { data, error, loading } = useFetch("api/hotels/countByType");
    const image = [
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
        "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    ]
    
  return (
    <div className="pList w-auto flex flex-wrap justify-center gap-5">
        { 
            loading ? ("loading...") : (<> 
            {data && image.map((img, i) => (
                <div key={i} className="pListItem rounded cursor-pointer overflow-hidden">
                    <img  src={img} alt="" className="pListImg w-64 object-cover" />
                    <div className="pListTitle">
                        <h1 className="text-[18px] font-semibold">{data[i]?.type.slice(0,1).toUpperCase()}{data[i]?.type.slice(1)}</h1>
                        <h2 className="text-[14px] font-semibold">{data[i]?.count} {data[i]?.type}</h2>
                    </div>
                </div>
            )) 
            }</>)
        }
    </div>
  )
}

export default PropetyList