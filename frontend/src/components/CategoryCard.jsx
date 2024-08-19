import { TfiMouse } from "react-icons/tfi";

export default function CategoryCard() {
  return (
    <>
        <div className="w-[95%] h-20 border border-borderColor p-3 rounded-md mx-4 flex items-center gap-5">
            <div className="w-14 h-14 bg-slate-200 flex items-center justify-center rounded-md">
                <TfiMouse className="w-7 h-7" />
            </div>

            <div>
                <div className="text-base font-semibold text-black uppercase flex items-center justify-between">
                    <h1 className="flex-1">Mouse</h1> {" "}
                    <p className="text-xs text-gray-500 font-light">(105)</p>
                </div>
                <button className="text-xs font-light text-brandColor">Show All</button>
            </div>
        </div>
    </>
  );
}