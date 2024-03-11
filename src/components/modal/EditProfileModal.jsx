import { CircularProgress, ClickAwayListener } from '@mui/material';
import React from 'react';

export default function EditProfileModal({
  handleSubmit,
  setOpen,
  loading,
  phone,
  address,
  name,
}) {
  return (
    <div className=" fixed top-0 rounded-lg left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <div
          onSubmit={handleSubmit}
          className="bg-white  w-[90%] p-9 md:w-5/6 max-w-[700px] p-4 my-6  rounded-lg relative"
        >
          <div className="border-[#8E0789]/25 flex flex-col gap-4 border p-7 rounded-lg">
            <div className="">
              <label htmlFor="name">Your name</label>

              <input
                defaultValue={name || 'USDT'}
                placeholder="John Doe"
                className=" w-full border-2 border-[#E8C4E6] outline-[#E8C4E6] p-2 px-4 rounded-md"
                id="name"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone number</label>
              <input
                value={phone}
                className=" w-full border-2 border-[#E8C4E6] outline-[#E8C4E6] p-2 px-4 rounded-md"
                placeholder="0.00"
                id="phone"
                type="tel"
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                value={address}
                className=" w-full border-2 border-[#E8C4E6] outline-[#E8C4E6] p-2 px-4 rounded-md"
                placeholder="7th street, London"
                id="address"
              />
            </div>
          </div>
          <div className="flex gap-5  justify-end w-full mt-5">
            <button
              className="p-2 px-4 text-[#8E0789] "
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#8E0789] text-white p-2 px-4 rounded-[15px]"
            >
              {loading ? (
                <CircularProgress sx={{ color: 'white' }} size={20} />
              ) : (
                'Save Changes '
              )}
            </button>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
}
