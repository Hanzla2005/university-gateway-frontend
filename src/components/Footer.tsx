import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Institutions", path: "/institutions" },
  { label: "Academics", path: "/academics" },
  { label: "Research & Innovation", path: "/research" },
  { label: "Campus Life", path: "/campus-life" },
  { label: "Announcements", path: "/announcements" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground/70">
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 text-primary-foreground mb-3">
              <img src={logo} alt="Kohsar University Murree" className="h-10 w-10 rounded-full bg-white p-0.5" />
              <span className="font-serif text-lg">Kohsar University Murree</span>
            </div>
            <p className="text-sm leading-relaxed">
              Serve to Solve — Empowering minds in the heart of the mountains since 2017.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-primary-foreground text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-primary-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-primary-foreground text-sm mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              {["Library", "Student Portal", "Faculty Directory", "Career Services", "Alumni Network"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-primary-foreground text-sm mb-3">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Murree Hills, Rawalpindi District, Punjab, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                +92 (51) 923-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                info@kohsar.edu.pk
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {new Date().getFullYear()} Kohsar University Murree. All rights reserved.</p>
          <div className="flex items-center gap-2">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-all">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
