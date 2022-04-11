import '@/App.css'
import Terminal from "@/components/Terminal";
import ComponentRunCommandOrChangeWebsocket from "@/components/ComponentRunCommandOrChangeWebsocket";
import ComponentTwo from "@/components/ComponentTwo";
import TerminalManagerProvider from "@/providers/terminalManagerProvider";
import ComponentNoContext from "@/components/ComponentNoContext";
import PubSubTest from "@/components/PubSubTest";
import PubSubSubscriber from "@/components/PubSubSubscriber";


function App() {
  return (
    <div className="App">
      <TerminalManagerProvider>
        <Terminal/>
        <ComponentRunCommandOrChangeWebsocket/>
        <ComponentTwo/>
        <ComponentNoContext/>
      </TerminalManagerProvider>
      -----------------------------------------------------------------------<br/><br/>
      <PubSubTest/>
      <PubSubSubscriber/>
    </div>
  )
}

export default App
