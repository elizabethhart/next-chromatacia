const Spinner = () => (
  <div
    className="w-full h-full flex justify-center items-center"
    aria-label="Loading spinner"
  >
    <div className="border-top-transparent w-16 h-16 border-4 border-slate-400 border-dashed rounded-full animate-spin"></div>
  </div>
);

export default Spinner;
