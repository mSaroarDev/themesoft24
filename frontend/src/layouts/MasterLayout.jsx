import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Topnav from "@/components/Topnav";
import { useLocation } from "react-router-dom";
import AdminDashboardLayout from "./AdminDashboardLayout";

const MasterLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" ? (
        children
      ) : pathname.startsWith("/admin") ? (
        <AdminDashboardLayout>{children}</AdminDashboardLayout>
      ) : (
        <>
          <Topnav />
          <Navbar />
          <MenuList />
          {children}
        </>
      )}
    </>
  );
};

export default MasterLayout;
