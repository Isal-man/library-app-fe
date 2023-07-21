// icons
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai"

// pages
import MainPage from "./MainPage"

// components
import { Member } from "../components"

const MemberUserPage = () => {
  return(
    <MainPage>
      <header className="flex xxs:flex-col items-center gap-2 border-b-slate-400 border-b-2 p-2 md:w-full">
        <div className="flex items-center border-2 border-slate-400 rounded-lg p-2 xxs:h-9 md:w-2/5">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="search"
            className="border-none xxs:h-8 md:w-full"
          />
        </div>
      </header>
      <main className="flex xxs:flex-col sm:flex-row sm:flex-wrap justify-center xxs:gap-4">
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </main>
      <footer className="flex items-center gap-4">
        <button className="xxs:w-9 xxs:h-9 rounded-full flex justify-center items-center hover:bg-transparent">
          <AiOutlineArrowLeft />
        </button>
        <p className="md:hidden">1 / 2</p>
        {[["1"], ["2"], ["3"], ["4"], ["5"]].map(([page], i) => (
          <button key={i} className="xxs:hidden xxs:w-9 xxs:h-9 text-black border border-black bg-transparent rounded-full md:flex justify-center items-center p-2 hover:bg-indigo-500 hover:text-white hover:border-none">
            {page}
          </button>
        ))}
        <button className="xxs:w-9 xxs:h-9 rounded-full flex justify-center items-center hover:bg-transparent">
          <AiOutlineArrowRight />
        </button>
        <select className="xxs:h-9 xxs:text-xs">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </footer>
    </MainPage>
  )
}

export default MemberUserPage