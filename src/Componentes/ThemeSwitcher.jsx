import { useState } from 'react';

export const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const colorOptions = [
    "#FF0000", // Rojo
    "#00FF00", // Verde
    "#0000FF", // Azul
    "#FFFF00", // Amarillo
    "#FF00FF", // Magenta
    "#00FFFF", // Cian
    "#000000", // Negro
    "#FFFFFF", // Blanco
    "#808080", // Gris
    "#800000", // Marrón oscuro
    "#808000", // Oliva
    "#800080", // Púrpura
    "#008080", // Verde azulado
    "#C0C0C0", // Plata
    "#FFA500", // Naranja
    "#A52A2A"  // Marrón
  ];

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleGenerateColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    const selectedColor = colorOptions[randomIndex];
    setBgColor(selectedColor);
    alert(`El color seleccionado es: ${selectedColor}`);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500`}
      style={{ backgroundColor: bgColor }}
    >
      <button
        onClick={handleToggle}
        className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-4"
      >
        {isDarkMode ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
      </button>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={handleLike}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Like ({likes})
        </button>
        <button
          onClick={handleDislike}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Dislike ({dislikes})
        </button>
      </div>
      <button
        onClick={handleGenerateColor}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
      >
        Generar Color
      </button>
    </div>
  );
};
