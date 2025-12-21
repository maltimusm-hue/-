import SearchInput from "../../SearchInput/SearchInput";
import InputFilter from "../../InputFilter/InputFilter";
import ButtonShow from "../../ButtonShow/ButtonShow";
import s from "./style.module.css";

const FlowerFilter = ({ items = [] }) => {
  console.log(items);
  
  return (
    <div className={s.FlowerFilter}>
      <div className={s.FlowerFilter__gap}>
      <SearchInput />

      <div className={s.FlowerFilter__list}>
        {items.map((item, index) => (
          <InputFilter
            key={index}
            text={item}
          />
        ))}
      </div>

      <div className={s.FlowerFilter__divider} />


      </div>
      <ButtonShow />
    </div>
  );
};

export default FlowerFilter;