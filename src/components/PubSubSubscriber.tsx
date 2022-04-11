import PubSub from 'pubsub-js';
import {useState} from "react";
import useSubscription from "@/hooks/useSubscription";
import PubSubEvents from "@/hooks/pubSubEvents";

function ComponentNoContext() {
  const [state, setState] = useState("");

  useSubscription(PubSubEvents.eventGroup.someEvent, (topic, data) => {
    setState(data ? data : "no data");
  });


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
