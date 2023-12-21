import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LogIn from "../Pages/login/Login";
import Profile from "../Pages/Profile/Profile";
import SingUp from "../Pages/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <LogIn />,
            },
            {
                path: "profile",
                element:<PrivateRoute><Profile /></PrivateRoute> ,
            },
            {
                path: "singup",
                element: <SingUp />,
            },
        ],
    },
]);

export default router;