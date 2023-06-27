import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Class from "../Shear/CLass/Class";


const OurClasses  = () => {
    const [classes, setClasses]=useState([]);
    useEffect(()=>{
        fetch('https://surtal-music-server.vercel.app/classes')
        .then(res=>res.json())
        .then(data=> setClasses(data))
        .catch(error=>console.error(error))

    },[])


    const [showAll, setShowAll] = useState(false);
    const allClass = showAll ? classes :  classes.slice(0, 9);

    const handleShowAll = () => {
        setShowAll(true);
    };
    return (
        <div >
             <Helmet>
                <title>SurTaal Music | Classes</title>
            </Helmet>
            <div className="pt-32 pb-20">
            <p className="mx-auto  pb-4 text-center text-4xl font-bold uppercase text-blue-700 border-b-2 border-blue-700 w-4/12 ">Our Classes</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    allClass.map(cla=>
                    <div className="col mb-8 mt-16" key={cla._id}>
                        <Class topClass={cla}></Class>
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
    );
};

export default OurClasses ;