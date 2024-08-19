import CategorySection from "@/components/_CategorySection";
import CategorySlider from "@/components/_CategorySlider";
import HeroSection from "@/components/_HeroSection";
import HomepageAds from "@/components/_HomepageAds";

export default function Homepage() {
  return (
    <>
        <HeroSection />
        <CategorySlider />
        <main>
          <div className="grid grid-cols-12 gap-5">
            <CategorySection />
            <HomepageAds />
          </div>
        </main>
        <div className="mb-14"></div>
    </>
  );
}