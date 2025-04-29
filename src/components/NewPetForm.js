import React, { useState } from "react";

function NewPetForm({ addPet }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    age: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, age: Number(formData.age) })
    })
      .then(res => res.json())
      .then(newPet => addPet(newPet));

    setFormData({ name: "", type: "", age: "" });
  }

  return (
    <form className="new-pet-form" onSubmit={handleSubmit}>
      <h2>Add a New Pet</h2>
      <input
        type="text"
        name="name"
        placeholder="Pet Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="Type (Dog, Cat, etc.)"
        value={formData.type}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default NewPetForm;
