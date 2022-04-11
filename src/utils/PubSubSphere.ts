import PubSub from "pubsub-js";
import useSubscription from "@/hooks/useSubscription";

type fileType = {filename: string, size: number};


class PubSubSphere {
  files = {
    useSubscriptionToFileOpened(callback: (topic: string, data?:fileType) => void){
      useSubscription<fileType>("testFileOpened", callback)
    },
    publishFileOpened(data?: fileType){
      PubSub.publish("testFileOpened", data)
    }
  }

}

const pubSubSphere = new PubSubSphere()

export default pubSubSphere;