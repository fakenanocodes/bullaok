const Button = ({ children, eventHandler, type, loading }) => {
  const styles = {
    main: `flex items-center justify-center w-full outline-none font-semibold text-base text-white rounded-sm bg-[#8E0789] border-0 border-[#8E0789] py-3 px-4`,
  };

  return (
    <button
      onClick={eventHandler}
      type={type}
      disabled={loading}
      className={styles?.main}
    >
      {children}
    </button>
  );
};

export default Button;
