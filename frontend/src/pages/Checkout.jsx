import CartListRow from "@/components/CartListRow";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <>
      <main>
        <h2 className="text-center font-bold text-2xl mt-5">
          Checkout Products
        </h2>
        <div className="p-2">
          <div className="rounded-lg p-3">
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

            <div className="grid grid-cols-12 mt-7">
              <div className="hidden lg:block lg:col-span-4"></div>
              <div className="hidden lg:block lg:col-span-4"></div>
              <div className="col-span-12 lg:col-span-4">
                <div className="flex items-center justify-between py-3 border-b border-borderColor font-semibold text-base">
                  <p>Subtotal:</p>
                  <p>$1.99</p>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-borderColor font-semibold text-base">
                  <p>Vat:</p>
                  <p>$0.00</p>
                </div>
                <div className="flex items-center justify-between py-3 font-semibold text-base">
                  <p>Grand Total:</p>
                  <p className="text-2xl">$1.99</p>
                </div>

                <Link
                  to="/checkout"
                  className="_button-main my-4 flex items-center justify-center gap-2"
                >
                  <span>Make Payment</span>
                  <IoArrowForward className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
