import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecureCard';


const MyClassHook=()=>{
    const {user}=useContext(AuthContext)
    
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: MClass=[] } = useQuery({
        queryKey: ['addClass',user?.email],
        // enabled: !loading,
        queryFn: async () => {
            
           const response=await axiosSecure(`/addClass?email=${user?.email}`,{

            header:{
                authorization:`bearer ${localStorage.getItem('access-token')}`
            }

           })
           return response.data;
          },
      })
      return [MClass,refetch]

}
export default MyClassHook;