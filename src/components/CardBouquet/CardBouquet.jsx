// import { useState } from "react";
// import { icons, images } from "../../utils";
import s from "./card-bouquet.module.css";

const CardBouquet = ({img, text, mirroring}) => {

  return (
   <div className={s.CardBouquet}>
        <p className={s.CardBouquet__subtitle}>{text}</p>
<img src={img} alt="card-bouquet" className={`${s.CardBouquet_img} ${mirroring ? "mirroring" : ""}`} />
   </div>
  );
};

export default CardBouquet;