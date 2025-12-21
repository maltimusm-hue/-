import s from "./style.module.css";

const ButtonShow = ({text="Показать"}) => {
  return (
<div className={s.ButtonShow}>{text}</div>
  );
};

export default ButtonShow;