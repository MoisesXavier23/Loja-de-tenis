/* eslint-disable react/prop-types */
const CustomButton = ({ children, className, onClick, ...props }) => {
  return (
    <button className={`${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
