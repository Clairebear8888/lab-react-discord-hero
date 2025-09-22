import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div id="top">
        <img className="logo" src={discordLogo}></img>
        <img className="menuIcon" src={menuIcon}></img>
      </div>

      <div id="bottom">
        <h1>IMAGINE A Place...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          wordwide art community. Wherre just you and a handful of friends can
          spend time together. A palce that makes it easy to talk everyday and
          hangout more often
        </p>
        <button id="mac">Downlod for Mac</button>
        <button id="windows">Open Discord in your browser</button>
        <img className="background" src={background}></img>
      </div>
    </div>
  );
}

export default App;
