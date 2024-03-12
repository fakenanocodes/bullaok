import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';
import formatDateWithSuffix from '../../hooks/useDateFormatter';

// const colors = ['#6B5F6B', '#33FF57', '#5733FF']; // Add more colors as needed
export default function HistoryRow({ colors, idx, item }) {
  const originalDate = new Date(item?.created);
  const formattedDate = formatDateWithSuffix(originalDate);
  console.log(item);
  return (
    <tr key={idx} className=" mt-5 px-10 py-4  bg-[#BB9FB3] bg-opacity-[38%]">
      <td className="flex items-center gap-2">
        <span className="bg-white w-6 h-6 flex justify-center items-center rounded-full">
          <FiberManualRecordIcon
            style={{ color: colors[idx], borderRadius: '50%' }}
          />
        </span>
        {item?.investmentplan?.name}
      </td>
      <td>{item?.details}</td>
      <td>{formattedDate}</td>
    </tr>
  );
}
