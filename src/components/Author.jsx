import { useNavigate } from "react-router-dom";

const Author = () => {
  const navigate = useNavigate();

  return (
    <div className="card xxs:flex xxs:flex-col xxs:items-center xxs:justify-center xxs:gap-4 sm:w-2/5 hover:cursor-pointer" onClick={() => navigate("/author/adsfasdf")}>
      <img
        src="/120b2cef-aa42-46a2-821a-8cbfdf82ebdc.jpg"
        className="object-cover xxs:w-1/2 xxs:h-3/4 rounded-2xl"
      />
      <div className="xxs:flex xxs:flex-col xxs:items-center">
        <h6 className="sm:text-base">Ali Hanafiah Lubis</h6>
        <p>(2002 - sekarang)</p>
      </div>
    </div>
  );
};

export default Author;
