const Button = ({ text, color, children }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
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
