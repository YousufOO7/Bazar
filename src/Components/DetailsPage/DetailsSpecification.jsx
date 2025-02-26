import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const DetailsSpecification = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                <div className='border my-5 px-2'>
                    {/* brand */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Brand</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">Apple</h2>
                    </div>
                    <div><hr /></div>
                    {/* model */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Model</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">iPhone 16 Pro Max</h2>
                    </div>
                    <div><hr /></div>
                    {/* network */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Network</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">GSM / CDMA / HSPA / EVDO / LTE / 5G</h2>
                    </div>
                    <div><hr /></div>
                    {/* dimension */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Dimension</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">163 x 77.6 x 8.3 mm</h2>
                    </div>
                    <div><hr /></div>
                    {/* weight */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Weight</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">227 g</h2>
                    </div>
                    <div><hr /></div>
                    {/* sim */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">SIM</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">Nano-SIM and eSIM - International | Dual eSIM with multiple numbers - USA | Dual SIM (Nano-SIM, dual stand-by) - China</h2>
                    </div>
                    <div><hr /></div>
                    {/* display type */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Display Type</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM)</h2>
                    </div>
                    <div><hr /></div>
                    {/* display size */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Display Size</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">6.9 inches</h2>
                    </div>
                    <div><hr /></div>
                    {/* display resolution */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Display Resolution</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">1320 x 2868 pixels</h2>
                    </div>
                    <div><hr /></div>
                    {/* OS */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">OS</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">iOS 18</h2>
                    </div>
                    <div><hr /></div>
                    {/* chipset */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Chipset</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">Apple A18 Pro (3 nm)</h2>
                    </div>
                    <div><hr /></div>
                    {/* cpu */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">CPU</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">Hexa-core</h2>
                    </div>
                    <div><hr /></div>
                    {/* memory */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Memory</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">256GB, 512GB, 1TB | NVMe</h2>
                    </div>
                    <div><hr /></div>
                    {/* main camera */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Main Camera</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">48 MP, f/1.8, 24mm (wide) | 12 MP, f/2.8, 120mm (periscope telephoto) | 48 MP, (ultrawide) | TOF 3D LiDAR scanner (depth) | Dual-LED dual-tone flash, HDR (photo/panorama) | 4K@24/25/30/60/100/120fps, 1080p@25/30/60/120/240fps, 10-bit HDR, Dolby Vision HDR (up to 60fps), ProRes, 3D (spatial) video/audio, stereo sound rec.</h2>
                    </div>
                    <div><hr /></div>
                    {/* front camera */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Front Camera</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">12 MP, f/1.9, 23mm (wide) | SL 3D, (depth/biometrics sensor) | HDR | 4K@24/25/30/60fps, 1080p@25/30/60/120fps, gyro-EIS</h2>
                    </div>
                    <div><hr /></div>
                    {/* sound */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Sound</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">Stereo Loudspeakers</h2>
                    </div>
                    <div><hr /></div>
                    {/* battery */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Battery Info</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">Li-Ion , non-removable | USB Type-C 3.2 Gen 2, DisplayPort | 25W wireless (MagSafe)</h2>
                    </div>
                    <div><hr /></div>
                    {/* sensors */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Sensors</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">Face ID, accelerometer, gyro, proximity, compass, barometer | Ultra Wideband 2 (UWB) support | Emergency SOS via satellite (SMS sending/receiving)</h2>
                    </div>
                    <div><hr /></div>
                    {/* other */}
                    <div className='grid grid-cols-6'>
                        <h2 className="col-span-2 text-2xl py-1">Other Feature Info</h2>
                        <h2 className="border-l col-span-4 text-xl py-1 pl-3">Glass front (Corning-made glass), glass back (Corning-made glass), titanium frame (grade 5) | IP68 dust/water resistant (up to 6m for 30 min) | Always on Display</h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DetailsSpecification;