import "./Main.scss";

import iconMail from "../../assets/images/Generally/icon-mail.svg";
import iconGeo from "../../assets/images/Generally/icon-geo.svg";

import Logo from "../../assets/images/Contacts/Logo.svg";
import Background from "../../assets/images/Contacts/Background.jpg";

export const ContactsComponent = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__background">
        <img src={Background} alt="" className="contacts__background-img" />
      </div>

      <h2 className="section__title section__title--white contacts__title">
        Контакты
      </h2>

      <div className="container">
        <div className="contacts__content">
          <aside className="contacts__info">
            <div className="contacts__panel contacts__panel--first">
              <div className="contacts__panel-item">
                <div className="contacts__panel-icon">
                  <img src={iconMail} alt="" />
                </div>
                <h3 className="contacts__panel-label">Связь с нами</h3>

                <div className="contacts__panel-info">
                  <a href="tel:88006001505" className="contacts__panel-link">
                    8 800 600-15-05
                  </a>
                  <a
                    href="mailto:office@sahara-group.ru"
                    className="contacts__panel-link"
                  >
                    office@sahara-group.ru
                  </a>
                </div>
              </div>

              <div className="contacts__panel-item">
                <div className="contacts__panel-icon">
                  <img src={iconGeo} alt="" />
                </div>
                <h3 className="contacts__panel-label">Наша локация</h3>
                <address className="contacts__panel-info">
                  Ленинградская область, Новоприозерское ш. 11 км. Трасса А-121
                </address>
              </div>
            </div>
            <div className="contacts__panel contacts__panel--second">
              <p className="contacts__panel-note">
                Наши менеджеры обработают вашу заявку и сразу же свяжутся с вами
                в рабочее время 9:00 — 18:00 МСК.
              </p>
            </div>
          </aside>
          <form className="contacts__form" action="#">
            <h3 className="contacts__form-title">
              Свяжитесь с нами удобным вам способом или оставьте заявку и наши
              специалисты позвонят вам
            </h3>

            <div className="contacts__form-row">
              <div className="contacts__form-field">
                <label htmlFor="contact-name" className="contacts__form-label">Ваше имя</label>
                <input type="text" id="contact-name" className="contacts__form-input" />
              </div>
              <div className="contacts__form-field">
                <label htmlFor="contact-company" className="contacts__form-label">
                  Название компании
                </label>
                <input type="text" id="contact-company" className="contacts__form-input" />
              </div>
            </div>

            <div className="contacts__form-field">
              <label htmlFor="contact-phone" className="contacts__form-label contacts__form-label--tel">
                Телефон <span>*</span>
              </label>
              <input type="tel" id="contact-phone" className="contacts__form-input" required />
              <div className="policy contacts__form-policy">
                <p className="policy__text">
                  Я даю свое согласие на обработку моей персональной информации
                  в соответствии с{" "}
                  <a href="#" className="policy__link">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </div>

            <div className="contacts__form-field">
              <label htmlFor="contact-comment" className="contacts__form-label">Комментарий</label>
              <textarea id="contact-comment" className="contacts__form-textarea"></textarea>
            </div>

            <button
              type="submit"
              className="form__submit contacts__form-submit"
            >
              Отправить
            </button>
          </form>
        </div>

        <div className="contacts__bottom">
          <div className="contacts__bottom-date">2015 — 2023 г.</div>
          <img src={Logo} alt="" />
        </div>
      </div>
    </section>
  );
};
