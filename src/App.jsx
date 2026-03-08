import { useState } from "react";
import "./App.css";

// function App() {
//   const btn1 = () => alert("hello");

//   const btn2 = (m) => {
//     let n = 10;
//     let to = n + m;
//     alert(to);
//   };
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <button onClick={btn1}>click 0</button>
//       <button onClick={() => btn2(10)}>click 1</button>
//     </>
//   );
// }

function App() {
  const [cont, setCont] = useState(0);

  const increbyOne = () => {
    let total = cont + 1;

    setCont(total);
  };

  return (
    <>
      <h1>click {cont}</h1>
      <button onClick={increbyOne}>Add</button>
    </>
  );
}

export default App;
