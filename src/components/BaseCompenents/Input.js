const Input = ({ type, placeholder, value, className = "" }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || ""}
      value={value || ""}
      className={className || "formControl dark:bg-gray-700"}
    />
  );
};

export default Input;
