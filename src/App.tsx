import "./styles/main.scss";

import { HeroComponent } from "./components/Hero/Hero";
import { NavComponent } from "./components/Nav/Nav";
import { AboutComponent } from "./components/About/About";

export const App = () => {
  return (
    <div>
      <NavComponent /> <HeroComponent /> <AboutComponent />
    </div>
  );
};
