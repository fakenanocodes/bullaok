import useSWR from 'swr';

const FooterItem = ({ faq, about, terms }) => {
  // const about =
  console.log({ faq });
  const { data: footer } = useSWR('/');
  console.log(footer);
  // const contact = [{
  //   email: footer?.site?.email,
  //   phone: footer?.site?.phone_number,
  // }];
  return (
    <div className=" items-center text-[#fff] ">
      <ul className="">
        {faq && (
          <>
            <h2 className="font-bold">FAQ</h2>
            {faq.categories.map((item, index) => (
              <li key={index} className="mt-4 lg:text-lg text-xs">
                {item}
              </li>
            ))}
          </>
        )}
      </ul>

      <ul>
        {about && (
          <>
            <h2 className="font-bold">About</h2>
            {about.categories.map((item, index) => (
              <li key={index} className="mt-4 lg:text-lg text-xs">
                {item}
              </li>
            ))}
          </>
        )}
      </ul>
      <ul>
        {terms && (
          <>
            <h2 className="font-bold">Terms</h2>
            {terms.categories.map((item, index) => (
              <li key={index} className="mt-4">
                {item}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default FooterItem;
