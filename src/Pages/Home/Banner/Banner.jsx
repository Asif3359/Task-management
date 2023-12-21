import { useNavigate } from "react-router-dom";

const Baner = () => {

    const navigate = useNavigate();
    const handleNavigate=()=>{
        navigate('/dashboard/taskManagement');
    }

    return (
        <div>
            <div className='mb-5 glass  relative min-h-screen bg-cover bg-fixed '  style={{backgroundImage: 'url(https://img.freepik.com/free-vector/time-management-concept-illustration_114360-1013.jpg?w=996&t=st=1703135790~exp=1703136390~hmac=dd321758d969066e6cf6f0b416d75eea56be63bcac8c7f0d67ecc5b028d70b36)'}} >
                
                <div className=" min-h-screen glass   flex items-center justify-center ">
                    <div className="flex justify-between container mx-auto items-center flex-col lg:flex-row  px-2   gap-5 lg:gap-10  ">
                        <div className="flex-1 space-y-2 text-black">
                            <h1 className=" text-5xl font-bold mb-3 ">Welcome to our Task Management </h1>
                            <p className="">Task Management System , we provide some task that you can solve and judge your ability. </p>
                            <button onClick={handleNavigate} className="btn btn-warning btn-sm dark:btn-dark-warning">Get Started</button>
                        </div>
                        <div className="flex-1  lg:flex justify-end">
                            <img
                                src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150314651.jpg?w=740&t=st=1699128827~exp=1699129427~hmac=0c34064cffaf0f3148be98ddda5bbc3f618c57ca18c5dbdb951b8648cf1b196e"
                                className="w-full rounded-lg  "
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Baner;
