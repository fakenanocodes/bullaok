import React from 'react';
import data from '../data/footer.json';
import FooterItem from './common/FooterItem';
export default function Footer() {
  console.log({ data });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-[100px]">
      {data.map((item, index) => (
        <FooterItem
          key={index}
          faq={item.FAQ}
          about={item.About}
          terms={item.Terms}
          contact={item.Contact}
        />
      ))}
    </div>
  );
}
