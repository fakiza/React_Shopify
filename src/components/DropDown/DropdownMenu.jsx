import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const dropdownRef = useRef(null);
  // Close the menu when clicking outside of it.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative w-full inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        type="button"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Shop By Category <KeyboardArrowDownIcon />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg text-gray-700 "
          style={{ width: "100%" }}
          role="menu"
          aria-labelledby="options-menu"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:text-orange-700 cursor-pointer"
              role="menuitem"
            >
              <NavLink
                to={`/category/${item}`}
                onClick={() => handleOptionClick()}
              >
                {item}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
