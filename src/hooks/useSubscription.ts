import PubSub from "pubsub-js";
import {useEffect, useState} from "react";

const useSubscription = (topic: string, callback: (topic: string, data?: string)=>void) => {
  useEffect(()=>{
    const id = PubSub.subscribe(topic, callback);
    console.log(id);
    return () => {
      PubSub.unsubscribe(id);
    }
  }, []);
}

export default useSubscription;