import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="flex justify-center space-x-4 text-gray-500">
          <FacebookOutlinedIcon className="hover:text-orange-700 cursor-pointer" />
          <LinkedInIcon className="hover:text-orange-700 cursor-pointer" />
          <InstagramIcon className="hover:text-orange-700 cursor-pointer" />
          <TwitterIcon className="hover:text-orange-700 cursor-pointer" />
        </div>
        <div className="flex justify-center space-x-4 my-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact-Us</Link>
          <Link to="/productlist">Shop Now</Link>
        </div>
        <p className="text-xs text-gray-500 mt-3 flex justify-center">
          © 2023 Shopify. All rights reserved
        </p>
      </div>
    </footer>
  );
}
