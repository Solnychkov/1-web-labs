import { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveHref(href);
    setIsOpen(false);

    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar ${isOpen ? "navbar--open" : ""}`}>
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

          <div className={`navbar__right`}>
            <nav className="navbar__nav" aria-label="Основная навигация">
              <ul
                className="navbar__list"

                role="list"
              >
                {NAV_ITEMS.map((item) => (
                  <li className="navbar__item" key={item.href}>
                    <a
                      href={item.href}
                      className={`navbar__link ${activeHref === item.href ? "navbar__link--active" : ""}`}
                      onClick={(e) => handleLinkClick(e, item.href)}
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

            <button
              className={`navbar__burger`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Меню"
              aria-expanded={isOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
