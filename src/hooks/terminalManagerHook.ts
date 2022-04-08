import {useState} from "react";

function useTerminalManager() {
  const [webSocket, setWebsocket] = useState("")
  const [rc, setRunCommandCallback] = useState(()=>(command: string) => {})
  const runCommand = (command: string)=>{
    rc(command);
  }

  return {webSocket, setWebsocket, runCommand, setRunCommandCallback}
}

export default useTerminalManager