import { NavLink } from "react-router-dom";

// components
import MainPage from "./MainPage";
import { Author, Book, Member, Publisher, Rack } from "../components";

// icons
import { AiOutlineArrowRight } from "react-icons/ai";

const DashboardPage = () => {
  return (
    <MainPage>
      <main className="flex flex-col gap-4 md:mt-4">
        <div className="flex flex-col gap-4 xxs:items-center">
          <div className="flex xxs:flex-col xxs:gap-2 justify-between items-center w-full">
            <h5>Authors</h5>
            <div className="flex xxs:flex-col xxs:gap-2 sm:flex-row sm:justify-between items-center w-full">
              <div className="flex gap-2">
                <h6>Recent</h6>
                <h6 className="text-blue-400">Post</h6>
              </div>
              <p className="xxs:text-xs">(Click if you wanna see the post)</p>
              <NavLink
                to={"/user/authors"}
                className={"xxs:text-xs flex items-center gap-1"}
              >
                View all posts <AiOutlineArrowRight />
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
            <Author />
            <Author />
            <Author />
          </div>
        </div>
        <div className="flex flex-col gap-4 xxs:items-center">
          <div className="flex xxs:flex-col xxs:gap-2 justify-between items-center w-full">
            <h5>Books</h5>
            <div className="flex xxs:flex-col xxs:gap-2 sm:flex-row sm:justify-between items-center w-full">
              <div className="flex gap-2">
                <h6>Recent</h6>
                <h6 className="text-blue-400">Post</h6>
              </div>
              <p className="xxs:text-xs">(Click if you wanna see the post)</p>
              <NavLink
                to={"/user/books"}
                className={"xxs:text-xs flex items-center gap-1"}
              >
                View all posts <AiOutlineArrowRight />
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
            <Book />
            <Book />
            <Book />
          </div>
        </div>
        <div className="flex flex-col gap-4 xxs:items-center">
          <div className="flex xxs:flex-col xxs:gap-2 justify-between items-center w-full">
            <h5>Members</h5>
            <div className="flex xxs:flex-col xxs:gap-2 sm:flex-row sm:justify-between items-center w-full">
              <div className="flex gap-2">
                <h6>Recent</h6>
                <h6 className="text-blue-400">Post</h6>
              </div>
              <NavLink
                to={"/user/members"}
                className={"xxs:text-xs flex items-center gap-1"}
              >
                View all posts <AiOutlineArrowRight />
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
            <Member />
            <Member />
            <Member />
          </div>
        </div>
        <div className="flex flex-col gap-4 xxs:items-center">
          <div className="flex xxs:flex-col xxs:gap-2 justify-between items-center w-full">
            <h5>Publishers</h5>
            <div className="flex xxs:flex-col xxs:gap-2 sm:flex-row sm:justify-between items-center w-full">
              <div className="flex gap-2">
                <h6>Recent</h6>
                <h6 className="text-blue-400">Post</h6>
              </div>
              <p className="xxs:text-xs">(Click if you wanna see the post)</p>
              <NavLink
                to={"/user/publishers"}
                className={"xxs:text-xs flex items-center gap-1"}
              >
                View all posts <AiOutlineArrowRight />
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
            <Publisher />
            <Publisher />
            <Publisher />
          </div>
        </div>
        <div className="flex flex-col gap-4 xxs:items-center">
          <div className="flex xxs:flex-col xxs:gap-2 justify-between items-center w-full">
            <h5>Racks</h5>
            <div className="flex xxs:flex-col xxs:gap-2 sm:flex-row sm:justify-between items-center w-full">
              <div className="flex gap-2">
                <h6>Recent</h6>
                <h6 className="text-blue-400">Post</h6>
              </div>
              <NavLink
                to={"/user/publishers"}
                className={"xxs:text-xs flex items-center gap-1"}
              >
                View all posts <AiOutlineArrowRight />
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
            <Rack />
            <Rack />
            <Rack />
          </div>
        </div>
      </main>
    </MainPage>
  );
};

export default DashboardPage;
