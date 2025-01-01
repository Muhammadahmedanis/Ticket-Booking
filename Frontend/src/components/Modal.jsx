import React from 'react'

function Modal({setOpen, hotelId}) {
  return (
    <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click the button below to close</p>
      <div className="modal-action">
        <div method="dialog">
          <button className="btn">Close</button>
        </div>
      </div>
    </div>
  </dialog>
  )
}

export default Modal