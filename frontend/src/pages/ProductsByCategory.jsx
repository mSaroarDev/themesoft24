import CategorySection from "@/components/_CategorySection";
import HomepageAds from "@/components/_HomepageAds";

export default function ProductsByCategory() {
  return (
    <>
        <main>
          <div className="grid grid-cols-12 gap-5">
            <CategorySection />
            <HomepageAds />
          </div>
        </main>
    </>
  );
}