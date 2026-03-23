import React, { useContext, useState } from 'react'
import { ItemContext } from '../context/ItemContext'
const AddOrder = () => {
    const {setOrders} = useContext(ItemContext);
    const [items, setItems] = useState([
        {name:"", unit:""}
    ])

    const handleChange = (index, field, value)=>{
        const updated = [...items];
        updated[index][field] = value;
        setItems(updated);
    }
    const handleAddItems = ()=>{
        setItems((prev)=> [...prev, {name: "", unit: ""}])
    }
    const handleSubmit = () =>{
        setOrders((prev)=> [...prev, items]);
        setItems([{name:"", unit:""}])
    }
   const handleDelete = (index) => {
  setItems((prev) => prev.filter((_, i) => i !== index));
};
  return (
    <>
      <div className="h-[90vh] lg:h-[86vh] py-2 px-6 lg:py-4 lg:px-12 overflow-auto scrollbar-hide flex flex-col items-center">
        <h1 className='font-heading font-extrabold text-[#2FA999] text-4xl '>Add new Order</h1>
        <div className='bg-[#DEECEA] w-[80vw] lg:w-[90vw] py-6 lg:py-10 rounded-xl mt-4 flex flex-col justify-center items-center '>
            {items.map((item, index)=>(
                <div className='flex flex-col gap-2'>
                <div className='flex gap-32 lg:gap-[36vw] justify-center font-heading font-extrabold'>
                    <label>Product</label>
                    <label>Quantity</label>
                </div>
                <div className='flex'>
                <input
                value={item.name}
                onChange={(e)=>
                    handleChange(index, "name", e.target.value)
                }
                 type="text" 
                 className='rounded-l-xl border-2 border-[#C36137] text-center h-[7vw] w-[34vw] lg:w-[40vw] lg:h-[3vw]' 
                 placeholder='Enter Product Name'/>
                <input 
                 value={item.unit}
                onChange={(e)=>
                    handleChange(index, "unit", e.target.value)
                }
                type="text"
                 className='rounded-r-xl border-2 border-[#C36137] text-center w-[34vw] lg:w-[40vw] h-[7vw] lg:h-[3vw]' 
                 placeholder='Enter Quantity'/>
                 <button onClick={() => handleDelete(index)} className='ml-2'>❌</button>
                </div>
               
            </div>
            ))}
            
            <div onClick={handleAddItems} className='bg-white h-[7vw]  lg:h-[3vw] w-[60vw] rounded-xl border-2 border-[#C36137] mt-2 flex gap-4 justify-center items-center hover:cursor-pointer hover:bg-[#C36137] transition-all duration-200'>
              <svg
                className="w-4 sm:w-5 md:w-6 lg:w-7 hover:scale-110"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 8.33325V31.6666M8.33334 19.9999H31.6667"
                  stroke="#1E1E1E"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2 className='font-heading font-extrabold text-black text-xl'>Add New Item</h2>
            </div>
        </div>
         <div onClick={handleSubmit} className='bg-white h-[7vw] lg:h-[3vw] w-[60vw] rounded-xl border-2 border-[#C36137] mt-2 flex gap-4 justify-center items-center hover:cursor-pointer hover:bg-[#C36137] transition-all duration-200'>
              <h2 className='font-heading font-extrabold text-black text-xl'>Submit</h2>
            </div>
      </div>
    </>
  )
}

export default AddOrder
