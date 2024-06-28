
import { UserButton, useUser } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const { userId } = auth()

    return (
        <div className='p-3 border shadow-lg flex items-center justify-between'>
            <Link href="/">
                <div className='flex items-center gap-2'>
                    <img src="/logo.png" alt="" className='h-16 w-16 rounded-full' />

                    <h1 className='text-2xl font-semibold'>Projects.</h1>

                </div>
            </Link>

            {userId ? <div className='flex gap-4 items-center'>

                <Link href='create-post'>
                    <button className='py-2 px-3 bg-black text-white rounded-3xl flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                        <div className='hidden md:flex'>
                            Create Post
                        </div>
                    </button>
                </Link>
                <Link href='profile'>
                    <button className='py-2 px-3 bg-black text-white rounded-3xl flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg><div className='hidden md:flex'>Your Projects
                        </div></button>
                </Link>
                <div className="flex items-center justify-center bg-gray-200 rounded-full p-2 hover:bg-gray-300">
                    <UserButton />
                </div>
            </div> :
                <div className='flex gap-4'>
                    <Link href='sign-in'>
                        <button className='py-2 px-3 bg-gray-400 text-white rounded-3xl'>Sign In</button>
                    </Link>
                    <Link href='sign-up'>
                        <button className='py-2 px-3 bg-black text-white rounded-3xl'>Sign-Up</button>
                    </Link>

                </div>
            }


        </div>
    )
}

export default Header