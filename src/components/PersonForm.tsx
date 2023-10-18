import React, { useState } from 'react';

export default function PersonForm(): JSX.Element {
  const initialState = {
    fullName: '',
    dob: '',
    photo: 'https://i.pravatar.cc/300',
    isAlive: true,
    generationNo: 1,
  };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8888/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear the form after successful submission
        setFormData(initialState);
        alert('Data submitted successfully');
      } else {
        alert('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target;

    // Handle checkbox input separately
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        isAlive: !formData.isAlive, // Toggle the boolean value
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Add Person Data</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Photo (URL):
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={formData.photo}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="isAlive"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Is Alive:
          </label>
          <input
            type="checkbox"
            id="isAlive"
            name="isAlive"
            checked={formData.isAlive}
            onChange={handleInputChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="generationNo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Generation No.:
          </label>
          <input
            type="number"
            id="generationNo"
            name="generationNo"
            min={1}
            step={1}
            value={formData.generationNo}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter generation number"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
