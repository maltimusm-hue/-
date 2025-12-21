
import s from "./style.module.css";

const InputFilter = ({ text= "Альстромерия" }) => {
  return (
<div className={s.InputFilter}>
<input type="checkbox" />
<label htmlFor="">{text}</label>
</div>
  );
};

export default InputFilter;