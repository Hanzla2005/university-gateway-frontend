import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { announcements } from "@/data/announcements";

const quickLinks = [
  { label: "About the University", path: "/about", desc: "Our history, mission, and leadership." },
  { label: "Institutions & Faculties", path: "/institutions", desc: "Explore our schools and departments." },
  { label: "Academic Programs", path: "/academics", desc: "Undergraduate, graduate, and doctoral programs." },
  { label: "Research & Innovation", path: "/research", desc: "Advancing knowledge across disciplines." },
  { label: "Campus Life", path: "/campus-life", desc: "Student activities, housing, and facilities." },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % announcements.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + announcements.length) % announcements.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const a = announcements[current];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Slider */}
      <section className="relative h-[80vh] overflow-hidden">
        {announcements.map((item, i) => (
          <div
            key={item.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/70" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="container-main px-4 sm:px-6 lg:px-8">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              {a.tag}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary-foreground leading-tight mb-4 max-w-2xl">
              {a.title}
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-lg mb-6">
              {a.excerpt}
            </p>
            <Link
              to={`/announcements/${a.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded hover:brightness-110 transition-all"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Slider controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
          <button onClick={prev} className="w-9 h-9 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors" aria-label="Previous">
            <ChevronLeft className="h-5 w-5 text-primary-foreground" />
          </button>
          <div className="flex gap-2">
            {announcements.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-primary-foreground/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-9 h-9 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors" aria-label="Next">
            <ChevronRight className="h-5 w-5 text-primary-foreground" />
          </button>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="container-main px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif text-foreground">Latest Announcements</h2>
          <Link to="/announcements" className="text-sm text-primary hover:underline">View All →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {announcements.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              to={`/announcements/${item.id}`}
              className="group block border border-border rounded overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={item.image} alt={item.title} loading="lazy" width={800} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-accent">{item.tag}</span>
                <h3 className="font-serif text-base text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {item.date}
                </div>
              </div>
            </Link>
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
