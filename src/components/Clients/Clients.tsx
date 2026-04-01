import "./Main.scss";

import iconAarsleff from "../../assets/images/Clients/logo-Aarsleff.jpg";
import iconMegameid from "../../assets/images/Clients/logo-Megameid.jpg";
import iconTehnomet from "../../assets/images/Clients/logo-Tehnomet.jpg";
import iconCTIC from "../../assets/images/Clients/logo-CTIC.jpg";

interface ClientItem {
  logo: string;
  alt: string;
}

const clients: readonly ClientItem[] = [
  { logo: iconAarsleff, alt: "AARSLEFF" },
  { logo: iconMegameid, alt: "Мегамейд" },
  { logo: iconTehnomet, alt: "Техномет" },
  { logo: iconCTIC, alt: "CTIC" },
];

export const ClientsComponent = () => {
  return (
    <section className="clients">
      <h2 className="section__title">Заказчики</h2>
      <div className="clients__inner">
        {clients.map((client, index) => (
          <div className="clients__item" key={index}>
            <img src={client.logo} alt={client.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};
