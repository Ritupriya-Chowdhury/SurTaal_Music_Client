import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import useInstructor from "../Hooks/useInstructorHook";




const InstructorOnlyRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorOnlyRoute;