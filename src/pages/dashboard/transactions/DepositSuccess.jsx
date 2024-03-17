import { ClickAwayListener } from '@mui/material';

const DepositSuccess = ({ wallet, amount, walletTypes, setOpenSuccess }) => {
  return (
    <div className="flex grow items-center justify-around fixed z-50  top-0  bottom-0 right-0 left-0">
      <ClickAwayListener onClickAway={() => setOpenSuccess(false)}>
        <div className="shadow-xl rounded-md flex items-center justify-around ">
          <div className="flex flex-col gap-4 p-5 w-[500px] text-center bg-white border-2 border-blue-500">
            <h1 className="text-blue-700">Success</h1>
            <p>
              You have deposited {amount} {walletTypes} to your account
            </p>
            <label>Take note of the wallet address below</label>
            <input
              type="text"
              value={wallet}
              className="rounded-md text-center border-2 border-blue-800"
              readOnly
            />
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};
export default DepositSuccess;
