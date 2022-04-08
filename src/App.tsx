import '@/App.css'
import Terminal from "@/components/Terminal";
import ComponentRunCommandOrChangeWebsocket from "@/components/ComponentRunCommandOrChangeWebsocket";
import ComponentTwo from "@/components/ComponentTwo";
import TerminalManagerProvider from "@/providers/terminalManagerProvider";
import ComponentNoContext from "@/components/ComponentNoContext";


function App() {
  return (
    <div className="App">
      <TerminalManagerProvider>
        <Terminal/>
        <ComponentRunCommandOrChangeWebsocket/>
        <ComponentTwo/>
        <ComponentNoContext/>
      </TerminalManagerProvider>
    </div>
  )
}

export default App
