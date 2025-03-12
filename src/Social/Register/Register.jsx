import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const registerSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value
        const image = form.image.value
        const email = form.email.value
        const password = form.password.value

        // create user
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: image })
                    .then(() => {
                        navigate(location?.state ? location.state : '/')
                        toast.success('Register successfully  done!')
                    })
                    .catch(error => {
                        toast.error('Something was wrong make sure your info in right or not')
                    })
            })
            .catch((error) => {
                toast.error('Something was wrong make sure your info in right or not')
            });

    }

    return (
        <div className="flex justify-center items-center py-10 bg-base-200">
            <Card className="w-96 p-6 shadow-xl">
                <CardContent>
                    <Typography variant="h5" className="text-center font-bold">
                        Register
                    </Typography>
                    <Typography className="text-gray-400 text-center mb-4">
                        Welcome user, please register in to continue
                    </Typography>

                    <form onSubmit={registerSubmit}>
                        {/* name */}
                        <TextField
                            label="Name"
                            type="text"
                            name='name'
                            fullWidth
                            required
                            variant="outlined"
                            margin="dense"
                        />

                        {/* image */}
                        <TextField
                            label="Image URL"
                            type="url"
                            name='image'
                            fullWidth
                            required
                            variant="outlined"
                            margin="dense"
                        />

                        {/* email */}
                        <TextField
                            label="Email"
                            type="email"
                            name='email'
                            fullWidth
                            required
                            variant="outlined"
                            margin="dense"
                        />

                        {/* password */}
                        <TextField
                            label="Password"
                            type="password"
                            name='password'
                            fullWidth
                            required
                            variant="outlined"
                            margin="dense"
                        />

                        <Button
                            type='submit'
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: "#F0812A",
                                "&:hover": { backgroundColor: "#d66f25" }
                            }}
                            className="mt-3"
                        >
                            Register
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;
