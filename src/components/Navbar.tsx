import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-[#4B1E2F] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold">CreditPrime</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="#" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Services</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
          <Button className="bg-white text-[#4B1E2F] hover:bg-gray-100">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;