import pubSubSphere from "@/utils/PubSubSphere";

function ComponentNoContext() {
  const handleClick = () => {
    pubSubSphere.files.opened.publish({filename: 'asd', size: Math.random()});
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
