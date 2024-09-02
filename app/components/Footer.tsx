import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/images/whitelogo.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">For companies</li>
              <li><Link href="/marketplace" className="hover:text-gray-300">Marketplace</Link></li>
              <li className="text-gray-400">For software engineers</li>
              <li><Link href="/apply" className="hover:text-gray-300">Apply to jobs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link href="/blogs" className="hover:text-gray-300">Blogs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/companies-hiring" className="hover:text-gray-300">Companies still hiring list</Link></li>
              <li><Link href="/work-culture-db" className="hover:text-gray-300">Companies Work Culture DB</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link></li>
              <li><Link href="/delete-data" className="hover:text-gray-300">Delete my data</Link></li>
              <li><Link href="/do-not-sell" className="hover:text-gray-300">Do Not Sell My Personal Information</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><Link href="/email" className="hover:text-gray-300">Email</Link></li>
              <li><Link href="/twitter" className="hover:text-gray-300">Twitter</Link></li>
              <li><Link href="/linkedin" className="hover:text-gray-300">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <Image src={logo} alt="Smart Match Logo" width={150} height={50} />
          </div>
          <div className="text-sm text-gray-400">
            <p>SmartMatch</p>
            <p>123 Street Role, New Delhi - 110001</p>
            <p>+91- 9997421589</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;