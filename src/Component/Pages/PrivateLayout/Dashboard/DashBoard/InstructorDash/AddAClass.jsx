import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async'
import { useContext } from 'react';
import { AuthContext } from '../../../../../../providers/AuthProvider';




const AddAClass = () => {
    const {reset, register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);
        const addClass={
            musicClassName: data.musicClassName,
            classImage:data.classImage,
            instructorName:data.instructorName,
            instructorEmail:data.instructorEmail,
            availableSeats:data.availableSeats,
            totalStudents:data.totalStudents,
            price:data.price,
            status:data.status,
            feedback:''
        }

        fetch('https://surtal-music-server.vercel.app/addClass',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addClass)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            reset();
        })

    

    };



    return (
        <>
            <Helmet><title>Instructor | Add A Class</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="mb-4 col">
                        <label htmlFor="musicClassName" className="block mb-1">
                            Class Name:
                        </label>
                        <input
                            type="text"
                            id="musicClassName"
                            {...register('musicClassName', { required: 'Class Name is required' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.musicClassName && <span className="text-red-500">{errors.musicClassName.message}</span>}
                    </div>

                    <div className="mb-4 col">

                        <label htmlFor="classImage" className="block mb-1">
                            Class Image:
                        </label>
                        <input
                            type="text"
                            id="classImage"
                            {...register('classImage', { required: 'Class Image is required' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.classImage && <span className="text-red-500">{errors.classImage.message}</span>}
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="mb-4 col">
                        <label htmlFor="instructorName" className="block mb-1">
                            Instructor Name:
                        </label>
                        <input
                            type="text"
                            id="instructorName" value={user.displayName}
                            {...register('instructorName')}

                            className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                        />
                    </div>

                    <div className="mb-4 col">
                        <label htmlFor="instructorEmail" className="block mb-1">
                            Instructor Email:
                        </label>
                        <input
                            type="email"
                            id="instructorEmail"
                            value={user.email}
                            {...register("instructorEmail")}

                            className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                        />
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="availableSeats" className="block mb-1">
                            Available Seats:
                        </label>
                        <input
                            type="number"
                            id="availableSeats"
                            {...register('availableSeats', { required: 'Available Seats is required' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.availableSeats && <span className="text-red-500">{errors.availableSeats.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block mb-1">
                            Price:
                        </label>
                        <input
                            type="number"
                            id="price"
                            {...register('price', { required: 'Price is required' })}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                        {errors.price && <span className="text-red-500">{errors.price.message}</span>}
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="mb-4 col">
                        <label htmlFor="status" className="block mb-1">
                            Status:
                        </label>
                        <input
                            type="text"
                            id="status"
                            value='Pending'
                            {...register('status')}
                            className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                        />
                       
                    </div>
                    <div className="mb-4 col">
                        <label htmlFor="totalStudents" className="block mb-1">
                            Total Student:
                        </label>
                        <input
                            type="number"
                            id="totalStudents"
                            value='0'
                            {...register('totalStudents')}
                            className="w-full p-2 bg-gray-100 border border-gray-300 rounded"
                        />

                    </div>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Add
                </button>
            </form>
        </>
    );
};

export default AddAClass;
