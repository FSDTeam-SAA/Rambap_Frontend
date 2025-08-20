"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpNarrowWide, Award, GlobeLock, Shield, Usb, Users } from "lucide-react";
import { motion } from "framer-motion";

const OureCoreValue = () => {
  const steps = [
    {
      step: "01",
      title: "Trust & Transparency",
      icon: Shield,
      description:
        "We believe in complete transparency in our scoring models and lending processes, building trust with both clients and lenders.",
    },
    {
      step: "02",
      title: "Innovation",
      icon: Usb,
      description:
        "We continuously innovate our platform and scoring models to provide the most accurate and fair assessment of creditworthiness.",
    },
    {
      step: "03",
      title: "Client-Centered",
      icon: Users,
      description:
        "We put our clients' needs first, ensuring they have control over their data and receive fair treatment from lenders.",
    },
    {
      step: "04",
      title: "Inclusivity",
      icon: GlobeLock,
      description:
        "We're committed to creating financial opportunities for underserved communities and businesses across diverse industries.",
    },
    {
      step: "05",
      title: "Excellence",
      icon: Award,
      description:
        "We strive for excellence in all aspects of our platform, from user experience to the accuracy of our credit scoring algorithms.",
    },
    {
      step: "06",
      title: "Social Impact",
      icon: ArrowUpNarrowWide,
      description:
        "We measure our success not just by profits, but by the positive impact we make on individuals, businesses, and communities.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4B1E2F]">
            Our Core Values
          </h2>
          <p className="text-[#282828] max-w-2xl mx-auto ">
            The principles that guide everything we do at GUEHI AND CO
          </p>
        </div>

        {/* Animated Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.40 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="py-8 px-3 flex flex-col h-full w-full">
                <CardContent className="space-y-[20px] flex flex-col h-full">
                  <div className="flex">
                    <div className="bg-[#4B1E2F1A] p-3 rounded-full">
                      <item.icon className="w-5 h-5 text-[#4B1E2F]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 flex-grow">
                    <h1 className="text-[#4B1E2F] text-[20px] font-medium">
                      {item.title}
                    </h1>
                    <p className="text-[#4B5563] text-[16px] font-normal">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OureCoreValue;
