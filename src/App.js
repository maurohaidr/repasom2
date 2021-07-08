import "./App.css";
import { Route } from "react-router";
import Home from "./components/home/Home";
import Favorites from "./components/favorites/Favs";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
    </div>
  );
}

export default App;
