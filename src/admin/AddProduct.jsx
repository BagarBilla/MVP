import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import { motion } from "framer-motion";

const AddProduct = () => {
  const { sections } = useContext(ItemContext);
 const [openSection, setOpenSection] = useState(false);
const [openCategory, setOpenCategory] = useState(false);
const [open, setOpen] = useState(false);
const [unit, setUnit] = useState("KG");
  const [catagory , setCatagory] =useState("Slect Section");
  const [Section , SetSection] = useState({id:"", name:"Select Section"});
  const [categoryList, setCategoryList] = useState([])
  const items = [
    {
        id:"quickOrder",
        name:"🍚 Grain s, Flour & Pulses (अनाज, आटा और दालें)",
    },
       {
        id:"SpicesSeasoningOil",
        name:"🧂 Spices, Seasoning & Oil (मसाले, तेल और घी)",
    },
       {
        id:"DairyEggsFrozen",
        name:"🥛 Dairy, Eggs & Frozen (डेयरी, अंडे और फ्रोजन)",
    },
       {
        id:"Beverages",
        name:"☕ Beverages (पेय पदार्थ)",
    },
       {
        id:"SnacksPackageFood",
        name:"🍩 Snacks & Packaged Food (स्नैक्स और पैकेज्ड फूड)",
    },
       {
        id:"PersonalCareHygiene",
        name:"🚿 Personal Care & Hygiene (व्यक्तिगत और स्वच्छता)",
    },
      {
        id:"HouseholdCleaning",
        name:"🧼 Household & Cleaning (घर की सफाई)",
    },
      {
        id:"PoojaMiscellaneous",
        name:"🕯️ Pooja & Miscellaneous (पूजा और अन्य ज़रुरतें)",
    },
  ]
  const handleSectionSelect  = (e)=>{
    SetSection(e);
    setOpenSection(false)
  }
  const handleCategorySelect = (item) => {
  setCatagory(item.lebal);
  setOpenCategory(false);
};
useEffect(() => {
  setCategoryList(sections[Section.id] || []);
}, [Section, sections]);
console.log(categoryList)
  return (
    <>
      <div className="h-[90vh] lg:h-[86vh] py-2 px-6 lg:py-4 lg:px-12 overflow-auto scrollbar-hide flex flex-col items-center">
        <h1 className="font-heading font-extrabold text-[#2FA999] text-4xl ">
          Add new Product
        </h1>
        <div className="bg-[#DEECEA] w-[80vw] lg:w-[60vw] py-6 lg:py-6 px-4 lg:px-8 rounded-xl mt-4  ">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="h-[30vw] w-[70vw] lg:h-[10vw] lg:w-[14vw] bg-[#f3f5f5] border border-black rounded-lg flex flex-col justify-center  p-2">
                <input type="file"  />
            </div>
            <div className="flex flex-col">
                <div>
              <h2 className="font-heading font-extrabold">Select section</h2>
              <div className="h-[8vw] lg:w-[30vw] w-[70vw] lg:h-[3vw] bg-[#f3f5f5] border border-black rounded-lg flex justify-end items-center p-2">
                <h4 className="mr-4 font-heading font-extrabold text-[2.4vw] lg:text-[1vw]">{Section.name}</h4>
                
                <motion.svg
                onClick={()=> openSection?setOpenSection(false):setOpenSection(true)}
                  className="hover:scale-[110%] hover:cursor-pointer w-6 sm:w-4 md:w-5 lg:w-8 "
                  animate={{ rotate: openSection ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                d="M10 15L20 25L30 15"
                stroke="#1E1E1E"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
                </motion.svg>
              </div>
              <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: openSection ? 1 : 0, y: openSection ? 0 : -10 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute  w-[40vw] lg:w-[30vw] border-2 border-black rounded-xl md:mt-2 mt-1 bg-white z-50 ${openSection ? "block" : "pointer-events-none"}`}
                      >
                        {items.map((e)=>(
                            <ul className="w-full h-full flex flex-col justify-center items-start overflow-hidden">
                          <li
                            onClick={()=>handleSectionSelect(e)}

                            className="px-2 w-full py-1 sm:py-2 font-heading font-extrabold text-[2vw] lg:text-[1.2vw] hover:bg-gradient-to-l from-[#2FA999]/0 to-[#2FA999]/50 transition-all duration-300  cursor-pointer"
                          >
                            {e.name}
                          </li>
                          <hr className="w-[80%] border-t-2 border-black/30 ml-2" />
                        </ul>
                        ))}
                        
                      </motion.div>
                      </div>
            
                    <div>
              <h2 className="font-heading font-extrabold">Select Catagory</h2>
              <div className="h-[8vw] w-[70vw] lg:w-[30vw] lg:h-[3vw] bg-[#f3f5f5] border border-black rounded-lg flex justify-end items-center p-2">
                <h4 className="mr-4 font-heading font-extrabold text-[2.4vw] lg:text-[1vw]">{catagory}</h4>
                
                <motion.svg
                onClick={()=> openCategory?setOpenCategory(false):setOpenCategory(true)}
                  className="hover:scale-[110%] hover:cursor-pointer w-6 sm:w-4 md:w-5 lg:w-8 "
                  animate={{ rotate: openCategory ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                d="M10 15L20 25L30 15"
                stroke="#1E1E1E"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
                </motion.svg>
              </div>
              <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: openCategory ? 1 : 0, y: openCategory ? 0 : -10 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute  w-[40vw] lg:w-[30vw] border-2 border-black rounded-xl md:mt-2 mt-1 bg-white z-50 ${openCategory ? "block" : "pointer-events-none"}`}
                      >
                        {categoryList.map((e)=>(
                            <ul className="w-full h-full flex flex-col justify-center items-start overflow-hidden">
                          <li
                            onClick={()=>handleCategorySelect(e)}

                            className="px-2 w-full py-1 sm:py-2 font-heading font-extrabold text-[2vw] lg:text-[1.2vw] hover:bg-gradient-to-l from-[#2FA999]/0 to-[#2FA999]/50 transition-all duration-300  cursor-pointer"
                          >
                            {e.lebal}
                          </li>
                          <hr className="w-[80%] border-t-2 border-black/30 ml-2" />
                        </ul>
                        ))}
                        
                      </motion.div>
            </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex flex-col justify-center items-start gap-2">
                <label className="font-heading font-extrabold">Name Of Product</label>
                <input type="text" placeholder="Enter Name" className="border border-black text-center rounded-md h-[6vw] lg:h-[2vw] lg:w-[40vw] w-[60vw]"/>
            </div>
               <div className="flex flex-col justify-center items-start gap-2">
                <label className="font-heading font-extrabold">Enter the Price</label>
                <input type="number" placeholder="Enter Price" className="border border-black text-center rounded-md  h-[6vw] lg:h-[2vw] lg:w-[40vw] w-[60vw]"/>
            </div>
            <div >
                <h2 className="font-heading font-extrabold">Unit</h2>
                 <div className="h-[8vw] w-[16vw] lg:w-[6vw] lg:h-[3vw] bg-[#f3f5f5] border border-black rounded-lg flex justify-end items-center p-2">
                <h4 className="mr-2 font-heading font-extrabold text-[2.4vw] lg:text-[1vw]">{unit}</h4>
                
                <motion.svg
                onClick={()=> open?setOpen(false):setOpen(true)}
                  className="hover:scale-[110%] hover:cursor-pointer w-6 sm:w-4 md:w-5 lg:w-8 "
                  animate={{ rotate: openCategory ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                d="M10 15L20 25L30 15"
                stroke="#1E1E1E"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
                </motion.svg>
              </div>
              <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute  w-[40vw] lg:w-[30vw] border-2 border-black rounded-xl md:mt-2 mt-1 bg-white z-50 ${open ? "block" : "pointer-events-none"}`}
                      >
                        
                            <ul className="w-full h-full flex flex-col justify-center items-start overflow-hidden">
                          <li
                            onClick={()=>setUnit("KG")}

                            className="px-2 w-full py-1 sm:py-2 font-heading font-extrabold text-[2vw] lg:text-[1.2vw] hover:bg-gradient-to-l from-[#2FA999]/0 to-[#2FA999]/50 transition-all duration-300  cursor-pointer"
                          >
                            KG
                          </li>
                          <hr className="w-[80%] border-t-2 border-black/30 ml-2" />
                           <li
                            onClick={()=>setUnit("G")}

                            className="px-2 w-full py-1 sm:py-2 font-heading font-extrabold text-[2vw] lg:text-[1.2vw] hover:bg-gradient-to-l from-[#2FA999]/0 to-[#2FA999]/50 transition-all duration-300  cursor-pointer"
                          >
                            G
                          </li>
                          <hr className="w-[80%] border-t-2 border-black/30 ml-2" />
                           <li
                            onClick={()=>setUnit("Pice")}

                            className="px-2 w-full py-1 sm:py-2 font-heading font-extrabold text-[2vw] lg:text-[1.2vw] hover:bg-gradient-to-l from-[#2FA999]/0 to-[#2FA999]/50 transition-all duration-300  cursor-pointer"
                          >
                            Pice
                          </li>

                        </ul>
                        
                      </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
