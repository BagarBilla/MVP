import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { TogllerContext } from "../context/TogllerContext";

const Card = ({ img, tittle, price, type }) => {
  const { setItems, reset, setReset } = useContext(ItemContext);
  const { setToggle } = useContext(TogllerContext);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [unit, setUnit] = useState("KG");

  
useEffect(() => {
  setCount(0);
}, [reset]);
  useEffect(() => {
    setItems((prev) => ({
      ...prev,
      [tittle]: { count, unit, price },
    }));
  }, [count, unit, tittle, price]); 
 
  useEffect(() => {
    setToggle(true);

    const timer = setTimeout(() => {
      setToggle(false);
    }, 1000);
    // Cleanup to avoid memory leaks
    return () => clearTimeout(timer);
  }, [count]);
  return (
    <>
      <div className="relative lg:h-[14vw] lg:w-[10vw] md:h-[16vw] md:w-[12vw] h-[30vw] w-[22vw]">
        <div className="relative h-[60%] w-full rounded-full overflow-hidden">
          <img className="h-full w-full rounded-full" src={img} alt={tittle} />
          <div className="absolute top-[60%] md:top-[60%] lg:top-[60%] bg-gradient-to-b from-[#2FA999]/20 to-[#2FA999] to-[70%] z-10 h-[40%] w-full flex justify-center items-center">
            <h2 className="text-white font-heading font-extrabold text-xs sm:text-sm md:text-base lg:text-lg w-[74%] h-auto text-center line-clamp-2">
              {tittle}
            </h2>
          </div>
        </div>
        <div className="h-[50%] w-full flex flex-col items-center">
          <div className="bg-white border-2 border-black lg:h-[3vw] md:h-[4vw] h-[6vw] w-full rounded-full grid grid-cols-3 overflow-hidden justify-center items-center">
            <button
              className="col-span-1 flex justify-center items-center hover:bg-gradient-to-l from-[#2FA999]/0 to-[#2FA999]/50 transition-colors duration-300 h-[2vw]"
              onClick={() => {
                if (count > 0) {
                  if (type === "pack") {
                    setUnit("Pice");
                  }
                  if (unit === "Pice" && count > 0) {
                    setCount(count - 1);
                    return;
                  }
                  if (unit === "KG" && count === 1) {
                    setUnit("G");
                    setCount(750);
                    return;
                  } else if (count > 1 && unit === "KG") {
                    setCount(count - 1);
                    return;
                  }

                  if (unit === "G") {
                    if (count <= 5) {
                      setCount(0);
                    } else if (count <= 30) {
                      setCount(count - 5);
                    } else if (count <= 100) {
                      setCount(count - 10);
                    } else if (count <= 300) {
                      setCount(count - 50);
                    } else if (count <= 700) {
                      setCount(count - 100);
                    } else if (count === 750) {
                      setCount(700);
                    }
                  }
                } else {
                  setCount(0);
                }
              }}
            >
              <svg
                className="w-4 sm:w-5 md:w-6 lg:w-7 hover:scale-110"
                width="39"
                height="48"
                viewBox="0 0 39 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.125 24H30.875"
                  stroke="#1E1E1E"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div className="col-span-1 flex justify-center items-center h-[2vw]">
              <input
                type="number"
                value={count}
                onChange={(e) => {
                  const val = e.target.value;

                  if (val === "") {
                    setCount(0);
                  } else if (Number(val) >= 0) {
                    setCount(Number(val));
                  }
                }}
                className="w-full text-center text-xs sm:text-sm md:text-base lg:text-lg font-heading font-extrabold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
            <button
              className="col-span-1 flex justify-center items-center hover:bg-gradient-to-r from-[#2FA999]/0 to-[#2FA999]/50 transition-colors duration-300 h-[2vw]"
              onClick={() => {
                   if (type === "pack") {
                    setUnit("Pice");
                  }
                  if (unit === "Pice") {
                    setCount(count + 1);
                    return;
                  }
                if (unit === "KG") {
                  setCount(count + 1);
                } else if (unit === "G") {
                  if (count === 0) {
                    setCount(5);
                  } else if (count >= 5 && count < 30) {
                    setCount(count + 5);
                  } else if (count >= 30 && count < 100) {
                    setCount(count + 10);
                  } else if (count >= 100 && count < 300) {
                    setCount(count + 50);
                  } else if (count >= 300 && count < 700) {
                    setCount(count + 100);
                  } else if (count === 700) {
                    setCount(750);
                  } else if (count === 750) {
                    setUnit("KG");
                    setCount(1);
                  }
                }
              }}
            >
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
            </button>
          </div>
          <button
            className="bg-[#C36137] h-[5vw] w-[8vw] md:h-[3vw] md:w-[5vw] lg:h-[2vw] lg:w-[5vw] rounded-lg flex justify-center items-center  "
            onClick={() => setOpen(!open)}
          >
            <h2 className="md:text-[1.2vw] text-[2vw] font-heading font-extrabold text-white">
              {unit}
            </h2>
            <motion.svg
              className="hover:scale-[110%] hover:cursor-pointer w-4 sm:w-4 md:w-5 lg:w-6"
              animate={{ rotate: open ? 180 : 0 }}
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
          </button>
          <div className="h-6 sm:h-8 md:h-10 lg:h-12 w-full flex flex-col justify-center items-center ">
            <h2 className="font-heading font-extrabold text-xs sm:text-sm md:text-base lg:text-lg line-clamp-2">{`₹${price}`}</h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className={`absolute h-16 sm:h-20 md:h-24 w-full border-2 border-black rounded-xl md:mt-2 mt-1 bg-white z-50 ${open ? "block" : "pointer-events-none"}`}
        >
          <ul className="w-full h-full flex flex-col justify-center items-start overflow-hidden">
            <li
              onClick={() => setUnit("G")}
              className="px-2 w-full py-1 sm:py-2 font-heading font-extrabold text-xs sm:text-sm hover:bg-gradient-to-l from-[#2FA999]/0 to-[#2FA999]/50 transition-all duration-300 hover:scale-110 hover:px-4 cursor-pointer"
            >
              Gram (G)
            </li>

            <hr className="w-[80%] border-t-2 border-black/30 ml-2" />

            <li
              onClick={() => setUnit("KG")}
              className="px-2 w-full py-1 sm:py-2 font-heading font-extrabold text-xs sm:text-sm hover:bg-gradient-to-l from-[#2FA999]/0 to-[#2FA999]/50 transition-all duration-300 hover:scale-110 hover:px-4 cursor-pointer"
            >
              Kilo (KG)
            </li>
          </ul>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
