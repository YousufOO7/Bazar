import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const GoogleLogin = () => {
    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogIn = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            const userInfo = {
                email: user?.email,
                name: user?.displayName,
            }
            axiosPublic.post("/users", userInfo)
            .then(res => {
                console.log(res.data)
            })
            // navigate(location?.state ? location?.state : '/')
            toast.success("SignIn Successful!!")
        })
        .catch(error => {
            toast.error("Something was wrong give valid info!!")
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogIn} className='btn w-full flex mx-auto mt-3 bg-gray-200'> <FcGoogle className='text-2xl'></FcGoogle> Google</button>
        </div>
    );
};

export default GoogleLogin;