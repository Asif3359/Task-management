// DraggableTask.js

import { useDrag } from 'react-dnd';

const DraggableTask = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={drag}
      style={{ opacity }}
      className="p-4 bg-white border border-gray-300 rounded-md mb-2"
    >
      <h3 className="text-lg font-bold">{task.taskStatus}</h3>
      <p>{task.deadline}</p>
    </div>
  );
};

export default DraggableTask;
