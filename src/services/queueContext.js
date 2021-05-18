import React, { useReducer, useEffect, useContext } from "react";
import queueReducer from "./queueReducer";

export const QueueContext = React.createContext(null);

let initialQueue;
try {
  const queue = JSON.parse(localStorage.getItem("queue"));
  initialQueue = queue != null ? queue : [];
} catch {
  console.error("The queue items could not be parsed into JSON.");
  initialQueue = [];
}

export function QueueProvider(props) {
  const [queue, dispatch] = useReducer(queueReducer, initialQueue);
  useEffect(
    () =>
      localStorage.setItem("queue", JSON.stringify(queue)), [queue]);
  const contextValue = {
    queue,
    dispatch,
  };
  return (
    <QueueContext.Provider value={contextValue}>
      {props.children}
    </QueueContext.Provider>
  );
}

export function useQueue() {
  const context = useContext(QueueContext);
  if (!context) {
    throw new Error(
      "useQueue must be used within a QueueProvider. Wrap a parent component in <QueueProvider> to fix this error."
    );
  }
  return context;
}