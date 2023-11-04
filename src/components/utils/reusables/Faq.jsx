import FaqCard from '../cards/FaqCard';

const faqs = [
  {
    title: 'Who is eligible to use Cash Management?',
    answer:
      'Cash management is currently only available to certain Cash accounts (excluding IRA accounts). You can check if you are on the current invitation list on the Bulloak Cash Management service activation page. If you are not on the list at the moment, please stay tuned as we will be increasing access to this offering soon!',
  },
  {
    title: 'When will I receive my interest?',
    answer:
      'The cash management interest is accrued daily and is paid to your brokerage account automatically on the 15th of every month. If the designated day lands on a non-business day, the payment will occur on the prior available business day.',
  },
];

const Faq = () => {
  return (
    <section className="mx-2 md:mx-5 lg:mx-[5rem] xl:mx-[15rem] mb-[5rem]">
      {faqs?.map((faq, idx) => (
        <FaqCard key={idx} faq={faq} />
      ))}
    </section>
  );
};

export default Faq;
