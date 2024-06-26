import { forwardRef } from "react";

const GlobalTextArea = forwardRef((props, ref) => {
  const {
    placeholderTxt,
    row,
    style,
    className,
    inputName,
    handleChange,
    handleDrag,
    inputStyle,
    errorTxt,
    errorClass,
    ...rest
  } = props;

  return (
    <div>
      <textarea
        placeholder={placeholderTxt}
        rows={row}
        style={inputStyle}
        name={inputName}
        className={className}
        onDragStart={handleDrag}
        onChange={handleChange}
        {...rest}
      ></textarea>
      {errorTxt && <p className={`text-xs ${errorClass || "text-red-500"}`}>{errorTxt}</p>}
    </div>
  );
});
export default GlobalTextArea;
