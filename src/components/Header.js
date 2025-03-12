import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");

  const handleButtonClick = () => {
    window.open("https://drive.google.com/file/d/1_DbzPf-GURBYI9gyl9OLvKoJQ0l00Tjy/view?usp=sharing", "_blank");;
  };

  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const pathname = window.location.pathname;

  return (
    <div className="text-white font-mont fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${showMenu == "" && "md:flex-col"
          } `}
      >
        <div className="flex justify-between items-center w-full">
          <Link to='/'>
            <h1 className="text-4xl font-semibold hover:text-yellow-500 cursor-pointer">
              KECDG
            </h1>
          </Link>

          <FaBars
            onClick={() => {
              if (showMenu == "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
            className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer"
          />
        </div>

        {/* Navigation Items */}
        <div className="flex md:hidden items-center">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`hover:bg-white hover:text-black hover:rounded-md list-none mx-5 px-5 ${item.key == pathname && "bg-white text-black rounded-md"
                }`}
            >
              <Link to={`${item.key}`}>{item.title}</Link>
            </li>
          ))}

          {/* Button added here */}
          <button
            onClick={handleButtonClick}
            className="bg-yellow-500 text-black px-5 py-2 rounded-md hover:bg-yellow-600 ml-5"
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mt-5 md:flex items-start justify-start w-full flex-col lg:hidden 2xl:hidden xl:hidden ${showMenu}`}
        >
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`list-none mt-5 ${item.key == pathname && "bg-white text-black rounded-md px-5"
                }`}
            >
              <Link to={`${item.key}`}>{item.title}</Link>
            </li>
          ))}

          {/* Button for mobile */}
          <button
            onClick={handleButtonClick}
            className="bg-yellow-500 text-black px-5 py-2 rounded-md hover:bg-yellow-600 mt-5"
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
