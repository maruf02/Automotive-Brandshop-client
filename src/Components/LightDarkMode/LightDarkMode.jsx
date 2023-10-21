import React from "react";
import { useState } from "react";
import "./LightDarkMode.css";

const LightDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handlelightDark = () => {
    setDarkMode(!darkMode);

    const body = document.body;
    body.classList.toggle("dark", darkMode);
    body.classList.toggle("light", !darkMode);
  };
  return (
    <button
      className="text-lg text-[#aa00ff] font-extrabold"
      onClick={handlelightDark}
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default LightDarkMode;
