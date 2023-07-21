import { useNavigate } from "react-router-dom";

const Publisher = () => {
  const navigate = useNavigate();

  return (
    <div className="card xxs:flex xxs:flex-col xxs:items-center xxs:justify-center xxs:gap-4 sm:w-2/5 hover:cursor-pointer" onClick={() => navigate("/publisher/adsfasdf")}>
      <img
        src="/6a4648e2-edfc-4be7-8a4b-ea8877561002.JPG"
        className="object-cover xxs:w-1/2 xxs:h-3/4 rounded-2xl"
      />
      <div className="xxs:flex xxs:flex-col xxs:items-center">
        <h6 className="sm:text-base">Gramedia Rajeg</h6>
        <p>(Jl. Nusa Indah 2, Rajeg, Kab.Tangerang, Banten)</p>
      </div>
    </div>
  );
};

export default Publisher;
