import { useMemo, useState,useRef,useEffect, useCallback } from 'react';
import SuccessIcon from '../utils/icons/SuccessIcon';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import InvoiceIcon from '../utils/icons/InvoiceIcon';

const ReceiptModal = ({
  address1,
  address2,
  type,
  open,
  closeFunc,
  amount,
  walletType = 'USDT',
  usdtAmount,
  dateTime = new Date(),
  obj
}) => {
    
  const receiptRef = useRef(null)

  // ---------------- the download functions -------------------
  
  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector('.receipt'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };

  // ---------------- the share functions -------------------

  const handleShare = useCallback(async (elementId) => {
    const shareableDiv = document.getElementById(elementId);
    if (shareableDiv) {
      // Convert the div to a canvas
      const canvas = await html2canvas(shareableDiv);
    const imageData = canvas.toDataURL("image/jpeg", 1.0); // Use JPEG format for better compatibility
      // Create a new PDF document
      const pdfWidth = 200;
      const pdfHeight = 300;
      const pdf = new jsPDF({
        orientation: 'portrait', // or 'landscape'
        unit: 'px', // or 'pt', 'in', etc.
        format: [pdfWidth, pdfHeight], // Custom dimensions in the specified unit
      });
      const imgProps = pdf.getImageProperties(imageData);

      // Define padding and scale
      const padding = 10;
      const availableWidth = pdfWidth - padding * 2;
      const availableHeight = pdfHeight - padding * 2;

      // Calculate scaled dimensions
      const scaleFactor = Math.min(availableWidth / imgProps.width, availableHeight / imgProps.height);
      const imgWidth = imgProps.width * scaleFactor;
      const imgHeight = imgProps.height * scaleFactor;

      // Center the image
      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;

      // Add image to PDF
      pdf.addImage(imageData, "JPEG", x, y, imgWidth, imgHeight);

      const pdfBlob = pdf.output("blob");

      // Use the Web Share API to share the PDF
      if (navigator.share) {
        const file = new File([pdfBlob], "receipt.pdf", {
          type: "application/pdf",
        });
        try {
          await navigator.share({
            files: [file],
            title: "Receipt PDF",
            text: "Your receipt file is now available",
          });
          console.log("Content shared successfully");
        } catch (error) {
          console.error("Error sharing:", error);
        }
      } else {
        console.log("Web Share API is not supported in this browser");
      }
    }
  }, []);
  
  

// ---------------- the share functions -------------------


    // <--------------- receipt data ----------->
    const date = new Date(dateTime).toLocaleDateString()
    const time = new Date(dateTime).toLocaleTimeString()

    const recieptData = [
      (address1 && {
          title : `${type === 'Withdrawal'? `${type} Wallet` : type === "deposit"? "Debtor's Wallet" : "sender email"} Address`,
          detail : address1?.includes('@')?address1: `${address1?.slice(0,6)} . . . ${address1?.slice(-6)}`
        }),
        {
          title : "Transaction Date",
          detail : `${date}, ${time}`
        },
        {
          title : "Transaction Type",
          detail : <p className='capitalize'>{type}</p>,
        },
        (address2 !== undefined && {
          title : "Destination Wallet Address",
          detail :  `${address2?.slice(0,6)} . . . ${address2?.slice(-6)}`
        }),
        {
          title : "Amount",
          detail :  `${amount} USD`
        },
      ]
      
      
      
      // <----------- click away function -------------->
      
      const handleClickAway = (event) => {
        if (receiptRef.current && !receiptRef.current.contains(event.target)) {
          closeFunc(!open);
          if(obj) obj()
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
    <div className=" fixed top-0 left-0 w-full h-full flex flex-col  justify-center items-center bg-[#000000b3] z-20">
        

        {/* Recipt box */}
        <div
        ref={receiptRef}
        id='receiptFile'
        className="bg-white w-[95%] h-fit-content sm:w-[60%] md:w-3/5 max-w-[380px] p-4 my-6 relative rounded-[15px] receipt pb-20">
            <div className={`flex justify-center items-center gap-2 ${type === 'Transfer'? "flex-col text-[18px]":"flex-row text-[14px]"}`}>
              {
                type === 'Transfer'
                ?<SuccessIcon/>
                :<InvoiceIcon/>
              }
              <p className='font-[500] text-black uppercase'>{type === 'Transfer'? "receipt":"INVOICE"}</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-[13px]'>Your {type} has been successfully done</p>
            </div>

            <p className='text-[12px] capitalize'>Total {type}</p>
            <p className='text-black font-[500] flex gap-2'><span className='text-[#8E0789]'>{usdtAmount}</span>{walletType}</p>

            {/* Transaction details */}
            <table>
                {
                recieptData?.map((data, index)=>(
                  <tr key={index} className='h-fit p-0 font-[500]'>
                    <td className='text-[12px] py-3.5 '>{data?.title}</td>
                    <td className={`text-[12px] text-[${data?.title ==='Amount' ? '#8E0789' : 'rgba(7, 7, 7, 0.7)'}] flex justify-end py-2`}
                    title={data?.title?.includes('Destination')? address2 : ''}
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
                handleCaptureClick()
                closeFunc(!open)
                if(obj) obj()
            }}
            >
                Download
            </button>
            
            
            <button
                className="text-white bg-[#8E0789]  w-[80px] h-[32px] rounded-md text-sm "
                onClick={(e) =>{
                  handleShare('receiptFile')
                  closeFunc(!open)
                  if(obj) obj()
                }}
            >
                Share
            </button>
            
            </article>
        </div>
    </div>
  )
}

export default ReceiptModal