import "./App.css";
import data from "../src/assets/data.json";
import Node from "./components/Node";

function App() {
  return (
    <div>
      <Node name={data.name} items={data.items} />
    </div>
  );
}

export default App;
