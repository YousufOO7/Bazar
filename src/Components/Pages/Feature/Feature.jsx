import { useEffect, useState } from "react";
import TitleShared from "../../../Shared/TitleShared/TitleShared";
import axios from "axios";
import { Link } from "react-router";


const Feature = () => {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        axios.get("./feature.json")
            .then(res => {
                setFeatures(res.data)
            })
    }, [])

    return (
        <div className="my-10">
            {/* title */}
            <div className="mb-10">
                <TitleShared heading={"Feature Category"} subHeading={"Get your desired product from featured category"} />
            </div>

            {/* feature items */}
            <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 my-5 px-4 md:px-8 lg:px-16">
                {
                    features.map(item => (
                        <Link to="details"><div key={item.id} className="group bg-gray-200 px-2 py-5 rounded-xl">
                            <div className="flex justify-center">
                                <img src={item.image} alt="" className="w-20" />
                            </div>
                            <div className="flex justify-center">
                                <p className="group-hover:text-[#FF882A]">{item.category}</p>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </section>
        </div>
    );
};

export default Feature;