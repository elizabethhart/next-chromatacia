import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
