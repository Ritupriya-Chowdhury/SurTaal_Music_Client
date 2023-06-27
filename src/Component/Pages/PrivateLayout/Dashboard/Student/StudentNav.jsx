import { Zoom, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const StudentNav = () => {
    return (
        <>
         <Helmet><title>DashBoard | Student</title></Helmet>
        <div className=" grid grid-cols-1 lg:grid-cols-2">


            <div className="col">
            
                <Zoom duration={500} cascade>
                
                    <div className="border border-blue-600 p-8 w-10/12 m-8 ">
                    
                        <p className="text-3xl font-bold text-orange-600"><Link to='/dashboard/selectedClasses'>My Selected Classes</Link></p>
                        
                    </div>
                    
                </Zoom >
              
            </div>
            <div className="col">
            <Slide duration={1000} cascade>
                    <div className="border border-blue-600 p-8 w-10/12  m-8 ">

                        <p className="text-3xl font-bold text-orange-600"><Link to='/dashboard/enrolledClass'>My Enrolled Classes</Link></p>

                    </div>
                </Slide >
            </div>
            <div className="col">
            <Slide duration={1000} cascade>
                    <div className="border border-blue-600 p-8 w-10/12  m-8 ">

                        <p className="text-3xl font-bold text-orange-600"><Link to='/dashboard/payment'>Payment</Link></p>

                    </div>
                </Slide >
            </div>
        </div>
        </>
    );
};

export default StudentNav;