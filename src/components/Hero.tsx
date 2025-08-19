import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroIMage from '../public/heroImage.jpg'
const Hero = () => {
  return (
    <section className="bg-[#4B1E2F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Revolutionizing Lending Solutions
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Transform your lending experience with our innovative financial solutions designed to meet your specific needs and unlock new opportunities.
            </p>
            <Button size="lg" className="bg-white text-[#4B1E2F] hover:bg-gray-100">
              Get Started Today
            </Button>
          </div>
          <div className="relative">
            <Image src={heroIMage} alt="rambap" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;