import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Root = () => {
    return (
        <div className="w-[97%] md:w-[85%] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;