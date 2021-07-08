import "./App.css";
import { Route } from "react-router";
import Home from "./components/home/Home";
import Favs from "./components/favorites/Favs"
import Detail from "./components/detail/Detail"
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/favs" component={Favs} />
      <Route path="/:id" component={Detail} />
    </div>
  );
}

export default App;
