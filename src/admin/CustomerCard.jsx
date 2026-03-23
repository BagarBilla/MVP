import React from 'react'
import profile from '../assets/OIP.webp'
import { useNavigate } from 'react-router-dom'
const CustomerCard = ({customer}) => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/khata')
    }
  return (
    <>
    
      <div onClick={handleClick} className='relative h-[25vw] lg:h-[15vw] w-[50vw] lg:w-[30vw] bg-[#DEECEA] m-4 flex justify-center items-center rounded-lg shadow-xl hover:scale-110 hover:shadow-2xl hover:cursor-pointer transition-all duration-100'>
        <span className={`${customer.activeOrder ? 'absolute' : 'hidden'} bg-[#D32F2F] rounded-full font-heading font-extrabold text-white h-8 w-8 lg:h-10 lg:w-10 flex justify-center items-center -top-2 -right-2`}>!</span>
        <img src={profile} alt="Profile Image" className='h-[18vw] w-[18vw] lg:h-[12vw] lg:w-[12vw]' />
        <div className='font-heading font-extrabold text-[2.4vw] lg:text-[1.4vw] px-2 py-4'>
        <h2 className='text-[#D32F2F]'>{customer.id}</h2>
        <h2>Name: {customer.name}</h2>
        <h2>Phone No: {customer.phnNO}</h2>
        <h2 className='text-[#D32F2f]'>Due: {customer.due}</h2>
        </div>
      </div>
    </>
  )
}

export default CustomerCard
