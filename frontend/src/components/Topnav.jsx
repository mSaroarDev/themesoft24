import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Topnav() {
  return (
    <>
      <main>
        <div className="flex items-center justify-between py-2">
          <div className="items-center gap-1 hidden md:flex">
            <Link className="bg-slate-200 text-gray-800 flex items-center justify-center h-7 w-7 rounded">
              <FaFacebook className="w-4 h-4" />
            </Link>
            <Link className="bg-slate-200 text-gray-800 flex items-center justify-center h-7 w-7 rounded">
              <FaTwitter className="w-4 h-4" />
            </Link>
            <Link className="bg-slate-200 text-gray-800 flex items-center justify-center h-7 w-7 rounded">
              <AiFillInstagram className="w-4 h-4" />
            </Link>
            <Link className="bg-slate-200 text-gray-800 flex items-center justify-center h-7 w-7 rounded">
              <FaLinkedin className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <h3 className="font-light text-xs md:text-sm">
              FREE SHIPPING THIS WEEK, ORDER OVER $25 ONLY
            </h3>
          </div>
          <div className="flex items-center gap-4 font-medium text-xs md:text-sm">
            {/* usd selection button */}
            <p>USD $</p>
            <p>EN</p>
          </div>
        </div>
      </main>
    </>
  );
}
