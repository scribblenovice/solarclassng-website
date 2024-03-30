
export function GlobalText({
  labelTxt,
  id,
  handleChange,
  inputType,
  inputVal,
  inputName,
  errorTxt,
  isDisabled,
  placeTxt,
  isRequired,
  className,
  ...rest
}) {
  return (
    <div className={`w-full`}>
      <input
        className={className}
        type={inputType}
        id={id}
        label={labelTxt}
        onChange={handleChange}
        name={inputName}
        disabled={isDisabled}
        value={inputVal}
        placeholder={placeTxt}
        required={isRequired}
      />
      {errorTxt && <p className="max-h-2 text-xs text-red-100">{errorTxt}</p>}
    </div>
  );
}
export default GlobalText
