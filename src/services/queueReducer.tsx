import iQueueItem from './iQueueItem';

export default function queueReducer(queue: iQueueItem[], action: { type: string, queueItem: iQueueItem }) {
  switch (action.type) {
    case "empty":
      return [];
    case "add": {
      const { name, singerName } = action.queueItem;
      const itemInQueue = queue.find((i) => i.name === name);
      if (itemInQueue) {
        return queue;
      } else {
        // Return new array with the new item appended
        return [...queue, { name, singerName }];
      }
    }
    case "remove": {
      const { name } = action.queueItem;
      const itemInQueue = queue.find((i) => i.name === name);
      if (itemInQueue) {
        return queue.filter(z => z.name !== name);
      } else {
        return queue;
      }
    }

    default:
      throw new Error("Unhandled action " + action.type);
  }
}
