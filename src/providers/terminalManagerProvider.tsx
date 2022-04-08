import {useState} from "react";
import terminalManagerContext from "../contexts/terminalManagerContext";

// customowy hook ktory trzyma wszystkie wartosci
function useTerminalManager() {
  const [webSocket, setWebsocket] = useState("")
  const [rc, setRunCommandCallback] = useState(()=>(command: string) => {})
  const runCommand = (command: string)=>{
    rc(command);
  }

  return {webSocket, setWebsocket, runCommand, setRunCommandCallback}
}

// definuje typ props -> w tym przypadku aby komponent mogl "przyjmowac dzieci"
// jest to JSX.Element lub tablica takich elementow aby mogl miec wiele dzieci
type Props = {
  children?: JSX.Element | JSX.Element[],
};

function TerminalManagerProvider({ children }: Props){
  const terminalManagerState = useTerminalManager();
  return (
    <terminalManagerContext.Provider value={{...terminalManagerState}}>
      {children}
    </terminalManagerContext.Provider>
  )
}

export default TerminalManagerProvider