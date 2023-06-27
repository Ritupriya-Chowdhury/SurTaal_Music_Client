import { Helmet } from "react-helmet-async";
import MyClassHook from "../../../../../Hooks/MyClassHook";
import {FaTrashAlt} from 'react-icons/fa'
import Swal from "sweetalert2";

const MyClass = () => {
const [MClass,refetch]=MyClassHook();

const handleDelete=(cla)=>{
    console.log(cla)
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
          fetch(`https://surtal-music-server.vercel.app/addClass/${cla._id}`,{
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



    return (
        <div>
            <Helmet><title>Instructor | MyClasses</title></Helmet>
            <div className="pt-32">
                <h3 className="text-3xl font-semibold my-4 text-orange-700">My Classes</h3>
                <div>
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-black text-xl">
                                <th>#</th>
                                <th>Class Name</th>
                                <th>Total Number Of Student</th>
                                <th>Status</th>
                                <th>FeedBack</th>
                                <th>Action</th>
                                <th></th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                               MClass.map((cla,index) => <tr className="text-lg" key={cla._id}>
                                    <th>{index + 1}</th>
                                    <td>{cla.musicClassName}</td>
                                    <td>{cla.totalStudents}</td>
                                    <td>{cla. status}</td>
                                    <td>{cla.feedback}</td>
                                    <td><button onClick={() => handleDelete(cla)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyClass;