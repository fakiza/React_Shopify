import parallax_images from "/assets/carousel_images1.jpg";
import { Parallax } from "../../Banners/paralellax";
import GridComponent from "../../Banners/GridComponent";
import grid_img from "/assets/carousel_images_3.jpg";
import { Button } from "@mui/material";
import DisplayProducts from "../../Products/displayProduct";
import Slider from "../../Slider/Slider";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Home = () => {
  return (
    <div className="">
      <Slider>
        <div className="slide-content">
          <h2>Slider</h2>
          <p>lprem epsem </p>
        </div>
      </Slider>
      <div className="my-0 md:my-10">
        <div className="container mx-auto my-4 md:my-10 py-5">
          <div className="md:pb-5 pb-4 text-center">
            <h1 className=" text-xl sm:text-2xl md:text-4xl ">Best Sellers</h1>
            <p className="text-xs">Here are some of our best selling items.</p>
            <div className="flex flex-row justify-end">
              <p className="text-sm sm:text-lg text-orange-700 font-bold uppercase">
                <Link to="/category/all">See All</Link>
                <KeyboardArrowRightIcon />
              </p>
            </div>
          </div>
          <DisplayProducts display="all" />
        </div>
        <div className="container mx-auto my-4 md:my-10">
          <div className="sm:pb-4 md:pb-10">
            <h1 className="text-4xl text-center">Big Sale!</h1>
            <div className="flex flex-row justify-end">
              <p className="text-orange-700 font-bold uppercase">
                <Link to="/category/all">See All</Link>
                <KeyboardArrowRightIcon />
              </p>
            </div>
          </div>

          <DisplayProducts display="sale" />
        </div>
        <Parallax bgImg={parallax_images}>
          <div className="w-full h-full mx-auto text-center lg:mx-10  sm:w-2/3 md:w-2/3  lg:w-2/3 flex items-center ">
            <div className="md:w-2/3 ">
              <h2 className="text-4xl font-bold mb-2">Offers</h2>
              <p className="text-gray-700 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non libero et ex convallis lacinia. Proin ut sagittis mi, non
                vulputate dui. In hac habitasse platea dictumst.
              </p>
              <Button variant="contained" color="secondary">
                Shop Now
              </Button>
            </div>
          </div>
        </Parallax>
        <div className="">
          <GridComponent position="left" image={grid_img}>
            <div className="text-center md:text-right p-4">
              <div className="text-2xl md:text-4xl font-bold ">
                <h2 className="mb-2">Your exclusive </h2>
                <h2 className="mb-2">sitewide offer</h2>
                <h2 className="mb-2">awaits</h2>
              </div>
              <p className="text-gray-700 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                non libero et ex convallis lacinia. Proin ut sagittis mi, non
                vulputate dui. In hac habitasse platea dictumst.
              </p>
              <Button variant="contained" color="secondary">
                Shop Now
              </Button>
            </div>
          </GridComponent>
        </div>
      </div>
    </div>
  );
};

export default Home;
