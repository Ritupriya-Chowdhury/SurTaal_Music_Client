import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import useStudent from "../Hooks/useStudentHook";
import { AuthContext } from "../../providers/AuthProvider";




const StudentOnlyRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if(loading || isStudentLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentOnlyRoute;