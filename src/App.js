import network_upper from "./assets/network_upper.jpg";
import network_lower from "./assets/network_lower.jpg";
import Header from "./components/Header";
import Profiles from "./components/Profiles";

function App() {
  const ProfileDB = JSON.parse(localStorage.getItem("ProfileDB")) || {};

  return (
    <div>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          top: "0",
          background: "black",
          opacity: "0.9",
        }}
      >
        <img
          src={network_upper}
          alt="network-1"
          style={{
            width: "100%",
            height: "60vh",
            opacity: "0.1",
          }}
        />
      </div>

      <Header ProfileDB={ProfileDB} />
      <Profiles ProfileDB={ProfileDB} />

      <footer style={{ bottom: "0" }}>
        <img
          src={network_lower}
          alt="network-2"
          style={{
            width: "100%",
            height: "60vh",
            opacity: "0.1",
          }}
        />
      </footer>
    </div>
  );
}

export default App;
