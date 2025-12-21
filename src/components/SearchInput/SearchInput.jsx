import { icons } from "../../utils";
import s from "./style.module.css";

const SearchInput = ({ placeholder = "Поиск цветов", value, onChange }) => {
  return (
    <div className={s.SearchInput}>
      <img
        src={icons.search}
        alt="search"
        width={26}
        height={24}
        className={s.SearchInput__icon}
      />

      <input
        type="text"
        className={s.SearchInput__field}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
