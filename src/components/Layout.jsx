import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <main className="w-full overflow-x-hidden  bg-[#41073F]">
      <div className="mb-[5rem]">
        <Header />
      </div>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
