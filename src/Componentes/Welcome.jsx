import { useState } from 'react';

export const Welcome = () => {
  const [fullName, setFullName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (event) => {
    setFullName(event.target.value);
  };

  const handleGenerateGreeting = () => {
    setGreeting(`Bienvenido ${fullName}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-pink-200 shadow-lg rounded-lg mt-10">
      {greeting && (
        <p className="text-xl font-semibold text-center mb-4">{greeting}</p>
      )}
      
      <input
        type="text"
        value={fullName}
        onChange={handleInputChange}
        placeholder="Ingresa tu nombre completo"
        className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleGenerateGreeting}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Generar Saludo
      </button>
    </div>
  );
};
