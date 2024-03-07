import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from 'react';
import DatePickerIcon from '../icons/DatePickerIcon';

const CardInputComponent = ({
  type,
  placeholder,
  disabled,
  password,
  label,
  error,
  register,
  accept,
  price,
  date,
  required,
  handleChange,
  value,
  name
}) => {
  const [passwordType, setPasswordType] = useState(type);
  const passwordToggle = () => {
    if (passwordType === 'text') {
      return (
        <VisibilityOutlinedIcon
          className="text-gray-400 h-5 w-5 mx-2 cursor-pointer"
          onClick={() => setPasswordType('password')}
        />
      );
    } else if (passwordType === 'password') {
      return (
        <VisibilityOffOutlinedIcon
          className="text-gray-400 h-5 w-5 mx-2 cursor-pointer"
          onClick={() => setPasswordType('text')}
        />
      );
    } else return null;
  };

  return (
    <div className="grid gap-0">
      <p className="text-[#000] font-normal text-sm font-[poppins]">
        {label} {required && <span className="text-[#E56666]">*</span>}
      </p>
      <div className="grid gap-1">
        <div
          className={
            error
              ? 'relative flex items-center bg-white border-b border-red-600 rounded-sm text-[#464444] outline-none mb-4'
              : 'relative flex items-center bg-white rounded-sm text-[#464444] outline-none border-b border-[#464444] mb-4'
          }
        >
          {price && <span className="ml-3">&#8358;</span>}
          <input
            className="w-full py-1 outline-none border-none bg-inherit no-number-arrows focus:border-none font-[poppins]"
            type={passwordType}
            placeholder={placeholder}
            {...register}
            disabled={disabled}
            accept={accept}
            onChange={handleChange}
            value={value}
            name={name}
          />
          {password && passwordToggle()}
          {date && (
            <div className="cursor-pointer">
              <DatePickerIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardInputComponent;
