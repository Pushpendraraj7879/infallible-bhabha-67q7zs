import { useState } from "react";
import Modal from "./components/Modal/Modal.jsx";
import "./styles.css";

export default function App() {
  const [flag, setFlag] = useState(false);

  const handlemodal = () => {
    setFlag(!flag);
  };

  return (
    <div className="App ">
      <button onClick={handlemodal}>Show your modal component</button>
      {flag && <Modal handlemodal={handlemodal} />}
    </div>
  );
}
