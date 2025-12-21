import { icons } from "../../utils";
import s from "./style.module.css";

const ButtonSlider = ({direction = "next", onClick }) => {

 const arrowIcon = direction === "prev" ? icons.arrowBlackLeft : icons.arrowBlackRight
  return (
    <button 
      className={`${s.ButtonSlider} `}
      onClick={onClick}
      
    >
      <img 
        src={arrowIcon} 

        className={`${s.ButtonSlider_img} `}
      />
    </button>
  );
};

export default ButtonSlider;