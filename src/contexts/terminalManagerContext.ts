import { createContext } from "react";

const terminalManagerContext = createContext({
  webSocket: '',
  setWebsocket: (ws: string)=>{},
  runCommand: (command: string)=>{},
  setRunCommandCallback: (func: any) => func,
});

export default terminalManagerContext