import InstructorPro from '../../Shear/InstructorPro/InstructorPro';
import SectionTitle from '../Sheared/SectionTitle';
import { useEffect, useState } from 'react';




const Instructor = () => {

    const [top, setTop]=useState([]);
    useEffect(()=>{
        fetch('https://surtal-music-server.vercel.app/instructors')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            const topInstructors=data.filter(Instructors=> Instructors.numStudents >= 90);
            console.log(topInstructors)
            setTop(topInstructors)})

    },[])
    return (
        <div className='my-8 '>
            <SectionTitle heading={"Our Top Instructor"} subHeading={"Enroll And Enjoy Their Class"}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 my-8 gap-4'>
           {
                top.map(topInstructor=>
                <div className='col'  key={topInstructor._id}>
                 <InstructorPro topInstructor={topInstructor}></InstructorPro>
                </div>
                )
            }
            </div> 
        </div>
    );
};

export default Instructor;