import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ShowPhonesByTable = () => {
    const axiosSecure = useAxiosSecure();

    const { data: phones = [] } = useQuery({
        queryKey: ["phones"],
        queryFn: async () => {
            const res = await axiosSecure.get("/phones")
            return res.data
        }
    })

    return (
        <div className="bg-white">
            <h2 className="text-3xl text-center font-bold py-3 underline">Phone's Data</h2>

            <div className="mt-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Model</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                phones.map((phone, idx) => (
                                    <tr key={phone._id}>
                                        <th>{idx + 1 }</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-16 w-16">
                                                        <img
                                                            src={phone?.mainImage}
                                                            alt={phone?.model} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{phone?.model}</td>
                                        <td>
                                            <button className="btn btn-ghost btn-xs">Update</button>
                                        </td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">Delete</button>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShowPhonesByTable;