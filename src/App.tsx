import "./styles/main.scss";

import { HeroComponent } from "./components/Hero/Hero";
import { NavComponent } from "./components/Nav/Nav";
import { AboutComponent } from "./components/About/About";
import { ClientsComponent } from "./components/Clients/Clients";
import { EquipmentsComponent } from "./components/Equipments/Equipments";
import { AdvantagesComponent } from "./components/Advantages/Advantages";
import { CallbackComponent } from "./components/Callback/Callback";
import { MapComponent } from "./components/Map/Map";
import { ContactsComponent } from "./components/Contacts/Contacts";

export const App = () => {
  return (
    <main>
      <NavComponent />
      <HeroComponent />
      <AboutComponent />
      <EquipmentsComponent />
      <AdvantagesComponent />
      <ClientsComponent />
      <CallbackComponent />
      <MapComponent />
      <ContactsComponent />
    </main>
  );
};
