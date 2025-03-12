import { useEffect, useState } from "react";
import TitleShared from "../../../Shared/TitleShared/TitleShared";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const NewArrive = () => {

    const [newArrive, setNewArrive] = useState([]);

    const axiosPublic = useAxiosPublic();

    useEffect( () => {
        axiosPublic.get("/new-arrive")
        .then(res => {
            setNewArrive(res.data)
        })
    } ,[axiosPublic])

    return (
        <div>
            <div className="my-10">
                <TitleShared heading={"New Arrive"} />
                <div className="flex justify-center mt-5">
                    <button className="px-4 py-1 border-b-2 border-[#ff882a]">Gadgets</button>
                </div>
            </div>

            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 px-4 md:px-8 lg:px-16">
                {
                    newArrive.map(arrive => (
                        <div key={arrive.id} className="w-[200px] rounded-2xl p-1 border-2 shadow-md">
                            <div className="flex justify-center">
                                <img src={arrive.image} alt="" className="h-[180px]" />
                            </div>

                            <div className="items-center text-center mb-5">
                                <h3 className="text-semibold mb-5">{arrive.title}</h3>
                                <p>{arrive.price}</p>
                            </div>

                            <div className="flex justify-evenly pb-3">
                                <button className="lg:px-4 p-1  text-xs lg:text-sm bg-[#ff882a] text-white rounded-md">Buy Noe</button>
                                <button className="lg:px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md">Add To Cart</button>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default NewArrive;