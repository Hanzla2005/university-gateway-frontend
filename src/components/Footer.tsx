import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, Instagram, GraduationCap, BookOpen, Users, Building2, FileText, Briefcase, Phone, MapPin, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

const importantLinks = [
  { label: "Scholarships", path: "/scholarships", icon: GraduationCap },
  { label: "Admissions", path: "/online-admissions", icon: BookOpen },
  { label: "Campus & Student Affairs", path: "/campus-student-affairs", icon: Users },
  { label: "Guest House", path: "/guest-house", icon: Building2 },
  { label: "Downloads", path: "/downloads", icon: FileText },
  { label: "Policies", path: "/policies", icon: FileText },
  { label: "Jobs", path: "/jobs", icon: Briefcase },
  { label: "Societies", path: "/societies", icon: Users },
];

const inFocusLinks = [
  { label: "KUM at a Glance", path: "/about" },
  { label: "Academic Calendar", path: "/academics" },
  { label: "Student Helplines", path: "/campus-student-affairs" },
  { label: "Facilities at KUM", path: "/campus-life" },
  { label: "Contact Us", path: "/about" },
  { label: "Vice Chancellor", path: "/vice-chancellor" },
];

const quickLinks = [
  { label: "Library", path: "/downloads" },
  { label: "Downloads", path: "/downloads" },
  { label: "Merit Lists", path: "/merit-lists" },
  { label: "Anti-Harassment Policy", path: "/policy-sexual-harassment" },
  { label: "Conferences", path: "/conferences" },
  { label: "Gallery", path: "/gallery" },
];

const GOOGLE_MAPS_URL = "https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=pk&sa=X&geocode=KZ8MrnCv1984MYm_55dVixvA&daddr=near+maissonette+Firhill+Hotel,+Murree";
const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8!2d73.39!3d33.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzM2LjAiTiA3M8KwMjMnMjQuMCJF!5e0!3m2!1sen!2spk!4v1";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background architectural overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.1)_49%,rgba(255,255,255,0.1)_51%,transparent_52%)] bg-[length:30px_30px]" />
      </div>

      {/* Important Links Section */}
      <div className="relative border-b border-primary-foreground/10">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {importantLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path + link.label}
                  to={link.path}
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center group-hover:border-primary-foreground/50 transition-colors shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Important Links Button */}
      <div className="relative flex justify-center -mt-px">
        <div className="border border-primary-foreground/30 px-6 py-2 text-xs font-semibold tracking-widest text-primary-foreground uppercase">
          Important Links
        </div>
      </div>

      {/* Divider */}
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="border-t border-primary-foreground/10 mt-4" />
      </div>

      {/* Main Footer Content */}
      <div className="relative container-main px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* In Focus */}
          <div>
            <h4 className="font-serif text-primary-foreground text-base italic mb-4">In Focus</h4>
            <ul className="space-y-2.5">
              {inFocusLinks.map((l) => (
                <li key={l.path + l.label}>
                  <Link to={l.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors flex items-center gap-1.5">
                    <span className="text-primary-foreground/40">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-primary-foreground text-base italic mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.path + l.label}>
                  <Link to={l.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors flex items-center gap-1.5">
                    <span className="text-primary-foreground/40">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-primary-foreground text-base font-bold mb-4">KUM Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                +92 (51) 923-4567
              </div>
              <h5 className="font-serif text-primary-foreground text-sm font-bold mt-4">Address</h5>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                Kohsar University Murree (KUM), Near Firhill Hotel, Murree, Punjab, Pakistan
              </p>
            </div>
          </div>

          {/* Location Map */}
          <div>
            <h4 className="font-serif text-primary-foreground text-base font-bold mb-4">Location Map</h4>
            <div className="rounded overflow-hidden border border-primary-foreground/10">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="160"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kohsar University Murree Location"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-primary-foreground/50 hover:text-primary-foreground mt-2 transition-colors"
            >
              Open in Maps <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Logo centered */}
      <div className="relative flex justify-center py-6">
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="Kohsar University Murree" className="h-16 w-16 rounded-full bg-white p-1" />
          <span className="font-serif text-primary-foreground text-sm tracking-wide">Kohsar University Murree</span>
          <span className="text-[10px] text-primary-foreground/40 italic tracking-wider">Serve to Solve</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-primary-foreground/10">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs text-primary-foreground/50">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">Contact Us</Link>
          </div>
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Kohsar University Murree. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            {[Facebook, Linkedin, Youtube, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-7 h-7 flex items-center justify-center text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
