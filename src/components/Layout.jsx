import Header from './Header';

const Layout = ({ children }) => {
  return (
    <main className="w-full overflow-hidden  bg-[#41073F]">
      <div className="mb-[5rem]">
        <Header />
      </div>
      {children}
    </main>
  );
};

export default Layout;
