import React, { useState, useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import Navbar from "./Navbar";
import { style } from "framer-motion/client";
import Display from "./Display";

const Khata = () => {
    const [month, setMonth] = useState("March");
    const { activeOrders, } = useContext(ItemContext);
      const today = new Date();
  const formattedDate = today.toLocaleDateString();
  return (
    <>
      {/* allow vertical scrolling on the full screen container */}
      <section className="relative h-screen bg-white w-screen">
        {/* navbar always visible (Navbar may already be fixed internally) */}
        <Navbar />
        {/* main content area – header stays fixed, orders list scrolls */}
        <div className="h-[90vh] lg:h-[86vh] flex flex-col">
          {/* sticky header inside scrollable container */}
          <div className="sticky top-0 bg-white z-10">
            {/* months row should scroll horizontally on smaller screens */}
            <div className="flex flex-row lg:justify-evenly gap-6 lg:gap-0 p-2 overflow-x-auto scrollbar-hide font-heading font-extrabold text-lg lg:text-2xl border-b-4 border-[#C36137]">
            <h2 onClick={()=> setMonth("January")} className="hover:text-[#2FA999] cursor-pointer" >January</h2>
            <h2 onClick={()=> setMonth("Febuary")} className="hover:text-[#2FA999] cursor-pointer" >February</h2>
            <h2 onClick={()=> setMonth("March")} className="hover:text-[#2FA999] cursor-pointer" >March</h2>
            <h2 onClick={()=> setMonth("April")} className="hover:text-[#2FA999] cursor-pointer" >April</h2>
            <h2 onClick={()=> setMonth("May")} className="hover:text-[#2FA999] cursor-pointer" >May</h2>
            <h2 onClick={()=> setMonth("June")} className="hover:text-[#2FA999] cursor-pointer" >June</h2>
            <h2 onClick={()=> setMonth("July")} className="hover:text-[#2FA999] cursor-pointer" >July</h2>
            <h2 onClick={()=> setMonth("Augest")} className="hover:text-[#2FA999] cursor-pointer" >August</h2>
            <h2 onClick={()=> setMonth("September")} className="hover:text-[#2FA999] cursor-pointer" >September</h2>
            <h2 onClick={()=> setMonth("October")} className="hover:text-[#2FA999] cursor-pointer" >October</h2>
            <h2 onClick={()=> setMonth("November")} className="hover:text-[#2FA999] cursor-pointer" >November</h2>
            <h2 onClick={()=> setMonth("December")} className="hover:text-[#2FA999] cursor-pointer" >December</h2>
          </div>
            <div className="flex flex-row px-4 py-1 justify-between scrollbar-hide font-heading gap-28 font-extrabold text-lg border-b-4 border-[#C36137]">
                <h1 className="font-heading font-extrabold text-[#2FA999] text-lg lg:text-3xl ">Mera Khata</h1>
                <h3 className="text-[#C36137] font-heading font-extrabold mt-2 ">Total Amount Due: <span className="text-[#D32F2F] font-heading font-extrabold">500</span></h3>
            </div>
          </div> {/* end sticky header */}
            <div className="flex-1 overflow-auto scrollbar-hide">
            <h3 className="font-heading font-extrabold text-xl mx-10 my-4 lg:m-10">{month}</h3>
            <div className="flex flex-col justify-center items-center gap-8 py-4">
                {activeOrders.map((value)=>(
          <div
          key={value.id} className="w-[90vw] lg:w-[80vw]">
                  <div className="bg-[#DEECEA]  rounded-2xl shadow-xl shadow-black flex flex-col px-[4vw] pb-[6vw] pt-[4vw] lg:pb-[3vw] lg:pt-[2vw]">
                    <h5 className="font-heading font-bold mb-1 lg:mb-2">Date:{formattedDate}</h5>
            <table >
              <thead>
                <tr className="border-b-2 border-black font-heading font-extrabold text-xl">
                  <td className="text-center">Item List</td>
                </tr>
                <tr className="border-b-[1px] border-black font-heading font-extrabold my-1 text-xl">
                  <td className="text-center">Quantity</td>
                  <td className="text-center">Product</td>
                  <td className="text-center">Price</td>
                </tr>
              </thead>
              <tbody>
                {value.items.map((e)=>(
                   <tr className="border-b-[1px] border-black font-heading font-extrabold my-1">
                      <td className="text-center">{e.quantity}</td>
                      <td className="text-center">{e.name}</td>
                      <td className="text-center text-[#388E3C]">{e.price}</td>
                    </tr>
                ))}
                  
                   
              </tbody>
            </table>
            <div className="text-center mt-4 font-heading font-extrabold text-xl ">
              Total: ₹{value.totalBill}
            </div>
            <div className="flex justify-evenly mt-4 font-heading font-extrabold text-lg lg:text-xl">
                <h3 className=" font-heading font-extrabold">Status:</h3>
                <h3 className="text-[#388E3C] font-heading font-extrabold">Paid:{value.totalBill/2}</h3>
                <h3 className="text-[#D32F2F] font-heading font-extrabold">Due:{value.totalBill/2}</h3>
            </div>
          </div>
          </div>
          
           ))}  
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Khata;
