import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecureCard";

import Swal from "sweetalert2";

const ManageClass = () => {


    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/addClass')
        return res.data;
    })


    const Submit = (event, st) => {


        fetch(`https://surtal-music-server.vercel.app/addClass/${event._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status:st})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Status Changed!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const FeedBack = (event, st) => {


        fetch(`https://surtal-music-server.vercel.app/addClass/${event._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({feedback:st})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `FeedBack Added!`,
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
            <div className="pt-8">
                <h3 className="text-3xl font-semibold my-4">Added Classes</h3>
                <div>
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="text-black text-xl">
                                <th>#</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Class Name</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th> </th>
                                <th>Action</th>
                                <th>FeedBack</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((cla, index) => <tr className="text-lg" key={cla._id}>
                                    <th>{index + 1}</th>
                                    <td>{cla.instructorName}</td>
                                    <td>{cla.instructorEmail}</td>
                                    <td>{cla.musicClassName}</td>
                                    <td>{cla.availableSeats}</td>
                                    <td>{cla.price}</td>
                                    <td onClick={() => Submit(cla, 'Accept')} className='text-blue-600'>Accept
                                    </td>
                                    <td onClick={() => Submit(cla, 'Deny')} className='text-red-600'>Deny
                                    </td>
                                    <td className="btn btn-secondary">Update</td>
                                    <td onClick={() => FeedBack(cla, 'Well Class')} className='text-blue-600'>Well Class
                                    </td>
                                    <td onClick={() => FeedBack(cla, 'Not Well class')} className='text-red-600'>Not Well class
                                    </td>
                                   
                                    
                                </tr>
                                
                                
                                )

                            }



                         
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageClass;