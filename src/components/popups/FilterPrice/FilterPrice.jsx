import { useState } from "react";
import RangeInput from "../../RangeInput/RangeInput";
import ButtonShow from "../../ButtonShow/ButtonShow";

import s from "./style.module.css";

const MIN = 0;
const MAX = 100000;

const FilterPrice = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(100000);

  const leftPercent = (from / MAX) * 100;
  const rightPercent = (to / MAX) * 100;

  return (
    <div className={s.FilterPrice}>

      <div className={s.FilterPrice__inputs}>
        <RangeInput
          placeholder="От 0"
          value={from}
          onChange={(e) => setFrom(+e.target.value)}
        />
        <RangeInput
          placeholder="До 100 000 ₽"
          value={to}
          onChange={(e) => setTo(+e.target.value)}
        />
      </div>


      <div className={s.FilterPrice__slider}>
        <div className={s.FilterPrice__track} />

        <div
          className={s.FilterPrice__range}
          style={{
            left: `${leftPercent}%`,
            width: `${rightPercent - leftPercent}%`,
          }}
        />

        <input
          type="range"
          min={MIN}
          max={MAX}
          value={from}
          onChange={(e) => setFrom(Math.min(+e.target.value, to))}
          className={`${s.FilterPrice__thumb} ${s.left}`}
        />

        <input
          type="range"
          min={MIN}
          max={MAX}
          value={to}
          onChange={(e) => setTo(Math.max(+e.target.value, from))}
          className={`${s.FilterPrice__thumb} ${s.right}`}
        />
      </div>


      <ButtonShow  text={"Применить"} />
    </div>
  );
};

export default FilterPrice;
