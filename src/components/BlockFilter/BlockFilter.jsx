import { icons } from "../../utils";
import s from "./style.module.css";

const BlockFilter = ({ text, onClick, active = false }) => {
  return (
    <div 
      className={`${s.blockFilter} ${active ? s.blockFilterActive : ''}`}
      onClick={onClick}
    >
      <div className={s.blockFilterText}>{text}</div>
      <img 
        src={icons.arrowBlackDown} 
        alt={text}
        className={s.blockFilterImg}
      />
    </div>
  );
};

export default BlockFilter;