import { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { scrollToMid } from '../actions/utils';
import { useFetcher } from 'react-router-dom';

const MainLayout = ({ children }) => {
  
    useEffect(() => {
      scrollToMid();
    }, []);
  
  return (
    <main className="w-full overflow-hidden">
      <div className="mb-[5rem]">
        <Header />
      </div>
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
