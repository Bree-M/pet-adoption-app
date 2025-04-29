import React from "react";

function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age}</p>
    </div>
  );
}

export default PetCard;
