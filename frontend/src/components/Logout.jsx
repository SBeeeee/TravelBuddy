import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '@/store/auth/slice';
import { logoutt } from './logout.api';
function Logout() {
    const dispatch =useDispatch();
        const handleclick=async()=>{
            try{
                const res=await logoutt();
                
            
                    dispatch(logout());
                    alert("You have been logged out")
            }
            catch(error){
                console.log(error);
            }
        }

  return (
    
       <div onClick={()=>handleclick()}
             
              className="bg-red-600 text-white text-center px-3 py-2 rounded-md text-md hover:bg-red-700 hover:cursor-pointer transition"
            >
            Logout
            </div>

  )
}

export default Logout
