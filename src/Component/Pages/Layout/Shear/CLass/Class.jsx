import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useStudent from '../../../../Hooks/useStudentHook';


const Class = ({ topClass }) => {
    
    
    const [isStudent]=useStudent();

    const bgColor=topClass.availableSeats  === 0?'bg-red-400':'bg-white';
    const selectBtn=topClass.availableSeats  === 0?'hidden':'';
    const selectBtn1=isStudent?'':'hidden';
    

   

  
     
    const { user } = useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();


    const handleEnroll = (topClass) => {
        const {_id,classImage,musicClassName,price,instructorName,totalStudents,availableSeats}=topClass;
        
       if (!user) {
            toast('Please Login first', {
                className: 'bg-blue-500 text-white font-bold',
                bodyClassName: 'px-4 py-2',
                progressClassName: 'bg-green-500',

            });
            navigate('/login',{state:{from:location}})
        }
        else if(user ){
            const selectClass={classId:_id,classImage,musicClassName,price,instructorName,totalStudents,availableSeats, email:user.email}
            console.log(topClass)
            fetch('https://surtal-music-server.vercel.app/selectClass',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(selectClass)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Selected!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            


        }
    }
        return (
            <div className={` card w-96  shadow-xl ${bgColor} `}>

                <figure><img className='h-52' src={topClass.classImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">{topClass.musicClassName}</h2>
                    <p>Instructor: {topClass.instructorName}</p>
                    <p>Available seats: {topClass.availableSeats}</p>
                    <p className="text-blue-600">Price: {topClass.price}$</p>
                    <div className="card-actions ">

                        <button className={`btn btn-outline btn-primary ${selectBtn} ${selectBtn1}`} onClick={()=>handleEnroll(topClass)}>Select Now</button>
                        <ToastContainer className="p-4" toastClassName="bg-blue-500 text-white font-bold" />
                        
                    </div>
                </div>
            </div>
        );
    };

    export default Class;