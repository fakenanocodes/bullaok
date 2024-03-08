import { CircularProgress, ClickAwayListener } from '@mui/material'
import React from 'react'
import CancelIcon from '../utils/reusables/CancelIcon'

export default function DepositModal({handleSubmit, setOpenModel, loading, amount, selectedCoin}) {
  return (
    <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
    <ClickAwayListener onClickAway={() => setOpenModel(false)}>
      <div
        onSubmit={handleSubmit}
        className="bg-white h-3/5 w-[90%] md:w-3/5 max-w-[500px] p-4 my-6 relative"
      >
        <div className="flex justify-between">
          <p className="text-lg text-gray-600 font-semibold">Deposit</p>
          <div
            className="cursor-pointer"
            onClick={() => setOpenModel(false)}
          >
            <CancelIcon />
          </div>
        </div>
        <div className="py-5">
          <label htmlFor="asset">Asset</label>
          <div>
            {/* <DollaIcon /> */}
            <input
              value={selectedCoin || 'USDT'}
              placeholder="USDT"
              className="border-2 w-full rounded-md p-2 px-4"
              id="asset"
            />
          </div>
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <div className="">
            <input
              value={amount}
              className="mb-32 w-full border-2 p-2 px-4 rounded-md"
              placeholder="0.00"
              id="amount"
            />
          </div>
        </div>
        <div className="flex gap-5 absolute right-4">
          <button
            className="p-2 px-4 rounded-md border"
            onClick={() => setOpenModel(false)}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#352F84] text-white p-2 px-4 rounded-md"
          >
            {
                loading ? <CircularProgress sx={{ color: 'white' }} size={20} /> 
                 : "Confirm deposit "
            }
            
          </button>
        </div>
      </div>
    </ClickAwayListener>
  </div>  )
}
