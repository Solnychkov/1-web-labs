import "./styles/main.scss";

import { HeroComponent } from "./components/Hero/Hero";
import { NavComponent } from "./components/Nav/Nav";
import { AboutComponent } from "./components/About/About";
import { ClientsComponent } from "./components/Clients/Clients";
import { EquipmentsComponent } from "./components/Equipments/Equipments";

export const App = () => {
  return (
    <div>
      <NavComponent />
      <HeroComponent />
      <AboutComponent />
      <EquipmentsComponent />
      <ClientsComponent />
    </div>
  );
};
