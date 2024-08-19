import MenuList from "@/components/MenuList";
import Navbar from "@/components/Navbar";
import Topnav from "@/components/Topnav";
import { useLocation } from "react-router-dom";

const MasterLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/login" ? (
        children
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
