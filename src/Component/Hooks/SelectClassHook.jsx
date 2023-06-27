import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecureCard';


const SelectClass=()=>{
    const {user}=useContext(AuthContext)
    
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: SClass=[] } = useQuery({
        queryKey: ['selectClass',user?.email],
        // enabled: !loading,
        queryFn: async () => {
            
           const response=await axiosSecure(`/selectClass?email=${user?.email}`,{

            header:{
                authorization:`bearer ${localStorage.getItem('access-token')}`
            }

           })
           return response.data;
          },
      })
      return [SClass,refetch]

}
export default SelectClass;