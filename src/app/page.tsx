"use client"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
    const [using,setUsing] = useState({id:'',name:'',email:''});
  
    useEffect(()=>{
      showUser();
    },[]);
  const router = useRouter();

  async function showUser(){
    try{
      const response = await axios.get('/api/users/user');
      const userData = response.data.data;

      setUsing((prevUsing) => ({
        ...prevUsing,
        id: userData._id,
        email: userData.email,
        name: userData.name,
      }));
      // console.log(using);
    }catch(error){
      console.log(error)
    }
  }

  async function logout(){
    await axios.get('/api/users/logout').
    then((res)=>{
      console.log('logged out',res)
      router.push('/login/');
    }
    ).catch((error:any)=>{
      toast.error(error.message);
      console.log(error)
    })

  }
  return (
    <><div className='w-screen bg-white h-screen flex justify-center items-center'>
      <main className='bg-white '>
      <h1 className='text-black text-center '>Hello {using.name}</h1>
      <h1 className='text-black text-center '>Email: {using.email}</h1>
      <div className='flex justify-center'><button type="button" className='bg-black p-3 rounded-xl mt-5' onClick={()=>{logout()}}>Logout</button></div>
      </main>
    </div>
    </>
  )
}
