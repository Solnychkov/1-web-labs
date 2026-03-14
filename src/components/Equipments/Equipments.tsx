import "./Main.scss";
import { useSlider } from "../../hooks/useSlider";

import imgEquipment from "../../assets/images/Equipments/Equipment.png";
import { useEffect, useRef, useState } from "react";

interface slideItem {
  title: string;
  description: string;
}

const slides: readonly slideItem[] = [
  {
    title: "BA100K D193",
    description:
      "Насосный агрегат ВА100К D193 с максимальной производительностью 190 м3/ч и способностью перекачивать твердые включения диаметром до 82 мм является самой популярной моделью серии BA. \n\nДанный насос имеет компактный корпус и низкий уровень шума, благодаря чему его можно использовать даже в густонаселенных районах крупных городов.",
  },
  {
    title: "BA150E D285",
    description:
      "Насосный агрегат ВА100К D193 с максимальной производительностью 190 м3/ч и способностью перекачивать твердые включения диаметром до 82 мм является самой популярной моделью серии BA. \n\nДанный насос имеет компактный корпус и низкий уровень шума, благодаря чему его можно использовать даже в густонаселенных районах крупных городов.",
  },
  {
    title: "BA180E D328",
    description:
      "Насосный агрегат ВА100К D193 с максимальной производительностью 190 м3/ч и способностью перекачивать твердые включения диаметром до 82 мм является самой популярной моделью серии BA. \n\nДанный насос имеет компактный корпус и низкий уровень шума, благодаря чему его можно использовать даже в густонаселенных районах крупных городов.",
  },
  {
    title: "BA300E D328",
    description:
      "Насосный агрегат ВА100К D193 с максимальной производительностью 190 м3/ч и способностью перекачивать твердые включения диаметром до 82 мм является самой популярной моделью серии BA. \n\nДанный насос имеет компактный корпус и низкий уровень шума, благодаря чему его можно использовать даже в густонаселенных районах крупных городов.",
  },
  {
    title: "PT150 D155",
    description:
      "Насосный агрегат ВА100К D193 с максимальной производительностью 190 м3/ч и способностью перекачивать твердые включения диаметром до 82 мм является самой популярной моделью серии BA. \n\nДанный насос имеет компактный корпус и низкий уровень шума, благодаря чему его можно использовать даже в густонаселенных районах крупных городов.",
  },
];

const images: readonly string[] = [imgEquipment, imgEquipment, imgEquipment];

export const EquipmentsComponent = () => {
  const { activeIndex: activeSlideIndex, goTo: goToSlide } = useSlider({
    totalSlides: slides.length,
    autoPlayInterval: null,
    animationDuration: 600,
  });

  const {
    activeIndex: activeImageIndex,
    goTo: goToImage,
    goPrev: goPrevImage,
    goNext: goNextImage,
  } = useSlider({
    totalSlides: images.length,
    initialIndex: 0,
    autoPlayInterval: 5500,
    animationDuration: 600,
  });

  const tabListRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (tabListRef.current) {
      const activeTab = tabListRef.current.querySelector<HTMLButtonElement>(
        `.equipments__tab--active`,
      );
      if (activeTab) {
        const { offsetLeft, offsetWidth } = activeTab;
        setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
      }
    }
  }, [activeSlideIndex]);

  return (
    <section className="equipments">
      <div className="container">
        <h2 className="section-title">Наше оборудование</h2>
        <div
          className="equipments__tablist"
          role="tablist"
          ref={tabListRef}
          aria-label="Оборудование"
        >
          {slides.map((slide, index) => (
            <button
              className={`equipments__tab ${index == activeSlideIndex ? "equipments__tab--active" : ""}`}
              onClick={() => goToSlide(index)}
              key={index}
            >
              {slide.title}
            </button>
          ))}

          <span
            className="equipments__tab-indicator"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />
        </div>
        <div className="equipments__content">
          <div className="equipments__slider">
            <div
              className="equipments__track"
              style={{
                transform: `translateX(-${activeSlideIndex * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div className="equipments__slide" key={index}>
                  <div className="equipments__slide-text">
                    <h3 className="equipments__slide-title">{slide.title}</h3>
                    <p className="equipments__slide-description">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="equipments__images">
            <div className="equipments__image-slider">
              <div
                className="equipments__image-track"
                style={{
                  transform: `translateX(-${activeImageIndex * 100}%)`,
                }}
              >
                {images.map((image, index) => (
                  <div className="equipments__image" key={index}>
                    <img src={image} />
                  </div>
                ))}
              </div>
            </div>
            <button
              className="arrow arrow--prev equipments__image--prev"
              onClick={goPrevImage}
              aria-label="Предыдущий слайд"
            />

            <button
              className="arrow arrow--next equipments__image--next"
              onClick={goNextImage}
              aria-label="Следующий слайд"
            />

            <div className="equipments__dots" role="tablist">
              {images.map((_, index) => (
                <button
                  className={`equipments__dot ${index === activeImageIndex ? "equipments__dot--active" : ""}`}
                  onClick={() => goToImage(index)}
                  role="tab"
                  aria-selected={index === activeImageIndex}
                  aria-label={`Слайд ${index + 1}`}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
