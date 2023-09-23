"use client"
import Link from 'next/link'
import React, { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

function LoginPage() {

    const router = useRouter();
    const [user,setUser] = useState({email:"",password:""});
    const headers = {
      'Content-Type': 'application/json', // Adjust the content type as needed
      // Add any other headers here if necessary
    };

    async function HandleForm(e:FormEvent){
      e.preventDefault();
      
      const result = await axios.post("/api/users/login/",user,{headers})
      .then((response) => {
          // Handle success
          console.log('Response:', response.data);
          toast.success("Logged In",{position:'top-center'})
          router.push("/") 
        })
        .catch((error) => {
          // Handle error
          console.error('Error:', error);
          toast.error("Login error",{position:'top-center'});
        });
    }

    

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center text-black">Login</h2>
        <form onSubmit={(e)=>{HandleForm(e)}}>
        
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={(e)=>{setUser({...user,email:e.target.value})}}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e)=>{setUser({...user,password:e.target.value})}}
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Login
          </button>
          <div className='text-black pt-5 text-center'>Don't have an account? <Link href='/signup'>SignUp</Link></div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage