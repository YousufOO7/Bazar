import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const DetailsGallery = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="bg-white mt-10  lg:px-16 px-4 ">
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
    );
};

export default DetailsGallery;