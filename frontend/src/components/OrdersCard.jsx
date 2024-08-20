import { TfiMouse } from "react-icons/tfi";

export default function OrdersCard() {
  return (
    <>
        <div className="w-full h-20 bg-white border border-borderColor p-3 rounded-lg flex items-center gap-5">
            <div className="w-14 h-14 bg-slate-200 flex items-center justify-center rounded-md">
                <TfiMouse className="w-7 h-7" />
            </div>

            <div>
                <div className="text-sm font-semibold text-black uppercase flex items-center justify-between">
                    <h1 className="flex-1">Product Name </h1> {" "}
                </div>
                <button className="text-xs font-light text-brandColor">Details</button>
            </div>
        </div>
    </>
  );
}