import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-[10%]">
            <h1 className="text-7xl mb-6">
                Oops!!!!!!!
            </h1>
            <NavLink to="/">Go to home</NavLink>
        </div>
    );
};

export default ErrorPage;