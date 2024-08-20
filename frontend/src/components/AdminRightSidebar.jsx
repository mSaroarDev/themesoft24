import { GoBell } from "react-icons/go";

const AdminRightSidebar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 w-[300px] h-full">
        <div className="h-full py-10 px-5 border-l border-borderColor">
          <div className="w-full h-full flex flex-col items-start justify-start">
            {/* notificatoins */}
            <div className="w-full">
              <h2 className="text-base font-semibold flex items-center gap-2">
                <GoBell className="w-5 h-5"  />
                <span>Notifications</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminRightSidebar;
