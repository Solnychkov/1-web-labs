import "./Main.scss";

import background from "../../assets/images/Advantages/Background.jpg";

import iconStar from "../../assets/images/Advantages/icon-star.svg";

import iconNumberOne from "../../assets/images/Advantages/icon-number-1.svg";
import iconNumberTwo from "../../assets/images/Advantages/icon-number-2.svg";
import iconNumberThree from "../../assets/images/Advantages/icon-number-3.svg";

import iconCardOne from "../../assets/images/Advantages/icon-card-1.png";
import iconCardTwo from "../../assets/images/Advantages/icon-card-2.png";
import iconCardThree from "../../assets/images/Advantages/icon-card-3.png";

interface cardItem {
  title: string;
  description: string;
  icon: string;
  iconNumber: {
    src: string;
    alt: number;
  };
}

const cards: readonly cardItem[] = [
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
    <section className="advantages">
      <div className="advantages__content">
        <div className="container">
          <h1 className="section-title advantages__title">Наши преимущества</h1>
          <div className="advantages__cards">
            {cards.map((card, index) => (
              <article className="advantages__card" key={index}>
                <div className="advantages__card-header">
                  <div className="advantages__card-badge">
                    <img className="advantages__card-star" src={iconStar} />
                    <img
                      className="advantages__card-number"
                      src={card.iconNumber.src}
                      alt={`${card.iconNumber.alt}`}
                    />
                  </div>
                  <img src={card.icon} className="advantages__card-icon" />
                </div>
                <div className="advantages__card-body">
                  <h2 className="section-title advantages__card-title">
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
        <div className="advantages__bottom-element advantages__bottom--first" />
        <div className="advantages__bottom-element advantages__bottom--second" />
      </div>
    </section>
  );
};
