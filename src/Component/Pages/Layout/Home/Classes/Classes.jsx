 import { useEffect, useState } from 'react';
import SectionTitle from '../Sheared/SectionTitle';
import Class from '../../Shear/CLass/Class';

const Classes = () => {
    const [top, setTop]=useState([]);
    useEffect(()=>{
        fetch('https://surtal-music-server.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            const topClasses=data.filter(classes=> classes.totalStudents >= 90);
            
            setTop(topClasses)})

    },[])
    return (
        <div className='my-8 '>
            <SectionTitle heading={'Our Top Classes'} subHeading={'Enroll And Enjoy Classes'}></SectionTitle>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 my-8 gap-4'>
           {
                top.map(topClass=>
                <div className='col'  key={topClass._id}>
                <Class topClass={topClass}></Class>
                </div>
                )
            }
            </div> 
            
        </div>
    );
};

export default Classes;