import "./App.css";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./components/starwars/CharacterList";
import Details from "./components/details";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App" data-testid="home">
      <Header />
      <Routes>
        <Route path="/people/:id" element={<Details />}></Route>
        <Route path="/" element={<CharacterList />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
