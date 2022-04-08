import {useContext, useState} from "react";
import terminalManagerContext from "../contexts/terminalManagerContext";

function ComponentRunCommandOrChangeWebsocket() {
  const {runCommand, setWebsocket} = useContext(terminalManagerContext);
  const [count, setCount] = useState(0);
  console.count("runCommand/ChangeWebsocket")

  const runCommandWrapper = ()=>{
    runCommand("running from component ComponentRunCommandOrChangeWebcoket");
  }

  return (
    <div className="App">
      <button onClick={runCommandWrapper}>run command</button><br/>

      <button onClick={() => {
        setCount(count + 1)
        setWebsocket(count.toString());
      }}>
        change websocket
      </button>
    </div>
  )
}

export default ComponentRunCommandOrChangeWebsocket
