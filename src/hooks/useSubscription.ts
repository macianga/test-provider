import PubSub from "pubsub-js";
import {useEffect, useState} from "react";

const useSubscription = <T = string>(topic: string, callback: (topic: string, data?: T)=>void) => {
  useEffect(()=>{
    const id = PubSub.subscribe(topic, callback);
    console.log(id);
    return () => {
      PubSub.unsubscribe(id);
    }
  }, []);
}

export default useSubscription;