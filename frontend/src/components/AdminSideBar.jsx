import { GoTasklist } from "react-icons/go";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { LuBox, LuLayoutDashboard, LuWallet } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 w-[250px] h-full">
        <div className="h-full py-10 px-5 border-r border-borderColor">
          <div className="w-full h-full flex flex-col items-start justify-start">
            {/* logo */}
            <div className="w-full">
              <img src="/_logo.svg" alt="logo" className="w-[140px] mx-auto" />
            </div>

            {/* profile info */}
            <div className="flex flex-col items-center justify-center mt-7 mx-auto">
              <div className="_image w-[100px] h-[100px] rounded-full border-2 border-blue-600 overflow-hidden">
                <img
                  src="/_avatar.jpg"
                  alt="profile"
                  className="w-full h-full object-cover mx-auto"
                />
              </div>
              <h2 className="font-semibold text-base mt-3">Saroar Jahan</h2>
              <p className="text-gray-600 text-xs">msaroar.dev@gamil.com</p>
            </div>

            {/* menus */}
            <div className="mt-10 mx-auto">
              <Link
                to="/admin/dashboard"
                className={`_sidebar-links ${
                  pathname.startsWith("/admin/dashboard")
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                <LuLayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>

              <Link
                to="/admin/products"
                className={`_sidebar-links ${
                  pathname.startsWith("/admin/products")
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                <LuBox className="w-4 h-4" />
                <span>Products</span>
              </Link>

              <Link
                to="/admin/categories"
                className={`_sidebar-links ${
                  pathname.startsWith("/admin/categories")
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                <HiOutlineRectangleGroup className="w-4 h-4" />
                <span>Categories</span>
              </Link>

              <Link
                to="/admin/order"
                className={`_sidebar-links ${
                  pathname.startsWith("/admin/order")
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                <GoTasklist className="w-4 h-4" />
                <span>Orders</span>
              </Link>

              <Link
                to="/admin/payments"
                className={`_sidebar-links ${
                  pathname.startsWith("/admin/payments")
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                <LuWallet className="w-4 h-4" />
                <span>Payments</span>
              </Link>
            </div>

            {/* footer */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
