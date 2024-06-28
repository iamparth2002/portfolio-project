'use client';
import Form from '@/components/CreateProject/Form';
import { useUser } from '@clerk/nextjs';
import { auth, clerkClient } from '@clerk/nextjs/server';
import React, { useEffect } from 'react';

const page = () => {
  // const { isLoaded, isLoading, user } = useUser();


  // if (isLoading) {
    
  //   return <div>Loading...</div>;
  // }

  // if (!isLoaded || !user) {
  //   return <div>No user data available</div>;
  // }
  return (
    <>
    <Form/>
    </>
    // <div className="p-4">
    //   <h1 className="text-2xl font-bold mb-4">User Profile</h1>
   
    //   <p>
    //     <strong>ID:</strong> {user.id}
    //   </p>
    //   <p>
    //     <strong>Username:</strong> {user.username}
    //   </p>
    //   <p>
    //     <strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}
    //   </p>
    //   <p>
    //     <strong>firstname:</strong> {user.firstName}
    //   </p>
    //   <p>
    //     <strong>image:</strong> {user.has_image}
    //   </p>
      
    //   <img src={user.imageUrl} alt="" />
    // </div>
  );
};

export default page;
