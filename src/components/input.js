
const Input = ({ inputValue }) => {
  return (
    <input
      className="input2"
      type="text"
      placeholder="Enter username"
      autoComplete="on"
      value={inputValue}
    />
  );
};

export default Input;
