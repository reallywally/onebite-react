import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button onClick={() => setLight(light === "OFF" ? "ON" : "OFF")}>
        on/off
      </button>
    </div>
  );
};

export default Bulb;
