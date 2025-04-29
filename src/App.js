import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import PetList from "./components/PetList";
import NewPetForm from "./components/NewPetForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/pets")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }, []);

  function addPet(newPet) {
    setPets([...pets, newPet]);
  }

  return (
    <div className="App">
      <NavBar />
      <NewPetForm addPet={addPet} />
      <PetList pets={pets} />
      <Footer />
    </div>
  );
}

export default App;
