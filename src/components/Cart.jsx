import React, { useContext } from "react";
import Navbar from "./Navbar";
import { ItemContext } from "../context/ItemContext";

const Cart = () => {
  const { items,setItems ,activeOrders, setActiveOrders, setReset } = useContext(ItemContext);

  const totalBill = Object.entries(items)
    .filter(([_, value]) => value.count !== 0)
    .reduce((total, [_, value]) => {
      const itemPrice =
        value.unit === "G"
          ? (value.price / 1000) * value.count
          : value.price * value.count;

      return total + itemPrice;
    }, 0);

  const getItemPrice = (value) =>
    value.unit === "G"
      ? (value.price / 1000) * value.count
      : value.price * value.count;
  
  const cartItems = Object.entries(items)
  .filter(([_, value]) => value.count !== 0)
  .map(([name, value]) => ({
    name,
    quantity: `${value.count}${value.unit}`,
    price: getItemPrice(value),
      status: "Preparing"
  }));

  const handleClick= ()=>{
      if (cartItems.length === 0) return;

  setActiveOrders(prev => [
    ...prev,
    {
      id: Date.now(),
      items: cartItems,
    totalBill: totalBill,
    }
  ]);
  setItems({});
  setReset(prev => prev + 1);
  }
console.log(activeOrders)
  return (
    <>
      <section className="relative  h-screen bg-white w-screen">
        <Navbar />
        <div className="h-[90vh] lg:h-[86vh] flex flex-col justify-start items-center gap-[10vw] lg:gap-[3vw] overflow-auto scrollbar-hide">
          <div>
          <h2 className="font-heading font-extrabold text-2xl text-black justify-self-start m-2">
            Cart
          </h2>
          <div className="w-[90vw] lg:w-[80vw] bg-[#DEECEA]  rounded-2xl shadow-xl shadow-black flex flex-col px-[4vw] pb-[6vw] pt-[4vw] lg:pb-[3vw] lg:pt-[2vw]">
            <table>
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
                {Object.entries(items)
                  .filter(([_, value]) => value.count !== 0)
                  .map(([name, value]) => (
                    <tr className="border-b-[1px] border-black font-heading font-extrabold my-1">
                      <td className="text-center">{`${value.count}${value.unit}`}</td>
                      <td className="text-center">{name}</td>
                      <td className="text-center text-[#388E3C]">{`₹${getItemPrice(value)}`}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="text-left mt-4 font-heading font-extrabold text-xl">
              Total: ₹{totalBill.toFixed(2)}
              <button onClick={handleClick} className="ml-[28vw] lg:ml-[60vw] px-[4vw] lg:px-[2vw] text-white  rounded-xl bg-[#C36137] text-lg">
                Place Order
              </button>
            </div>
          </div>
          </div>
          {activeOrders.map((value)=>(
          <div
          key={value.id}>
              <h2 className="font-heading font-extrabold text-2xl text-black justify-self-start m-2">
            Active Orders
          </h2>
                  <div className="w-[90vw] lg:w-[80vw] bg-[#DEECEA]  rounded-2xl shadow-xl shadow-black flex flex-col px-[4vw] pb-[6vw] pt-[4vw] lg:pb-[3vw] lg:pt-[2vw]">
            <table>
              <thead>
                <tr className="border-b-2 border-black font-heading font-extrabold text-xl">
                  <td className="text-center">Item List</td>
                </tr>
                <tr className="border-b-[1px] border-black font-heading font-extrabold my-1 text-xl">
                  <td className="text-center">Quantity</td>
                  <td className="text-center">Product</td>
                  <td className="text-center">Price</td>
                  <td className="text-center">Status</td>
                </tr>
              </thead>
              <tbody>
                {value.items.map((e)=>(
                   <tr className="border-b-[1px] border-black font-heading font-extrabold my-1">
                      <td className="text-center">{e.quantity}</td>
                      <td className="text-center">{e.name}</td>
                      <td className="text-center text-[#388E3C]">{e.price}</td>
                      <td className="text-center text-[#388E3C]">{e.status}</td>
                    </tr>
                ))}
                  
                   
              </tbody>
            </table>
            <div className="text-left mt-4 font-heading font-extrabold text-xl">
              Total: ₹{value.totalBill}
            </div>
          </div>
          </div>
          
           ))}  
        </div>
      </section>
    </>
  );
};

export default Cart;
