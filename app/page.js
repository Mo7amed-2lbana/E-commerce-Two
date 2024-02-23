"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const App =  () => {
  let nav = useRouter();
  
  useEffect(()=>{
    nav.replace("1");
  },[])
  return (
    <>
    </>
  );
};

export default App;
