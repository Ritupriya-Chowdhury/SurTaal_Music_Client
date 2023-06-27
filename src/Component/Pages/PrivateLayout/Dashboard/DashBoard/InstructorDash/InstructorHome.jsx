import { Zoom, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const InstructorHome = () => {
    return (
        <>
         <Helmet><title>DashBoard | Instructor</title></Helmet>
        <div className=" grid grid-cols-1 lg:grid-cols-2">


            <div className="col">
            
                <Zoom duration={500} cascade>
                
                    <div className="border border-blue-600 p-8 w-10/12 m-8 ">
                    
                        <p className="text-3xl font-bold text-orange-600"><Link to='/dashboard/addClasses'>Add A Class</Link></p>
                        
                    </div>
                    
                </Zoom >
              
            </div>
            
            <div className="col">
            <Slide duration={1000} cascade>
                    <div className="border border-blue-600 p-8 w-10/12  m-8 ">

                        <p className="text-3xl font-bold text-orange-600"><Link to='/dashboard/myClasses'>My Class</Link></p>

                    </div>
                </Slide >
            </div>
        </div>
        </>
    );
};

export default InstructorHome;