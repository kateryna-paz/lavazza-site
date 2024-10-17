import { useState } from "react";
import styles from "./Input.module.css";
import PropsTypes from "prop-types";

Input.propTypes = {
  className: PropsTypes.string,
  type: PropsTypes.string,
  placeholder: PropsTypes.string,
  required: PropsTypes.bool,
  name: PropsTypes.string,
  label: PropsTypes.string,
  value: PropsTypes.string,
  onChange: PropsTypes.func,
};

function Input({
  className,
  type,
  placeholder,
  required,
  name,
  label,
  value,
  onChange,
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleInput = (val) => {
    setInputValue(val);
    if (onChange) {
      onChange(name, val);
    }
  };
  return (
    <div className={styles.inputGroup}>
      <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={inputValue}
        onChange={(e) => handleInput(e.target.value)}
      />
      {label && <label>{label}</label>}
      <div className={styles.underline}></div>
    </div>
  );
}

export default Input;
