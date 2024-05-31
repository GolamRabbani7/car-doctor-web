import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <div className="mx-6">
            <NavBar></NavBar>
            <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;