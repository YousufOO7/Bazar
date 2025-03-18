import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price ,0);
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useAuth();
    const [transitionId, setTransitionId] = useState('');

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error) {
            // console.log("payment error", error)
            setError(error.message)
        }
        else{
            // console.log("payment method", paymentMethod)
            setError('')
        }


         // confirm payment
         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'Anonymous'
                }
            }
        })

        if(confirmError) {
            // console.log("confirm error", confirmError)
            // setError(confirmError.message)
        }
        else{
            console.log("paymentIntent", paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                // console.log('transition id', paymentIntent.id);
                setTransitionId(paymentIntent.id);

                 // save to database
                 const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date,
                    transitionId: paymentIntent.id,
                    cartId: cart.map(item => item._id),
                    productId: cart.map(item => item.productId),
                    status: 'pending'
                }

                 // send to database
                 const res = await axiosSecure.post('/payments', payment);
                //  console.log('payment save', res.data);
                 refetch();
                 if (res.data?.paymentResult?.insertedId) {
                     Swal.fire({
                         position: 'center',
                         icon: 'success',
                         title: 'Payment successful!.',
                         showConfirmButton: false,
                         timer: 1500
                     });
                    //  navigate('/dashboard/paymentHistory')
                 }
             
            }
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary my-3" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600 mt-5">{error}</p>
            {transitionId && <p className="text-green-600">Your transition id: {transitionId}</p>}
        </form>
    );
};

export default CheckoutForm;