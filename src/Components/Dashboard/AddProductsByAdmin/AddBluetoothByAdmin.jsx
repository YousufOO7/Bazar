import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddBluetoothByAdmin = () => {
    const axiosSecure = useAxiosSecure();

    const handleSubmit = async e => {
        e.preventDefault();

        const form = e.target;
        const addBluetoothData = {
            brand: form.brand.value,
            powerOutput: form.powerOutput.value,
            bluetooth: form.bluetooth.value,
            model: form.model.value,
            weight: form.weight.value,
            dimension: form.dimension.value,
            playTime: form.playTime.value,
            otherFeatures: form.otherFeatures.value,
            inStock: form.inStock.value,
            mainImage: form.mainImage.value,
            cashDiscountPrice: form.cashDiscountPrice.value
        }

        try {
            const res = await axiosSecure.post("/addBluetooth", addBluetoothData);
            if (res.data.insertedId) {
                form.reset()
                Swal.fire({
                    title: "Success!",
                    text: "Bluetooth device has been added successfully.",
                    icon: "success"
                });
            }

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong while adding the Bluetooth device.",
                icon: "error"
            });
        }

    }

    return (
        <div className="flex justify-center items-center bg-base-200">
            <Card className="w-full p-6 shadow-xl">
                <CardContent>
                    <div className='mb-3 '>
                        <Typography variant="h4" className="text-center font-bold underline">
                            Add Bluetooth's
                        </Typography>
                    </div>
                    <div className='mb-3'>
                        <Typography className="text-gray-400 text-center">
                            Bluetooth's item add by admin
                        </Typography>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='md:flex justify-between gap-3'>
                            {/* brand */}
                            <TextField
                                label="Brand"
                                type="text"
                                name='brand'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Power Output */}
                            <TextField
                                label="Power Output"
                                type="text"
                                name='powerOutput'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Bluetooth */}
                            <TextField
                                label="Bluetooth"
                                type="text"
                                name='bluetooth'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Model */}
                            <TextField
                                label="Model"
                                type="text"
                                name='model'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Weight */}
                            <TextField
                                label="Weight"
                                type="text"
                                name='weight'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Dimension */}
                            <TextField
                                label="Dimension"
                                type="text"
                                name='dimension'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Play Time */}
                            <TextField
                                label="Play Time"
                                type="text"
                                name='playTime'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Other Features / Info */}
                            <TextField
                                label="Other Features / Info"
                                type="text"
                                name='otherFeatures'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* In stock */}
                            <TextField
                                label="In stock"
                                type="text"
                                name='inStock'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Cash discount price */}
                            <TextField
                                label="Cash Discount Price:"
                                type="text"
                                name='cashDiscountPrice'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Main Image */}
                            <TextField
                                label="Main Image"
                                type="url"
                                name='mainImage'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>


                        <div className='mt-3'>
                            <Button
                                type='submit'
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: "#F0812A",
                                    "&:hover": { backgroundColor: "#d66f25" }
                                }}
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default AddBluetoothByAdmin;