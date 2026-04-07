import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-campus.jpg";

const announcements = [
  { title: "Fall 2025 Admissions Now Open", date: "March 15, 2025", tag: "Admissions" },
  { title: "New Research Center Inaugurated", date: "March 10, 2025", tag: "Research" },
  { title: "Annual Convocation Ceremony", date: "March 8, 2025", tag: "Academic" },
  { title: "International Exchange Program", date: "March 5, 2025", tag: "Global" },
];

const quickLinks = [
  { label: "About the University", path: "/about", desc: "Our history, mission, and leadership." },
  { label: "Institutions & Faculties", path: "/institutions", desc: "Explore our schools and departments." },
  { label: "Academic Programs", path: "/academics", desc: "Undergraduate, graduate, and doctoral programs." },
  { label: "Research & Innovation", path: "/research", desc: "Advancing knowledge across disciplines." },
  { label: "Campus Life", path: "/campus-life", desc: "Student activities, housing, and facilities." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="University campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative container-main px-4 sm:px-6 lg:px-8 pt-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Excellence in Education Since 1965
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight mb-4">
            Welcome to Prestige University
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-lg mb-8">
            Empowering minds through world-class research, innovative teaching,
            and a commitment to shaping tomorrow's leaders.
          </p>
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded hover:brightness-110 transition-all"
          >
            Explore Programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Announcements */}
      <section className="container-main px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-serif text-foreground mb-6">Latest Announcements</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {announcements.map((a) => (
            <div key={a.title} className="border border-border rounded p-5 hover:border-primary/30 transition-colors">
              <span className="text-xs font-medium text-accent">{a.tag}</span>
              <h3 className="font-serif text-base text-foreground mt-1 mb-2">{a.title}</h3>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" /> {a.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-muted/50">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-serif text-foreground mb-6">Explore</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group block border border-border bg-card rounded p-5 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-serif text-base text-foreground group-hover:text-primary transition-colors mb-1">
                  {link.label}
                </h3>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
