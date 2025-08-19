import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CreditLimitTiers = () => {
  const tiers = [
    {
      title: "Starter Plan",
      subtitle: "Perfect for beginners",
      amount: "$5,000 - $25,000",
      features: ["Quick approval", "Flexible terms", "Low interest rates"],
      color: "bg-red-500"
    },
    {
      title: "Growth Plan", 
      subtitle: "For expanding businesses",
      amount: "$25,000 - $100,000",
      features: ["Extended credit line", "Priority support", "Custom terms"],
      color: "bg-orange-500"
    },
    {
      title: "Business Plus",
      subtitle: "Advanced business solutions",
      amount: "$100,000 - $500,000", 
      features: ["Premium rates", "Dedicated manager", "Advanced analytics"],
      color: "bg-yellow-500"
    },
    {
      title: "Enterprise Plan",
      subtitle: "For large enterprises",
      amount: "$500,000+",
      features: ["Unlimited access", "Custom solutions", "White-glove service"],
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Credit Limit Tiers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the credit limit that best suits your business needs with our flexible tier structure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <Card key={index} className={`${tier.color} border-none relative overflow-hidden text-white`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold text-white">{tier.title}</CardTitle>
                <CardDescription className="text-sm opacity-80 text-white">{tier.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold text-white">{tier.amount}</div>
                <ul className="space-y-2 text-sm text-white">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-current rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white/20 text-white py-2 px-4 rounded-md font-medium hover:bg-white/30 transition-colors mt-4">
                  Choose Plan
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditLimitTiers;