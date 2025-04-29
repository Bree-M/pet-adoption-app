import React, { useState } from "react";

function NewPetForm({ onAddPet }) {
  const [formData, setFormData] = useState({ name: "", type: "", age: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPet(formData);
    setFormData({ name: "", type: "", age: "" });
  }

  return (
    <form className="new-pet-form" onSubmit={handleSubmit}>
      <h2>Add a New Pet</h2>
      <input name="name" placeholder="Pet Name" value={formData.name} onChange={handleChange} />
      <input name="type" placeholder="Type (Dog, Cat, etc.)" value={formData.type} onChange={handleChange} />
      <input name="age" placeholder="Age" type="number" value={formData.age} onChange={handleChange} />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default NewPetForm;
