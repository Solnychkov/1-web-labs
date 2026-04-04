import "./Main.scss";

import iconStar from "../../assets/images/Advantages/icon-star.svg";

import iconNumberOne from "../../assets/images/Advantages/icon-number-1.svg";
import iconNumberTwo from "../../assets/images/Advantages/icon-number-2.svg";
import iconNumberThree from "../../assets/images/Advantages/icon-number-3.svg";

import iconCardOne from "../../assets/images/Advantages/icon-card-1.png";
import iconCardTwo from "../../assets/images/Advantages/icon-card-2.png";
import iconCardThree from "../../assets/images/Advantages/icon-card-3.png";

import background from "../../assets/images/Advantages/Background.jpg";

interface CardItem {
  title: string;
  description: string;
  icon: string;
  iconNumber: {
    src: string;
    alt: number;
  };
}

const cards: readonly CardItem[] = [
  {
    title: "Работаем по всей России",
    description:
      "Мы готовы произвести работы в любой точке России в максимально сжатые сроки. Мы ценим время заказчика и организуем доставку на объект самостоятельно вне зависимости от количества оборудования.",
    icon: iconCardOne,
    iconNumber: { src: iconNumberOne, alt: 1 },
  },
  {
    title: "Лучшее в классе оборудование",
    description:
      "Мы используем только насосы BBA pumps при проведении работ. Все наши установки выпущены не позже 2017 года, в идеальном техническом состоянии.",
    icon: iconCardTwo,
    iconNumber: { src: iconNumberTwo, alt: 2 },
  },
  {
    title: "Бесплатный выезд и консультация",
    description:
      "Бесплатный выезд и консультации в любой точке России, постоянная поддержка и полное сопровождение работ на каждом этапе оказываемых услуг.",
    icon: iconCardThree,
    iconNumber: { src: iconNumberThree, alt: 3 },
  },
];

export const AdvantagesComponent = () => {
  return (
    <section className="advantages" id="advantages" aria-labelledby="advantages-heading">
      <div className="advantages__background" aria-hidden="true">
        <img className="advantages__background-image" src={background} alt="" />
        <div className="advantages__background-overlay" />
      </div>

      <div className="advantages__content">
        <div className="container">
          <h2 className="section__title section__title--white advantages__title">
            Наши преимущества
          </h2>
          <div className="advantages__cards" role="list">
            {cards.map((card, index) => (
              <article className="advantages__card" key={index} role="listitem">
                <div className="advantages__card-header">
                  <div className="advantages__card-badge">
                    <img
                      className="advantages__card-star"
                      src={iconStar}
                      alt=""
                      aria-hidden="true"
                    />
                    <img
                      className="advantages__card-number"
                      src={card.iconNumber.src}
                      alt={`${card.iconNumber.alt}`}
                    />
                  </div>
                  <img
                    className="advantages__card-icon"
                    src={card.icon}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="advantages__card-body">
                  <h2 className="section__title advantages__card-title">
                    {card.title}
                  </h2>
                  <p className="advantages__card-description">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="advantages__bottom">
        <div
          className="advantages__bottom-element advantages__bottom--first"
          aria-hidden="true"
        />
        <div
          className="advantages__bottom-element advantages__bottom--second"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
