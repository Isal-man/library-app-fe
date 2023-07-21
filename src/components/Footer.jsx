// icons
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="xxs:flex xxs:flex-col">
      <div className="xxs:bg-blue-500 xxs:flex xxs:justify-between xxs:p-4 xxs:items-center">
        <img
          src="/logo-library-app.png"
          className="xxs:w-8 xxs:h-12 xxs:object-cover md:w-12 md:h-14"
        />
        <div className="xxs:flex xxs:gap-2 lg:gap-4">
          {[
            [
              <AiFillGithub size={28} className="xxs:hover:text-black" />,
              "https://github.com/Isal-man",
            ],
            [
              <AiFillLinkedin size={28} className="xxs:hover:text-black" />,
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
      <div className="xxs:bg-blue-600 text-white xxs:flex xxs:justify-center">
        <p className="xxs:text-xs md:text-lg">&copy;Copyright by Ahmad Faisal Hidayat</p>
      </div>
    </footer>
  );
};

export default Footer;
