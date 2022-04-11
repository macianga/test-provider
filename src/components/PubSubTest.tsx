import PubSub from 'pubsub-js';
import PubSubEvents from "@/hooks/pubSubEvents";

function ComponentNoContext() {
  const handleClick = () => {
    PubSub.publish(PubSubEvents.test.someEvent, "some data")
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
