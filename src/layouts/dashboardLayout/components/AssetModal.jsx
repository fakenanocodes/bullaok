import useSWR from "swr";
import SlideModal from "../../../components/modal/SlideModal"
import { ImSpinner8 } from "react-icons/im";

const AssetModal = ({ isOpen, onClose, selectedAsset, setSelectedAsset }) => {

  if(!selectedAsset) return null;

  const { data: investments, isLoading } = useSWR(`/plan/investments/${selectedAsset?.toLowerCase()}/`);
  const handleClose = () => {
    onClose(false);
    setSelectedAsset(null);

  }
  return (
    <SlideModal
      isIraFunds={isOpen}
      setIraFunds={handleClose}
      width="md:w-[60%]"
      bgClass="bg-gray-400" 
      title={`My on-going ${selectedAsset} Investments`}
    >
      {
        isLoading ?(
          <p className="w-full h-full flex justify-center items-center">
            <ImSpinner8 className="text-5xl animate-spin text-[purple]"/>
          </p> 
        ): investments?.data?.length === 0 ?(
           <p className="text-center text-white w-full h-full flex justify-center items-center">
            No ongoing {selectedAsset} investments
          </p>
          ) : (
            <table>
              <thead>
                <tr className="border-b border-b-gray-300">
                  <th className="p-4">Name</th>
                  <th className="p-3 text-cener">Amount</th>
                  <th className="p-3 text-center">Interest Rate</th>
                </tr>
              </thead>
              <tbody>
                {investments?.data.map((asset) => (
                  <tr className="border-b border-b-gray-300 hover:bg-gray-300/50" key={`index-${asset?.id}`}>
                    <td className="p-4 flex items-center gap-3">
                      <p className="bg-[#5091db] text-[rgb(128,0,128)] text-[15px] font-[600] w-[40px] h-[35px] rounded-[50%] flex justify-center items-center whitespace-nowrap">
                        {(asset?.name).charAt(0)?.toUpperCase()}
                      </p>
                      <span className="first-letter:uppercase">{asset?.name}</span>
                    </td>
                    <td className="p-3 text-cener">$ {asset?.amount?.toLocaleString()}</td>
                    <td className="p-3 text-center">{asset?.interest_rate?.toFixed(1)}%</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )
      }
    </SlideModal>
  )
}

export default AssetModal