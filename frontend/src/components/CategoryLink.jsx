import { IoMdArrowForward } from "react-icons/io";
import { MdOutlineLaptopMac } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CategoryLink() {
  return (
    <>
        <Link className="w-full px-3 py-2 flex items-center justify-between border-b border-borderColor/50 hover:bg-brandColor/5 transition-all duration-150">
                    <div className="flex items-center gap-2">
                        <MdOutlineLaptopMac className="w-4 h-4" />
                        <span>Laptops</span>
                    </div>
                    <span><IoMdArrowForward className="w-3 h-3" /></span>
                </Link>
    </>
  );
}