import { useContext} from "react";
import { Helmet } from "react-helmet-async";

import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom'


import { AuthContext } from "../../../../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const GoogleLogin = () => {
    const { register, handleSubmit } = useForm();
    const navigate=useNavigate();
    const location=useLocation();
    const {GoogleSignIn}=useContext(AuthContext);
    let from=location.state?.from?.pathname || '/';



// Google Login
const handleGoogleLogin=(data)=>{
    const role=data.role;
    console.log(role)
    if(role===""){
        Swal.fire({
            title: 'Please Select Role First',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    GoogleSignIn()
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role:role }
        fetch('https://surtal-music-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then(() => {
                if(data.role==='instructor'){
                    const setInstructor = { instructorName: data.name,
                        instructorImage: data.photo, instructorEmail:data.email, role:data.role,musicClassName: '',numClassesTaken: 0, }

                fetch(' https://surtal-music-server.vercel.app/instructors', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(setInstructor)
                })
                    .then(res => res.json())
                    .then(data =>console.log(data)) 
                }
        



                navigate(from, { replace: true });
            })
    })

}






    return (
        <div >
            <Helmet><title>SurTaal Music | Google Login</title></Helmet>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row my-20">
                    <div className=" text-center lg:text-left ">
                        <h1 className="text-5xl font-bold">Login now!</h1>


                    </div>
                    <div className="card w-full  flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                   
                        <div>
                            <p className="text-blue-700 text-center mb-4">New Here? Create An <Link to='/register' className="font-bold text-xl">Account</Link></p>
                        </div>
                        <div>
                            <p className="text-center mb-8">Or sign in with</p>

                            <form   onSubmit={handleSubmit(handleGoogleLogin)}className="card-body">
                            <label className="label">
                                <span className="label-text">Select Role</span>
                            </label>
                            <select name="role" className="p-4" {...register("role", { required: true })} >
                           
                                <option value="">Please select one…</option>
                                <option value="student">Student</option>
                                <option value="instructor">Instructor</option>
                               
                            </select>
                            <div className="text-center ">
                                
                                <input type="submit" value='G'  className=" mx-auto  btn btn-outline btn-primary mb-8" />
                               
                            </div>
                            </form>
                           





                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;