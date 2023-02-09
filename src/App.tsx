import "./App.css";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./components/starwars/CharacterList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharacterList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
