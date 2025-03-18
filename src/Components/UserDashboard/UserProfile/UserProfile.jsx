import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const UserProfile = () => {

    const {user} = useAuth();

    return (
        <div className='flex justify-center items-center h-screen'>
        <div className='bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5'>
          <img
            alt='cover photo'
            src={user?.photoURL}
            className='w-full mb-4 rounded-t-lg h-56'
          />
          <div className='flex flex-col items-center justify-center p-4 -mt-16'>
            <a href='#' className='relative block'>
              <img
                alt='profile'
                src={user.photoURL}
                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
              />
            </a>
  
            <p className='p-2 px-4 text-xs text-white bg-lime-500 rounded-full'>
             User
            </p>
            <div className='w-full p-2 mt-4 rounded-lg'>
              <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                <p className='flex flex-col'>
                  Name
                  <span className='font-bold text-black '>
                    {user?.displayName}
                  </span>
                </p>
                <p className='flex flex-col'>
                  Email
                  <span className='font-bold text-black '>{user?.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;