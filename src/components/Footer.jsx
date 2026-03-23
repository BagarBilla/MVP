import React, { useContext, useState } from "react";
import EmptyCart from "../assets/cartEmpty.png";
import FullCart from "../assets/cartFull.png";
import { motion } from "framer-motion";
import { TogllerContext } from "../context/TogllerContext";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const { toggle, cartFull } = useContext(TogllerContext);
  const [go, setGo] = useState(false);
  const navigate = useNavigate()
  const cartAnimation = go
    ? { x: "-100vw", rotate: -30 } // slide out
    : toggle
      ? { x: ["28vw", "27.5vw", "28.5vw", "27.5vw", "28.5vw", "28vw"] } // shake
      : { x: "28vw" };

      const handleCartClick = () => {
  setGo(true);

  setTimeout(() => {
    navigate("/cart")
    setGo(false);
  }, 2000); // same as animation duration
};
  return (
    <>
      <div className="absolute h-14 lg:h-16 w-full  -bottom-[8px] md:-bottom-[10px] z-10 flex justify-center items-end">
        <div className="md:w-[15vw] w-[32vw] flex justify-center items-center h-14 lg:h-16">
          <button
            onClick={handleCartClick}
            className={`${!cartFull ? "hidden" : "block"} self-center bg-white font-heading font-extrabold text-[3.4vw] lg:text-[1.6vw] py-1 px-4 border-2 border-[#C36137] text-[#C36137] rounded-xl shadow-lg shadow-black`}
          >
            Check Your Cart
          </button>
        </div>
        <motion.img
          initial={{ x: "28vw" }}
          animate={cartAnimation}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          className={`lg:w-[6vw] lg:h-[6vw] md:w-[7vw] md:h-[7vw] w-[15vw] h-[15vw] ${!cartFull ? "block" : "hidden"}`}
          src={EmptyCart}
          alt="Empty cart"
        />
        <motion.img
          initial={{ x: "28vw" }}
          animate={cartAnimation}
          transition={{
            duration: 2,
            ease: "linear",
          }}
          className={`lg:w-[6vw] lg:h-[6vw] md:w-[7vw] md:h-[7vw] w-[15vw] h-[15vw] ${!cartFull ? "hidden" : "block"}`}
          src={FullCart}
          alt="Empty cart"
        />
      </div>
    </>
  );
};

export default Footer;
