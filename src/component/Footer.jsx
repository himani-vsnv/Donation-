import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer  = () => {
  return (
    <footer id="contact" className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={20} className="mr-3" />
                <a href="mailto:info@srilaashram.org" className="hover:text-amber-200 transition-colors duration-200">
                  info@srilaashram.org
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3" />
                <a href="tel:+919876543210" className="hover:text-amber-200 transition-colors duration-200">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-amber-200 transition-colors duration-200">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#donate" className="hover:text-amber-200 transition-colors duration-200">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors duration-200">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-200 transition-colors duration-200">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-200 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors duration-200">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-sm text-amber-300">
          <p>© {new Date().getFullYear()} SrilaAshram. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-amber-200 transition-colors duration-200 mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-amber-200 transition-colors duration-200">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};