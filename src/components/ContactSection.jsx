import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineMail, AiFillPhone, AiFillLinkedin } from "react-icons/ai";

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="h-screen max-lg:h-auto max-lg:mb-36 w-full px-20 max-lg:px-2 page-section"
    >
      <div className="text-[4rem] max-sm:text-[3rem] max-lg:text-center max-lg:py-2 max-lg:w-full">
        {t("Iletisim")}
      </div>
      <div className="h-[calc(100vh-6rem)] max-lg:h-auto flex flex-col md:justify-center max-lg:mt-20 items-center">
        <div className="flex items-center justify-between  xl:w-[70%] max-xl:w-[95%]">
          <AiFillPhone className="text-[4rem] max-lg:text-[3rem] max-sm:text-3xl" />
          <p className="text-[3rem] max-sm:text-2xl">+90 553 575 20 36</p>
        </div>
        <div className="flex items-center justify-between  max-sm:gap-1 xl:w-[70%] max-xl:w-[95%]">
          <AiOutlineMail className="text-[4rem] max-lg:text-[3rem] max-sm:text-3xl" />
          <p className="text-[3rem] max-sm:text-base max-lg:text-[2.5rem]">
            salihsamedavsar@gmail.com
          </p>
        </div>
        <div className="xl:w-[70%] max-xl:w-[95%] justify-between ">
          <a
            href="https://www.linkedin.com/in/salih-samed-av%C5%9Far-b86b35225"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-[4rem] max-lg:text-[3rem] max-sm:text-[2.3rem]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
