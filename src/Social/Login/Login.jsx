import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const Login = () => {
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

                    <TextField
                        label="Email"
                        type="email"
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
                        required
                        variant="outlined"
                        margin="dense"
                        className=" text-white border-none"
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: "#F0812A",
                            "&:hover": { backgroundColor: "#d66f25" } 
                        }}
                    >
                        Sign In
                    </Button>
                    <div>
                        <p></p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
