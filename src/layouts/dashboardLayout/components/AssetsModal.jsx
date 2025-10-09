import SlideModal from "../../../components/modal/SlideModal"

const AssetsModal = () => {
    const assets = [
  { name: "Bitcoin", amount: 2, rate: 3.4 },
  { name: "Ethereum", amount: 5, rate: -1.2 },
  { name: "Solana", amount: 15, rate: 2.8 },
  { name: "Cardano", amount: 1200, rate: -0.6 },
  { name: "BNB", amount: 8, rate: 1.9 },
  { name: "XRP", amount: 3000, rate: 0.7 },
  { name: "Dogecoin", amount: 9000, rate: 4.1 },
  { name: "Avalanche", amount: 20, rate: -2.3 },
  { name: "Polkadot", amount: 60, rate: 1.5 },
  { name: "Litecoin", amount: 10, rate: 0.9 }
];

  return (
    <SlideModal
        isIraFunds={true}
        setIraFunds={() => {}}
        width="[60%]"
        // bgColor="[rgb(248,248,248)]"
        title={`My ${"Crypto"} Investments`}
    >
        <div>AssetsModal</div>
    </SlideModal>
  )
}

export default AssetsModal