import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";

const podcast1 = {
  num: "126",
  title: "Robot, který snědl koblihu",
  guest: "Radovan Siwek",
};

document.querySelector("#root").innerHTML = render(
  <>
    <div className="episodes-list">
      <div className="episode">
        <div className="episode__num">127</div>
        <div className="episode__body">
          <div className="episode__title">Hledání plyšového Yettiho</div>
          <div className="episode__guest">host: Vojtěch Ryba</div>
        </div>
      </div>

      <div className="episode">
        <div className="episode__num">128</div>
        <div className="episode__body">
          <div className="episode__title">Moderní hrachová kaše</div>
          <div className="episode__guest">host: Kamila Štancová</div>
        </div>
      </div>
    </div>
  </>
);
