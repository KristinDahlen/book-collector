import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/books">Visa alla lästa böcker</Link>
      <Link to="/addBook">Lägg till bok</Link>
    </div>
  );
}

export default App;
