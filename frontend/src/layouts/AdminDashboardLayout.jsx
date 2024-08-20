import AdminRightSidebar from "@/components/AdminRightSidebar";
import AdminSidebar from "@/components/AdminSideBar";

export default function AdminDashboardLayout({ children }) {
  return (
    <>
      <AdminSidebar />
      <div className="ml-[250px] mr-[300px] p-10">{children}</div>
      <AdminRightSidebar />
    </>
  );
}
