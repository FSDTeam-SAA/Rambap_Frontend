import { Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create Account",
      icon: Users,
      description: "Complete our simple online application form with your basic information and requirements."
    },
    {
      step: "02",
      title: "Fill Data Form",
      icon: Users,
      description: "Our expert team reviews your application using advanced algorithms for quick decision making."
    },
    {
      step: "03",
      title: "Get Score & Limit",
      icon: Users,
      description: "Receive instant approval notification with your customized lending terms and conditions."
    },
    {
      step: "04",
      title: "Connect with Lenders",
      icon: Users,
      description: "Access your approved credit line immediately and start utilizing funds for your business growth."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes it easy to access the funding you need in just four simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="flex">
              <Card className="py-8 px-3 flex flex-col h-full w-full">
                <CardContent className="space-y-[20px] flex flex-col h-full">
                  <div className="flex">
                    <div className="bg-[#4B1E2F1A] p-3 rounded-full">
                      <item.icon className="w-4 h-4 text-[#4B1E2F]" />
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
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default HowItWorks;