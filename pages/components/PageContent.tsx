import Spinner from './Spinner';

const PageContent: React.FC<{ loading?: boolean }> = ({
  children,
  loading = false,
}) => {
  return (
    <div className="max-w-screen-lg px-10 py-5">
      {loading ? <Spinner /> : children}
    </div>
  );
};

export default PageContent;
