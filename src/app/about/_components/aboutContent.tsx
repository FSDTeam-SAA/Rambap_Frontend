import Image from "next/image";
import React from "react";
import about1 from "../../../public/about1.png";
import about2 from "../../../public/about2.png";

const AboutContent = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container flex flex-col gap-[140px]">
                {/* First Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="w-full">
                        <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
                            <Image
                                src={about1}
                                alt="Rambap-about"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    {/* Text Section */}
                    <div className="space-y-[30px]">
                        <span className="text-[12px] bg-[#4B1E2F33] p-2 rounded-full text-[#4B1E2F] font-medium">
                            Our Mission
                        </span>
                        <div className="flex gap-4 flex-col">
                            <h2 className="text-3xl md:text-2xl font-bold text-[#282828] leading-tight">
                                Democratizing Access to Fair Credit
                            </h2>
                            <p className="text-[#282828] leading-relaxed">
                                At GUEHI AND CO, our mission is to create a more inclusive financial ecosystem
                                where everyone has access to fair credit opportunities. We believe in breaking
                                down barriers between lenders and borrowers through transparent,
                                data-driven solutions that benefit both sides of the lending equation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div className="space-y-[30px]">
                        <span className="text-[12px] bg-[#4B1E2F33] p-2 rounded-full text-[#4B1E2F] font-medium">
                            Our Mission
                        </span>
                        <div className="flex gap-4 flex-col">
                            <h2 className="text-3xl md:text-2xl font-bold text-[#282828] leading-tight">
                                Democratizing Access to Fair Credit
                            </h2>
                            <p className="text-[#282828] leading-relaxed">
                                At GUEHI AND CO, our mission is to create a more inclusive financial ecosystem
                                where everyone has access to fair credit opportunities. We believe in breaking
                                down barriers between lenders and borrowers through transparent,
                                data-driven solutions that benefit both sides of the lending equation.
                            </p>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="w-full">
                        <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
                            <Image
                                src={about2}
                                alt="Rambap-about"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutContent;
