import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const TaskManagementDetails = () => {
    const [task, setTask] = useState({});
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get(`/tasks/${id}`)
            .then(res => {
                setTask(res.data);
            })

    }, [id, axiosPublic])
    return (
        <div>
            <h1 className="text-4xl font-bold">{task?.task?.title}</h1>
            <p>{task.userName}</p>
            <p>{task.userEmail}</p>
            <p>{task.task?.description}</p>
            <p>{task.deadline}</p>
            <p>{task.taskStatus}</p>
        </div>
    );
};

export default TaskManagementDetails;