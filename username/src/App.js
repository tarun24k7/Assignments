import UserDetails from "./components/userdetails/userdetails"
import './App.css';
import DatacontextProvider from "./components/datacontext/datacontext"

function App() {
  return (
    <div className="App">
      <DatacontextProvider>
        <UserDetails />
      </DatacontextProvider>

    </div>
  );
}

export default App;
