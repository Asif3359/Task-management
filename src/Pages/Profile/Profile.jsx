import useAuth from "../../Hooks/UseSuth";


const Profile = () => {
    const { user } = useAuth();
    return (
        <div className=" min-h-screen flex justify-center items-center ">
            <div>
                <div className="flex justify-center items-center">
                    <img src={user?.photoURL} alt="User Photo" />
                </div>
                <div className="text-center">
                    <h1>Name : {user?.displayName}</h1>
                    <h1>Email : {user?.email}</h1>
                </div>
            </div>

        </div>
    );
};

export default Profile;