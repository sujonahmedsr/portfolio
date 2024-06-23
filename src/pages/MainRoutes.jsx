import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ScrolTop from "./ScrolTop";

const MainRoutes = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ScrolTop></ScrolTop>
        </div>
    );
};

export default MainRoutes;