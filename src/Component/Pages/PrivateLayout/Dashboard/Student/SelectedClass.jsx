import { Helmet } from "react-helmet-async";
import SelectClass from "../../../../Hooks/SelectClassHook";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const SelectedClass = () => {
 const [SClass,refetch]=SelectClass();

// Delete Class
const handleDelete=(row)=>{
    console.log(row)
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
          fetch(`https://surtal-music-server.vercel.app/selectClass/${row}`,{
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
            <Helmet><title>SurTaal Music | My Selected Class</title></Helmet>
            <div className="pt-32">
                <p className="text-center font-bold my-8 text-3xl text-blue-600">My Selected Class</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-xl text-black">
                            <tr>
                                <th>
                                   #
                                </th>
                              <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                          { SClass.map((row,index)=>
                             <tr key={row._id}>
                             <td>{index+1}</td>
                             <td>
                                 <div className=" items-center space-x-3">
                                     <div className="avatar">
                                         <div className="mask mask-squircle w-12 h-12">
                                             <img src={row.classImage} alt="Avatar Tailwind CSS Component" />
                                         </div>
                                     </div>
                                 </div>
                             </td>
                             <td className="text-xl text-blue-700 font-bold">
                                 {row.musicClassName}
                                 
                             </td>
                             <td className="text-xl text-orange-700 font-bold">{row.instructorName}</td>
                          <td  className="text-xl text-red-700 font-bold">{row.price}$</td>
                             <td>
                                 <button className="btn btn-primary btn-outline">Payment</button>
                             </td>
                             <td>
                                 <button className="btn btn-secondary btn-outline" onClick={()=>handleDelete(row._id)}><AiFillDelete/></button>
                             </td>
                         </tr>
                        
                            )}
                           
                            
                        </tbody>
                        
                    </table>
                </div>
            </div>


        </div>
    );
};

export default SelectedClass;