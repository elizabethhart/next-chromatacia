import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {process.env.NODE_ENV === 'production' ? (
        <>{children}</>
      ) : (
        <div className="">
          <Navbar />
          <main>{children}</main>
        </div>
      )}
    </>
  );
};

export default Layout;
