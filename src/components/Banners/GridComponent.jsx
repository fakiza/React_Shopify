import React from "react";

const GridComponent = ({ position, image, children }) => {
  const isImageOnLeft = position === "left";
  const isImageOnRight = position === "right";
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2  items-center ">
        {/* Content Side */}
        <div className={` ${isImageOnRight ? "md:order-1" : " md:order-2"}`}>
          {children}
        </div>
        {/* Image Side */}
        <div className={` ${isImageOnLeft ? "md:order-1" : "md:order-2"}`}>
          <img
            src={image}
            alt="Image"
            className="w-full sm:h-auto md:h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
