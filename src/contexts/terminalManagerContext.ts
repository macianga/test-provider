import { createContext } from "react";


// Dispatch<SetStateAction<(command: string) => void>>
const terminalManagerContext = createContext({
  webSocket: '',
  setWebsocket: (ws: string)=>{},
  runCommand: (command: string)=>{},
  setRunCommandCallback: (func: any) => func,
});

export default terminalManagerContext;