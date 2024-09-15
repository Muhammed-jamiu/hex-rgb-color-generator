import React, { useEffect, useState } from "react";
import "./Color.css";
function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000");

  const RandomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 6, 6, 7, 8, 9, "A", "B", "C", "D", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    setColor(hexColor);
    console.log(hexColor);
  };
  const handleCreateRandomRgbColor = () => {
    const r = RandomColorUtility(256);
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);

    setColor(`rgb${r},${g}, ${b}`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100wh",
        height: "100vh",
        background: color,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "30px",
          marginTop: "50px",
          gap: "30px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color:" : "HEX Color:"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
