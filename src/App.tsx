import "./styles/main.scss";

import { HeroComponent } from "./components/Hero/Hero";
import { NavComponent } from "./components/Nav/Nav";

export const App = () => {
  return (
    <div>
      <NavComponent /> <HeroComponent />
    </div>
  );
};
