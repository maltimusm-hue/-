import "../Home/home.css";
import "./favorites.css";
import { icons } from "../../utils";
import CardProduct from "../../components/CardProduct/CardProduct";

function Favorites() {
  return (
    <>
      <div className="home">
        <div className="favorites-page">
          <div className="favorites-page__header-nav">
            <button className="favorites-page__header-container-btn">
              <img src={icons.buttonArrowLeft} alt="стрелка влево" />
              <span className="favorites-page__header-text-btn">Назад</span>
            </button>

            <p className="favorites-page__header-title">Все подборки</p>
          </div>

          <div className="favorites-page__container">
            <div className="favorites-page__city-edit">
              <h1 className="favorites-page__header-subtitle">Москва</h1>
              <img src={icons.penEdit} alt="ручка редактирования" />
            </div>
            <div className="favorites-page__cards">
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Favorites;
