import { useState } from "react";
import "./Main.scss";
import Logo from "../../assets/images/Logo.svg";

type TNavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: TNavItem[] = [
  { href: "#about", label: "О компании" },
  { href: "#advantages", label: "Наши преимущества" },
  { href: "#clients", label: "Заказчики" },
  { href: "#objects", label: "Объекты" },
  { href: "#contacts", label: "Контакты" },
];

export const NavComponent = () => {
  const [activeHref, setActiveHref] = useState<string>("#about");

  return (
    <header className="navbar">
      <div
        className="navbar__triangle navbar__triangle--left"
        aria-hidden="true"
      />
      <div
        className="navbar__triangle navbar__triangle--right"
        aria-hidden="true"
      />
      <div className="container">
        <div className="navbar__inner">
          <a href="/" className="navbar__logo">
            <img src={Logo} alt="Сахара Груп" />
          </a>

          <div className="navbar__right">
            <nav className="navbar__nav" aria-label="Основная навигация">
              <ul className="navbar__list" role="list">
                {NAV_ITEMS.map((item) => (
                  <li className="navbar__item" key={item.href}>
                    <a
                      href={item.href}
                      className={`navbar__link ${activeHref === item.href ? "navbar__link--active" : ""}`}
                      onClick={() => setActiveHref(item.href)}
                      aria-current={
                        activeHref === item.href ? "page" : undefined
                      }
                    >
                      {item.label}
                      <span className="navbar__link-line" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a href="tel:88006001505" className="navbar__phone">
              8 800 600-15-05
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
