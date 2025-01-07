export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 },{
    field:"user", headerName:"User", width:200, renderCell: (params) => {
        return (
            <div className="flex items-center gap-3">
              <span className="py-1">
                <img className="h-12 w-12 rounded-full" src={params.row.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycpUJ3ZthUXax2SBqN96C4xh1C4tyA7XbPA&s"} alt="avatar" />
                {params.row.username}
              </span>
            </div>
        )
    }
  },
  { field:'email', headerName: 'Email', width:230 },
  { field:'country', headerName: 'Country', width:160 },
  { field:'city', headerName: 'City', width:160 },
  { field:'phone', headerName: 'Phone', width:180 },
  // { field:"status", headerName: "Status", width: 150, renderCell: (params) => {
  //   return <div> <span className={`px-4 py-2 rounded ${params.row.status === "active" ? "text-green-500 bg-[rgba(0,128,0,0.05)]" : params.row.status === "passive" ? "text-red-400 bg-[rgba(255,0,0,0.05)]" : "text-yellow-200 bg-[rgba(225,217,0,0.05)]"}`}>{params.row.status}</span></div>
  // } },
  // {field:"transaction", headerName:"Transaction", width: 160}
]

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 210},
  { field: "type", headerName: "Type", width: 150 },
  { field: "title", headerName: "Title", width: 170 },
  { field: "city", headerName: "City", width: 130 },
]

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 210},
  { field: "title", headerName: "Title", width: 150},
  { field: "desc", headerName: "Description", width: 100},
  { field: "price", headerName: "Price", width: 100},
  { field: "maxPeople", headerName: "Max People", width: 100},
]