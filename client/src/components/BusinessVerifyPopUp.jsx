import React from 'react'

export const BusinessVerifyPopUp = (props) => {
  return (
    <div class="w-[50vw] h-[70vh] bg-slate-700 z-10 absolute left-1/4 text-slate-50">
    BusinessVerifyPopup
    <button onClick={props.handleClose}>close</button>
    </div>
  )
}
