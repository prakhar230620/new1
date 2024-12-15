import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { CTASection } from "@/components/shared/cta-section";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}