import CreditLimitTiers from "@/components/CreditLimitTiers";
import CTA from "@/components/Cta";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import IndustrySolutions from "@/components/IndustrySolutions";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-[#F9FAFB]">
        <IndustrySolutions />
      </div>
      <div className="bg-white">
        <CreditLimitTiers />
      </div>
      <div className="bg-[#F9FAFB]">
        <HowItWorks />
        <CTA />
      </div>
    </div>
  );
}
