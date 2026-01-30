import BrandDivider from "@/components/home/BrandDivider";
import BrandLogos from "@/components/home/BrandLogos";
import HeroBanner from "@/components/home/HeroBanner";
import Newsletter from "@/components/home/NewsletterSection";
import ReviewSection from "@/components/home/ReviewSection";
import MaintenanceBar from "@/components/shared/MaintenanceBar";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      {/* Carousel Banner Section */}
      <HeroBanner />

      {/* Maintenance Bar Section */}
      <MaintenanceBar />

      {/* Brand Logos Section */}
      <BrandLogos />

      {/* Review Section */}
      <ReviewSection />

      {/* Brand Divider Section */}
      <BrandDivider />

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}
