import { useState } from 'react';

export const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [bgColor, setBgColor] = useState('#BEE3F8');

  const handleAdd = () => setResult(num1 + num2);
  const handleSubtract = () => setResult(num1 - num2);
  const handleMultiply = () => setResult(num1 * num2);
  const handleDivide = () => setResult(num1 / num2);

  const handleRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div
      className="max-w-md mx-auto p-6 shadow-lg rounded-lg mt-10"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Resultado: {result}</h2>
      <fieldset className="mb-4">
        <input
          onChange={(event) => setNum1(Number(event.target.value))}
          type="number"
          placeholder="Ingresa numero 1"
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={(event) => setNum2(Number(event.target.value))}
          type="number"
          placeholder="Ingresa numero 2"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </fieldset>
      <fieldset className="flex justify-around mt-4">
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          +
        </button>
        <button
          onClick={handleSubtract}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={handleMultiply}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          *
        </button>
        <button
          onClick={handleDivide}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          /
        </button>
      </fieldset>
      <fieldset className="flex justify-center mt-6">
        <button
          onClick={handleRandomColor}
          className="bg-purple-500 text-white px-6 py-2 rounded hover:bg--600"
        >
          Generar Color Aleatorio
        </button>
      </fieldset>
    </div>
  );
};
