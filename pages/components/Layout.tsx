import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  // https://nextjs.org/docs/basic-features/layouts
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
