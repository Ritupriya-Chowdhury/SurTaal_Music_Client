import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../../../providers/AuthProvider';
import Swal from 'sweetalert2'

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [PassError, setPassError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()


    const onSubmit = User => {
        console.log( User );

        const conpass =  User.confirmPassword;
        const pass =  User.password;
        if (conpass != pass) setPassError('Confirm Password Not Match. Please, Try Again!')
        else {
            createUser( User.email, User.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser.role);
                    updateUserProfile( User.name,  User.photo,User.role)
                        .then(() => {
                            const saveUser = { name: User.name, email:User.email, role:User.role }

                            fetch('https://surtal-music-server.vercel.app/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                     if ((data.insertedId)) {
                                        if(User.role ==='instructor'){
                                            const setInstructor = { instructorName: User.name,
                                                instructorImage: User.photo, instructorEmail:User.email, role:User.role,musicClassName: '',numClassesTaken: 0, }

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
                                
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User Created Successfully!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                                navigate('/')

                            }
                        })

                })
                .catch(error => setPassError(error.massage))
        })
                .catch ((error) => {

    setPassError(error.message);

});
        }
    }



const [passwordVisible, setPasswordVisible] = useState(false);
const [ConPasswordVisible, setConPasswordVisible] = useState(false);

const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
};
const toggleConPasswordVisibility = () => {
    setConPasswordVisible(!ConPasswordVisible);
};




// 

// const handleRegistration=event=>{
//     event.preventDefault();
//     const form = event.target;
//     const password=form.password.value;
//     const confirmPassword=form.confirmPassword.value;

//     if(password!=confirmPassword) setError('Password is not match please try again !')

// }

return (
    <div>
        <Helmet><title>SurTaal Music | Register</title></Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row my-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create An Account!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} name="name" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered"  {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex"> <input type={passwordVisible ? 'text' : 'password'} placeholder="password" className="input input-bordered"{...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} name="password" />

                                <button className="text-xl ml-2" onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button>
                            </div>
                            {errors.password && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 Characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less then 20 Characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must be have one upper case, one lower case & one special character</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <div className="flex"><input type={ConPasswordVisible ? 'text' : 'password'} placeholder="password" className="input input-bordered" name="confirmPassword" {...register("confirmPassword", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} />
                                <button className="text-xl ml-2" onClick={toggleConPasswordVisibility}>
                                    {ConPasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
                                </button></div>
                            {errors.confirmPassword && <span className="text-red-600">Confirm Password is required</span>}
                            {errors.confirmPassword?.type === 'minLength' && <span className="text-red-600">Confirm Password must be 6 Characters</span>}
                            {errors.confirmPassword?.type === 'maxLength' && <span className="text-red-600">Confirm Password must be less then 20 Characters</span>}
                            {errors.confirmPassword?.type === 'pattern' && <span className="text-red-600">Password must be have one upper case, one lower case & one special character</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="Upload a Photo" className="input input-bordered" name="photo" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-600">Photo is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select name="gender" className="p-4" {...register("gender")}>
                                <option value="">Please select one…</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                            <label className="label">
                                <span className="label-text">Select Role</span>
                            </label>
                            <select name="role" className="p-4" {...register("role", { required: true })} >
                           
                                <option value="">Please select one…</option>
                                <option value="student">Student</option>
                                <option value="instructor">Instructor</option>
                               
                            </select>
                            {errors.role && <span className="text-red-600">Select Role is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder="number" className="input input-bordered" name="phone" {...register("phone")} />
                        </div>
                        <p className='text-red-600'>{PassError}</p>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value='Register' />
                        </div>
                    </form>
                    <div>
                        <p className="text-blue-700 text-center mb-4">Have An Account? Back to the  <Link to='/login' className="font-bold text-xl">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Register;