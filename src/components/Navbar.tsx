import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from '../public/Logo.png'

const Navbar = () => {
  return (
    <nav className="bg-[#FFFFFF] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">

          <div className="w-[102px] h-[50px]">
            <Image src={Logo} width={900} height={900} alt="Rambap" />
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-[#282828]  text-[18px] font-medium ">Home</a>
            <a href="#" className="text-[#282828]  text-[18px] font-normal">About</a>
          </div>

          <Button className="bg-[#4B1E2F] text-white hover:bg-[#4b1e2fa9]">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;