import { Helmet } from "react-helmet-async";
import { FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {  FcHome } from "react-icons/fc";
import { SiInstructure,SiGoogleclassroom } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../../Hooks/useAdmin";
import useStudent from "../../../../Hooks/useStudentHook";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();

    return (
        <div>
            <Helmet><title>SurTaal Music | Dashboard</title></Helmet>
            <div className=" pb-20 md:flex">

                <div className="drawer w-full md:w-1/3">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                    <div className="drawer-content md:text-center  mt-8  ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="text-white md:btn md:btn-primary drawer-button ">Menu</label>
                    </div>
                    <div className="md:drawer-side  ">
                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-white text-2xl text-blue-800 font-semibold">
                            {isAdmin ? <>
                                {/* Sidebar content here */}
                                <li><Link><AiFillHome/>Admin Home</Link></li>
                                <li><Link to="/dashboard/allUsers"><FaUsers></FaUsers>Manage Users</Link></li>
                                <li><Link to="/dashboard/manageClass"><SiGoogleclassroom/>Manage Class</Link></li>
                                <li><Link>Payment History</Link></li>

                            </> : <>

                                {isStudent ?
                                    <><li >
                                       
                                        <Link to='/dashboard/studentNav'><AiFillHome/>Student Home</Link>
                                      

                                    </li>


                                    </> : <>
                                    <li><Link to='/dashboard/instructorHome'><AiFillHome/>Instructor Home</Link></li>
                                    
                                       

                                    </>
                                }
                            </>
                            }
                         
                          <li><Link to='/'>< FcHome/>Home</Link></li>
                            <li>
                                <Link to='/classes' className=''><SiGoogleclassroom/>Classes</Link>

                            </li>
                            <li><Link to='/instructor' className=''><SiInstructure/>Instructors</Link></li>
                          
                            



                        </ul>

                    </div>
                </div>

                <div className=""><Outlet></Outlet>  </div>
            </div>
        </div>
    );
};

export default Dashboard;