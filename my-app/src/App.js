import "./App.css";
import { useState } from "react";
import Breeds from "./components/Breeds";
import DogList from "./components/DogList";

function App() {
  const [selectedBreeds, setSelectedBreeds] = useState([]);

  const selectBreedHandler = (value) => {
    setSelectedBreeds(value);
  };
  return (
    <>
      <div className="App">
        <header className="App-header">Dog api</header>
        <Breeds selectBreed={selectBreedHandler} />
        <DogList breed={selectedBreeds} />
      </div>
    </>
  );
}

export default App;
