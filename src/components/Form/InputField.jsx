const InputField = ({ label, value, fieldType, inputType, placeholder, onChange, required, Children, rows, cols }) => {
  switch (fieldType) {
    case "input":
      return (
        <div>
          {label ? <label>{label}</label> : null}
          <input type={inputType} value={value} placeholder={placeholder} onChange={onChange} />
        </div>
      );
    case "textarea":
      return (
        <div>
          {label ? <label>{label}</label> : null}
          <textarea type={inputType} value={value} placeholder={placeholder} onChange={onChange} rows={rows} cols={cols} />
        </div>
      );
    case "select":
      return (
        <div>
          {label ? <label>{label}</label> : null}
          <select type={inputType} value={value} placeholder={placeholder} onChange={onChange}>
            {Children}
          </select>
        </div>
      );
    default:
      return (
        <div>
          <input type="text" />
        </div>
      );
  }
};

export default InputField;
