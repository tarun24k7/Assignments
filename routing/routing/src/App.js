import './App.css';
import MountingPhase from "./components/mounting/mounting"
import UnMountingPhase from "./components/unmounting/unmounting"
import Updating from "./components/updating/updating"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/Mounting" component={MountingPhase} />
          <Route exact path="/UnMounting" component={UnMountingPhase} />
          <Route exact path="/Updating" component={Updating} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
