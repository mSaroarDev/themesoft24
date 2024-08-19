import { TfiMouse } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function HomepageProductCard() {
  return (
    <>
      <Link to="/" className="col-span-12 lg:col-span-6 p-2 rounded-md border border-borderColor flex items-start gap-3">
            <div className="w-28 h-full bg-slate-200 flex items-center justify-center rounded-md">
                <TfiMouse className="w-7 h-7" />
            </div>

            <div>
                <div className="text-base font-semibold text-black flex items-center justify-between">
                    <h1 className="flex-1 text-base">Windows 10 Genuine Licence Key</h1> {" "}
                </div>
                <p className="mt-2 mb-3 text-xs">Coputer Accessories</p>
                <div className="flex items-center gap-5">
                    <p className="text-lg font-bold text-brandColor">$1.99</p>
                    <p className="text-sm font-bold line-through">$4.99</p>
                </div>
            </div>
      </Link>
    </>
  );
}
