import "./Main.scss";
import background from "../../assets/images/Hero/Background.png";
import mailIcon from "../../assets/images/Hero/Mail-icon.svg";
import locationIcon from "../../assets/images/Hero/Location-icon.svg";
import car from "../../assets/images/Hero/Car.png";
import { useSlider } from "../../hooks/useSlider";

type TSlide = {
  id: number;
  title: string;
  subtitle: string;
};

const slides: TSlide[] = [
  {
    id: 1,
    title: "Аренда специализированных насосных станций",
    subtitle: "для водопонижения и водоотведения",
  },
  {
    id: 2,
    title: "Профессиональное оборудование для любых задач",
    subtitle: "надёжность и качество на каждом объекте",
  },
  {
    id: 3,
    title: "Оперативная доставка по всей России",
    subtitle: "собственный парк техники и опытные специалисты",
  },
];

export const HeroComponent = () => {
  const { activeIndex, goNext, goPrev, goTo } = useSlider({
    totalSlides: slides.length,
    initialIndex: 0,
    autoPlayInterval: 5500,
    animationDuration: 600,
  });

  return (
    <section className="hero">
      <img
        className="hero__background"
        src={background}
        alt=""
        aria-hidden="true"
      />

      <div className="hero__inner container">
        <div className="hero__slider">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero__slide ${index === activeIndex ? "hero__slide--active" : ""}`}
              style={{
                transform: `translateX(calc(${(index - activeIndex) * 110}% + 5px))`,
              }}
              aria-hidden={index !== activeIndex}
            >
              <div className="hero__text">
                <h1 className="hero__title">{slide.title}</h1>
                <p className="hero__subtitle">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="hero__cta">Заказать звонок</button>

        <img src={car} className="hero__car" alt="" aria-hidden="true" />

        <button
          className="arrow arrow--prev hero__arrow--prev"
          onClick={goPrev}
          aria-label="Предыдущий слайд"
        />
        <button
          className="arrow arrow--next hero__arrow--next"
          onClick={goNext}
          aria-label="Следующий слайд"
        />

        <div className="hero__dots" role="tablist">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`hero__dot ${index === activeIndex ? "hero__dot--active" : ""}`}
              onClick={() => goTo(index)}
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hero__bottom">
        <div className="hero__info">
          <div className="hero__info-icon">
            <img src={mailIcon} alt="" aria-hidden="true" />
          </div>
          <div className="hero__info-body">
            <span className="hero__info-label">Связь с нами</span>
            <a href="tel:88006001505" className="hero__info-value">
              8 800 600-15-05
            </a>
            <a
              href="mailto:office@sahara-group.ru"
              className="hero__info-value"
            >
              office@sahara-group.ru
            </a>
          </div>
        </div>

        <div className="hero__info">
          <div className="hero__info-icon">
            <img src={locationIcon} alt="" aria-hidden="true" />
          </div>
          <div className="hero__info-body">
            <span className="hero__info-label">Наша локация</span>
            <address className="hero__info-value">
              Ленинградская область,
              <br />
              Новоприозерское ш. 11 км. Трасса А-121
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};
