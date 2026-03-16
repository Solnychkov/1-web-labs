import "./Main.scss";

export const CallbackComponent = () => {
  return (
    <section className="callback">
      <div className="container callback__container">
        <h1 className="section__title section__title--white callback__title">
          Закажите консультацию, расчет стоимости работ или выезд специалиста на
          объект
        </h1>
        <form action="#" className="callback__form">
          <div className="callback__form-group">
            <label form="name" className="callback__form-label">
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="callback__form-input"
            />
          </div>

          <div className="callback__form-group">
            <label form="company" className="callback__form-label">
              Название компании
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="callback__form-input"
            />
          </div>

          <div className="callback__form-group">
            <label form="phone" className="callback__form-label">
              Телефон *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="callback__form-input"
              required
            />
            <div className="callback__policy">
              <p className="callback__policy-text">
                Я даю свое согласие на обработку моей персональной информации в
                соответствии с{" "}
                <a href="#" className="callback__policy-link">
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </div>

          <button type="submit" className="callback__form-submit">
            Отправить запрос
          </button>
        </form>
      </div>
    </section>
  );
};
