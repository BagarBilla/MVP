import React, { useContext, useState } from 'react'
import { TogllerContext } from '../context/TogllerContext'

const OrderCard = ({list}) => {
  const { setActive} = useContext(TogllerContext);
  return (
    <>
      <div onClick={() => setActive(true)}  className=' hover:cursor-pointer hover:scale-110 transition-all duration-100 h-[36vw] lg:h-[20vw] w-[30vw] lg:w-[16vw] bg-[#DEECEA] rounded-xl flex flex-col justify-center items-center shadow-xl'>
            <h2 className='font-heading font-extrabold text-[#D32F2F] text-[2.2vw] lg:text-[1.4vw] self-start ml-3'>Order ID: 247817hdw</h2>
            <table className='font-heading font-medium text-[2vw] lg:text-[1vw] mt-2'>
              <tbody>
                {list.map((e)=>(
                  <tbody>
                  <tr key={e.name} className='flex lg:w-[14vw]  w-[26vw] border-b border-black'>
                    <td>{e.name}:</td>
                    <td className='flex justify-end flex-1'>{e.unit}</td>
                  </tr>
                  </tbody>
                ))}
              </tbody>
            </table>
      </div>
    </>
  )
}

export default OrderCard
