import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCheck } from "lucide-react";

const CreditLimitTiers = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4B1E2F]">Credit Limit Tiers</h2>
          <p className="text-[#282828] max-w-2xl mx-auto">
            Choose the credit limit that best suits your business needs with our flexible tier structure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Poor Card */}
          <Card className="bg-[linear-gradient(135deg,#FEF2F2_25%,#FEE2E2_95.71%)] border border-[#FECACA] relative overflow-hidden">
            <CardHeader className=" space-y-[20px]">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold text-gray-900">Poor</CardTitle>
                <p className="text-[#991B1B] bg-[#FECACA]  text-[14px] font-normal py-[2px] px-2 rounded-2xl">0 - 30</p>
              </div>
              <CardDescription className="text-[20px] font-medium opacity-80 text-[#4B1E2F]">10,000 FCFA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-[#4B5563] text-[16px] font-normal">
                <p>Basic credit limit with opportunities to improve your score</p>
              </div>
              <hr className="border border-[#FECACA]" />
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCheck size={18} className="text-[#EF4444]" />
                  Limited borrowing capacity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck size={18} className="text-[#EF4444]" />
                  Higher interest rates
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Fair Card */}
          <Card className="bg-[linear-gradient(135deg,#FFF7ED_25%,#FFEDD5_95.71%)] border border-[#FED7AA] relative overflow-hidden">
            <CardHeader className="space-y-[20px]">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold text-gray-900">Fair</CardTitle>
                <p className="text-[#9A3412] bg-[#FED7AA]  text-[14px] font-normal py-[2px] px-2 rounded-2xl">40 - 59</p>
              </div>
              <CardDescription className="text-[20px] font-medium opacity-80 text-[#4B1E2F]">30,000 FCFA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-[#4B5563] text-[16px] font-normal">
                <p>Basic credit limit with opportunities to improve your score</p>
              </div>
              <hr className="border border-[#FED7AA]" />
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCheck size={18} className="text-[#F97316]" />
                  Limited borrowing capacity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck size={18} className="text-[#F97316]" />
                  Higher interest rates
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Good Card */}
          <Card className="bg-[linear-gradient(135deg,#FEFCE8_25%,#FEF9C3_95.71%)] border border-[#FEF08A] relative overflow-hidden">
            <CardHeader className="space-y-[20px]">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold text-gray-900">Good</CardTitle>
                <p className="text-[#854D0E] bg-[#FEF08A]  text-[14px] font-normal py-[2px] px-2 rounded-2xl">60 - 79</p>
              </div>
              <CardDescription className="text-[20px] font-medium opacity-80 text-[#4B1E2F]">50,000 FCFA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-[#4B5563] text-[16px] font-normal">
                <p>Basic credit limit with opportunities to improve your score</p>
              </div>
              <hr className="border border-[#FEF08A]" />
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCheck size={18} className="text-[#CA8A04]" />
                  Limited borrowing capacity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck size={18} className="text-[#CA8A04]" />
                  Higher interest rates
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Excellent Card */}
          <Card className="bg-[linear-gradient(135deg,#F0FDF4_25%,#DCFCE7_95.71%)] border border-[#BBF7D0] relative overflow-hidden">
            <CardHeader className="space-y-[20px]">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-bold text-gray-900">Excellent</CardTitle>
                <p className="text-[#166534] bg-[#BBF7D0]  text-[14px] font-normal py-[2px] px-2 rounded-2xl"> 80 - 100</p>
              </div>
              <CardDescription className="text-[20px] font-medium opacity-80 text-[#4B1E2F]">100,000 FCFA</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-[#4B5563] text-[16px] font-normal">
                <p>Basic credit limit with opportunities to improve your score</p>
              </div>
              <hr className="border border-[#BBF7D0]" />
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCheck size={18} className="text-[#16A34A]" />
                  Limited borrowing capacity
                  
                </li>
                <li className="flex items-center gap-2">
                  <CheckCheck size={18} className="text-[#16A34A]" />
                  Higher interest rates
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreditLimitTiers;
