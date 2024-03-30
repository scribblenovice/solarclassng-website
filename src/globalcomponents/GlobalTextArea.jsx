const GlobalTextArea = ({
  placeholderTxt,
  row,
  style,
  className,
  inputName,
  handleChange,
  handleDrag,
  inputStyle,
  errorTxt,
  ...rest
}) => {
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
      ></textarea>
      {errorTxt && <p className="text-xs text-red-100">{errorTxt}</p>}
    </div>
  );
};
export default GlobalTextArea;
