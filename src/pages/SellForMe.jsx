import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNavbar from '../components/TopNavbar'

const SellForMe = () => {
  return (
    <div className=''>
      <TopNavbar className="bg-radial-[at_50%_75%] from-[#bc9a71] via-[#3b270c] to-[#211b14] to-90% "/>
      <Outlet/>
      <div className='flex flex-col gap-2 justify-center  items-center bg-white  text-3xl'>

     <p>Working in progress !!!</p> 
     <p>Go back</p> 
      </div>
    </div>
  )
}

export default SellForMe
