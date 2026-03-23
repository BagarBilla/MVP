import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
const Sidebar = ({ sections }) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <motion.div
       animate={{ x: open ? 0 : "-86%" }}
          transition={{ type: "spring", stiffness: 120 }}
      className="flex flex-row-reverse absolute md:relative z-50">
        <div className=" w-10 h-[90vh] lg:h-[86vh] flex items-center">
          <div
            onClick={() => setOpen(!open)}
            className="bg-[#C36137] w-8 h-16 rounded-r-full flex justify-center items-center pr-1"
          >
            <motion.svg
              className="hover:scale-[110%] hover:cursor-pointer"
              animate={{ rotate: open ? 90 : -90 }}
              transition={{ duration: 0.3 }}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 15L20 25L30 15"
                stroke="#F5F5F5"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </div>

        <div
          className="lg:w-[18vw] md:w-[28vw] w-[50vw] bg-white h-[90vh] lg:h-[86vh] border-r-4 border-[#C36137] pl-4 pt-1 overflow-y-scroll scroll_hide"
        >
          <a href="#quickOrder">
            {" "}
            <h2 className="mt-2 font-heading font-extrabold mb-1 hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
              <span>🛒</span> Quick Order
            </h2>
          </a>
          {sections.quickOrder.map((e) => (
            <a href={`#${e.id}`}>
              <h4 className="ml-6 font-heading font-medium hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
                {e.lebal}
              </h4>
            </a>
          ))}
          <a href="#GrainFlourPulses">
            {" "}
            <h2 className="mt-2 font-heading font-extrabold mb-1 hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
              <span>🍚</span> Grain s, Flour & Pulses (अनाज, आटा और दालें)
            </h2>
          </a>
          {sections.GrainFlourPulses.map((e) => (
            <a href={`#${e.id}`}>
              <h4 className="ml-6 font-heading font-medium hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
                {e.lebal}
              </h4>
            </a>
          ))}
          <a href="#SpicesSeasoningOil">
            {" "}
            <h2 className="mt-2 font-heading font-extrabold mb-1 hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
              <span>🧂</span> Spices, Seasoning & Oil (मसाले, तेल और घी)
            </h2>
          </a>
          {sections.SpicesSeasoningOil.map((e) => (
            <a href={`#${e.id}`}>
              <h4 className="ml-6 font-heading font-medium hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
                {e.lebal}
              </h4>
            </a>
          ))}
          <a href="#DairyEggsFrozen">
            <h2 className="mt-2 font-heading font-extrabold mb-1 hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2transition-colors duration-300">
              <span>🥛</span> Dairy, Eggs & Frozen (डेयरी, अंडे और फ्रोजन)
            </h2>
          </a>
          {sections.DairyEggsFrozen.map((e) => (
            <a href={`#${e.id}`}>
              <h4 className="ml-6 font-heading font-medium hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
                {e.lebal}
              </h4>
            </a>
          ))}
          <a href="#Beverages">
            <h2 className="mt-2 font-heading font-extrabold mb-1 hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
              <span>☕</span> Beverages (पेय पदार्थ)
            </h2>
          </a>
          {sections.DairyEggsFrozen.map((e) => (
            <a href={`#${e.id}`}>
              <h4 className="ml-6 font-heading font-medium hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
                {e.lebal}
              </h4>
            </a>
          ))}
          <a href="#SnacksPackageFood">
            <h2 className="mt-2 font-heading font-extrabold mb-1 hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
              <span>🍩 </span> Snacks & Packaged Food (स्नैक्स और पैकेज्ड फूड)
            </h2>
          </a>
          {sections.SnacksPackageFood.map((e) => (
            <a href={`#${e.id}`}>
              <h4 className="ml-6 font-heading font-medium hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
                {e.lebal}
              </h4>
            </a>
          ))}
          <a href="#PersonalCareHygiene">
            <h2 className="mt-2 font-heading font-extrabold mb-1 hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
              <span>🚿</span> Personal Care & Hygiene (व्यक्तिगत और स्वच्छता)
            </h2>
          </a>
          {sections.PersonalCareHygiene.map((e) => (
            <a href={`#${e.id}`}>
              <h4 className="ml-6 font-heading font-medium hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
                {e.lebal}
              </h4>
            </a>
          ))}
          <a href="#HouseholdCleaning">
            <h2 className="mt-2 font-heading font-extrabold mb-1 hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
              <span>🧼</span> Household & Cleaning (घर की सफाई)
            </h2>
          </a>
          {sections.HouseholdCleaning.map((e) => (
            <a href={`#${e.id}`}>
              <h4 className="ml-6 font-heading font-medium hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
                {e.lebal}
              </h4>
            </a>
          ))}
          <a href="#PoojaMiscellaneous">
            <h2 className="mt-2 font-heading font-extrabold mb-1 hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
              <span>🕯️</span> Pooja & Miscellaneous (पूजा और अन्य ज़रुरतें)
            </h2>
          </a>
          {sections.PoojaMiscellaneous.map((e) => (
            <a href={`#${e.id}`}>
              <h4 className="ml-6 font-heading font-medium hover:text-[#2FA999] hover:bg-[#2FA999]/10 p-2 transition-colors duration-300">
                {e.lebal}
              </h4>
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
