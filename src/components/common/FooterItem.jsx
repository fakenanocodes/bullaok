import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const FooterItem = ({ faq, about, terms }) => {
  console.log("faq",faq);
  const navigate = useNavigate()
  
  return (
    <div className=" items-center text-[#fff] ">
      <ul className="">
        {faq && (
          <>
            <h2 className="font-bold">FAQ</h2>
            {faq.categories.map((item, index) => (
              <li onClick={()=>navigate(item.link)} key={index} className="mt-4 cursor-pointer lg:text-lg text-xs">
                {item.title}
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
              <li onClick={()=>navigate(item.link)} key={index} className="mt-4 cursor-pointer lg:text-lg text-xs">
                {item.title}
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
              <li onClick={()=>navigate(item.link)} key={index} className="mt-4 cursor-pointer">
                {item.title}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default FooterItem;
