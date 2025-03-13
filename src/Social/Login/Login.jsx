import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import GoogleLogin from '../../Shared/GoogleLogin/GoogleLogin';

const Login = () => {

    const {signIn, setUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    const logInSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            navigate(location?.state ? location?.state : '/')
            toast.success(`Welcome ${user?.displayName}`);
        })
        .catch((err) => {
            setError({ login: err.message });
            toast.error('Something went wrong. Please check your credentials.');
        });

    }

    return (
        <div className="flex justify-center items-center py-10 bg-base-200">
            <Card className="w-96 p-6 shadow-xl">
                <CardContent>
                    <Typography variant="h5" className="text-center font-bold">
                        Log-In
                    </Typography>
                    <Typography className="text-gray-400 text-center mb-4">
                        Welcome user, please sign in to continue
                    </Typography>
                    <form onSubmit={logInSubmit}>
                        <TextField
                            label="Email"
                            type="email"
                            name='email'
                            fullWidth
                            required
                            variant="outlined"
                            margin="dense"
                            className=" text-white border-none"
                        />

                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            name='password'
                            required
                            variant="outlined"
                            margin="dense"
                            className=" text-white border-none"
                        />

                        <Button
                            type='submit'
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: "#F0812A",
                                "&:hover": { backgroundColor: "#d66f25" }
                            }}
                        >
                            Sign In
                        </Button>
                        <GoogleLogin />
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
