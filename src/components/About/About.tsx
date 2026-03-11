import "./Main.scss";
import PumpsImage from "../../assets/images/About/Pumps.png";

export const AboutComponent = () => {
  return (
    <div className="about">
      <div className="about__pumps-wrapper">
        <img className="about__pumps" src={PumpsImage} alt="" />
      </div>
      <div className="container">
        <div className="section-title">О компании</div>
      </div>
    </div>
  );
};
