'use client';
import React, { useEffect, useState } from 'react';

import ProjectList from './../components/Profile/ProjectList';
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import app from '../firebaseConfig';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';

export default function Home() {
  const { isLoaded, isLoading, user } = useUser();

  const db = getFirestore(app);
  const [userProject, setUserProject] = useState([]);

  useEffect(() => {
    
      setUserProject([]);
      getUserProject();
  
  }, []);

  const getUserProject = async () => {
    
      const q = query(
        collection(db, 'Projects')
        // ,orderBy('id','desc')
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        let data = doc.data();
        setUserProject((userProject) => [...userProject, data]);
      });
    
  };

  return (
    <div className='px-2 md:px-10'>
      <ProjectList userProject={userProject} />
    </div>
  );
}
