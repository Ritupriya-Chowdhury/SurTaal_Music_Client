import { Link } from 'react-router-dom'
import logo from '../../../../../assets/Logo/cover2.png';
import { AuthContext } from '../../../../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { useContext } from 'react';




const Navbar = () => {
    const { user, SignOut } = useContext(AuthContext)
    // console.log(user.role)
   
   


    
    // Logout

    const handleLogout = () => {
        SignOut()
            .then(
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Account Successfully Logout!',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
            .catch(error => console.error(error.message))


    }

   
    
   

    return (
        <div>
            {/*  */}
            <div className="navbar bg-transparent px-4 py-2 fixed z-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li>
                                <Link to='/classes' className='mr-2'>Classes</Link>

                            </li>
                            <Link to='/instructor' className='mr-2'>Instructors</Link>

                        </ul>
                    </div>
                    <div className='flex'>
                        <div><img className=' h-20 w-72' src={logo} alt="" /></div>

                    </div>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end text-blue-700 navbar-center hidden lg:flex">

                        <div className='font-bold text-lg mr-2'>
                            <Link to='/' className='mr-2'>Home</Link>
                            <Link to='/classes' className='mr-2'>Classes</Link>
                            <Link to='/instructor' className='mr-2'>Instructors</Link>
                             </div>
                    </div>

                    {user ? <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-8 lg:ml-2">

                            <div className="w-10 rounded-full ">
                                <img src={user.photoUrl} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                  {user.displayName}

                                </a>
                            </li>
                            <Link to='/dashboard' className='ml-3 uppercase'>Dashboard</Link>
                            <button className='w-16' onClick={handleLogout}>Logout</button>
                        </ul>
                    </div> :
                             <div className='font-bold text-lg ml-2 text-blue-700'>
                                <Link to='/login' >Login</Link>
                          </div>
                        

                    }
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;