import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const Register = () => {

    const registerSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const formDataObj = {
            name: form.name.value,
            image: form.image.value,
            email: form.email.value,
            password: form.password.value
        }

        console.log(formDataObj)

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
