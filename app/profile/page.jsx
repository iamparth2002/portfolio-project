'use client'
import React, { useEffect, useState } from 'react'
import UserInfo from '../../components/Profile/UserInfo'
import ProjectList from '../../components/Profile/ProjectList'
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import app from './../../firebaseConfig'
import { useUser } from '@clerk/nextjs';


const page = () => {
  const { isLoaded, isLoading, user } = useUser();

  const db=getFirestore(app);
  const [userProject,setUserProject]=useState([]);
  
  useEffect(()=>{
      if(user)
      {
          setUserProject([]); 
          getUserProject();
      }
  },[user])

  const getUserProject=async()=>{
      
      if(user)
      {
         
          const q=query(collection(db,'Projects'),
          where('email','==',user?.primaryEmailAddress?.emailAddress)
          // ,orderBy('id','desc')
        );
          const querySnapshot =await getDocs(q);
          querySnapshot.forEach((doc) => {
            
            console.log(doc.data());
              let data=doc.data()
              setUserProject(userProject=>
                  [...userProject,data]);
              
            });
      }
  }

  return (
    <div className='px-3 md:px-10'>
        <UserInfo/>
        
        <ProjectList userProject={userProject}/> 
        

    </div>
  )
}

export default page