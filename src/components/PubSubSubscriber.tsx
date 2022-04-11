import PubSub from 'pubsub-js';
import {useState} from "react";
import useSubscription from "@/hooks/useSubscription";
import PubSubEvents from "@/hooks/pubSubEvents";
import pubSubSphere from "@/utils/PubSubSphere";

function ComponentNoContext() {
  const [state, setState] = useState("");

  pubSubSphere.files.opened.useSubscription((topic, data) => {
    if(!data)
      return;
    setState(`filename: ${data.filename}, size: ${data.size}`);
  })


  const showSubscriptions = () => {
    console.log(PubSub.countSubscriptions(PubSubEvents.eventGroup.someEvent))
  }


  return (
    <div>
      <h3>Received message: {state}</h3>
      <button onClick={showSubscriptions}>
        console.log subscriptions
      </button>
    </div>
  )
}

export default ComponentNoContext
