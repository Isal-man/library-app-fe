// icons
import { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className="xxs:flex xxs:justify-between xxs:items-center xxs:p-2 md:p-4 xxl:p-6 xxs:border-b-slate-400 xxs:border xxs:bg-gradient-to-tr xxs:from-blue-500 xxs:to-cyan-400">
        <button
          className="xxs:border xxs:border-white xxs:bg-transparent xxs:w-[34px] lg:hidden"
          onClick={() => setShowSidebar(true)}
        >
          <AiOutlineMenu />
        </button>
        <h5 className="text-white">Library App</h5>
        <div className="lg:flex md:gap-4 xxs:hidden text-white">
          {[
            ["Dashboard", "/dashboard"],
            ["Authors", "/authors"],
            ["Books", "/books"],
            ["Members", "/members"],
            ["Publishers", "/publishers"],
            ["Racks", "/racks"],
          ].map(([title, link], i) => (
            <NavLink key={i} to={link} className="b-animation b-wrapper">
              {title}
            </NavLink>
          ))}
        </div>
        <button className="xxs:hidden lg:block" onClick={() => navigate("/signin")}>Log Out</button>
      </header>
      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } xxs:fixed xxs:top-0 xxs:h-screen xxs:w-screen xxs:bg-slate-300 xxs:bg-opacity-[0.5] xxs:z-50`}
        onClick={() => setShowSidebar(false)}
      >
        <div
          className={`slide-in xxs:flex xxs:flex-col xxs:justify-between xxs:p-6 xxs:bg-gradient-to-tr xxs:from-blue-500 xxs:to-cyan-400 xxs:fixed xxs:top-0 xxs:left-0 xxs:h-screen xxs:w-3/4 xxs:rounded-tr-2xl xxs:rounded-br-2xl xxs:text-white`}
        >
          <div className="xxs:flex xxs:justify-between xxs:items-center">
            <h5>Menu</h5>
            <button
              className="xxs:border xxs:border-white xxs:bg-transparent xxs:w-[34px] xxs:p-2 xxs:rounded-lg"
              onClick={() => setShowSidebar(true)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="xxs:flex xxs:flex-col xxs:gap-4 xxs:items-center">
            {[
              ["Dashboard", "/dashboard"],
              ["Authors", "/authors"],
              ["Books", "/books"],
              ["Members", "/members"],
              ["Publishers", "/publishers"],
              ["Racks", "/racks"],
            ].map(([title, link], i) => (
              <NavLink
                key={i}
                to={link}
                className="xxs:hover:bg-black xxs:hover:rounded-lg xxs:w-4/5 xs:w-2/3 xxs:flex xxs:justify-center p-2"
              >
                {title}
              </NavLink>
            ))}
            <button onClick={() => navigate("/signin")}>Log Out</button>
          </div>
          <div className="xxs:flex xxs:justify-center xxs:gap-4">
            {[
              [
                <AiFillGithub size={28} className="xxs:hover:text-black" />,
                "https://github.com/Isal-man",
              ],
              [
                <AiFillLinkedin
                  size={28}
                  className="xxs:hover:text-blue-500"
                />,
                "https://www.linkedin.com/in/ahmad-faisal-hidayat-05a909245/",
              ],
              [
                <AiOutlineWhatsApp
                  size={28}
                  className="xxs:hover:text-green-500"
                />,
                "https://wa.me/+6281287968635",
              ],
              [
                <AiFillInstagram
                  size={28}
                  className="xxs:hover:text-fuchsia-500"
                />,
                "https://www.instagram.com/ahmad_faisal_hidayat/",
              ],
            ].map(([icon, url], i) => (
              <a key={i} className="text-white" href={url}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
