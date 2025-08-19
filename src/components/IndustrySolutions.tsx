import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calculator, Calendar, Database, Leaf, Wallet } from "lucide-react";
import { Button } from "./ui/button";

const IndustrySolutions = () => {
  const solutions = [
    {
      icon: <Calculator />,
      title: "Building & Construction",
      description: "Specialized financing solutions for construction projects, equipment purchase, and property development with flexible terms tailored to project timelines."
    },
    {
      icon: <Wallet />,
      title: "DeFi & Fintech",
      description: "Cutting-edge decentralized finance solutions combining traditional lending models with blockchain technology for faster, more secure transactions."
    },
    {
      icon: <Leaf />,
      title: "Agriculture",
      description: "Customized financing for farmers and agribusinesses, considering seasonal cash flows and providing loans for equipment, landacquisition, and operational costs."
    },
    {
      icon: <Calendar />,
      title: "Event & Entertainment",
      description: "Short-term financing solutions for event organizers and entertainment companies, with quick approval processes and specialized risk assessment models."
    },
    {
      icon: <Database />,
      title: "Data & Technology",
      description: "Innovative financing for tech startups and data-driven companies, with IP-backed loan options and growth-focused lending solutions for scaling operations."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  text-[#4B1E2F] mb-[24px]">Our Industry Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide specialized lending solutions across multiple industries, tailored to meet the unique needs of each sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardHeader>
                <div className=" mb-2 text-[#4B1E2F] flex">
                  <div className="bg-[#4B1E2F1A] p-3 rounded-lg">
                  {solution.icon}
                  </div>
                  </div>
                <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{solution.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
          <Card className="hover:shadow-lg transition-shadow bg-[#4B1E2F] border border-gray-200">
            <CardHeader>
              <div className="text-[20px] font-medium  text-white mb-2 ">Need a Custom Solution?</div>
              <CardTitle className="text-[16px] font-normal text-[#EDE9EA]">Don&apos;t see your industry? We offer customized lending solutions tailored to your specific business needs.</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                size="lg"
                className="bg-[#DBCBB9] text-[#4B1E2F] hover:bg-gray-100"
              >
                Get Started Today <ArrowRight />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* <div className="bg-[#4B1E2F] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="mb-6 opacity-90">
            Discover how our lending solutions can accelerate your growth and unlock new possibilities.
          </p>
          <button className="bg-white text-[#4B1E2F] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Explore Solutions
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default IndustrySolutions;