import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }) => {
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
