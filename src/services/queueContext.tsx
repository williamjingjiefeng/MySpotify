import React, { useReducer, useEffect, useContext } from "react";
import queueReducer from "./queueReducer";
import {default as themes} from "../theme/schema.json";
import { getFromLocalStorage, setToLocalStorage } from "../utils/storage.js";
import PropTypes from "prop-types";
import iQueueItem from "./iQueueItem";

setToLocalStorage("all-themes", themes);

export const QueueContext = React.createContext<{
  queue: iQueueItem[], dispatch: React.Dispatch<{
    type: string;
    queueItem: iQueueItem;
  }>
} | null>(null);

let initialQueue: iQueueItem[] = [];
try {
  const queue = getFromLocalStorage("queue");
  initialQueue = queue != null ? queue : [];
} catch {
  console.error("The queue items could not be parsed into JSON.");
  initialQueue = [];
}

interface iProps {
  children: React.ReactNode;
}

export function QueueProvider(props: iProps) {
  const [queue, dispatch] = useReducer(queueReducer, initialQueue);

  useEffect(() => setToLocalStorage("queue", queue), [queue]);
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

QueueProvider.propTypes =
{
  children: PropTypes.object.isRequired
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
