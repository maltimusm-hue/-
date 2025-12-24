import { useState } from "react";
import { CATEGORIES } from "../../../utils";
import s from "./style.module.css";
import SelectionFilter from "./SelectionFilter/SelectionFilter";

const CategoryMenu = ({activeFilter}) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const currentCategory = CATEGORIES.find(
    (item) => item.id === activeCategory
  );

  const handleCategoryClick = (id) => {
    setActiveItem(null);
    setActiveCategory((prev) => (prev === id ? null : id));
  };

  const handleItemClick = (name) => {
    setActiveItem((prev) => (prev === name ? null : name));
  };


  return (
    <div className={`${s.Menu} ${activeFilter ? s.active : ""}`}>
      <div className={s.Menu__left}>
        {CATEGORIES.map((cat) => (
          <>
         {cat.title ? <h2 className={s.Menu__title}>{cat.title}</h2> : ""} 
         <div className={s.block_SelectionFilter}>
            <SelectionFilter
key={cat.id}
            text={cat.text}
            active={activeCategory === cat.id}
            onClick={() => handleCategoryClick(cat.id)}
          />
         </div>

          </>
   
        ))}
      </div>

      {currentCategory ? currentCategory.items.length ? <> <div className={s.Menu__right}>
          <div className={s.Menu__header}>
            
            <div>
              <h2 className={s.Menu__subtitle}>{currentCategory.subtitle}</h2>
              <div className={s.Menu__divider} />
            </div>

            <button className={s.Menu__all}>Смотреть все</button>
          </div>

          <div className={s.Menu__list}>
            {currentCategory.items.map((item) => (
              <SelectionFilter
                key={item}
                text={item}
                link={true}
                active={activeItem === item}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </div>
        </div></>  : "": ""}
    </div>
  );
};

export default CategoryMenu;