import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const AddLaptopByAdmin = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const addLaptopData = {
            brand: form.brand.value,
            body: form.body.value,
            platForm: form.platForm.value,
            keyboardType: form.keyboardType.value,
            model: form.model.value,
            ports: form.ports.value,
            camera: form.camera.value,
            display: form.display.value,
            memory: form.memory.value,
            sound: form.sound.value,
            batteryInfo: form.batteryInfo.value,
            cashDiscountPrice: form.cashDiscountPrice.value,
            inStock: form.inStock.value,
            rating: form.rating.value,
            mainImage: form.mainImage.value,
            imageOne: form.imageOne.value,
            imageTwo: form.imageTwo.value,
            imageThree: form.imageThree.value
        }

        console.log(addLaptopData)
    }

    return (
        <div className="flex justify-center items-center bg-base-200">
            <Card className="w-full p-6 shadow-xl">
                <CardContent>
                    <div className='mb-3 '>
                        <Typography variant="h4" className="text-center font-bold underline">
                            Add Laptop
                        </Typography>
                    </div>
                    <div className='mb-3'>
                        <Typography className="text-gray-400 text-center">
                            Laptop's item add by admin
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

                            {/* body */}
                            <TextField
                                label="Body"
                                type="text"
                                name='body'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* platform */}
                            <TextField
                                label="PlatForm"
                                type="text"
                                name='platForm'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Keyboard Type */}
                            <TextField
                                label="Keyboard Type"
                                type="text"
                                name='keyboardType'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* model */}
                            <TextField
                                label="Model"
                                type="text"
                                name='model'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* ports */}
                            <TextField
                                label="Ports"
                                type="text"
                                name='ports'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Camera */}
                            <TextField
                                label="Camera"
                                type="text"
                                name='camera'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Display */}
                            <TextField
                                label="Display"
                                type="text"
                                name='display'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />
                        </div>

                        <div className='md:flex justify-between gap-3'>
                            {/* Memory */}
                            <TextField
                                label="Memory"
                                type="text"
                                name='memory'
                                fullWidth
                                required
                                variant="outlined"
                                margin="dense"
                            />

                            {/* Sound */}
                            <TextField
                                label="Sound"
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

                            {/* Rating */}
                            <TextField
                                label="Rating:"
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

export default AddLaptopByAdmin;