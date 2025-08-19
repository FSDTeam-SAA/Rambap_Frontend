import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const IndustrySolutions = () => {
  const solutions = [
    {
      icon: "🏠",
      title: "Real Estate & Construction",
      description: "Comprehensive financing solutions for property development and construction projects with competitive rates."
    },
    {
      icon: "🏭",
      title: "SME Finance",
      description: "Tailored financial products for small and medium enterprises to fuel growth and expansion."
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Educational loan programs designed to make quality education accessible and affordable."
    },
    {
      icon: "🌟",
      title: "Premium",
      description: "Exclusive premium services for high-net-worth individuals with personalized financial advisory."
    },
    {
      icon: "💼",
      title: "MSME & Commercial",
      description: "Micro, small, and medium enterprise financing with flexible terms and quick approvals."
    },
    {
      icon: "⚡",
      title: "Fintech & Technology",
      description: "Innovative fintech solutions leveraging cutting-edge technology for seamless financial services."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Industry Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive lending solutions across diverse industries, ensuring customized financial products that meet your specific sector needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white border border-gray-200">
              <CardHeader>
                <div className="text-3xl mb-2">{solution.icon}</div>
                <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{solution.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
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