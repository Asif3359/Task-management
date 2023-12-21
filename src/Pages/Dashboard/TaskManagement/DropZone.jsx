
import { useDrop } from 'react-dnd';

const DropZone = ({ taskStatus, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => onDrop(item, taskStatus),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const borderColor = isOver ? 'border-green-500' : 'border-gray-300';

  return (
    <div
      ref={drop}
      className={`p-4 border-2 ${borderColor} rounded-md w-full min-h-[100px] flex justify-center items-center `}
    >
      <h2 className="text-lg font-bold">{taskStatus}</h2>
    </div>
  );
};

export default DropZone;