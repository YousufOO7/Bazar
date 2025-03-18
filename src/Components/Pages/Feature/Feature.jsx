import { useQuery } from "@tanstack/react-query";
import TitleShared from "../../../Shared/TitleShared/TitleShared";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";


const Feature = () => {
    const axiosPublic = useAxiosPublic();

    const { data: phones = [] } = useQuery({
        queryKey: ["phones"],
        queryFn: async () => {
            const res = await axiosPublic.get("/phones")
            return res.data.slice(0, 1)
        }
    })

    const { data: laptops = [] } = useQuery({
        queryKey: ["laptops"],
        queryFn: async () => {
            const res = await axiosPublic.get("/laptops")
            return res.data.slice(0, 1)
        }
    })

    const { data: bluetooths = [] } = useQuery({
        queryKey: ["bluetooths"],
        queryFn: async () => {
            const res = await axiosPublic.get("/bluetooths")
            console.log(bluetooths)
            return res.data.slice(0, 1)
        }
    })

    return (
        <div className="my-10">
            {/* title */}
            <div className="mb-10">
                <TitleShared heading={"Feature Category"} subHeading={"Get your desired product from featured category"} />
            </div>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto">
                {/* feature items */}
                {
                    phones.map(phone => (
                        <div key={phone._id} className="flex justify-between gap-5 items-center border rounded-md">
                            <div className="flex justify-center items-center">
                                <div><img src={phone?.mainImage} className="w-32 h-32" alt="" /></div>
                                <div>
                                    <h2 className="text-xl font-semibold uppercase">{phone?.category}</h2>
                                   <Link to="/allPhones"> <button><FaEye className="text-4xl mt-5" /></button></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* laptop */}
                {
                    laptops.map(laptop => (
                        <div key={laptop._id} className="flex justify-between gap-5 border rounded-md">
                            <div className="flex justify-center items-center">
                                <div><img src={laptop?.mainImage} className="w-32 h-32" alt="" /></div>
                                <div>
                                    <h2 className="text-xl font-semibold uppercase">{laptop?.category}</h2>
                                  <Link to="/allLaptops">  <button><FaEye className="text-4xl mt-5" /></button></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* bluetooth */}
                {
                    bluetooths.map(bluetooth => (
                        <div key={bluetooth._id} className="flex justify-between gap-5 border rounded-md">
                            <div className="flex justify-center items-center">
                                <div><img src={bluetooth?.mainImage} className="w-32 h-32" alt="" /></div>
                                <div>
                                    <h2 className="text-xl font-semibold uppercase">{bluetooth?.category}</h2>
                                 <Link to="/allBluetooth">   <button><FaEye className="text-4xl mt-5" /></button></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>

        </div>
    );
};

export default Feature;