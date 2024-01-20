import React, { useEffect, useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { IoReorderThree } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [switchIcon, setSwitchIcon] = useState(false);
  const navbarItemsRef = useRef([]);
  const pageSectionsRef = useRef([]);

  const { t } = useTranslation();

  function highlightNavbarItem(index) {
    navbarItemsRef.current.forEach(function (item) {
      item.classList.remove("highlight");
    });
    navbarItemsRef.current[index].classList.add("highlight");
  }

  const moveToward = (inp) => {
    var doc;

    switch (inp) {
      case 1:
        doc = document.getElementById("home");
        break;
      case 2:
        doc = document.getElementById("about");
        break;
      case 3:
        doc = document.getElementById("ability");
        break;
      case 4:
        doc = document.getElementById("project");
        break;
      case 5:
        doc = document.getElementById("contact");
        break;
      default:
        break;
    }

    doc.scrollIntoView({ block: "start" });

    if (window.innerWidth < 768) {
      setSwitchIcon(false);
    }
  };

  useEffect(() => {
    navbarItemsRef.current = document.querySelectorAll(".navbar-item");
    pageSectionsRef.current = document.querySelectorAll(".page-section");

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    pageSectionsRef.current.forEach(function (section, index) {
      var sectionTop = section.offsetTop;
      var sectionBottom = sectionTop + section.offsetHeight;
      var sectionHeight = section.offsetHeight;

      var visibleHeight =
        Math.min(scrollPosition + window.innerHeight, sectionBottom) -
        Math.max(scrollPosition, sectionTop);
      var visibilityRatio = visibleHeight / sectionHeight;

      if (visibilityRatio >= 0.65) {
        highlightNavbarItem(index);
      }
    });
  };

  return (
    <div
      className={`text-gray-50 flex gap-3 justify-end p-3 fixed w-full top-0 items-center h-[7vh] ${
        switchIcon ? "z-20" : ""
      } z-10`}
    >
      <div
        className={`flex gap-3 items-center max-md:absolute top-0 left-0  max-lg:opacity-95 max-md:w-full max-md:flex-col max-md:justify-center max-sm:gap-10 max-md:h-screen max-md:transition-all ${
          switchIcon ? "max-lg:bg-black" : "max-md:translate-x-[100%]"
        }`}
      >
        <div
          className={`cursor-pointer navbar-item highlight`}
          onClick={() => moveToward(1)}
        >
          <AiFillHome className="text-xl max-sm:text-3xl" />
        </div>
        <div
          className={`cursor-pointer navbar-item max-sm:text-3xl`}
          onClick={() => moveToward(2)}
        >
          {t("Navbar_1")}
        </div>
        <div
          className={`cursor-pointer navbar-item max-sm:text-3xl `}
          onClick={() => moveToward(3)}
        >
          {t("Navbar_2")}
        </div>
        <div
          className={`cursor-pointer navbar-item max-sm:text-3xl `}
          onClick={() => moveToward(4)}
        >
          {t("Navbar_3")}
        </div>
        <div
          className={`cursor-pointer navbar-item max-sm:text-3xl `}
          onClick={() => moveToward(5)}
        >
          {t("Navbar_4")}
        </div>
      </div>

      <IoReorderThree
        className={`absolute right-2  top-2 text-3xl md:hidden ${
          switchIcon ? "hidden" : ""
        }`}
        onClick={() => setSwitchIcon(true)}
      />

      <AiOutlineClose
        className={`absolute right-2  top-2 text-3xl md:hidden ${
          switchIcon ? "" : "hidden"
        }`}
        onClick={() => setSwitchIcon(false)}
      />
    </div>
  );
};

export default Navbar;
