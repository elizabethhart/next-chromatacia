import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
