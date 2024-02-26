

const ScrollContainer = ({ children }) => {
  const scrollbarStyle = {
    '&::-webkit-scrollbar': {
      width: '3px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  };

  return (
    <div
      className="mx-7 h-[75vh] border bg-black bg-opacity-[62%] rounded-r-xl p-10 overflow-y-scroll "
      style={scrollbarStyle}
    >
      {children}
    </div>
  );
};

export default ScrollContainer;
