import { useSelector } from 'react-redux';
import Deposit from './Deposit';
import Transfer from './Transfer';
import Withdrawal from './Withdrawal';

const Transaction = () => {
  const { withdrawal, deposit, transfer } = useSelector(
    (state) => state.transact
  );

  return (
    <>
      {deposit && <Deposit />}
      {transfer && <Transfer />}
      {withdrawal && <Withdrawal />}
    </>
  );
};
export default Transaction;
