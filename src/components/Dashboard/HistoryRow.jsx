import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { MdFiberManualRecord } from 'react-icons/md';
import formatDateWithSuffix from '../../hooks/useDateFormatter';

// const colors = ['#6B5F6B', '#33FF57', '#5733FF']; // Add more colors as needed
export default function HistoryRow({ colors, idx, row }) {
  const originalDate = new Date(row?.created);
  const formattedDate = formatDateWithSuffix(originalDate);
  return (
    <TableRow
      sx={{
        background: '#BB9FB3',
        mt: 4,
      }}
    >
      <TableCell
        component="th"
        scope="row"
        sx={{ display: 'flex', gap: 2, alignItems: 'center', color: 'white' }}
      >
        <span className="bg-white w-6 h-6 flex justify-center items-center rounded-full">
          <MdFiberManualRecord
            style={{ color: colors[idx], borderRadius: '50%' }}
          />
        </span>
        {row?.investment_plan_name}
      </TableCell>
      <TableCell align="left" sx={{ color: 'white' }}>
        {row.details}
      </TableCell>
      <TableCell align="center" sx={{ color: 'white' }}>
        {formattedDate}
      </TableCell>
    </TableRow>
  );
}
