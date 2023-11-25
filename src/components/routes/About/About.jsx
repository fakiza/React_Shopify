import parallax_images from "/assets/carousel_images_3.jpg";
import grid_img from "/assets/carousel_images1.jpg";
import carousel_images_2 from "/assets/carousel_images_2.jpg";
import Banner from "../../Banners/Banner";
import { Parallax } from "../../Banners/paralellax";
import GridComponent from "../../Banners/GridComponent";
import { Button } from "@mui/material";

const About = () => {
  const imageUrl = carousel_images_2;
  const title = "About Us";
  return (
    <>
      <Banner imageUrl={imageUrl} title={title} />
      <div className="container mx-auto my-10  md:h-[300px] flex align-middle">
        <div className="md:w-3/4 mx-auto  flex flex-col justify-center px-5  ">
          <h1 className="text-lg md:text-2xl pb-5 font-bold">
            Here with you for over 15 years
          </h1>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            consequatur eaque sapiente aperiam, repellendus suscipit magnam,
            tenetur quidem repudiandae numquam soluta eos! Explicabo totam quod
            eveniet repellendus ad, quasi quae! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quos optio neque, repudiandae quisquam
            repellendus tempora excepturi perspiciatis vero odio nemo dolorum
            adipisci nulla ipsam cupiditate iste minus. Nostrum, esse quasi!
          </p>
        </div>
      </div>
      <Parallax bgImg={parallax_images}></Parallax>
      <div className="">
        <GridComponent position="left" image={carousel_images_2}>
          <div className="text-center md:text-right p-4 mx-10 my-5 md:my-0 ">
            <div className="text-2xl md:text-4xl font-bold ">
              <h2 className="mb-2">Your exclusive </h2>
              <h2 className="mb-2">sitewide offer</h2>
              <h2 className="mb-2">awaits</h2>
            </div>
            <p className="text-sm md:text-lg text-gray-700 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non libero et ex convallis lacinia. Proin ut sagittis mi, non
              vulputate dui. In hac habitasse platea dictumst.
            </p>
            <Button variant="contained" color="secondary">
              Shop Now
            </Button>
          </div>
        </GridComponent>
        <GridComponent position="right" image={grid_img}>
          <div className="text-center md:text-left p-4 mx-10 my-5 md:my-0">
            <div className="text-2xl md:text-4xl font-bold ">
              <h2 className="mb-2">Your exclusive </h2>
              <h2 className="mb-2">sitewide offer</h2>
              <h2 className="mb-2">awaits</h2>
            </div>
            <p className="text-sm md:text-lg text-gray-700 mb-5">
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
    </>
  );
};

export default About;
