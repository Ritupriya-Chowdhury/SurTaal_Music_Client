import { Zoom, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { SiInstructure,SiGoogleclassroom  } from "react-icons/si";
import { Helmet } from "react-helmet-async";

const DashboardMain = () => {
    return (
        <>
        <Helmet><title>SurTaal | Dashboard</title></Helmet>
        <div className=" grid grid-cols-1 lg:grid-cols-2">
                    <div className="col">

                        <Zoom duration={500} cascade>

                            <div className="border border-blue-600 p-8 w-10/12 m-8 ">

                                <p className="text-3xl font-bold text-orange-600 "><Link to='/'><FcHome/>Home</Link></p>

                            </div>

                        </Zoom >

                    </div>
                    

                    <div className="col">
                        <Slide duration={1000} cascade>
                            <div className="border border-blue-600 p-8 w-10/12  m-8 ">

                                <p className="text-3xl font-bold text-orange-600"><Link to='/classes'><SiGoogleclassroom ></SiGoogleclassroom>Classes</Link></p>

                            </div>
                        </Slide >
                    </div>

                    <div className="col">

                        <Zoom duration={500} cascade>

                            <div className="border border-blue-600 p-8 w-10/12 m-8 ">

                                <p className="text-3xl font-bold text-orange-600"><Link to='/instructors'><SiInstructure/>Instructors</Link></p>

                            </div>

                        </Zoom >

                    </div>
                </div>
                </>
    );
};

export default DashboardMain;