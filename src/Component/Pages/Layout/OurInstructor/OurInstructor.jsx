import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorPro from "../Shear/InstructorPro/InstructorPro";


const OurInstructor = () => {
    const [instructor, setInstructor]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:1830/instructors')
        .then(res=>res.json())
        .then(data=>{
          
            
            setInstructor(data)})

    },[])


    const [showAll, setShowAll] = useState(false);
    const allInstructor = showAll ? instructor : instructor.slice(0, 9);

    const handleShowAll = () => {
        setShowAll(true);
    };
    return (
        <div >
             <Helmet>
                <title>SurTaal Music | Instructor</title>
            </Helmet>
            <div className="pt-32 pb-20">
            <p className="mx-auto  pb-4 text-center text-4xl font-bold uppercase text-blue-700 border-b-2 border-blue-700 w-4/12 ">Our Instructor</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allInstructor.map(instru=>
                    <div className="col mb-8 mt-16" key={instru._id}>
                        <InstructorPro topInstructor={instru}></InstructorPro>
                    </div>)
                }
            </div>
            {!showAll && (
                <div className="text-center">
                    <button className="btn btn-active btn-secondary my-8" onClick={handleShowAll}>Show All</button>
                </div>
            )}

            </div>
            
        </div>
    )
};

export default OurInstructor;