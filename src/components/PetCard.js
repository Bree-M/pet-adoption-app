import React from "react";

function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <h2>{pet.name}</h2>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age}</p>
    </div>
  );
}

export default PetCard;
