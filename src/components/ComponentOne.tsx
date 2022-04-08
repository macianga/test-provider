import useTerminalManager from "../hooks/terminalManagerHook";
import {useContext, useState} from "react";
import terminalManagerContext from "../contexts/terminalManagerContext";

function ComponentOne() {
  const {runCommand, setWebsocket} = useContext(terminalManagerContext);
  const [count, setCount] = useState(0);
  console.count("app")

  const dupa = ()=>{
    runCommand("dupa dupa");
  }

  return (
    <div className="App">
      <button onClick={dupa}>run command</button> <br/>
      <button onClick={() => {
        setCount(count + 1)
        setWebsocket(count.toString());
      }}>change websocket</button>
    </div>
  )
}

export default ComponentOne
