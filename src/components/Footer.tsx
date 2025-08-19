import Image from "next/image";
import Logo from '../public/footer.jpg'
import { Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#4B1E2F] text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="rounded-lg">
              <Image src={Logo} width={100} className="rounded-xl" height={100} alt="rambap" />
            </div>
            <p className="text-sm opacity-90">
              Revolutionizing lending solutions with innovative financial products designed for your success.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:text-white transition-colors">Business Loans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personal Finance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real Estate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education Loans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <span><MapPin size={16} /></span>
                <span>123 Business Street, Suite 100</span>
              </div>
              <div className="flex items-center space-x-2">
                <span><Phone size={16} /></span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span><Mail size={16} /></span>
                <span>info@creditprime.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
          <div>© 2024 CreditPrime. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;