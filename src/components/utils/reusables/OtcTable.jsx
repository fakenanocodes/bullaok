const OtcTable = () => {
  return (
    <>
      <table className="min-w-full">
        <thead>
          <tr className="bg-[#8E07894D]">
            <th className="px-4 py-7 text-left text-xl tracking-wide font-semibold">
              OTC Market Tiers
            </th>
            <th className="px-4 py-7 text-left text-xl tracking-wide font-semibold">
              Types of companies
            </th>
            <th className="px-4 py-7 text-left text-xl tracking-wide font-semibold">
              Listing requirements
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-7 text-sm md:text-lg">
              OTCQX International1
            </td>
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              Companies already listed on an international exchange (Not penny
              stocks, shell company, or in bankruptcy).
            </td>
            <td className="px-4 py-2 w-full md:w-[30rem] text-sm md:text-lg">
              Asset requirements; Current regulatory disclosures.
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              OTCQX U.S.
            </td>
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              Qualified smaller and growth companies (Not penny stocks, shell
              company, or in bankruptcy).
            </td>
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              Asset requirements; Current regulatory disclosures; Bid test.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              OTCQB
            </td>
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              Entrepreneurial and development stage U.S. and international
              companies (Not in bankruptcy).
            </td>
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              Current regulatory disclosures; Bid test.
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              OTC Pink
            </td>
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              Companies of all development stages, including penny stocks, shell
              companies, and companies in bankruptcy.
            </td>
            <td className="px-4 py-7 w-full md:w-[30rem] text-sm md:text-lg">
              Low disclosure requirements.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OtcTable;
