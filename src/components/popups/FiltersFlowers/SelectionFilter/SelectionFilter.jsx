import { icons } from "../../../../utils";
import s from "./style.module.css";

const SelectionFilter = ({
  link = false,
  onClick = () => {},
  text,
  active = false,

}) => {
  const Tag = link ? "a" : "button";

  return (
    <Tag
      href={link ? "#" : undefined}
      onClick={onClick}
      className={`${s.SelectionFilter} ${active ? s.active : ""}`}

    >
      <span className={s.SelectionFilter__text}>{text}</span>

      {!link && active && (
        <img
          src={icons.arrowBlackRight}
          alt=""
          className={s.SelectionFilter__icon}
        />
      )}
    </Tag>
  );
};

export default SelectionFilter;