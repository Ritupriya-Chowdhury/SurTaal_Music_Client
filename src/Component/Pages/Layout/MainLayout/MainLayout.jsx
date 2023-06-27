import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shear/Footer/Footer";
import Navbar from "../Shear/Header/Navbar";


const MainLayout = () => {
    const location=useLocation();
    console.log(location)
    // const noHeaderFooter=location.pathname.includes('notfound')
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;