import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="bg-[#DBCBB9] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to discover your credit potential?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who have unlocked their growth potential with our innovative lending solutions.
          </p>
          <Button size="lg" className="bg-[#4B1E2F] hover:bg-[#4B1E2F]/90 text-white px-8 py-3">
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;