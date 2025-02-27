import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const DetailsSpecification = ({ products }) => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { Product_Code,
        Category,
        Brand,
        Model,
        Network,
        Dimension,
        Weight,
        SIM,
        Display_Type,
        Display_Size,
        Display_Resolution,
        OS,
        Chipset,
        CPU,
        Storage,
        Main_Camera,
        Front_Camera,
        Sound,
        Battery_Info,
        Sensors,
        Other_Features,
        Cash_Discount_Price,
        In_Stock,
        Rating,
        Images,
        Description, } = products


    return (
        <div className="bg-white my-10  lg:px-16 px-4 ">
            <div>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Specification" />
                        <Tab value="two" label="Description" />
                        <Tab value="three" label="Review" />
                    </Tabs>
                </Box>
            </div>
            <section className='border mt-5 px-5'>
                <h2 className="text-2xl font-bold py-3 underline">Specification</h2>
                {
                    products.map(item => (
                        <div key={item?.Product_Code} className='border my-5 px-2'>
                            {/* brand */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Brand</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Brand}</h2>
                            </div>
                            <div><hr /></div>
                            {/* model */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Model</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Model}</h2>
                            </div>
                            <div><hr /></div>
                            {/* network */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Network</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Network}</h2>
                            </div>
                            <div><hr /></div>
                            {/* dimension */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Dimension</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Dimension}</h2>
                            </div>
                            <div><hr /></div>
                            {/* weight */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Weight</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Weight}</h2>
                            </div>
                            <div><hr /></div>
                            {/* sim */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">SIM</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.SIM}</h2>
                            </div>
                            <div><hr /></div>
                            {/* display type */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Display Type</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Display_Type}</h2>
                            </div>
                            <div><hr /></div>
                            {/* display size */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Display Size</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Display_Size}</h2>
                            </div>
                            <div><hr /></div>
                            {/* display resolution */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Display Resolution</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Display_Resolution}</h2>
                            </div>
                            <div><hr /></div>
                            {/* OS */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">OS</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.OS}</h2>
                            </div>
                            <div><hr /></div>
                            {/* chipset */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Chipset</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Chipset}</h2>
                            </div>
                            <div><hr /></div>
                            {/* cpu */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">CPU</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.CPU}</h2>
                            </div>
                            <div><hr /></div>
                            {/* memory */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Storage</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Storage}</h2>
                            </div>
                            <div><hr /></div>
                            {/* main camera */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Main Camera</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Main_Camera}</h2>
                            </div>
                            <div><hr /></div>
                            {/* front camera */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Front Camera</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Front_Camera}</h2>
                            </div>
                            <div><hr /></div>
                            {/* sound */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Sound</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Sound}</h2>
                            </div>
                            <div><hr /></div>
                            {/* battery */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Battery Info</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Battery_Info}</h2>
                            </div>
                            <div><hr /></div>
                            {/* sensors */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Sensors</h2>
                                <h2 className="border-l col-span-4 text-xl py-1 pl-3">{item?.Sensors}</h2>
                            </div>
                            <div><hr /></div>
                            {/* other */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Other Feature Info</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{item?.Other_Features}</h2>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default DetailsSpecification;