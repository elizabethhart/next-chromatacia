import Navbar from './Navbar';
import Footer from './Footer';
import Spinner from './Spinner';

const Layout: React.FC<{ loading: boolean }> = ({ children, loading }) => {
  return (
    <>
      <Navbar />
      <main>{loading ? <Spinner /> : children}</main>
      <Footer />
    </>
  );
};

export default Layout;
