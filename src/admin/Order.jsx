
import OrderCard from "./OrderCard";
import ActiveOrderList from "./ActiveOrderList";

const ordersList = [
  [
    {
      name: "Ashirvaad Atta",
      unit: "2KG",
    },
    {
      name: "Lakhi Bhog",
      unit: "4KG",
    },
    {
      name: "Jeera powder",
      unit: "1Pice",
    },
    {
      name: "Goolki",
      unit: "50G",
    },
    {
      name: "Lays",
      unit: "2Pice",
    },
    {
      name: "Sprite",
      unit: "1Pice",
    },
  ],
  [
    {
      name: "Long",
      unit: "20G",
    },
    {
      name: "Tea",
      unit: "4Pice",
    },
    {
      name: "Coffee",
      unit: "2Pice",
    },
    {
      name: "Amul Dahi",
      unit: "1Picw",
    },
    {
      name: "Lays",
      unit: "2Pice",
    },
    {
      name: "Sprite",
      unit: "1Pice",
    },
  ],
  [
    {
      name: "Corn Flour",
      unit: "50G",
    },
    {
      name: "Badam",
      unit: "1KG",
    },
    {
      name: "Cheese",
      unit: "1Pice",
    },
    {
      name: "Dal Chini powder",
      unit: "50G",
    },
    {
      name: "Lays",
      unit: "2Pice",
    },
    {
      name: "Dal Chinni",
      unit: "20G",
    },
  ],
  [
    {
      name: "Olive Oil",
      unit: "2KG",
    },
    {
      name: "Lakhi Bhog",
      unit: "4KG",
    },
    {
      name: "Jeera powder",
      unit: "1Pice",
    },
    {
      name: "Lal Mirchi",
      unit: "50G",
    },
    {
      name: "Sendha Namak",
      unit: "2Pice",
    },
    {
      name: "Kala Namak",
      unit: "1Pice",
    },
  ],
  [
    {
      name: "Coconut Oil",
      unit: "2KG",
    },
    {
      name: "Rice Villa",
      unit: "3KG",
    },
    {
      name: "Jeera powder",
      unit: "1Pice",
    },
    {
      name: "Patanjali Atta",
      unit: "5KG",
    },
    {
      name: "Lays",
      unit: "2Pice",
    },
    {
      name: "Coca Cola",
      unit: "1Pice",
    },
  ],
];

const Order = () => {
  return (
    <>
    <div className="relative">
      <div className="h-[90vh] lg:h-[86vh] py-2 px-6 lg:py-4 lg:px-12 overflow-auto scrollbar-hide">
        <h1 className="font-heading text-[#2FA999] font-extrabold lg:text-[2vw] text-[6vw] ">
          Current Orders
        </h1>
        <div className="flex flex-wrap gap-y-8  gap-x-16 lg:gap-x-24 mt-4 ">
            {ordersList.map((e)=>(
                 <OrderCard list={e} />
            ))}
         
        </div>
        
      </div>
      <ActiveOrderList  />
      </div>
    </>
  );
};

export default Order;
