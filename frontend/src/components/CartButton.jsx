import { useEffect, useState } from "react";
import { IoArrowForward, IoBagHandleOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import CartListRow from "./CartListRow";

export default function CartButton() {
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (showModal) {
      setTimeout(() => setModalVisible(true), 50);
    } else if (!showModal && modalVisible) {
      // Trigger the closing animation and then hide the modal after it completes
      setModalVisible(false);
      setTimeout(() => setShowModal(false), 300); // Delay should match the transition duration
    }
  }, [showModal, modalVisible]);

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className=""
      >
        <IoBagHandleOutline className="w-6 h-6" />
      </button>

      {/* modal box */}
      {showModal && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/20 overflow-hidden z-50 overscroll-none">
          <div className="w-full h-full flex items-center justify-center">
            <div
              className={`w-full max-w-[900px] bg-lightBg poppins-regular rounded-xl overflow-hidden relative transition-transform duration-300 transform ${
                modalVisible ? "scale-100" : "scale-0"
              }`}
            >
              <h2 className="text-[18px] bg-white py-2 font-semibold px-4">
                Your Cart (1 items)
              </h2>

              <div className="p-2">
                <div className="bg-white rounded-lg p-3">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 border border-borderColor bg-gray-50 dark:bg-gray-800"
                          >
                            Action
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 border border-borderColor"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 border border-borderColor"
                          >
                            Product Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 border border-borderColor bg-gray-50 dark:bg-gray-800"
                          >
                            Qty
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 border border-borderColor"
                          >
                            Price
                          </th>

                          <th
                            scope="col"
                            className="px-6 py-3 border border-borderColor bg-gray-50 dark:bg-gray-800"
                          >
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <CartListRow />
                        <CartListRow />
                      </tbody>
                    </table>

                    
                  </div>
                  <div className="flex items-center justify-end">
                      <Link to='/checkout' className="_button-main my-4 flex items-center gap-2">
                        <span>Checkout</span>
                        <IoArrowForward className="w-4 h-4" />
                      </Link>
                    </div>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 bg-red-500/20 text-red-500 p-1 rounded-full"
              >
                <RxCross2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
