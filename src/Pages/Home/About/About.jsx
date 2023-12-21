

const About = () => {
    return (
        <div className="container mx-auto mt-5">
            <div>
                <h1 className="text-5xl font-bold text-orange-400">About </h1>
            </div>
            <div className="hero  bg-base-100  my-5">
                <div className="hero-content flex-col lg:flex-row justify-between items-end">
                    <div className="lg:w-1/2 relative">
                        <img src='https://img.freepik.com/free-vector/deadline-time-management-business-concept-vector_107791-42.jpg?1&w=740&t=st=1703192558~exp=1703193158~hmac=4fc01879ab2a56f865bfdd9a9e890cacdd1e08354b38f8bc41aad33960c2ff5a' className="w-full lg:w-3/4 rounded-lg " />
                        <div  className=" border-8 border-white absolute w-2/5 bottom-0 lg:bottom-11 right-0 lg:right-20 lg:top-36  rounded-lg shadow-2xl glass"></div>
                    </div>
                    <div className="lg:w-1/2 space-y-2 px-1 text-right">
                        <h1 className="text-3xl font-bold">We are qualified & of experience in this Task Management</h1>
                        <p className="">We possess the expertise and qualifications necessary for this category. Our virtual workspace for task management is a lively online environment where we collaborate to organize, assign, and accomplish tasks efficiently. It serves as a dynamic platform where productivity has no limits, and our committed team excels in the digital landscape. Come join us in this journey of effective task management, as we embrace innovation and broaden our capabilities collectively! </p>
                        <button className="btn btn-warning">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;