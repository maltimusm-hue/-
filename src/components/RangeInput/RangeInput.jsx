import s from "./style.module.css";

const RangeInput = ({ placeholder,value,
onChange, }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={s.RangeInput}
      value={value}
      onChange={onChange}
    />
  );
};

export default RangeInput;
