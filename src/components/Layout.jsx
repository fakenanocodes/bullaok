import Header from './Header';

const Layout = ({ children }) => {
  return (
    <main className="w-full overflow-hidden">
      <div className="mb-[5rem]">
        <Header />
      </div>
      {children}
    </main>
  );
};

export default Layout;
