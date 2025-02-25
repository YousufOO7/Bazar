
const DetailsInfo = ({ details }) => {

    // console.log(details.Key_Specs);
    const { Key_Specs, Performance, General, Display, Design, Camera, Battery, Storage, Network_Connectivity, Multimedia } = details;

    return (
        <div className="bg-white mt-10  max-w-6xl mx-auto px-4 lg:px-10">
            <div>
                <h2 className="text-3xl pt-2 font-semibold">Samsung Galaxy A35 5G</h2>
            </div>

            <section className="mt-5">
                <div className="py-3"><hr /></div>
                {/* Key Specs Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500 text-lg md:text-2xl">Key Specs</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">RAM & Storage</p>
                            <p className="w-[50%]">{Key_Specs?.Storage}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Processor</p>
                            <p className="w-[50%]">{Performance?.Chipset}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Real Camera</p>
                            <p className="w-[50%]">{Key_Specs?.Rear_Camera}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Front Camera</p>
                            <p className="w-[50%]">{Key_Specs?.Front_Camera}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Battery</p>
                            <p className="w-[50%]">{Key_Specs?.Battery}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Display</p>
                            <p className="w-[50%]">{Key_Specs?.Display}</p>
                        </li>
                    </ul>
                </div>

                <div className="py-3"><hr /></div>
                {/* General Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500 text-2xl">General</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Operating System</p>
                            <p className="w-[50%]">{General?.OperatingSystem}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Brand</p>
                            <p className="w-[50%]">{General?.Brand}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Release Date</p>
                            <p className="w-[50%]">{General?.Release_Date}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Price</p>
                            <p className="w-[50%]">{General?.Price}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-3"><hr /></div>

                {/* Performance Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500  md:text-xl lg:text-2xl">Performance</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Chipset</p>
                            <p className="w-[50%]">{Performance?.Chipset}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">CPU</p>
                            <p className="w-[50%]">{Performance?.CPU}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">GPU</p>
                            <p className="w-[50%]">{Performance?.GPU}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">RAM</p>
                            <p className="w-[50%]">{Performance?.RAM?.join(" , ")}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Software</p>
                            <p className="w-[50%]">{Performance?.Software}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Software Updates</p>
                            <p className="w-[50%]">{Performance?.Software_Updates}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-3"><hr /></div>

                {/* Display Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500 text-2xl">Display</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Display Type</p>
                            <p className="w-[50%]">{Display?.Type}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Display Size</p>
                            <p className="w-[50%]">{Display?.Size}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Resolution</p>
                            <p className="w-[50%]">{Display?.Resolution}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Aspect Ratio</p>
                            <p className="w-[50%]">{Display?.Aspect_Ratio}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Pixel Density</p>
                            <p className="w-[50%]">{Display?.Pixel_Density}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Refresh Rate</p>
                            <p className="w-[50%]">{Display?.Refresh_Rate}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Brightness</p>
                            <p className="w-[50%]">{Display?.Brightness}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Protection</p>
                            <p className="w-[50%]">{Display?.Protection}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Features</p>
                            <p className="w-[50%]">{Display?.Features}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-3"><hr /></div>

                {/* Design Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500 text-2xl">Design</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Dimensions</p>
                            <p className="w-[50%]">{Design?.Dimensions}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Weight</p>
                            <p className="w-[50%]">{Design?.Weight}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Build</p>
                            <p className="w-[50%]">{Design?.Build}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Colors</p>
                            <p className="w-[50%]">{Design?.Colors?.join(" , ")}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Water Resistance</p>
                            <p className="w-[50%]">{Design?.Water_Resistance}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-3"><hr /></div>

                {/* Camera Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500 text-2xl">Camera</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        {/* Main Camera */}
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Main Camera</p>
                            <p className="w-[50%] space-x-2">
                                <span>{Camera?.Rear_Camera?.Triple[0]?.Sensor}</span>
                                <span>{Camera?.Rear_Camera?.Triple[0]?.Features.join(" , ")}</span>
                                <span>{Camera?.Rear_Camera?.Triple[0]?.Aperture}</span>
                            </p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold"></p>
                            <p className="w-[50%] space-x-2">
                                <span>{Camera?.Rear_Camera?.Triple[1]?.Sensor}</span>
                                <span>{Camera?.Rear_Camera?.Triple[1]?.Features.join(" , ")}</span>
                                <span>{Camera?.Rear_Camera?.Triple[1]?.Aperture}</span>
                            </p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold"></p>
                            <p className="w-[50%] space-x-2">
                                <span>{Camera?.Rear_Camera?.Triple[2]?.Sensor}</span>
                                <span>{Camera?.Rear_Camera?.Triple[2]?.Features.join(" , ")}</span>
                                <span>{Camera?.Rear_Camera?.Triple[2]?.Aperture}</span>
                            </p>
                        </li>
                        {/* Video */}
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Video Recording</p>
                            <p className="w-[50%] space-x-2">{Camera?.Rear_Camera?.Video?.join(" , ")}</p>
                        </li>
                        {/* image main camera */}
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Image Resolution</p>
                            <p className="w-[50%] space-x-2">{Camera?.Rear_Camera?.Image}</p>
                        </li>
                        <div className="mt-1 border border-dashed"></div>
                        {/* front camera */}
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold text-gray-500 text-2xl">Front Camera</p>
                            <p className="w-[50%] space-x-2"></p>
                        </li>
                        <div className="mt-1 border border-dashed"></div>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Front Camera</p>
                            <p className="w-[50%] space-x-2">
                                <span>{Camera?.Front_Camera?.Single.Sensor}</span>
                                <span>{Camera?.Front_Camera?.Single.Aperture}</span>
                            </p>
                        </li>
                        {/* video front camera */}
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Video Recording</p>
                            <p className="w-[50%] space-x-2">{Camera?.Front_Camera?.Video?.join(" , ")}</p>
                        </li>
                        {/* Image front camera */}
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Image Resolution</p>
                            <p className="w-[50%] space-x-2">{Camera?.Front_Camera?.Image}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-3"><hr /></div>

                {/* Battery Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500 text-2xl">Battery</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Capacity</p>
                            <p className="w-[50%]">{Battery?.Capacity}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Type</p>
                            <p className="w-[50%]">{Battery?.Type}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Charging</p>
                            <p className="w-[50%]">{Battery?.Charging}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Battery Life</p>
                            <p className="w-[50%]">{Battery?.Battery_Life}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-3"><hr /></div>

                {/* Storage Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500 text-2xl">Storage</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Capacity</p>
                            <p className="w-[50%]">{Storage?.Internal?.join(" , ")}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Expandable</p>
                            <p className="w-[50%]">{Storage?.Expandable}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-3"><hr /></div>

                {/* Network_Connectivity Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500 text-lg md:text-xl lg:text-2xl">Network & Connectivity</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">SIM</p>
                            <p className="w-[50%]">{Network_Connectivity?.SIM}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Network Types</p>
                            <p className="w-[50%]">{Network_Connectivity?.Network_Types?.join(" , ")}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Wi-Fi</p>
                            <p className="w-[50%]">{Network_Connectivity?.Wi_Fi?.join(" , ")}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Bluetooth</p>
                            <p className="w-[50%]">{Network_Connectivity?.Bluetooth}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">GPS</p>
                            <p className="w-[50%]">{Network_Connectivity?.GPS?.join(" , ")}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">NFC</p>
                            <p className="w-[50%]">{Network_Connectivity?.NFC}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">USB</p>
                            <p className="w-[50%]">{Network_Connectivity?.USB}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-3"><hr /></div>

                {/* Multimedia Section */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 md:col-span-2">
                        <h2 className="text-gray-500 text-lg md:text-xl lg:text-2xl">Multimedia</h2>
                    </div>
                    <ul className="col-span-9 md:col-span-8 space-y-2">
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">Loudspeaker</p>
                            <p className="w-[50%]">{Multimedia?.Loudspeaker}</p>
                        </li>
                        <li className="flex col-span-8">
                            <p className="w-[50%] font-semibold">3.5mm_Jack</p>
                            <p className="w-[50%]">{Multimedia?.mm_Jack}</p>
                        </li>
                    </ul>
                </div>
                <div className="py-3"><hr /></div>
            </section>

        </div>
    );
};

export default DetailsInfo;