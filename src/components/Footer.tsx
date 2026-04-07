import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-dark text-primary-foreground/70">
      <div className="container-main section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-primary-foreground mb-4">
              <GraduationCap className="h-7 w-7" />
              <span className="font-serif text-xl">Prestige University</span>
            </div>
            <p className="text-sm leading-relaxed">
              Shaping the future through education, research, and innovation since 1965.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-primary-foreground text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {["About Us", "Programs", "Admissions", "Research", "Campus Life"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-primary-foreground text-base mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              {["Library", "Student Portal", "Faculty Directory", "Career Services", "Alumni Network"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-primary-foreground text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                University Avenue, Academic City, 54000
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                +92 (51) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                info@prestige.edu
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Prestige University. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-primary-foreground/40 transition-all"
              >
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
