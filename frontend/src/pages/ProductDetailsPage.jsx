import HomepageProductCard from "@/components/HomepageProductCard";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

export default function ProductDetailsPage() {
  return (
    <>
      <main>
        <div className="border border-borderColor rounded-lg">
          <h2 className="uppercase font-semibold text-lg p-3 border-b border-borderColor">
            About this Product
          </h2>

          <div className="p-5 lg:p-10">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-6">
                <div className="w-full rounded-md overflow-hidden">
                  <img
                    src="/_card.jpg"
                    alt="product name"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="ml-0 lg:ml-10 col-span-12 md:col-span-6">
                <p className="flex items-center gap-0 text-brandColor">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarHalf />
                </p>

                <h1 className="text-2xl font-bold mt-5">
                  Microsoft Windows 10 Genuine Liscence Key
                </h1>
                <p className="my-5">Category: Digital Product</p>
                <p className="text-gray-500 text-sm mt-4 text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  eaque magni veniam ad, necessitatibus beatae animi possimus
                  quis maiores facilis repudiandae voluptatum ab officia
                  molestiae soluta vero facere non impedit.{" "}
                </p>
                <div className="flex items-center gap-7 mt-5 nunito-sans-bold">
                  <p className="text-2xl text-brandColor ">$1.99</p>
                  <p className="text-lg text-gray-600 line-through">$1.99</p>
                </div>

                <button className="_button-main mt-5">Add to Cart</button>

                <div className="mt-5 flex items-center">
                    <span className="font-bold text-black mr-3">Tags:</span>
                    <span className="bg-slate-200 px-1 py-0.5 rounded mr-1">digital product</span>
                    <span className="bg-slate-200 px-1 py-0.5 rounded mr-1">digital</span>
                    <span className="bg-slate-200 px-1 py-0.5 rounded mr-1">product</span>
                </div>
              </div>
            </div>
          </div>

          <div className="_description p-5 lg:p-10">
            <h2 className="py-4 border-b border-borderColor text-base font-bold">Product Description</h2>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eveniet hic magni. Veritatis quas quisquam rem nam dignissimos assumenda voluptas dolor vero, sapiente deleniti sit ut obcaecati aperiam pariatur iusto!</p>
          </div>
        </div>

        {/* related products */}
        <div className="border border-borderColor rounded-lg mt-5">
          <h2 className="uppercase font-semibold text-lg p-3 border-b border-borderColor">
            Related Products
          </h2>

          <div className="grid grid-cols-12 gap-3 p-4">
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
            <HomepageProductCard />
          </div>
        </div>
      </main>
    </>
  );
}
