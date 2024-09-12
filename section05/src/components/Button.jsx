const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
      {text}
      {children}
    </button>
  );
};

// props 기본 값
Button.defaultProps = {
  color: "black",
};

export default Button;
