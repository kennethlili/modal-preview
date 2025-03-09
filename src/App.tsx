import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        variant="default"
        size="default"
        onClick={() => setCount((c) => c + 1)}
      >
        Clicked {count} times
      </Button>
    </>
  );
}

export default App;
