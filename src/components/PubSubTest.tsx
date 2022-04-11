import PubSub from 'pubsub-js';
import PubSubEvents from "@/hooks/pubSubEvents";

function ComponentNoContext() {
  const handleClick = () => {
    PubSub.publish(PubSubEvents.eventGroup.someEvent, `some data ${Math.random()}`)
  }

  return (
    <div>
      <button onClick={handleClick}>
        Publish pubsub message
      </button>
    </div>
  )
}

export default ComponentNoContext
