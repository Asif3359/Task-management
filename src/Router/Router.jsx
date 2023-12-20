import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LogIn from "../Pages/login/Login";
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
        ],
    },
]);

export default router;