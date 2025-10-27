import { Facebook, Instagram, Twitter, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#388087] text-white">
      {/* Main Footer Content */}
      <div className="px-8 py-16 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="flex flex-col gap-2">
            <img src="/assets/images/footer-logo.png" alt="" />
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-light tracking-wide">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-light tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-light tracking-wide">Social Media</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors bg-white/10 border border-white/20 p-2 rounded-full"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors bg-white/10 border border-white/20 p-2 rounded-full"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors bg-white/10 border border-white/20 p-2 rounded-full"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors bg-white/10 border border-white/20 p-2 rounded-full"
              >
                <Music size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary px-8 py-4 md:px-16 lg:px-24">
        <p className="text-center text-sm text-white tracking-wide">
          Copyright © 2025{" "}
          <span className="font-extralight uppercase">Foreign Match</span>. All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}
