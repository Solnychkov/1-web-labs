import "./Main.scss";

export const ContactsComponent = () => {
  return (
    <section className="contacts">
      <div className="section__title section__title--white contacts__title">
        Контакты
      </div>

      <div className="container">
        <div className="contacts__content">
          <aside className="contacts__info">
            <div className="contacts__panel contacts__panel--first">
              <div className="contacts__panel-item">
                <h3 className="contacts__panel-label">Связь с нами</h3>
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

              <div className="contacts__panel-item">
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
                <label className="contacts__form-label">Ваше имя</label>
                <input type="text" className="contacts__form-input" />
              </div>
              <div className="contacts__form-field">
                <label className="contacts__form-label">
                  Название компании
                </label>
                <input type="text" className="contacts__form-input" />
              </div>
            </div>

            <div className="contacts__form-field">
              <label className="contacts__form-label contacts__form-label--tel">
                Телефон <span>*</span>
              </label>
              <input type="tel" className="contacts__form-input" required />
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
              <label className="contacts__form-label">Комментарий</label>
              <textarea className="contacts__form-textarea"></textarea>
            </div>

            <button
              type="submit"
              className="form__submit contacts__form-submit"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
