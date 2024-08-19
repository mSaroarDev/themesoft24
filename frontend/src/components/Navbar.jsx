import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

export default function Navbar() {
  return (
    <>
      <main>
        <div className="py-5 grid grid-cols-12 border-b border-borderColor/50">
          <div className="_brand col-span-6 lg:col-span-2">
            <h1 className="text-2xl font-semibold">
              <Link to="/">themeSoft24</Link>
            </h1>
          </div>
          <div className="hidden lg:block lg:col-span-8">
            <div className="flex items-center bg-white border border-borderColor rounded-lg px-3 py-1.5 w-2/3 mx-auto">
              <input
                type="text"
                className="flex-1 focus:outline-0 px-2 text-sm"
                placeholder="Enter the product that you find..."
              />
              <button>
                <IoSearch className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-2 flex items-center gap-5 justify-end">
            <button>
              <MdFavoriteBorder className="w-6 h-6" />
            </button>

            <CartButton />

            <Link to='/login'>
              <FaUserCircle className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
