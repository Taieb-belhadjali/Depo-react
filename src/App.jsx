import { useState } from "react";
import "./App.css";

function App() {
  const initialCount = 5;
  const step = 5;

  const [count, setCount] = useState(initialCount);

  return (
    <div className="card">
      <h1>Exercice 1 : Compteur</h1>

      <p>Valeur actuelle : {count}</p>

      <button onClick={() => setCount(count + step)}>
        +{step}
      </button>

      <button onClick={() => setCount(count - step)}>
        -{step}
      </button>
    </div>
  );
}

export default App;
