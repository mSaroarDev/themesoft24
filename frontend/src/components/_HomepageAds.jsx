import HomepageProductCard from "./HomepageProductCard";

export default function HomepageAds() {
  return (
    <>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 border border-borderColor rounded-lg">
            <h2 className="uppercase font-semibold text-lg p-3 border-b border-borderColor">Available Digital Products</h2>

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
    </>
  );
}