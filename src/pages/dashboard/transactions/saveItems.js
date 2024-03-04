import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setDeposite,
  setTransfer,
  setWithDrawal,
} from '../../store/reducers/transact_reducer';

const navigate = useNavigate();
const dispatch = useDispatch();

const handleWitDrawal = () => {
  dispatch(setWithDrawal(true));
  dispatch(setDeposite(false));
  dispatch(setTransfer(false));
};
const handleWitDeposit = () => {
  dispatch(setWithDrawal(false));
  dispatch(setDeposite(true));
  dispatch(setTransfer(false));
};
const handleWitTransfer = () => {
  dispatch(setWithDrawal(false));
  dispatch(setDeposite(false));
  dispatch(setTransfer(true));
};

// let hello = {{
//         path: 'transfer',
//         Component: Transaction,
//       },
//       {
//         path: 'withdraw',
//         Component: Withdrawal,
//       },
//       {
//         path: 'deposit',
//         Component: Deposit,
//       },
//     }
