import React from 'react';

const WhyTable = ({ tableData }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:w-2/4 w-full mx-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3 text-[#41073F] font-bold">
              Bulloak
            </th>
            <th scope="col" className="px-6 py-3">
              Robinhood
            </th>
            <th scope="col" className="px-6 py-3">
              Fidelity
            </th>
            <th scope="col" className="px-6 py-3">
              E*Trade
            </th>
            <th scope="col" className="px-6 py-3">
              TD Ameritrade
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr
              key={row.id}
              className={row.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {row.product}
              </td>
              <td className="px-6 py-4 text-[#41073F] font-bold">{row.bulloak}</td>
              <td className="px-6 py-4 ">{row.robinhood}</td>
              <td className="px-6 py-4">{row.fidelity}</td>
              <td className="px-6 py-4">{row.etrade}</td>
              <td className="px-6 py-4">{row.ameritrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WhyTable;
