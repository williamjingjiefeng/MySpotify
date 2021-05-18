export default function queueReducer(queue, action) {
  switch (action.type) {
    case "empty":
      return [];
    case "add": {
      const { name, singerName } = action;
      const itemInQueue = queue.find((i) => i.name === name);
      if (itemInQueue) {
        return queue;
      } else {
        // Return new array with the new item appended
        return [...queue, { name, singerName}];
      }
    }

    default:
      throw new Error("Unhandled action " + action.type);
  }
}
