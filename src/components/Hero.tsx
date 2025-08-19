import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroIMage from '../public/heroImage.jpg'
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <section className="bg-[#4B1E2F] relative mb-32 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex">
              <p className="bg-[#DBCBB91A] py-1 px-4 rounded-xl text-[14px] font-normal">Trusted by 10,000+ clients and lenders</p>
            </div>
            <h1 className="text-4xl md:text-5xl  leading-[150px] text-[60px] font-semibold">
              Revolutionizing <span className="text-[#DBCBB9]">Lending</span> <span className="text-[#DBCBB9]">Solutions  </span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Transform your lending experience with our innovative financial solutions designed to meet your specific needs and unlock new opportunities.
            </p>
            <Button
              size="lg"
              className="bg-[#DBCBB9] text-[#4B1E2F] hover:bg-gray-100"
            >
              Get Started Today <ArrowRight />
            </Button>
          </div>
          <div className="relative w-[644px] h-[492px] ">
            <Image
              src={heroIMage}
              alt="rambap"
              className="rounded-lg"
              width={900}
              height={900}
            />
          </div>
        </div>
      </div>

      {/* Stats Box */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] w-full container">
        <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_8px_0px_#00000040]">
          <div className="flex py-[34px] px-[100px] divide-x gap-[137px] divide-gray-300 text-center justify-center">
            <div className="px-8">
              <h1 className="text-[#063668] font-bold text-[24px] mb-[12px]">10K+</h1>
              <p className="text-[#2F2F2F] font-normal text-[14px]">Active Users</p>
            </div>
            <div className="px-8">
              <h1 className="text-[#063668] font-bold text-[24px] mb-[12px]">$250M+</h1>
              <p className="text-[#2F2F2F] font-normal text-[14px]">
                Loans Facilitated
              </p>
            </div>
            <div className="px-8">
              <h1 className="text-[#063668] font-bold text-[24px] mb-[12px]">98%</h1>
              <p className="text-[#2F2F2F] font-normal text-[14px]">
                Client Satisfaction
              </p>
            </div>
            <div className="px-8">
              <h1 className="text-[#063668] font-bold text-[24px] mb-[12px]">5</h1>
              <p className="text-[#2F2F2F] font-normal text-[14px]">
                Industry Verticals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;