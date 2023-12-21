import Footer from "./Pages/Home/Footer/Footer";
import PrimarySearchAppBar from "./Pages/Home/AppBar/Appbar";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            <div>
                <PrimarySearchAppBar></PrimarySearchAppBar>
            </div>
            <div className="min-h-screen mt-0  ">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default App;