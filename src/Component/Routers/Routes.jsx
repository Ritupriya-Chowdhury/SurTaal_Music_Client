import {
  createBrowserRouter,

} from "react-router-dom";
import Home from "../Pages/Layout/Home/Home/Home";
import MainLayout from "../Pages/Layout/MainLayout/MainLayout";
import NotFound from "../Pages/Layout/NotFoundPage/NotFound";
import Login from "../Pages/Layout/Registration&Login/Login/Login";
import Register from "../Pages/Layout/Registration&Login/Ragistration/Register";
import OurClasses from "../Pages/Layout/OurClasses/OurClasses ";
import OurInstructor from "../Pages/Layout/OurInstructor/OurInstructor";

import PrivateRoute from "./PrivateRoute";
import SelectedClass from "../Pages/PrivateLayout/Dashboard/Student/SelectedClass";
import Dashboard from "../Pages/PrivateLayout/Dashboard/DashBoard/Dashboard";
import StudentNav from "../Pages/PrivateLayout/Dashboard/Student/StudentNav";
import AllUsers from "../Pages/PrivateLayout/Dashboard/DashBoard/Users/AllUsers";
import DashboardMain from "../Pages/PrivateLayout/Dashboard/DashBoard/DashboardMain";
import GoogleLogin from "../Pages/Layout/Registration&Login/Login/GoogleLogin";
import InstructorHome from "../Pages/PrivateLayout/Dashboard/DashBoard/InstructorDash/InstructorHome";
 import InstructorOnlyRoute from "./InstructorOnly";
import AddAClass from "../Pages/PrivateLayout/Dashboard/DashBoard/InstructorDash/AddAClass";
 import StudentOnlyRoute from "./OnlyStudentRoute";
import AdminOnlyRoute from "./AdminOnlyRoute";
import MyClass from "../Pages/PrivateLayout/Dashboard/DashBoard/InstructorDash/MyClass";
import ManageClasses from "../Pages/PrivateLayout/Dashboard/DashBoard/Admin/ManageClasses";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {

        path: "/",
        element: <Home></Home>

      },
      {
        path: '/classes',
        element: <OurClasses></OurClasses>
      },
      {
        path: '/instructor',
        element: <OurInstructor></OurInstructor>
      },
      {

        path: "/login",
        element: <Login></Login>

      },
      {

        path: "/login-with-google",
        element: <GoogleLogin></GoogleLogin>

      },
      
      {

        path: "/register",
        element: <Register></Register>

      },



    ]

  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element:<PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>
      },
      {
        path: '/dashboard/studentNav',
        element: <PrivateRoute><StudentOnlyRoute><StudentNav></StudentNav></StudentOnlyRoute></PrivateRoute>
      },
      {
        path: '/dashboard/selectedClasses',
        element: <PrivateRoute><StudentOnlyRoute><SelectedClass></SelectedClass></StudentOnlyRoute></PrivateRoute>
      },
      {
        path: '/dashboard/instructorHome',
        element:<PrivateRoute><InstructorOnlyRoute><InstructorHome></InstructorHome></InstructorOnlyRoute> </PrivateRoute>
      },

      {
        path:'/dashboard/addClasses',
        element:<PrivateRoute><InstructorOnlyRoute><AddAClass></AddAClass></InstructorOnlyRoute></PrivateRoute>
      },
      {
        path:'/dashboard/myClasses',
        element:<PrivateRoute><InstructorOnlyRoute><MyClass></MyClass></InstructorOnlyRoute></PrivateRoute>
      },
      
      {
        path: '/dashboard/allUsers',
        element:<PrivateRoute><AdminOnlyRoute><AllUsers></AllUsers></AdminOnlyRoute></PrivateRoute>
      },
      
      {
        path: '/dashboard/manageClass',
        element:<PrivateRoute><AdminOnlyRoute><ManageClasses></ManageClasses></AdminOnlyRoute></PrivateRoute>
      },
      
      
      



    ]
  },
  {
    path: '/*',
    element: <NotFound>
    </NotFound>
  }

]);
