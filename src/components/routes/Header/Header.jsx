import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../assets/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Header.css";
import { useState } from "react";
import DropdownMenu from "../../DropDown/DropDownMenu";
import useApiData from "../../CustumHook/useApiData";
import { Badge } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useCart } from "../Cart/CartContext";

export default function Header() {
  const { data: category } = useApiData("http://localhost:4000/categories");
  const { totalCartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  console.log(totalCartItems);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleCategoryClick = () => {
    setIsCategory(!isCategory);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 h-16">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex flex-wrap">
            <div className="flex items-center lg:hidden" onClick={handleClick}>
              {isOpen ? (
                <span className="text-gray-700">
                  <CloseIcon fontSize="large" />{" "}
                </span>
              ) : (
                <span className="text-gray-700">
                  <MenuIcon fontSize="large" />
                </span>
              )}
            </div>
            <div>
              <Link to="/" className="flex items-center">
                <img
                  src={Logo}
                  // src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                  className="mr-3 h-12"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className="relative lg:hidden flex items-center ">
            <NavLink to="/cart">
              <div className="relative">
                <Badge badgeContent={totalCartItems} color="secondary" max={99}>
                  <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
                </Badge>
              </div>
            </NavLink>
          </div>
          <div
            className={` lg:flex lg:w-auto capitalize ${
              isOpen ? "nav-menu active" : "nav-menu"
            } `}
            id="mobile_view_menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row  lg:mt-0">
              <li className="px-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700"
                        : "lg:text-gray-700 text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="px-6">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700"
                        : "lg:text-gray-700 text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="px-6">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700"
                        : "lg:text-gray-700 text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  onClick={handleClick}
                >
                  Contact
                </NavLink>
              </li>
              <li className="px-6 cursor-default">
                <div className="hidden lg:block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0">
                  <DropdownMenu items={category} />
                </div>
                <div className="block lg:hidden  ">
                  <div
                    className="py-2 pr-4 pl-3 text-white border-b"
                    onClick={handleCategoryClick}
                  >
                    shop by Category <KeyboardArrowDownIcon />
                  </div>
                  {isCategory &&
                    category?.map((item, index) => (
                      <NavLink
                        key={index}
                        to={`/category/${item}`}
                        onClick={handleClick}
                      >
                        <div className="py-2 pr-4 pl-3 text-white border-b hover:text-orange-700  hover:bg-gray-50 ">
                          {item}
                        </div>
                      </NavLink>
                    ))}
                </div>
              </li>
              <li className="px-6">
                <NavLink
                  to="/sign-in"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-orange-700"
                        : "lg:text-gray-700 text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  onClick={handleClick}
                >
                  Sign In
                </NavLink>
              </li>
              <li className="hidden lg:flex px-6">
                <NavLink to="/cart" onClick={handleClick}>
                  <div className="relative">
                    <Badge
                      badgeContent={totalCartItems}
                      color="secondary"
                      max={99}
                    >
                      <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
                    </Badge>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
