import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import React from 'react';
import formatDateWithSuffix from '../../hooks/useDateFormatter';

const colors = ['#6B5F6B', '#33FF57', '#5733FF', '#FFB803']; // Add more colors as needed

export default function HistoryTableRow({ idx, item }) {
  const originalDate = new Date(item?.created);
  const formattedDate = formatDateWithSuffix(originalDate);

  return (
    <tr className="flex justify-between px-10 bg-[#BB9FB3] bg-opacity-[38%]">
      <td className="py-4 flex items-center space-x-3">
        <span className="bg-white w-6 h-6 flex justify-center items-center rounded-full">
          <FiberManualRecordIcon
            style={{ color: colors[idx], borderRadius: '50%' }}
          />
        </span>
        <span>{item?.investment_plan_name}</span>
      </td>
      <td className="py-4">{item?.details}</td>
      <td className="py-4">{item?.amount}</td>
      <td className="py-4">{formattedDate}</td>
    </tr>
  );
}
