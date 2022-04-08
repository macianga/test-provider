import {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import terminalManagerContext from "./contexts/terminalManagerContext";
import Terminal from "./components/Terminal";
import ComponentOne from "./components/ComponentOne";
import useTerminalManager from "./hooks/terminalManagerHook";
import ComponentTwo from "./components/ComponentTwo";

function App() {
  const {webSocket, setWebsocket, runCommand, setRunCommandCallback} = useTerminalManager();
  useEffect(()=>{
    setWebsocket("websocket");
    setRunCommandCallback(() => (command: string) => {console.log(command)});
    runCommand("dupa");
  }, []);

  return (
    <div className="App">
      <terminalManagerContext.Provider value={{webSocket: webSocket, setWebsocket: setWebsocket, runCommand: runCommand, setRunCommandCallback: setRunCommandCallback}}>
        <Terminal/>
        <ComponentOne/>
        <ComponentTwo/>
      </terminalManagerContext.Provider>
    </div>
  )
}

export default App
