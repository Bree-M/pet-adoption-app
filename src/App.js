import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NewPetForm from "./components/NewPetForm";
import PetList from "./components/PetList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/pets")
      .then((r) => r.json())
      .then(setPets)
      .catch((error) => console.error("Failed to fetch pets:", error));
  }, []);

  function addPet(newPet) {
    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPet)
    })
      .then((r) => r.json())
      .then((createdPet) => setPets([...pets, createdPet]))
      .catch((error) => console.error("Failed to add pet:", error));
  }

  return (
    <div className="App">
      <NavBar />
      <NewPetForm onAddPet={addPet} />
      <PetList pets={pets} />
      <Footer />
    </div>
  );
}

export default App;
