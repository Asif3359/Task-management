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
    const handleAll=()=>{
        setTasksList(tasks);
    }
    const handleToDO=()=>{
        const todo = tasks.filter(item=>item.taskStatus=='todo');
        setTasksList(todo);
    }
    const handleOnGoing=()=>{
        const ongoing = tasks.filter(item=>item.taskStatus=='ongoing');
        setTasksList(ongoing);
    }
    const handleComplete=()=>{
        const complete = tasks.filter(item=>item.taskStatus=='complete');
        setTasksList(complete);
    }

    return (
        <div>
            <div>
                <div className="join join-horizontal ">
                    <button onClick={handleAll} className="btn join-item">All</button>
                    <button onClick={handleToDO} className="btn join-item">Todo</button>
                    <button onClick={handleOnGoing} className="btn join-item">Ongoing</button>
                    <button onClick={handleComplete} className="btn join-item">Complete</button>
                </div>
            </div>
            <DndProvider backend={HTML5Backend}>
                <div className="flex justify-between items-start gap-3">
                    <div className='min-h-screen overflow-x-hidden  overflow-scroll h-screen w-full mt-4'>
                        <div className="grid grid-cols-2  gap-2  ">
                            {tasksList.map((task) => (
                                <DraggableTask key={task._id} task={task} />
                            ))}
                        </div>
                    </div>
                    <div className='mt-4 w-2/5'>
                        <div className="grid grid-cols-1 gap-2   ">
                            <DropZone taskStatus="ongoing" onDrop={handleDrop} />
                            <DropZone taskStatus="todo" onDrop={handleDrop} />
                            <DropZone taskStatus="complete" onDrop={handleDrop} />
                        </div>
                    </div>

                </div>
            </DndProvider>
        </div>
    );
};

export default TaskManagement;




