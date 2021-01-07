import './App.css';
import ToDoList from "./component/ToDoList"
import Header from "./component/header"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AddToDoList from './component/addtodolist';
import StatusOfToDoList from './component/status';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/ToDoList" component={ToDoList} />
          <Route path="/AddToDo" component={AddToDoList} />
          <Route path="/StatusToDo" component={StatusOfToDoList} />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
