import React from "react";
import logo from "../assets/logo.png";
import book from "../assets/book.png";
import shop from "../assets/shop.png";
import widgits1 from "../assets/widgits1.png";
import widgits2 from "../assets/widgits2.png";
import widgits3 from "../assets/widgits3.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="h-screen w-screen bg-white overflow-hidden">
        <div className="grid md:grid-cols-12 h-full overflow-hidden grid-rows-12">
          <div className="order-2 relative md:order-1 h-full row-span-5 md:col-span-6 md:row-span-8 flex flex-col justify-end items-start">
            <img
              className="relative lg:top-[8px] left-[40px] -top-[16px] rounded-full h-24 md:relative md:h-40 lg:h-44 "
              src={logo}
              alt="logo"
            />
            <h1 className="text-[#2FA999] font-heading font-extrabold text-[7vw] md:text-[3.7vw] lg:text-[3.8vw] ml-12">
              Order Online Skip the Line.
            </h1>
            <h2 className="text-[#C36137] font-heading font-extrabold text-[4.4vw] md:text-[2.4vw] lg:text-[2.4vw] lg:mt-2 lg:mb-2 md:mt-8 md:mb-8 mb-4 mt-4 ml-12 leading-snug">
              Your trusted local shop, ready for fast pickup. Browse, pay, and collect your essentials, quickly and easily.
            </h2>
            <button className="bg-[#C36137] text-white font-heading font-extrabold text-[2vw] md:text-[1.4vw] py-2 px-2 md:py-3 md:px-3 lg:py-4 lg:px-4 rounded-lg md:rounded-2xl ml-12 mb-8 md:mb-0">Order Now, Collect Later</button>
          </div>
          <div className="order-1 md:order-2 h-full row-span-1 md:col-span-6 md:row-span-2 flex items-center justify-end gap-8 pr-8 lg:gap-24 lg:pr-8 text-[#1E1E1E]">
            {/* Book Icon */}
            <Link to="/khata">
            <img
              src={book}
              alt="Book Icon"
              className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
            />
            </Link>

            {/* Cart Icon */}
            <Link to="/cart">
            <svg
              className="size-8 md:size-12 lg:size-14 shrink-0"
              viewBox="0 0 67 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.79169 2.79169H13.9584L21.44 40.1721C21.6953 41.4574 22.3945 42.6119 23.4152 43.4336C24.436 44.2553 25.7132 44.6918 27.0234 44.6667H54.1583C55.4685 44.6918 56.7457 44.2553 57.7665 43.4336C58.7872 42.6119 59.4864 41.4574 59.7417 40.1721L64.2084 16.75H16.75M27.9167 58.625C27.9167 60.1668 26.6668 61.4167 25.125 61.4167C23.5832 61.4167 22.3334 60.1668 22.3334 58.625C22.3334 57.0832 23.5832 55.8333 25.125 55.8333C26.6668 55.8333 27.9167 57.0832 27.9167 58.625ZM58.625 58.625C58.625 60.1668 57.3751 61.4167 55.8334 61.4167C54.2916 61.4167 53.0417 60.1668 53.0417 58.625C53.0417 57.0832 54.2916 55.8333 55.8334 55.8333C57.3751 55.8333 58.625 57.0832 58.625 58.625Z"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            </Link>

            {/* Phone Icon */}
             <Link to="/contact">
            <svg
              className="size-8 md:size-12 lg:size-14 shrink-0"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.7604 13.5416C43.4057 14.0578 45.8369 15.3515 47.7427 17.2573C49.6485 19.1631 50.9422 21.5942 51.4583 24.2396M40.7604 2.70831C46.2564 3.31887 51.3814 5.78004 55.294 9.68771C59.2066 13.5954 61.6742 18.7173 62.2916 24.2125M59.5833 45.825V53.95C59.5864 54.7043 59.4319 55.4509 59.1297 56.142C58.8275 56.8331 58.3843 57.4535 57.8285 57.9634C57.2727 58.4733 56.6165 58.8615 55.902 59.1031C55.1875 59.3448 54.4304 59.4345 53.6791 59.3666C45.3452 58.4611 37.3398 55.6133 30.3062 51.0521C23.7624 46.8939 18.2144 41.3459 14.0562 34.8021C9.47909 27.7366 6.63064 19.6923 5.74165 11.3208C5.67397 10.5719 5.76298 9.81704 6.003 9.10438C6.24303 8.39172 6.62882 7.73685 7.13581 7.18145C7.64279 6.62606 8.25987 6.18232 8.94775 5.87848C9.63563 5.57464 10.3792 5.41735 11.1312 5.41665H19.2562C20.5706 5.40371 21.8448 5.86915 22.8414 6.72621C23.838 7.58328 24.4889 8.77348 24.6729 10.075C25.0158 12.6752 25.6518 15.2282 26.5687 17.6854C26.9331 18.6548 27.012 19.7083 26.796 20.7211C26.58 21.7339 26.0782 22.6636 25.35 23.4L21.9104 26.8396C25.7659 33.62 31.38 39.2341 38.1604 43.0896L41.6 39.65C42.3363 38.9218 43.266 38.42 44.2788 38.204C45.2917 37.988 46.3452 38.0668 47.3146 38.4312C49.7718 39.3481 52.3248 39.9841 54.925 40.3271C56.2406 40.5127 57.4421 41.1753 58.301 42.189C59.1599 43.2027 59.6163 44.4967 59.5833 45.825Z"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            </Link>
          </div>

          <div className="order-4 md:order-3 h-full row-span-5 md:col-span-6 md:row-span-10 relative overflow-hidden">
            <div
              className="absolute lg:-right-[50vw] lg:-top-[0px] lg:w-[200%] lg:h-[250%]
              md:-right-[50vw] md:top-[90px] md:w-[200%] md:h-[200%]
              -right-[470px] -top-[0px] w-[200%] h-[2000%]
               bg-gradient-to-b from-[#6CCFC1] from-[27%] to-[#376962] rounded-full shadow 
               flex flex-col justify-start items-start md:pt-32 pt-6 md:pl-[11vw] pl-[44vw] lg:pl-[10vw] gap-2"
            >
              <img src={shop} alt="shop" className=" lg:w-96 md:w-80 w-60 ml-[8vw] md:ml-[1vw] lg:ml-[11vw]" />
              <h2 className="text-white font-heading font-extrabold text-[3.5vw] md:text-[2.2vw] lg:text-[2.3vw]">भरोसा लोकल का, सुविधा ऑनलाइन की।</h2>
            </div>
          </div>
          <div className="order-3 md:order-4 h-full relative row-span-1 md:col-span-6 md:row-span-4 flex flex-col justify-center items-start md:pb-6 pl-8 gap-8">
            <div className="flex gap-4">
            <img src={widgits1} alt="widgit" className="absolute top-[114px] left-[78px] md:relative md:top-auto md:left-auto w-12 lg:w-20 md:w-16"/>
            <img src={widgits2} alt="widgit" className="absolute top-[60px] left-[156px] md:relative md:top-auto md:left-auto w-12 lg:w-20 md:w-16"/> 
            <img src={widgits3} alt="widgit" className="absolute top-[28px] left-[244px] md:relative md:top-auto md:left-auto w-12 lg:w-20 md:w-16"/>
            </div>
            <h2 className="font-heading font-extrabold text-[2vw] md:text-[1.2vw] lg:text-[1.4vw] mb-20 md:mb-0">Avoid the rush hour crowds—your order is waiting for you.</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
