import {useContext} from "react";
import terminalManagerContext from "../contexts/terminalManagerContext";
import ComponentNoContext from "./ComponentNoContext";

function ComponentThree() {
  const {runCommand} = useContext(terminalManagerContext);
  console.count("component3")


  return (
    <div className="App">
      <button
        onClick={() =>
          runCommand("running command from component 3")
      }>
        run command 3
      </button>
      <br/>
    </div>
  )
}

export default ComponentThree
