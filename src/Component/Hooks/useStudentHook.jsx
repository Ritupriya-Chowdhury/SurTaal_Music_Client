import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from './useAxiosSecureCard';
import { AuthContext } from "../../providers/AuthProvider";

const useStudent = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading]
}
export default useStudent;