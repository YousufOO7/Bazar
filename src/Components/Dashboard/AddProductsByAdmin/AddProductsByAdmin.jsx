import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AddProductsByAdmin = () => {
    const axiosSecure = useAxiosSecure();

    const formData = async e => {
        e.preventDefault();

        const form = e.target;
        const addPhonesData = {
            brand: form.brand.value,
            model: form.model.value,
            network: form.network.value,
            dimension: form.dimension.value,
            weight: form.weight.value,
            sim: form.sim.value,
            displayType: form.displayType.value,
            displaySize: form.displaySize.value,
            displayResolution: form.displayResolution.value,
            os: form.os.value,
            chipset: form.chipset.value,
            cpu: form.cpu.value,
            storage: form.storage.value,
            mainCamera: form.mainCamera.value,
            frontCamera: form.frontCamera.value,
            sound: form.sound.value,
            batteryInfo: form.batteryInfo.value,
            sensors: form.sensors.value,
            otherFeatures: form.otherFeatures.value,
            cashDiscountPrice: form.cashDiscountPrice.value,
            inStock: form.inStock.value,
            rating: form.rating.value,
            mainImage: form.mainImage.value,
            imageOne: form.imageOne.value,
            imageTwo: form.imageTwo.value,
            imageThree: form.imageThree.value,
        };

        try {
            const res = await axiosSecure.post("/addPhones", addPhonesData);
            if (res.data.insertedId) {
                form.reset()
                Swal.fire({
                    title: "Success!",
                    text: "Phone device has been added successfully.",
                    icon: "success"
                });
            }

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong while adding the Phone device.",
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
                            Add Phones
                        </Typography>
                    </div>
                    <div className='mb-3'>
                        <Typography className="text-gray-400 text-center">
                            Phone's item add by admin
                        </Typography>
                    </div>

                    <form onSubmit={formData}>
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
                            {/* Network */}
                            <TextField
                                label="Network"
                                type="text"
                                name='network'
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

                            {/* Sim */}
                            <TextField
                                label="Sim"
                                type="text"
                                name='sim'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Display Type */}
                            <TextField
                                label="Display Type"
                                type="text"
                                name='displayType'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Display Size */}
                            <TextField
                                label="Display Size"
                                type="text"
                                name='displaySize'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Display_Resolution */}
                            <TextField
                                label="Display_Resolution"
                                type="text"
                                name='displayResolution'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* OS */}
                            <TextField
                                label="OS"
                                type="text"
                                name='os'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Chipset */}
                            <TextField
                                label="Chipset"
                                type="text"
                                name='chipset'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* CPU */}
                            <TextField
                                label="CPU:"
                                type="text"
                                name='cpu'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Storage */}
                            <TextField
                                label="Storage"
                                type="text"
                                name='storage'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Main Camera */}
                            <TextField
                                label="Main Camera:"
                                type="url"
                                name='mainCamera'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Front Image */}
                            <TextField
                                label="Front Image"
                                type="url"
                                name='frontCamera'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Sound */}
                            <TextField
                                label="Sound:"
                                type="text"
                                name='sound'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
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

                            {/* Sensors*/}
                            <TextField
                                label="Sensors"
                                type="text"
                                name='sensors'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Other_Features */}
                            <TextField
                                label="Other_Features"
                                type="text"
                                name='otherFeatures'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* cash discount price */}
                            <TextField
                                label="Cash_Discount_Price"
                                type="text"
                                name='cashDiscountPrice'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* In Stock */}
                            <TextField
                                label="In Stock"
                                type="text"
                                name='inStock'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

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

export default AddProductsByAdmin;