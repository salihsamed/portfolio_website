import React from "react";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/js.png";
import nodeIcon from "../assets/nodejs.png";
import reactIcon from "../assets/atom.png";
import firebaseIcon from "../assets/firebase.png";
import mongodbIcon from "../assets/mongodb.png";
import tailwindIcon from "../assets/tailwind.png";
import Ability from "../components/Ability";
import expressIcon from "../assets/express.png";
import aspIcon from "../assets/asp_mvc.png";
import cIcon from "../assets/c_sharp.png";
import jqueryIcon from "../assets/jquery.png";
import sqlIcon from "../assets/ms_sql.jpg";
import { useTranslation } from "react-i18next";

const AbilitySection = () => {
  const { t } = useTranslation();

  const abilities = [
    { image: htmlIcon, text: "HTML" },
    {
      image: cssIcon,
      text: "CSS",
    },
    {
      image: jsIcon,
      text: "JS",
    },
    {
      image: nodeIcon,
      text: "Node.js",
    },
    {
      image: reactIcon,
      text: "React.js",
    },
    {
      image: firebaseIcon,
      text: "Firebase",
    },
    {
      image: mongodbIcon,
      text: "MongoDB",
    },
    {
      image: tailwindIcon,
      text: "TailwindCSS",
    },
    {
      image: expressIcon,
      text: "Express.js",
    },
    {
      image: aspIcon,
      text: "ASP.NET MVC",
    },
    {
      image: cIcon,
      text: "C#",
    },
    {
      image: jqueryIcon,
      text: "jQuery",
    },
    {
      image: sqlIcon,
      text: "Microsoft SQL",
    },
  ];

  return (
    <div
      id="ability"
      className="h-auto w-full px-20 lg:pb-20 max-lg:pb-10 max-lg:px-2 page-section"
    >
      <div className="text-[4rem] max-sm:text-[3rem] max-lg:text-center mb-2">
        {t("Yetenekler")}
      </div>
      <div className="grid grid-cols-5 max-lg:grid-cols-3 max-2xl:grid-cols-4 gap-10 max-sm:gap-2">
        {abilities.map((a, index) => (
          <Ability key={index} image={a.image} text={a.text} />
        ))}
      </div>
    </div>
  );
};

export default AbilitySection;
