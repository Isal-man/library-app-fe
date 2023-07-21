import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();

  return (
    <div className="card xxs:flex xxs:flex-col xxs:items-center xxs:justify-center xxs:gap-4 sm:w-2/5 hover:cursor-pointer" onClick={() => navigate("/book/adsfasdf")}>
      <img
        src="/71aa034d-d435-40e0-a462-134f6e5d209c.jpg"
        className="object-cover xxs:w-1/2 xxs:h-3/4 rounded-2xl"
      />
      <div className="xxs:flex xxs:flex-col xxs:items-center">
        <h6 className="sm:text-base">The Lord of The Rings</h6>
        <p>(Fiction - Fantasy)</p>
      </div>
    </div>
  );
}

export default Book