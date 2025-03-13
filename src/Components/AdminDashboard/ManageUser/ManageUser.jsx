import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUser = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    });


    // makeAdmin
    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/users/admin/${user._id}`)
                refetch()
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: `${user.name} is now an Admin!`,
                        icon: "success"
                    });
                }
            }
        });
    }


    // handleDelete
    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/users/${user._id}`)
                refetch()
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: `${user.name} is now an Moderator!`,
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        <div className="bg-white my-5">
            <h2 className="text-center text-4xl font-semibold pt-5 underline">Manage User</h2>

            <div className="mt-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, idx) => (
                                    <tr key={user._id}>
                                        <th>{idx + 1}</th>
                                        <td>{user?.email}</td>
                                        <td className="px-4 py-4 text-sm">

                                            {user?.role === 'admin' ? 'Admin' : <button
                                            onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-sm bg-[#eb914c] hover:bg-[#d66f25] text-white">User <FaUser></FaUser></button>}

                                        </td>
                                        <td>
                                            <button 
                                            className="text-red-700 text-xl"
                                            onClick={() => handleDelete(user)} ><FaTrash /></button>
                                        </td>
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

export default ManageUser;