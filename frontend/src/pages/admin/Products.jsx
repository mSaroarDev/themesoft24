import ProductListRow from "@/components/ProductListRow";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="flex items-center justify-end mb-5">
        <Link
          to="/admin/products/new"
          className="bg-[#292929] text-white px-5 py-2.5 rounded-lg"
        >
          Add New Product
        </Link>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4 border border-borderColor">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 border border-borderColor">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 border border-borderColor">
                  Validity
                </th>
                <th scope="col" className="px-6 py-3 border border-borderColor">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 border border-borderColor">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-right border border-borderColor">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
             <ProductListRow />
             <ProductListRow />
             <ProductListRow />
             <ProductListRow />
             <ProductListRow />
             <ProductListRow />
             <ProductListRow />
             <ProductListRow />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
