// // // "use client";

// // // import { Button } from "@/components/ui/button";
// // // import Image from "next/image";
// // // import heroIMage from "../public/heroImage.jpg";
// // // import { ArrowRight } from "lucide-react";

// // // const Hero = () => {
// // //   return (
// // //     <section className="bg-[#4B1E2F] relative mb-32 text-white py-16">
// // //       <div className="container mx-auto px-4">
// // //         <div className="grid md:grid-cols-2 gap-8 items-center">
// // //           {/* Left Content */}
// // //           <div className="space-y-6 animate-fade-in">
// // //             <div className="flex">
// // //               <p className="bg-[#DBCBB91A] py-1 px-4 rounded-xl text-[14px] font-normal">
// // //                 Trusted by 10,000+ clients and lenders
// // //               </p>
// // //             </div>
// // //             <h1 className="text-4xl md:text-5xl leading-[150px] text-[60px] font-semibold">
// // //               Revolutionizing <span className="text-[#DBCBB9]">Lending</span>{" "}
// // //               <span className="text-[#DBCBB9]">Solutions</span>
// // //             </h1>
// // //             <p className="text-lg md:text-xl opacity-90">
// // //               Transform your lending experience with our innovative financial
// // //               solutions designed to meet your specific needs and unlock new
// // //               opportunities.
// // //             </p>
// // //             <Button
// // //               size="lg"
// // //               className="bg-[#DBCBB9] text-[#4B1E2F] hover:bg-gray-100"
// // //             >
// // //               Get Started Today <ArrowRight />
// // //             </Button>
// // //           </div>

// // //           {/* Right Image */}
// // //           <div className="relative w-[644px] h-[492px] animate-fade-in delay-200">
// // //             <Image
// // //               src={heroIMage}
// // //               alt="rambap"
// // //               className="rounded-lg"
// // //               width={900}
// // //               height={900}
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Stats Box */}
// // //       <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] w-full container animate-fade-in delay-500">
// // //         <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_8px_0px_#00000040]">
// // //           <div className="flex py-[34px] px-[100px] divide-x gap-[137px] divide-gray-300 text-center justify-center">
// // //             <div className="px-8">
// // //               <h1 className="text-[#063668] font-bold text-[24px] mb-[12px]">
// // //                 10K+
// // //               </h1>
// // //               <p className="text-[#2F2F2F] font-normal text-[14px]">
// // //                 Active Users
// // //               </p>
// // //             </div>
// // //             <div className="px-8">
// // //               <h1 className="text-[#063668] font-bold text-[24px] mb-[12px]">
// // //                 $250M+
// // //               </h1>
// // //               <p className="text-[#2F2F2F] font-normal text-[14px]">
// // //                 Loans Facilitated
// // //               </p>
// // //             </div>
// // //             <div className="px-8">
// // //               <h1 className="text-[#063668] font-bold text-[24px] mb-[12px]">
// // //                 98%
// // //               </h1>
// // //               <p className="text-[#2F2F2F] font-normal text-[14px]">
// // //                 Client Satisfaction
// // //               </p>
// // //             </div>
// // //             <div className="px-8">
// // //               <h1 className="text-[#063668] font-bold text-[24px] mb-[12px]">
// // //                 5
// // //               </h1>
// // //               <p className="text-[#2F2F2F] font-normal text-[14px]">
// // //                 Industry Verticals
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;

// // "use client";

// // import { Button } from "@/components/ui/button";
// // import Image from "next/image";
// // import heroIMage from "../public/heroImage.jpg";
// // import { ArrowRight } from "lucide-react";

// // const Hero = () => {
// //   return (
// //     <section className="bg-[#4B1E2F] relative mb-32 text-white py-12 md:py-16">
// //       <div className="container mx-auto px-4">
// //         <div className="grid md:grid-cols-2 gap-8 items-center">
// //           {/* Left Content */}
// //           <div className="space-y-6 animate-fade-in text-center md:text-left">
// //             <div className="flex justify-center md:justify-start">
// //               <p className="bg-[#DBCBB91A] py-1 px-4 rounded-xl text-sm md:text-base font-normal">
// //                 Trusted by 10,000+ clients and lenders
// //               </p>
// //             </div>
// //             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-snug md:leading-[72px] font-semibold">
// //               Revolutionizing <span className="text-[#DBCBB9]">Lending</span>{" "}
// //               <span className="text-[#DBCBB9]">Solutions</span>
// //             </h1>
// //             <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-xl mx-auto md:mx-0">
// //               Transform your lending experience with our innovative financial
// //               solutions designed to meet your specific needs and unlock new
// //               opportunities.
// //             </p>
// //             <div className="flex justify-center md:justify-start">
// //               <Button
// //                 size="lg"
// //                 className="bg-[#DBCBB9] text-[#4B1E2F] hover:bg-gray-100"
// //               >
// //                 Get Started Today <ArrowRight />
// //               </Button>
// //             </div>
// //           </div>

// //           {/* Right Image */}
// //           <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[492px] animate-fade-in delay-200">
// //             <Image
// //               src={heroIMage}
// //               alt="rambap"
// //               className="rounded-lg object-cover"
// //               fill
// //               priority
// //             />

// //             {/* Wrapper to allow overlap */}
// //             <div className="absolute bottom-5 right-[-60px]">
// //               <div className="bg-[#FFFFFF] flex gap-2 p-5 rounded-md items-center shadow-[0px_6px_9px_0px_#00000029]">
// //                 <p className="w-4 h-4 bg-[#039B06] rounded-full"></p>
// //                 <p className="text-[#282828] font-normal text-[12px]">
// //                   Credit Score: 85/100
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>

// //       {/* Stats Box */}
// //       <div className="absolute left-1/2  -translate-x-1/2 bottom-[-80px] w-[95%] md:w-[85%] lg:w-[70%] animate-fade-in delay-500">
// //         <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_8px_0px_#00000040]">
// //           <div className="flex flex-wrap md:flex-nowrap py-6 px-6 sm:px-10 lg:px-20 divide-y md:divide-y-0 md:divide-x gap-6 md:gap-12 lg:gap-[137px] divide-gray-300 text-center justify-center">
// //             <div className="px-4 flex-1">
// //               <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
// //                 10K+
// //               </h1>
// //               <p className="text-[#2F2F2F] text-sm md:text-base">Active Users</p>
// //             </div>
// //             <div className="px-4 flex-1">
// //               <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
// //                 $250M+
// //               </h1>
// //               <p className="text-[#2F2F2F] text-sm md:text-base">
// //                 Loans Facilitated
// //               </p>
// //             </div>
// //             <div className="px-4 flex-1">
// //               <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
// //                 98%
// //               </h1>
// //               <p className="text-[#2F2F2F] text-sm md:text-base">
// //                 Client Satisfaction
// //               </p>
// //             </div>
// //             <div className="px-4 flex-1">
// //               <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
// //                 5
// //               </h1>
// //               <p className="text-[#2F2F2F] text-sm md:text-base">
// //                 Industry Verticals
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// "use client";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import heroIMage from "../public/heroImage.jpg";
// import { ArrowRight } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="bg-[#4B1E2F] relative mb-40 text-white py-12 md:py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {/* Left Content */}
//           <div className="space-y-6 animate-fade-in text-center md:text-left">
//             <div className="flex justify-center md:justify-start">
//               <p className="bg-[#DBCBB91A] py-1 px-4 rounded-xl text-sm md:text-base font-normal">
//                 Trusted by 10,000+ clients and lenders
//               </p>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[72px] font-semibold">
//               Revolutionizing <span className="text-[#DBCBB9]">Lending</span>{" "}
//               <span className="text-[#DBCBB9]">Solutions</span>
//             </h1>
//             <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-xl mx-auto md:mx-0">
//               Transform your lending experience with our innovative financial
//               solutions designed to meet your specific needs and unlock new
//               opportunities.
//             </p>
//             <div className="flex justify-center md:justify-start">
//               <Button
//                 size="lg"
//                 className="bg-[#DBCBB9] text-[#4B1E2F] hover:bg-gray-100"
//               >
//                 Get Started Today <ArrowRight />
//               </Button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[492px] animate-fade-in delay-200">
//             <Image
//               src={heroIMage}
//               alt="rambap"
//               className="rounded-lg object-cover"
//               fill
//               priority
//             />

//             {/* Credit Score Box */}
//             <div className="absolute bottom-4 right-4 sm:right-[-40px]">
//               <div className="bg-[#FFFFFF] flex gap-2 p-3 sm:p-4 rounded-md items-center shadow-[0px_6px_9px_0px_#00000029]">
//                 <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#039B06] rounded-full"></span>
//                 <p className="text-[#282828] font-normal text-xs sm:text-sm">
//                   Credit Score: 85/100
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Box */}
//       <div className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] animate-fade-in delay-500">
//         <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_8px_0px_#00000040]">
//           <div className="flex flex-col sm:flex-row flex-wrap justify-around py-6 px-6 sm:px-10 lg:px-20 gap-6 text-center">
//             <div className="flex-1 min-w-[120px]">
//               <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
//                 10K+
//               </h1>
//               <p className="text-[#2F2F2F] text-sm md:text-base">Active Users</p>
//             </div>
//             <div className="flex-1 min-w-[120px]">
//               <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
//                 $250M+
//               </h1>
//               <p className="text-[#2F2F2F] text-sm md:text-base">
//                 Loans Facilitated
//               </p>
//             </div>
//             <div className="flex-1 min-w-[120px]">
//               <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
//                 98%
//               </h1>
//               <p className="text-[#2F2F2F] text-sm md:text-base">
//                 Client Satisfaction
//               </p>
//             </div>
//             <div className="flex-1 min-w-[120px]">
//               <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
//                 5
//               </h1>
//               <p className="text-[#2F2F2F] text-sm md:text-base">
//                 Industry Verticals
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroIMage from "../public/heroImage.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[#4B1E2F] relative text-white py-12 md:mb-44 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <p className="bg-[#DBCBB91A] py-1 px-4 rounded-xl text-sm md:text-base font-normal">
                Trusted by 10,000+ clients and lenders
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[72px] font-semibold">
              Revolutionizing <span className="text-[#DBCBB9]">Lending</span>{" "}
              <span className="text-[#DBCBB9]">Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-xl mx-auto md:mx-0">
              Transform your lending experience with our innovative financial
              solutions designed to meet your specific needs and unlock new
              opportunities.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-[#DBCBB9] text-[#4B1E2F] hover:bg-gray-100"
              >
                Get Started Today <ArrowRight />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[492px] animate-fade-in delay-200">
            <Image
              src={heroIMage}
              alt="rambap"
              className="rounded-lg object-cover"
              fill
              priority
            />

            {/* Credit Score Box */}
            <div className="absolute bottom-4 right-4 sm:right-[-60px]">
              <div className="bg-[#FFFFFF] flex gap-2 p-3 sm:p-4 rounded-md items-center shadow-[0px_6px_9px_0px_#00000029]">
                <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#039B06] rounded-full"></span>
                <p className="text-[#282828] font-normal text-xs sm:text-sm">
                  Credit Score: 85/100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Box */}
      <div className="mt-8 md:mt-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-[-70px] w-full md:w-[85%] lg:w-[70%] animate-fade-in delay-500">
        <div className="bg-[#FFFFFF] rounded-xl shadow-[0px_4px_8px_0px_#00000040]">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-[137px] py-6 px-6 sm:px-10 lg:px-20 text-center">
            <div>
              <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
                10K+
              </h1>
              <p className="text-[#2F2F2F] text-sm md:text-base">Active Users</p>
            </div>
            <div>
              <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
                $250M+
              </h1>
              <p className="text-[#2F2F2F] text-sm md:text-base">
                Loans Facilitated
              </p>
            </div>
            <div>
              <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
                98%
              </h1>
              <p className="text-[#2F2F2F] text-sm md:text-base">
                Client Satisfaction
              </p>
            </div>
            <div>
              <h1 className="text-[#063668] font-bold text-xl md:text-2xl mb-2">
                5
              </h1>
              <p className="text-[#2F2F2F] text-sm md:text-base">
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
