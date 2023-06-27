import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecureCard";
import { SiInstructure } from "react-icons/si";

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleDelete=(user)=>{
        console.log(user)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://surtal-music-server.vercel.app/users/${user._id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                  console.log(data)
                if(data.deletedCount>0){
                refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })

    }

    const handleMakeAdmin=(user)=>{
        fetch(`https://surtal-music-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor=(user)=>{
        fetch(`https://surtal-music-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){

                const setInstructor = { instructorName: user.name,
                    instructorImage: user.photo, instructorEmail:user.email, role:user.role,musicClassName: '',numClassesTaken: 0, }



                fetch(' https://surtal-music-server.vercel.app/instructors',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(setInstructor)
                }) 
                    .then(res => res.json())
                    .then(data =>console.log(data)) 
                


                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })




    }

    return (
        <div>
            <Helmet>
                <title>SurTaal Music | All Users</title>
            </Helmet>
            <div className="pt-32">
                <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
                <div>
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-black text-xl">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th></th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr className="text-lg" key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'instructor' ? 'instructor' :
                                        <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-violet-600  text-white"><SiInstructure/></button>
                                    }</td>
                                    <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-blue-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                    <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllUsers;