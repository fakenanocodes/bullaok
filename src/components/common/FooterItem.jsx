import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { RiTwitterXLine } from 'react-icons/ri';

const FooterItem = ({ key, faq, about, terms, contact }) => {
  // const about =
  console.log({ faq });
  return (
    <div className=" items-center text-[#fff] mt-5 py-8">
      <ul className="">
        {faq ? (
          <>
            <h2 className="font-bold">FAQ</h2>
            {faq.categories.map((item, index) => (
              <li key={index} className="mt-4 lg:text-lg text-xs">
                {item}
              </li>
            ))}
          </>
        ) : null}
      </ul>

      <ul>
        {about ? (
          <>
            <h2 className="font-bold">About</h2>
            {about.categories.map((item, index) => (
              <li key={index} className="mt-4 lg:text-lg text-xs">
                {item}
              </li>
            ))}
          </>
        ) : null}
      </ul>
      <ul>
        {terms ? (
          <>
            <h2 className="font-bold">Terms</h2>
            {terms.categories.map((item, index) => (
              <li key={index} className="mt-4">
                {item}
              </li>
            ))}
          </>
        ) : null}
      </ul>
      <ul>
        {contact ? (
          <>
            <h2 className="font-bold">Contact</h2>
            {contact.categories.map((item, index) => (
              <li key={index} className="mt-4">
                {item}
              </li>
            ))}
            <div className="md:flex gap-4 mt-5 hidden">
              <BiLogoFacebook
                style={{
                  fontSize: '30px',
                  border: '1px solid white',
                  padding: '4px',
                  borderRadius: '50%',
                }}
              />
              <AiOutlineInstagram
                style={{
                  fontSize: '30px',
                  border: '1px solid white',
                  padding: '4px',
                  borderRadius: '50%',
                }}
              />
              <RiTwitterXLine
                style={{
                  fontSize: '30px',
                  border: '1px solid white',
                  padding: '4px',
                  borderRadius: '50%',
                }}
              />
            </div>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default FooterItem;
