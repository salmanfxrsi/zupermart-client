import BrandDivider from "@/components/home/BrandDivider";
import BrandLogos from "@/components/home/BrandLogos";
import CollectionHero from "@/components/home/CollectionHero";
import HeroBanner from "@/components/home/HeroBanner";
import Newsletter from "@/components/home/NewsletterSection";
import ReviewSection from "@/components/home/ReviewSection";
import MaintenanceBar from "@/components/shared/MaintenanceBar";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      {/* Carousel Banner Section */}
      <HeroBanner />


      {/* Brand Logos Section */}
      <BrandLogos />

      {/* Collection Hero Section */}
      <CollectionHero />

      {/* Maintenance Bar Section */}
      <MaintenanceBar />

      {/* Review Section */}
      <ReviewSection />

      {/* Brand Divider Section */}
      <BrandDivider />

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}
