import { Link } from 'react-router-dom';
import notFound from '../../../../assets/404Page/funny-404-error.gif'
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div className='text-center mb-16'>
            <Helmet><title>SurTaal Music | NotFound</title></Helmet>
            <p className='text-2xl text-green-500 mt-8'>Back to the <Link to='/'><span className='text-3xl font-bold'>Home</span></Link></p>
            <img className='mx-auto' src={notFound} alt="" />
            
        </div>
    );
};

export default NotFound;