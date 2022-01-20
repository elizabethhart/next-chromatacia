import Spinner from './Spinner';

// type Props = {
//   loading?: boolean;
// };

const PageContent: React.FC = ({ children }) => {
  return (
    <div className="max-w-screen-lg px-10 py-5">
      {/* {loading ? <Spinner /> : children} */}
      {children}
    </div>
  );
};

export default PageContent;
