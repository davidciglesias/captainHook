import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const prevName = useRef<string>("");

  const isItBoni = React.useCallback(
    (name: string) => name && name.toLocaleLowerCase() === "boni",
    []
  );

  const labels = React.useMemo(
    () => ({
      link: "Write Boni!"
    }),
    []
  );

  React.useEffect(() => {
    // document.title = `Yay ${name}`
  }, [name])

  const handleSetName = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newName = event.target.value as string;
      setName(newName);
      if (isItBoni(newName)) {
        document.title = "YAY!!! HOLA BONI!!";
      } else if (isItBoni(prevName.current)) {
        document.title = ":(";
      }
      prevName.current = newName;
    },
    [isItBoni]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="name">Patata</label>
        <input type="text" name="name" value={name} onChange={handleSetName} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {labels.link}
        </a>
      </header>
    </div>
  );
};

export default App;
