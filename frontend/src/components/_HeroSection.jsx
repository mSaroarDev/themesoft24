import { IoMdArrowForward } from "react-icons/io";

export default function HeroSection() {
  return (
    <>
      <main>
        <div className="h-[400px] w-full border border-borderColor rounded-2xl flex items-center justify-between px-10 md:px-14 lg:px-20">
          <div>
            <h2 className="text-2xl font-medium text-brandColor">
              Latest Trending
            </h2>
            <h1 className="font-bold text-4xl text-black uppercase mt-2">
              Digital <br /> Products
            </h1>
            <p className="mt-2 font-semibold uppercase">
              Startin From only $0.5
            </p>
            <button className="mt-5 _button-main flex items-center gap-2">
              <span>Shop Now</span> <IoMdArrowForward className="w-4 h-4" />
            </button>
          </div>
          <div className="hidden md:block w-auto h-full">
            <img src="/hero.png" alt="themeSoft24" className="w-full h-full" />
          </div>
        </div>
      </main>
    </>
  );
}
