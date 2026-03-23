import React, { useContext } from "react";
import { TogllerContext } from "../context/TogllerContext";
import { motion } from "framer-motion";

const ActiveOrderList = () => {
  const {active, setActive } = useContext(TogllerContext);
  const list = [
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
  ];
  return (
    <>
      <div 

      className={`${active? "absolute": "hidden"} top-0 h-full w-full bg-black/40 flex flex-col justify-center items-center`}>
        <svg
        onClick={() => setActive(false)}
        className="absolute top-4 right-4 hover:cursor-pointer hover:scale-110 transition-all duration-100 text-white"
          width="59"
          height="54"
          stroke="currentColor"
          viewBox="0 0 59 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7333 42.75L12.2917 39.6L26.0583 27L12.2917 14.4L15.7333 11.25L29.5 23.85L43.2667 11.25L46.7083 14.4L32.9417 27L46.7083 39.6L43.2667 42.75L29.5 30.15L15.7333 42.75Z"
            fill="#1D1B20"
          />
        </svg>

        <div className=" hover:cursor-pointer hover:scale-110 transition-all duration-100 h-[66vw] lg:h-[30vw] w-[60vw] lg:w-[26vw] bg-[#DEECEA] rounded-xl flex flex-col justify-center items-center shadow-xl">
          <h2 className="font-heading font-extrabold text-[#D32F2F] text-[4vw] lg:text-[2vw] self-start ml-3">
            Order ID: 247817hdw
          </h2>
          <table className="font-heading font-medium text-[4vw] lg:text-[1.8vw] mt-2">
            {list.map((e) => (
              <tbody>
              <tr className="flex lg:w-[24vw]  w-[56vw] border-b border-black ">
                <td>{e.name}:</td>
                <td className="flex justify-end flex-1">{e.unit}</td>
                <td className="flex justify-end flex-1 items-center">
                  <input type="checkbox" className="h-5 w-5" />
                </td>
              </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default ActiveOrderList;
