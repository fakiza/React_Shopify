
const Banner = ({ imageUrl, title }) => {
    return (
      <div className="relative">
        <img src={imageUrl} alt="Banner" className="w-full h-auto md:h-[550px] object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-10 text-white bg-black bg-opacity-50">
          <h1 className=" text-xl sm:text-2xl md:text-4xl font-bold">{title}</h1>
        </div>
      </div>    
    );
  };
  
  export default Banner;