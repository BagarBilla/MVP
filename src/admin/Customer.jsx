import React from 'react'
import CustomerCard from './CustomerCard'

const Customer = () => {
  const customer = [
    {
      id:"57628ZY",
      name:"Piyush Prasad",
      phnNO:"8210598841",
      due:0,
      activeOrder:true,
    },
     {
    id: "84391AB",
    name: "Rahul Sharma",
    phnNO: "9876543210",
    due: 250,
    activeOrder: true,
  },
  {
    id: "12983KL",
    name: "Anjali Verma",
    phnNO: "9123456780",
    due: 0,
    activeOrder: false,
  },
  {
    id: "66721MN",
    name: "Amit Kumar",
    phnNO: "9988776655",
    due: 120,
    activeOrder: true,
  },
  {
    id: "45890PQ",
    name: "Sneha Singh",
    phnNO: "9012345678",
    due: 0,
    activeOrder: false,
  },
  {
    id: "77412RS",
    name: "Vikash Gupta",
    phnNO: "8899776655",
    due: 500,
    activeOrder: true,
  }
  ]
  return (
    <>
      <div className="h-[90vh] lg:h-[86vh] py-2 px-6 lg:py-4 lg:px-12 overflow-auto scrollbar-hide flex flex-col ">
        <h1 className="font-heading font-extrabold text-[#2FA999] text-4xl ">
          Customer
        </h1>
        <div className='flex flex-wrap gap-x-20'>
        {customer.map((e)=>(
          <CustomerCard customer={e} />
        ))}
        </div>
        
      </div>
    </>
  )
}

export default Customer
