import React, { useState } from 'react';
import { FaChevronDown, FaLongArrowAltRight } from 'react-icons/fa';

// Verbatim content, restructured into renderable blocks per numbered section.
const sections = [
  {
    id: 1,
    title: 'What Is Bulloak?',
    blocks: [
      {
        type: 'p',
        text: 'Bulloak is described as a trading infrastructure that uses technology and algorithms to monitor financial markets and identify trading opportunities.',
      },
      {
        type: 'list',
        intro:
          'Instead of relying entirely on a person to watch different markets manually, the system is designed to use automated processes to:',
        items: [
          'Monitor market prices',
          'Compare prices across different markets and exchanges',
          'Identify potential price differences',
          'Determine whether an opportunity may exist',
          'Execute trades according to its programmed strategies',
        ],
      },
      {
        type: 'p',
        text: 'The main idea is to use technology to respond to market opportunities much faster than a person could manually.',
      },
    ],
  },
  {
    id: 2,
    title: 'Why Is This Important?',
    blocks: [
      { type: 'p', text: 'The cryptocurrency market operates 24 hours a day, seven days a week.' },
      {
        type: 'p',
        text: 'There are also many different exchanges and blockchain networks. The same digital asset can sometimes have slightly different prices on different platforms.',
      },
      { type: 'p', text: 'For example:' },
      {
        type: 'compare',
        items: [
          { label: 'Exchange A', value: 'Crypto is priced at $1,000' },
          { label: 'Exchange B', value: 'The same crypto is priced at $1,100' },
        ],
      },
      {
        type: 'p',
        text: 'In a simplified example, a trader could potentially buy at $1,000 and sell at $1,100.',
      },
      {
        type: 'p',
        text: 'The difference is $100 before considering transaction fees, transfer costs, price movements, taxes, and other expenses.',
      },
      { type: 'p', text: 'The challenge is that these differences may exist only briefly.' },
      {
        type: 'p',
        text: 'By the time someone notices the difference, transfers funds, places an order, and completes the transaction, the opportunity may have disappeared.',
      },
      {
        type: 'p',
        text: 'This is where our automated infrastructure provides an advantage: speed and continuous monitoring.',
      },
    ],
  },
  {
    id: 3,
    title: 'How Does the Infrastructure Work?',
    blocks: [
      {
        type: 'p',
        text: 'At a basic level, the infrastructure can be understood as having several important functions.',
      },
      {
        type: 'steps',
        items: [
          {
            title: 'Step 1: Market Monitoring',
            text: 'The system monitors prices and market information from different sources. It compares:',
            items: [
              'Different exchanges',
              'Different trading pairs',
              'Different blockchain networks',
              'Different markets',
            ],
            after: 'The purpose is to identify situations where there may be a meaningful difference in price.',
          },
          {
            title: 'Step 2: Opportunity Detection',
            text: 'Once the system identifies a price difference, its algorithms analyze the opportunity. It may consider factors such as:',
            items: [
              'Buying price',
              'Selling price',
              'Trading fees',
              'Network fees',
              'Available liquidity',
              'Market conditions',
              'Execution speed',
            ],
            after:
              'This is important because a price difference does not automatically mean that a profitable trade exists.',
          },
          {
            title: 'Step 3: Trade Execution',
            text: 'If the programmed conditions are satisfied, the system can execute the required transactions automatically. Automation is particularly important because cryptocurrency markets can move very quickly and in milliseconds, and our infrastructure is designed to capture them and act on it even faster.',
          },
          {
            title: 'Step 4: Repetition',
            text: 'The system can continue monitoring the market and look for new opportunities. Rather than depending on one transaction, automated trading systems are designed to process many opportunities over time.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'What Is Arbitrage?',
    blocks: [
      { type: 'p', text: 'One of the main strategies associated with this type of infrastructure is arbitrage.' },
      {
        type: 'p',
        text: 'Arbitrage means attempting to benefit from a price difference for the same or closely related asset in different markets.',
      },
      { type: 'p', text: 'A simple example:' },
      {
        type: 'compare',
        items: [
          { label: 'Exchange A', value: '$1,000' },
          { label: 'Exchange B', value: '$1,020' },
        ],
        note: 'Theoretical difference: $20',
      },
      {
        type: 'p',
        text: 'A trader could potentially buy at the lower price and sell at the higher price.',
      },
      {
        type: 'p',
        text: 'However, the actual result would depend on trading fees, network costs, slippage, liquidity, timing, and whether both trades can actually be completed at the expected prices.',
      },
      {
        type: 'p',
        text: 'Therefore, arbitrage is not simply "buy low and sell high." The infrastructure must be able to identify whether the difference is large enough to potentially justify the costs and risks involved.',
      },
    ],
  },
  {
    id: 5,
    title: 'What Is Scalping?',
    blocks: [
      { type: 'p', text: 'Another strategy is known as scalping.' },
      { type: 'p', text: 'Scalping involves attempting to benefit from small price movements over short periods.' },
      {
        type: 'p',
        text: 'Instead of waiting for an asset to increase dramatically in price, a scalping strategy may attempt to capture smaller movements through multiple trades.',
      },
      { type: 'p', text: 'For example:' },
      { type: 'movement', text: 'An asset moves from $1,000 to $1,002' },
      { type: 'p', text: 'A strategy may attempt to capture part of that small movement.' },
      {
        type: 'p',
        text: 'The potential advantage of automation is speed. A computer system can monitor price movements continuously and respond according to predetermined rules.',
      },
      {
        type: 'p',
        text: 'However, small price movements also mean that transaction costs and execution quality can have a significant effect on the final result.',
      },
    ],
  },
  {
    id: 6,
    title: 'What Is Cross-Chain Trading?',
    blocks: [
      {
        type: 'p',
        text: 'Cryptocurrency does not exist on only one blockchain. Assets and liquidity can exist across different blockchain networks.',
      },
      {
        type: 'p',
        text: 'Cross-chain strategies involve monitoring opportunities that may exist between different blockchain environments.',
      },
      {
        type: 'p',
        text: 'For example, an asset could potentially have different prices or liquidity conditions on two different networks.',
      },
      {
        type: 'p',
        text: 'A system designed for cross-chain activity may monitor these differences and determine whether a transaction can potentially take advantage of them.',
      },
      {
        type: 'list',
        intro: 'Cross-chain trading can be technically complex because it may involve:',
        items: [
          'Different blockchain networks',
          'Different transaction speeds',
          'Network fees',
          'Liquidity differences',
          'Smart contracts',
          'Bridges or other transfer mechanisms',
          'Settlement risks',
        ],
      },
      { type: 'p', text: 'Therefore, speed and infrastructure are particularly important.' },
    ],
  },
  {
    id: 7,
    title: 'Why Automation Matters',
    blocks: [
      { type: 'p', text: 'Imagine trying to manually monitor 20, 50, or even hundreds of markets simultaneously.' },
      { type: 'p', text: 'A person would have difficulty identifying every price difference in real time.' },
      { type: 'p', text: 'An automated system can continuously process large amounts of market information.' },
      { type: 'p', text: 'Its role can be summarized as:' },
      { type: 'flow', items: ['Monitor', 'Compare', 'Analyze', 'Execute', 'Repeat'] },
      { type: 'p', text: 'This is the basic concept behind algorithmic trading infrastructure.' },
      {
        type: 'p',
        text: 'The system does not need to sleep, take breaks, or manually switch between different exchanges.',
      },
      {
        type: 'p',
        text: 'It can operate according to programmed rules and statistical thresholds while the markets are active.',
      },
    ],
  },
  {
    id: 8,
    title: 'Where Does the Trading Activity Come From?',
    blocks: [
      {
        type: 'p',
        text: 'The underlying concept is based on the large amount of activity taking place across financial markets.',
      },
      { type: 'p', text: 'Every day, traders and institutions buy and sell digital assets.' },
      { type: 'p', text: 'These transactions create constantly changing prices and liquidity conditions.' },
      {
        type: 'p',
        text: 'Because different markets do not always move in exactly the same way at exactly the same time, temporary differences can occur.',
      },
      { type: 'p', text: 'Algorithmic trading systems attempt to identify these differences and respond quickly.' },
      {
        type: 'p',
        text: 'The larger the number of markets being monitored, the greater the number of potential situations that can be analyzed.',
      },
      {
        type: 'p',
        text: 'However, monitoring more markets does not automatically mean that every identified opportunity will produce a profit.',
      },
    ],
  },
  {
    id: 9,
    title: 'Risk and Security',
    blocks: [
      { type: 'p', text: 'Security is an important part of any financial technology infrastructure.' },
      {
        type: 'list',
        intro: 'A system handling digital assets must consider issues such as:',
        items: [
          'Account security',
          'Wallet security',
          'Private keys',
          'API access',
          'Smart-contract risks',
          'Blockchain network risks',
          'Cybersecurity',
          'Transaction errors',
          'Market volatility',
        ],
      },
      { type: 'p', text: 'There is also a difference between technical security and investment risk.' },
      {
        type: 'p',
        text: 'A system can have security measures in place and still experience losses because of market movements, failed transactions, liquidity problems, or other trading risks.',
      },
      {
        type: 'p',
        text: 'For that reason, we have used every available resource to establish a strong security foundation for our systems, while carrying out the necessary upgrades and maintenance to make them even stronger.',
      },
    ],
  },
  {
    id: 10,
    title: 'Understanding the Role of Technology',
    blocks: [
      {
        type: 'p',
        text: 'The main value of an automated trading infrastructure is not simply that it can "make trades."',
      },
      {
        type: 'p',
        text: 'Its purpose is to create a system capable of processing information and executing predefined strategies efficiently.',
      },
      { type: 'p', text: 'In simple terms:' },
      {
        type: 'labelList',
        items: [
          { label: 'Human', text: 'Decides the strategy and the rules.' },
          { label: 'Technology', text: 'Watches the markets.' },
          { label: 'Algorithm', text: 'Identifies conditions that match the rules.' },
          { label: 'Infrastructure', text: 'Executes the required transactions.' },
          { label: 'Risk controls', text: 'Help manage the risks associated with those transactions.' },
        ],
      },
      {
        type: 'p',
        text: 'This combination is what makes algorithmic trading different from manually buying and selling assets.',
      },
    ],
  },
  {
    id: 11,
    title: 'An Easy Example',
    blocks: [
      { type: 'p', text: 'Consider two exchanges.' },
      {
        type: 'compare',
        items: [
          { label: 'Exchange A', value: 'Bitcoin price: $100,000' },
          { label: 'Exchange B', value: 'Bitcoin price: $100,300' },
        ],
        note: 'Theoretical difference: $300',
      },
      { type: 'p', text: 'Our automated system will identify the difference.' },
      { type: 'p', text: 'But before attempting the trade, it would need to consider:' },
      {
        type: 'list',
        items: [
          'Trading fees',
          'Withdrawal or transfer fees',
          'Network costs',
          'Available liquidity',
          'Slippage',
          'Execution time',
          'Whether the prices remain available',
        ],
      },
      {
        type: 'p',
        text: 'If the total costs are greater than the price difference, the opportunity may no longer make economic sense.',
      },
      {
        type: 'p',
        text: 'This demonstrates why sophisticated trading infrastructure requires more than simply finding two different prices.',
      },
    ],
  },
  {
    id: 12,
    title: 'The Bigger Picture',
    blocks: [
      { type: 'p', text: 'The financial markets are becoming increasingly technology-driven.' },
      {
        type: 'p',
        text: 'Banks, investment firms, hedge funds, cryptocurrency companies, and professional traders use software and algorithms to process market information and execute transactions.',
      },
      { type: 'p', text: 'Algorithmic trading is part of this broader movement toward automated financial systems.' },
      {
        type: 'p',
        text: 'The concept behind our infrastructure is to use technology to process opportunities that may be difficult for individuals to identify and execute manually. This increases productivity rate.',
      },
    ],
  },
  {
    id: 13,
    title: 'Conclusion',
    blocks: [
      {
        type: 'p',
        text: 'The basic idea behind the Bulloak infrastructure, as described, is straightforward:',
      },
      {
        type: 'p',
        text: 'Use technology to monitor multiple markets, identify price differences and other trading opportunities, and execute predefined trading strategies automatically.',
      },
      { type: 'p', text: 'The main strategies discussed are:' },
      {
        type: 'labelList',
        items: [
          { label: 'Arbitrage', text: 'attempting to benefit from price differences between markets.' },
          { label: 'Scalping', text: 'attempting to capture small price movements over short periods.' },
          {
            label: 'Cross-chain strategies',
            text: 'monitoring opportunities across different blockchain networks.',
          },
          {
            label: 'Algorithmic trading',
            text: 'using software and predefined rules to analyze and execute trades.',
          },
        ],
      },
      { type: 'p', text: 'The central concept is speed, automation, market monitoring, and systematic execution.' },
      {
        type: 'p',
        text: 'At the same time, automated trading does not remove financial risk. Market conditions, fees, liquidity, technology failures, cybersecurity issues, and execution problems can all affect results.',
      },
    ],
  },
];

const Block = ({ block }) => {
  switch (block.type) {
    case 'p':
      return (
        <p className="font-[roboto] text-[#3B3B3B] leading-loose text-base lg:text-lg">
          {block.text}
        </p>
      );

    case 'list':
      return (
        <div className="flex flex-col gap-3">
          {block.intro && (
            <p className="font-[roboto] text-[#3B3B3B] leading-loose text-base lg:text-lg">
              {block.intro}
            </p>
          )}
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 font-[roboto] text-[#3B3B3B] text-base lg:text-lg"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8E0789] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'compare':
      return (
        <div className="flex flex-col gap-3 my-2">
          <div className="grid sm:grid-cols-2 gap-4">
            {block.items.map((item, i) => (
              <div
                key={i}
                className="bg-[#F9F0F9] border border-[#8E0789]/30 rounded-xl px-5 py-4 text-center"
              >
                <p className="font-[montserrat] text-xs uppercase tracking-wide text-[#8E0789] font-semibold mb-1">
                  {item.label}
                </p>
                <p className="font-[laviossa] text-lg lg:text-xl text-[#000]">{item.value}</p>
              </div>
            ))}
          </div>
          {block.note && (
            <div className="mx-auto bg-[#FFB803]/10 border border-[#FFB803] rounded-lg px-5 py-2 text-center">
              <p className="font-[montserrat] font-semibold text-[#8E0789] text-sm lg:text-base">
                {block.note}
              </p>
            </div>
          )}
        </div>
      );

    case 'movement':
      return (
        <div className="my-2 mx-auto bg-[#F9F0F9] border border-[#8E0789]/30 rounded-full px-6 py-3 text-center w-fit">
          <p className="font-[laviossa] text-[#8E0789] text-base lg:text-lg">{block.text}</p>
        </div>
      );

    case 'flow':
      return (
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3 my-3 py-2">
          {block.items.map((item, i) => (
            <React.Fragment key={i}>
              <span className="bg-[#8E0789] text-white font-[montserrat] font-semibold text-sm lg:text-base rounded-full px-4 py-2">
                {item}
              </span>
              {i < block.items.length - 1 && (
                <FaLongArrowAltRight className="text-[#8E0789] flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      );

    case 'steps':
      return (
        <div className="flex flex-col gap-6">
          {block.items.map((step, i) => (
            <div key={i} className="border-l-4 border-[#8E0789] pl-4 lg:pl-6 py-1">
              <h4 className="font-[montserrat] font-bold text-[#8E0789] text-base lg:text-lg mb-2">
                {step.title}
              </h4>
              <p className="font-[roboto] text-[#3B3B3B] leading-loose text-base lg:text-lg">
                {step.text}
              </p>
              {step.items && (
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-3">
                  {step.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 font-[roboto] text-[#3B3B3B] text-base lg:text-lg"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8E0789] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {step.after && (
                <p className="font-[roboto] text-[#3B3B3B] leading-loose text-base lg:text-lg mt-3">
                  {step.after}
                </p>
              )}
            </div>
          ))}
        </div>
      );

    case 'labelList':
      return (
        <div className="grid sm:grid-cols-2 gap-4">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="bg-[#F9F0F9] border border-[#8E0789]/20 rounded-lg px-5 py-4"
            >
              <span className="font-[montserrat] font-bold text-[#8E0789]">{item.label}</span>
              <span className="font-[roboto] text-[#3B3B3B]"> — {item.text}</span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
};

const BulloakInfrastructure = () => {
  const [openId, setOpenId] = useState(1);

  const toggleSection = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#fff] py-12 lg:py-16">
      <div className="xl:w-5/6 w-full px-4 mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto">
          <span className="font-[montserrat] font-semibold text-xs lg:text-sm tracking-[0.2em] uppercase text-[#FFB803] bg-[#8E0789] rounded-full px-4 py-1.5">
            Trading Infrastructure
          </span>
          <h2 className="font-bold font-[laviossa] lg:text-4xl text-3xl text-[#8E0789]">
            Understanding Bulloak and Its Trading Infrastructure
          </h2>
          <div className="flex flex-col gap-4">
            <p className="font-[roboto] text-[#3B3B3B] leading-loose text-base lg:text-lg">
              Financial markets, especially cryptocurrency markets, operate across many different
              exchanges, platforms, and blockchains. Because prices can move quickly and may
              differ from one platform to another, opportunities can sometimes arise from these
              price differences.
            </p>
            <p className="font-[roboto] text-[#3B3B3B] leading-loose text-base lg:text-lg">
              Bulloak is an infrastructure designed to identify and act on these opportunities
              through automated trading strategies.
            </p>
            <p className="font-[roboto] text-[#3B3B3B] leading-loose text-base lg:text-lg">
              The purpose of this presentation is to explain, in simple terms, what the
              infrastructure is intended to do and how the trading strategies work.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {sections.map((section) => {
            const isOpen = openId === section.id;
            return (
              <div
                key={section.id}
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? 'border-[#8E0789]' : 'border-[#8E0789]/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 lg:gap-6 px-4 lg:px-6 py-4 lg:py-5 bg-[#fff] hover:bg-[#F9F0F9] transition-colors text-left"
                >
                  <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[#8E0789] text-[#fff] font-[laviossa] text-lg lg:text-xl">
                    {String(section.id).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-[laviossa] text-[#000] text-lg lg:text-2xl">
                    {section.title}
                  </span>
                  <FaChevronDown
                    className={`flex-shrink-0 text-[#8E0789] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 lg:px-6 pb-6 lg:pb-8 pt-1 flex flex-col gap-4 border-t border-[#8E0789]/10">
                    {section.blocks.map((block, i) => (
                      <Block key={i} block={block} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BulloakInfrastructure;
