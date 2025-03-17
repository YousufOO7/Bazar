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
            chargingInterface: form.chargingInterface.value,
            category: form.category.value,
            bluetooth: form.bluetooth.value,
            model: form.model.value,
            compatibility: form.compatibility.value,
            calling: form.calling.value,
            driverSize: form.driverSize.value,
            waterResistance: form.waterResistance.value,
            playTime: form.playTime.value,
            rating: form.rating.value,
            batteryInfo: form.batteryInfo.value,
            otherFeatures: form.otherFeatures.value,
            inStock: form.inStock.value,
            cashDiscountPrice: form.cashDiscountPrice.value,
            mainImage: form.mainImage.value,
            imageOne: form.imageOne.value,
            imageTwo: form.imageTwo.value,
            imageThree: form.imageThree.value,
            descriptionImage: form.descriptionImage.value,
            descriptionTitleOne: form.descriptionTitleOne.value,
            descriptionTitleTwo: form.descriptionTitleTwo.value,
            descriptionTitleThree: form.descriptionTitleThree.value,
            descriptionTextOne: form.descriptionTextOne.value,
            descriptionTextTwo: form.descriptionTextTwo.value,
            descriptionTextThree: form.descriptionTextThree.value
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

                            {/* Charging Interface */}
                            <TextField
                                label="Charging Interface"
                                type="text"
                                name='chargingInterface'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                          {/* Category */}
                          <TextField
                                label="Category"
                                type="text"
                                name='category'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

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
                            {/* Compatibility */}
                            <TextField
                                label="Compatibility"
                                type="text"
                                name='compatibility'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Calling */}
                            <TextField
                                label="Calling"
                                type="text"
                                name='calling'
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
                            {/* Driver Size */}
                            <TextField
                                label="Driver Size"
                                type="text"
                                name='driverSize'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Sweat & Water Resistance */}
                            <TextField
                                label="Sweat & Water Resistance:"
                                type="text"
                                name='waterResistance'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>

                             {/* Rating */}
                             <TextField
                                label="Rating"
                                type="number"
                                name='rating'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Battery Info */}
                            <TextField
                                label="Battery Info"
                                type="text"
                                name='batteryInfo'
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

                            {/* Image One */}
                            <TextField
                                label="Image One:"
                                type="url"
                                name='imageOne'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Image Two */}
                            <TextField
                                label="Image Two"
                                type="url"
                                name='imageTwo'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Image Three */}
                            <TextField
                                label="Image Three:"
                                type="url"
                                name='imageThree'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Description Image */}
                            <TextField
                                label="Description Image"
                                type="url"
                                name='descriptionImage'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Description_Title_One */}
                            <TextField
                                label="Description Title One"
                                type="text"
                                name='descriptionTitleOne'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Description_Title_Two */}
                            <TextField
                                label="Description Title Two"
                                type="text"
                                name='descriptionTitleTwo'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Description_Title_Three */}
                            <TextField
                                label="Description Title Three"
                                type="text"
                                name='descriptionTitleThree'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Description_Text_One */}
                            <TextField
                                label="Description Text One"
                                type="text"
                                name='descriptionTextOne'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Description_Text_Two */}
                            <TextField
                                label="Description Text Two"
                                type="text"
                                name='descriptionTextTwo'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>


                        {/* Description_Text_Three */}
                        <TextField
                            label="Description Text Three"
                            type="text"
                            name='descriptionTextThree'
                            fullWidth
                            required
                            variant="outlined"
                            margin="dense"
                        />


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