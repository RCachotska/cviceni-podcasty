import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Episode } from "../components/Episode";

console.log ( "ahoj" )

const episodes = [
  { num: 126, title: "Robot, který snědl koblihu", guest: "Radovan Siwek" },
  { num: 127, title: "Hledání plyšového Yettiho", guest: "Vojtěch Ryba" },
  { num: 128, title: "Moderní hrachová polévka", guest: "Kamila Štancová" },
  { num: 129, title: "Poloautomatické zrcadlo", guest: "Janka Janovská" },
  { num: 130, title: "Máčené hlavy parlamentu", guest: "Jonáš Daněk" },
  { num: 131, title: "Služby na hraně přívěsu", guest: "Tereza Křivánková" },
  { num: 132, title: "Klasifikace sněžných klokanů", guest: "Josef Stix" },
  { num: 133, title: "Rybolov v Oceánu bouří", guest: "Ludmila Gajová" },
];

document.querySelector("#root").innerHTML = render(
  <>
    <h1>Podcasty</h1> 
    <div className="episodes-list">
      
      {episodes.map((episode) =>
        <div key={episode.num} dangerouslySetInnerHTML={{ __html: Episode(episode) }} />
      )}
    </div>
  </>
);

/*
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
*/
