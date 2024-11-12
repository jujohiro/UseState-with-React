import { useState } from 'react';

export const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
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
    </div>
  );
};
