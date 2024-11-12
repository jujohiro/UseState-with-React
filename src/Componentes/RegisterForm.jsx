import { useState } from 'react';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    id: '',
  });
  const [people, setPeople] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    const exists = people.some(
      (person) =>
        person.id === formData.id ||
        person.username === formData.username ||
        person.email === formData.email
    );

    if (exists) {
      alert('La persona ya existe en el registro.');
    } else {
      setPeople([...people, formData]);
      alert('Registro exitoso.');
      setFormData({ name: '', username: '', email: '', phone: '', id: '' });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-200 shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Registro de Personas</h2>
      <fieldset className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Nombre completo"
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Usuario"
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Correo electrónico"
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Teléfono"
          className="w-full p-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          placeholder="ID"
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </fieldset>
      <button
        onClick={handleRegister}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Registrar
      </button>
    </div>
  );
};
