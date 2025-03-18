import React from 'react';
import TitleShared from '../../../Shared/TitleShared/TitleShared';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePayment = loadStripe(import.meta.env.VITE_Payment_API)

const Payment = () => {
    return (
        <div className='bg-white h-full'>
            <TitleShared heading={"Payment"} />

            <div className='px-5'>
                <Elements stripe={stripePayment}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;