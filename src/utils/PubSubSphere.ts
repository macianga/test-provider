import PubSub from "pubsub-js";
import useSubscription from "@/hooks/useSubscription";

interface fileType {filename: string, size: number}


export default {
  files: {
    opened: {
      eventName: "files/opened",
      useSubscription(callback: (topic: string, data?:fileType) => void){
        useSubscription<fileType>(this.eventName, callback)
      },
      publish(data?: fileType){
        PubSub.publish(this.eventName, data)
      }
    },
  }

}