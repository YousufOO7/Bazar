

const AddProductsByAdmin = () => {

    const formData = e => {
        e.preventDefault();

        const form = e.target;
        const formDataObj = {
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
            batteryInfo: form.batteryInfo.value, // Fixed typo
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

        console.log(formDataObj);

            
    }

    return (
        <div className="hero w-full">
            <div className="hero-content w-full">
                <div className="card w-full shadow-2xl">
                    <div className="card-body bg-white w-full">
                        <form onSubmit={formData} className="fieldset space-y-4">
                            <h2 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-10 underline">Add Product</h2>
                            {/* brand model */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Brand: </label>
                                    <input type="text" name="brand" className="input w-full mr-4" placeholder="Brand" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Model: </label>
                                    <input type="text" name="model" className="input w-full" placeholder="Model" />
                                </div>
                            </div>

                            {/* Network Dimension */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Network: </label>
                                    <input type="text" name="network" className="input w-full mr-4" placeholder="Network" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Dimension: </label>
                                    <input type="text" name="dimension" className="input w-full" placeholder="Dimension" />
                                </div>
                            </div>

                            {/* Weight SIM */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Weight: </label>
                                    <input type="text" name="weight" className="input w-full mr-4" placeholder="Weight" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">SIM: </label>
                                    <input type="text" name="sim" className="input w-full" placeholder="SIM" />
                                </div>
                            </div>

                            {/* Display_Type Display_Size */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Display_Type: </label>
                                    <input type="text" name="displayType" className="input w-full mr-4" placeholder="Display Type" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Display_Size: </label>
                                    <input type="text" name="displaySize" className="input w-full" placeholder="Display Size" />
                                </div>
                            </div>

                            {/* Display_Resolution OS */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Display_Resolution: </label>
                                    <input type="text" name="displayResolution" className="input w-full mr-4" placeholder="Display Resolution" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">OS: </label>
                                    <input type="text" name="os" className="input w-full" placeholder="OS" />
                                </div>
                            </div>

                            {/* Chipset CPU */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Chipset: </label>
                                    <input type="text" name="chipset" className="input w-full mr-4" placeholder="Chipset" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">CPU: </label>
                                    <input type="text" name="cpu" className="input w-full" placeholder="CPU" />
                                </div>
                            </div>

                            {/* Storage Main_Camera */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Storage: </label>
                                    <input type="text" name="storage" className="input w-full mr-4" placeholder="Storage" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Main_Camera: </label>
                                    <input type="text" name="mainCamera" className="input w-full" placeholder="Main_Camera" />
                                </div>
                            </div>

                            {/* Front_Camera Sound */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Front_Camera: </label>
                                    <input type="text" name="frontCamera" className="input w-full mr-4" placeholder="Front_Camera" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Sound: </label>
                                    <input type="text" name="sound" className="input w-full" placeholder="Sound" />
                                </div>
                            </div>

                            {/* Battery_Info Sensors */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Battery_Info: </label>
                                    <input type="text" name="batteryInfo" className="input w-full mr-4" placeholder="Battery Info" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Sensors: </label>
                                    <input type="text" name="sensors" className="input w-full" placeholder="Sensors" />
                                </div>
                            </div>

                            {/* Other_Features Cash_Discount_Price */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Other_Features: </label>
                                    <input type="text" name="otherFeatures" className="input w-full mr-4" placeholder="Other Features" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Cash_Discount_Price: </label>
                                    <input type="text" name="cashDiscountPrice" className="input w-full" placeholder="Cash Discount Price" />
                                </div>
                            </div>

                            {/* In_Stock Rating */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">In_Stock: </label>
                                    <input type="text" name="inStock" className="input w-full mr-4" placeholder="In Stock" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Rating: </label>
                                    <input type="number" name="rating" className="input w-full" placeholder="Rating" />
                                </div>
                            </div>

                            {/* Images  */}
                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Main_Image: </label>
                                    <input type="url" name="mainImage" className="input w-full mr-4" placeholder="Main Image" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Image One: </label>
                                    <input type="url" name="imageOne" className="input w-full" placeholder="Image One" />
                                </div>
                            </div>

                            <div className="w-full md:flex">
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Image_Two: </label>
                                    <input type="url" name="imageTwo" className="input w-full mr-4" placeholder="Image Two" />
                                </div>
                                <div className="md:w-1/2 flex items-center gap-4">
                                    <label className="fieldset-label">Image_Three: </label>
                                    <input type="url" name="imageThree" className="input w-full" placeholder="Image Three" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="btn bg-[#ff882a] text-white mt-4 w-full">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductsByAdmin;