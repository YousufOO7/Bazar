import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AddLaptopByAdmin = () => {
    const axiosSecure = useAxiosSecure();

    const handleSubmit = async e => {
        e.preventDefault();

        const form = e.target;
        const addLaptopData = {
            brand: form.brand.value,
            body: form.body.value,
            category: form.category.value,
            productCode: form.productCode.value,
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
            const res = await axiosSecure.post("/addLaptops", addLaptopData);
            if (res.data.insertedId) {
                form.reset()
                Swal.fire({
                    title: "Success!",
                    text: "Laptop device has been added successfully.",
                    icon: "success"
                });
            }

        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong while adding the Laptop device.",
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

                            {/* Product Code */}
                            <TextField
                                label="Product Code"
                                type="number"
                                name='productCode'
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

export default AddLaptopByAdmin;