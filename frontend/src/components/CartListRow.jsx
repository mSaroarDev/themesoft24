import { RxCross2 } from "react-icons/rx";

export default function CartListRow() {
  return (
    <>
        <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="w-fit px-6 py-2 border border-borderColor font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    <button className="bg-red-600 p-1 rounded-full text-white">
                        <RxCross2 className="w-3 h-3" />
                    </button>
                </th>
                <td className="px-6 py-2 border border-borderColor">
                    <div className="w-14 h-14">
                        <img src="/_card.jpg" alt="product name" className="w-full h-full object-cover" />
                    </div>
                </td>
                <td className="px-6 py-2 border border-borderColor">
                    Microsoft Windows 10 Liscence Key
                </td>
                <td className="px-6 py-2 border border-borderColor bg-gray-50 dark:bg-gray-800 whitespace-nowrap">
                    1 pc
                </td>
                <td className="px-6 py-2 border border-borderColor nunito-sans-regular">
                    $1.99
                </td>
                <td className="px-6 py-2 border border-borderColor bg-gray-50 dark:bg-gray-800 nunito-sans-regular">
                    $1.99
                </td>
            </tr>
    </>
  );
}