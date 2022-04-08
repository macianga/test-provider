import {useContext, useEffect} from "react";
import terminalManagerContext from "../contexts/terminalManagerContext";

function Terminal() {
  const {setRunCommandCallback, webSocket} = useContext(terminalManagerContext);

  const runCommandHandler = (command: string) => {
    console.log(`running command: ${command}`)
  }

  useEffect(()=>{
    setRunCommandCallback(()=> runCommandHandler)
  }, [])

  return (
    <div className="App">
      websocket: {webSocket}
      <br/>
    </div>
  )
}

export default Terminal
