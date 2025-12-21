import "../Home/home.css";
import "./filter.css";
import { useRef, useState } from "react";
import { bouquets, FLOWERS } from "../../utils";
import CardBouquet from "../../components/CardBouquet/CardBouquet";
import ButtonSlider from "../../components/ButtonSlider/ButtonSlider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import BlockFilter from "../../components/BlockFilter/BlockFilter";
import FlowerFilter from "../../components/popups/FlowerFilter/FlowerFilter";
import FilterPrice from "../../components/popups/FilterPrice/FilterPrice";
import Products from "../../components/Products/Products";



function Filter() {
  const swiperRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState(null);
    const bouquetItems = [
    { img: bouquets.bouquets1, text: "букет 1" },
    { img: bouquets.bouquets2, text: "букет 2" },
    { img: bouquets.bouquets3, text: "букет 3" },
    { img: bouquets.bouquets4, text: "букет 4" },
    { img: bouquets.bouquets5, text: "букет 5" },
    { img: bouquets.bouquets6, text: "букет 6" },
    { img: bouquets.bouquets7, text: "букет 7" },
    { img: bouquets.bouquets8, text: "букет 8" },
    { img: bouquets.bouquets9, text: "букет 9" },
    { img: bouquets.bouquets10, text: "букет 10" },
    { img: bouquets.bouquets1, text: "букет 11" },
    { img: bouquets.bouquets2, text: "букет 12" }
  ];

    const filters = [
    { id: "price", text: "Цена" },
    { id: "reason", text: "Повод" },
    { id: "composition", text: "Цветы в составе" },
    { id: "color", text: "Цвет" },
    { id: "fresh", text: "Собран сегодня" },
  ];


  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

    const handleFilterClick = (filterId) => {
    setActiveFilter((prev) => (prev === filterId ? null : filterId));
  };
   const renderFilterContent = (id) => {
    switch (id) {
      case "price":
        return <FilterPrice />;
      case "composition":
        return <FlowerFilter items={FLOWERS} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="home">
        <div className="filter-page">
          <div className="filter-page__header-nav">
            <nav className="filter-page__header-nav-subtitle">
              <a href="/">Главная</a> / <span>Фильтры</span>
            </nav>
            <h1 className="filter-page__header-nav-title">Доставка цветов в Коломне</h1>
          </div>
          <div className="filter-page__filter_contaner">
            <div className="filter-page__filter_contaner-slider">
        
              <ButtonSlider  direction="prev" onClick={handlePrev} />
              <div className="swiper-container" style={{ maxWidth: '1300px', width: '100%' }}>
                <Swiper
                  ref={swiperRef}
                  modules={[Navigation, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={6.2}
                  loop={true}
                  speed={1000}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                  }}
                
                 
                  className="my-swiper"
                >
                  {bouquetItems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="slide-card">
                        <CardBouquet img={item.img} text={item.text} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <ButtonSlider direction="next" onClick={handleNext} />
            </div>
 <div className="filter-page__filter_contaner-filter">
      {filters.map((filter) => (
        <div
          key={filter.id}
          className={`filter-button ${
            activeFilter === filter.id ? "active" : ""
          }`}
        >
          <BlockFilter
            text={filter.text}
            active={activeFilter === filter.id}
            onClick={() => handleFilterClick(filter.id)}
          />

          {activeFilter === filter.id && (
            <div className="filter-dropdown dropdown-active">
              {renderFilterContent(filter.id)}
            </div>
          )}
        </div>
      ))}
    </div>

          </div>
        </div>
              <div className="home__products">
       <Products title={false}/>
      </div>
      </div>
    </>
  );
}

export default Filter