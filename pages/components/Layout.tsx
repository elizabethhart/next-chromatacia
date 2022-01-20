import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {process.env.NODE_ENV === 'production' ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
