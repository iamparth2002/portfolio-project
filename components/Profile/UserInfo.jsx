'use client'
import { useUser } from '@clerk/nextjs';
import { ImagePlus } from 'lucide';
import Image from 'next/image';
import React from 'react';


function UserInfo() {
  const { isLoaded, isLoading, user } = useUser();

  


 
  return (
    <div className="mt-12">
      {user ? (
        <div
          className="flex flex-col
        items-center  border-b-[2px] pb-5"
        >
          <Image
            src={user?.imageUrl}
            width={75}
            height={75}
            alt="user_image"
            className="rounded-full"
          />

          <h2
            className="text-[30px] font-bold
        text-blue-500"
          >
         
            {user.username}
          </h2>
          <h2 className="text-gray-400">
            {user?.primaryEmailAddress?.emailAddress}
          </h2>
        </div>
      ) : null}
    </div>
  );
}

export default UserInfo;
