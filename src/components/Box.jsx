import React from "react";
import Card from "./Card";

const Box = ({sections}) => {
  return (
    <>
      <div id={sections.id} className="border-x-2 border-y-4 border-[#2FA999]  w-[90vw]  md:w-[60vw] lg:w-[70vw] rounded-2xl shadow-lg  mb-6"> 
        <h2 className="font-heading font-extrabold text-[4vw] md:text-[2vw] lg:text-[1.8vw] w-full px-14 pt-4">{sections.lebal}</h2>
        <div className="flex flex-wrap gap-[3vw] lg:gap-[5vw] md:gap-x-[6vw] justify-start pb-10 pr-10 pl-10 pt-4">
          
            {sections.products.map((e)=>(
              <Card img={e.img} tittle={e.tittle} price={e.price} type={e.type}/>
            ))}
            
        </div>
      </div>
    </>
  );
};

export default Box;
