import "./App.css";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./components/starwars/CharacterList";
import Details from "./components/details";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/people/:id" element={<Details />}></Route>
        <Route path="/" element={<CharacterList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
