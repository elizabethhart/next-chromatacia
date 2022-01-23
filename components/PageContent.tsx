const PageContent: React.FC = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-screen-lg px-10 py-5 margin-auto">{children}</div>
    </div>
  );
};

export default PageContent;
