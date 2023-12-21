// TaskManagement.js
import { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DropZone from './DropZone';
import DraggableTask from './DraggableTask';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';



const TaskManagement = () => {
    const axiosPublic = useAxiosPublic();
    const [tasks, setTasks] = useState([])
    const [tasksList, setTasksList] = useState(tasks);

    useEffect(() => {
        axiosPublic.get('/tasks')
            .then(res => {
                setTasks(res.data);
                setTasksList(res.data)
            })
    }, [axiosPublic]);

    const handleDrop = (item, newStatus) => {
        const updatedTasks = tasksList.map((task) =>
            task._id === item.task._id ? { ...task, taskStatus: newStatus } : task
        );
        axiosPublic.put(`/tasks/${item.task._id}`, { newStatus: newStatus })
            .then(res => {
                console.log(res.data);
            })
        // console.log();
        setTasksList(updatedTasks);
    };

    return (
        <div>
            <div>
                <h1>Todo </h1>
            </div>
            <DndProvider backend={HTML5Backend}>
                <div className="flex justify-between items-start gap-3">
                    <div className="grid grid-cols-3 gap-2 mt-4 w-full">
                        {tasksList.map((task) => (
                            <DraggableTask key={task._id} task={task} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 gap-2 w-2/5 ">
                        <DropZone taskStatus="ongoing" onDrop={handleDrop} />
                        <DropZone taskStatus="todo" onDrop={handleDrop} />
                        <DropZone taskStatus="complete" onDrop={handleDrop} />
                    </div>

                </div>
            </DndProvider>
        </div>
    );
};

export default TaskManagement;




