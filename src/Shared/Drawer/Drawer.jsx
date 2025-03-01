import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Drawer = () => {

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn bg-[#ff882a] text-white drawer-button">Open Menu</label>
                </div>
                <div className="drawer-side z-[999]">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-white text-base-content min-h-full w-80 p-4">
                        {/* price */}
                        <div className="bg-gray-100 rounded-md p-2">
                            <h3 className="text-xl font-semibold mt-2">Price Range</h3>
                            <p><hr className="border-[1px] border-[#ff882a] mt-2 mb-5" /></p>
                            <div className="flex gap-5 mb-3">
                                <input className="w-1/2 bg-white text-black border" placeholder='Min'></input>
                                <input className="w-1/2 bg-white text-black border" placeholder='Max'></input>
                            </div>
                            <div className="flex justify-end mb-2">
                                <button className="px-1 text-sm bg-[#ff882a] text-white">Filter</button>
                            </div>
                        </div>

                        {/* category */}
                        <div className="bg-gray-100 rounded-md p-2 my-5">
                            <h3 className="text-xl font-semibold mt-2">Category</h3>
                            <p><hr className="border-[1px] border-[#ff882a] mt-2 mb-5" /></p>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Apple" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Laptop" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Samsung" />
                            </FormGroup>
                        </div>

                        {/* rating */}
                        <div className="bg-gray-100 rounded-md p-2 my-5">
                            <h3 className="text-xl font-semibold mt-2">Rating</h3>
                            <p><hr className="border-[1px] border-[#ff882a] mt-2 mb-5" /></p>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="5" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="4" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="3" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="2" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="1" />
                            </FormGroup>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;