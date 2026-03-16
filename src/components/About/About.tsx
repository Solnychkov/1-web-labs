import "./Main.scss";
import PumpsImage from "../../assets/images/About/Pumps.png";

import iconStats20Plus from "../../assets/images/About/icon-stat-20plus.svg";
import iconStats25Plus from "../../assets/images/About/icon-stat-25plus.svg";
import iconStats8Plus from "../../assets/images/About/icon-stat-8plus.svg";

import iconStar from "../../assets/images/About/icon-star.svg";

interface AdvantageItem {
  icon: string;
  label: string;
  alt: string;
}

const ADVANTAGE_ITEMS: readonly AdvantageItem[] = [
  {
    icon: iconStats20Plus,
    label: "Успешно реализованных проектов",
    alt: "20+",
  },
  {
    icon: iconStats25Plus,
    label: "Насосных установок различной мощности",
    alt: "25+",
  },
  { icon: iconStats8Plus, label: "Лет на рынке водопонижения", alt: "8+" },
];

export const AboutComponent = () => {
  return (
    <section className="about">
      <div className="about__pumps-wrapper">
        <img
          className="about__pumps"
          src={PumpsImage}
          alt="Профессиональный насос"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="container about__inner">
        <article className="about__content">
          <h2 className="section__title about__title">О компании</h2>
          <div className="about__description">
            <p>
              Уже более 8 лет специалисты компании Сахара Груп решают задачи
              любой сложности как в сфере водоотведения при проведении
              бестраншейного ремонта и строительства наружных сетей
              водоснабжения, канализации и трубопроводов, так и в сфере
              водопонижения грунтовых вод и осушения котлованов при
              строительстве зданий и иных сооружений.
            </p>
            <p>
              Мы используем в работе высококачественное оборудование признанного
              мирового лидера в производстве насосов – голландскую компанию BBA
              pumps. Наши насосные станции отличаются от конкурентов стабильной
              работой в любых погодных условиях, максимальной эффективностью при
              минимальном расходе топлива, а также низким уровнем шума (менее 48
              дБ), что позволяет использовать их в городских условиях
            </p>
          </div>
          <div className="about__advantages">
            {ADVANTAGE_ITEMS.map((advantage, index) => (
              <div className="about__item" key={index}>
                <div className="about__item-visual">
                  <img
                    className="about__item-star"
                    src={iconStar}
                    aria-hidden="true"
                  />
                  <img
                    className="about__item-number"
                    src={advantage.icon}
                    alt={advantage.alt}
                  />
                </div>
                <p className="about__item-label">{advantage.label}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};
