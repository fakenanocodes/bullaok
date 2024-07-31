import { useMemo, useState,useRef,useEffect } from 'react';
import SuccessIcon from '../utils/icons/SuccessIcon';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { RWebShare } from "react-web-share"

const ReceiptModal = ({address1,address2,type,open,closeFunc,amount}) => {
    
  const receiptRef = useRef(null)

  // ---------------- the share functions -------------------
  
  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector('.receipt'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };

  const shareHandler = async () => {
    const canvas = await html2canvas(document.querySelector('.receipt'));
    const dataURL = canvas.toDataURL('image/png');
    const longUrl = dataURL;
    const shortUrl = shortenUrl(longUrl);
    console.log(shortUrl);
  };
  
  function shortenUrl(longUrl) {
    // Use jsonstore.io to shorten the URL
    const apiUrl = 'https://jsonstore.io/api/v1/shorten';
    const headers = {
      'Content-Type': 'application/json',
    };
    const data = {
      'url': longUrl,
    };
    fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        return data.shortUrl;
      });
  }

// ---------------- the share functions -------------------


    // <--------------- receipt data ----------->
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()

    const recieptData = [
        {
          title : `${type === 'Withdrawal'? `${type} Wallet` : type === "deposit"? "Debtor's Wallet" : "sender email"} Address`,
          detail : `${address1?.slice(0,6)} . . . ${address1?.slice(-6)}`
        },
        {
          title : "Transaction Date",
          detail : `${date}, ${time}`
        },
        {
          title : "Transaction Type",
          detail : type,
        },
        {
          title : "Destination Wallet Address",
          detail :  `${address2?.slice(0,6)} . . . ${address2?.slice(-6)}`
        },
        {
          title : "Amount",
          detail :  `${amount} USD`
        },
      ]
      
      
      
      // <----------- click away function -------------->
      
      const handleClickAway = (event) => {
        if (receiptRef.current && !receiptRef.current.contains(event.target)) {
          closeFunc(!open);
        }
      };
      
      useEffect(() => {
        if (open) {
          document.addEventListener('click', handleClickAway);
        } else {
          document.removeEventListener('click', handleClickAway);
        }
        return () => {
          document.removeEventListener('click', handleClickAway);
        };
      }, [open]);
      
  return (
    <div className=" fixed top-0 left-0 w-full h-full flex flex-col  justify-center items-center bg-[#000000b3]">
        

        {/* Recipt box */}
        <div
        ref={receiptRef}
        className="bg-white w-[95%] h-fit-content sm:w-[60%] md:w-3/5 max-w-[380px] p-4 my-6 relative rounded-[15px] receipt pb-20">
            <div className="flex justify-center">
            <SuccessIcon/>
            </div>
            <div className='flex flex-col items-center gap-2'>
            <div className='flex flex-col items-center'>
                <p className='font-[500] text-black'>Transaction Success!</p>
                <p className='text-[13px]'>Your {type} has been successfully done</p>
            </div>

            <p className='text-[12px]'>Total {type}</p>
            <p className='text-black font-[500] flex gap-2'><span className='text-[#8E0789]'>{amount}</span>BTC</p>

            {/* Transaction details */}
            <table>
                {
                recieptData?.map((data, index)=>(
                    <tr key={index} className='h-fit p-0 font-[500]'>
                <td className='text-[12px] py-2 '>{data?.title}</td>
                <td className={`text-[12px] text-[${data?.title ==='Amount' ? '#8E0789' : 'rgba(7, 7, 7, 0.7)'}] flex justify-end py-2`}
                title={data?.title.includes('Destination')? address2 : ''}
                >{data?.detail}</td>
                </tr>
                ))
                }
            </table>
            </div>
        </div>

        <div className="flex justify-end items-end h-[6vmax] transform translate-x-[50px] translate-y-[-80px] sm:translate-y-[-120px]">
            <article className="flex gap-4 font-semibold text-sm">

            <button className=" w-[100px] h-[32px] rounded-md text-[#8E0789] font-[700]"
            onClick={() => {
                // handleCaptureClick()
                closeFunc(!open)
            }}
            >
                Download
            </button>
            
            <RWebShare
                onClick={() => shareHandler()}
                data={{
                text: "Like humans, flamingos make friends for life",
                // url: imageUrl,
                title: "Flamingos",
                }}
                >
                <button
                    className="text-white bg-[#8E0789]  w-[80px] h-[32px] rounded-md text-sm "
                    // onClick={(e) => handleShare()}
                >
                    Share
                </button>
                </RWebShare>
            
            </article>
        </div>
    </div>
  )
}

export default ReceiptModal