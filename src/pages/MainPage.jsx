// components
import { Footer, Header } from "../components"

const MainPage = ({ children }) => {
  return(
    <div className="app-wrapper flex flex-col h-full w-full items-center overflow-hidden">
      <div className="header-wrapper xxs:fixed xxs:w-full ">
        <Header />
      </div>
      <div className="content-wrapper flex-1 max-w-[1400px] xxs:w-full xxs:h-full xxs:flex xxs:flex-col xxs:gap-4 xxs:items-center xxs:justify-center xxs:overflow-y-visible xxs:mt-8 md:mt-10 lg:mt-12 xxl:mt-16 xxs:mb-20 md:mb-28 lg:mb-32 xxs:p-6">
        {children}
      </div>
      <div className="footer-wrapper fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default MainPage