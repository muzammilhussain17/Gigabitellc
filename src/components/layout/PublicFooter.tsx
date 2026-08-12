import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const footerProducts = [
  { label: "Final Expense", href: "/products" },
  { label: "Life Insurance", href: "/products" },
  { label: "Medicare Insurance", href: "/products" },
  { label: "Supplemental Insurance", href: "/products" },
  { label: "Accident Insurance", href: "/products" },
  { label: "Critical Illness", href: "/products" },
  { label: "Hospital Indemnity", href: "/products" },
  { label: "Annuities", href: "/products" },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products" },
  { label: "Carrier Partners", href: "/carriers" },
  { label: "Join Our Team", href: "/join" },
  { label: "Contact Us", href: "/contact" },
];

export function PublicFooter() {
  return (
    <footer className="bg-gigabyte-navy text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-10 px-2 py-1 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Gigabyte LLC Logo" 
                  className="h-8 w-auto object-contain" 
                />
              </div>
            </div>
            <p className="text-blue-200/60 text-sm leading-relaxed mb-6 font-light">
              A full-service insurance agency and IMO dedicated to protecting American families and empowering independent agents nationwide.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-[#0072bc] hover:border-[#0072bc] flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">Products</h3>
            <ul className="space-y-2.5">
              {footerProducts.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-blue-200/50 hover:text-white text-sm transition-colors duration-200 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-blue-200/50 hover:text-white text-sm transition-colors duration-200 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-blue-200/50 text-[10px] uppercase font-bold tracking-wider mb-0.5">Phone</div>
                  <a href="tel:+18122475684" className="text-white text-sm hover:text-cyan-300 transition-colors font-semibold">
                    (812) 247-5684
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-blue-200/50 text-[10px] uppercase font-bold tracking-wider mb-0.5">Email</div>
                  <a href="mailto:mark.johnson.550467@gmail.com" className="text-white text-sm hover:text-cyan-300 transition-colors font-semibold truncate block max-w-[190px]">
                    MarkJohnson@gigabytellc.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-blue-200/50 text-[10px] uppercase font-bold tracking-wider mb-0.5">Office</div>
                  <span className="text-white text-sm font-light">
                    7407 NW 23rd St Bethany <br />
                    OK 73008<br />
                    United States
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-200/40 text-xs font-light">
            © {new Date().getFullYear()} Gigabyte LLC. All rights reserved. Licensed in all 50 states.
          </p>
          <p className="text-blue-200/30 text-xs text-center sm:text-right max-w-lg font-light leading-relaxed">
            Insurance products and services are subject to state availability and individual underwriting approval. 
            Gigabyte LLC is a licensed IMO in all 50 states.
          </p>
        </div>
      </div>
    </footer>
  );
}
