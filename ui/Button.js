const Button = ({ children, onClick, className }) => {
    return (
      <button
        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;