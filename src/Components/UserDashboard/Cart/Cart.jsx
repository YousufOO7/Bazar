import useCart from '../../../Hooks/useCart';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    // console.log(totalPrice)
    const axiosSecure = useAxiosSecure();

    const handleItemDelete = id => {
        Swal.fire({
            title: "Are you sure!",
            text: "You won't be able to revert it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    }

    return (
        <div className='bg-white h-full'>
            <div className="flex justify-evenly items-center py-10 px-10 bg-white">
                <h2 className="text-md md:text-xl lg:text-3xl font-semibold uppercase">Total Order: {cart.length}</h2>
                <h2 className="text-md md:text-xl lg:text-3xl font-semibold uppercase">Total Price:${totalPrice} </h2>
                {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn bg-[#D1A054] text-white">Pay</button>
                </Link> :
                    <button disabled className="btn bg-[#D1A054] text-white">Pay</button>
                }
            </div>

            <div className='bg-white px-5'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, idx) => <tr
                                    key={item._id}
                                >
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.model}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button
                                            onClick={() => handleItemDelete(item._id)}
                                            className="btn btn-ghost btn-md"
                                        >
                                            <FaTrash className="text-2xl text-red-600"></FaTrash>
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;