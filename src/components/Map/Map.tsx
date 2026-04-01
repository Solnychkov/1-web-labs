import "./Main.scss";

import mapMobile from "../../assets/images/Map/Map-mobile.png";
import mapDesktop from "../../assets/images/Map/Map-desktop.png";

export const MapComponent = () => {
  return (
    <section className="map">
      <h2 className="section__title">Наши объекты</h2>
      <picture>
        <source media="(max-width: 600px)" srcSet={mapMobile} />
        <img className="map__img" src={mapDesktop} alt="Карта объектов" />
      </picture>
      <div className="container">
        <ul className="map__list">
          <li>Екатеринбург</li>
          <li>Москва</li>
          <li>Казань</li>
          <li>Санкт-Петербург</li>
          <li>Краснодар</li>
          <li>Тюмень</li>
        </ul>
      </div>
    </section>
  );
};
