import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Users, BookOpen, Globe, Award, MapPin, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { announcements } from "@/data/announcements";
import { institutions } from "@/data/institutions";
import campusAerial from "@/assets/campus-aerial.jpg";
import campusStudents from "@/assets/campus-students.jpg";
import campusLife from "@/assets/campus-life.jpg";
import graduationImg from "@/assets/graduation.jpg";

const stats = [
  { icon: Users, value: "7,900+", label: "Students" },
  { icon: BookOpen, value: "58+", label: "Programs" },
  { icon: Globe, value: "15+", label: "Partner Universities" },
  { icon: Award, value: "450+", label: "Faculty Members" },
];

const quickLinks = [
  { label: "About the University", path: "/about", desc: "Our history, mission, and leadership." },
  { label: "Institutions & Faculties", path: "/institutions", desc: "Explore our eight faculties and departments." },
  { label: "Academic Programs", path: "/academics", desc: "Undergraduate, graduate, and doctoral programs." },
  { label: "Research & Innovation", path: "/research", desc: "Advancing knowledge in mountain sciences and beyond." },
  { label: "Campus Life", path: "/campus-life", desc: "Student activities, housing, and facilities." },
  { label: "Announcements", path: "/announcements", desc: "Latest news, notices, and updates." },
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
      <section className="relative h-[85vh] overflow-hidden">
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

      {/* Stats Bar */}
      <section className="bg-primary border-t border-primary-foreground/10">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-2xl font-serif text-primary-foreground">{s.value}</p>
                <p className="text-sm text-primary-foreground/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container-main px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-4">Welcome to Kohsar University Murree</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nestled in the scenic hills of Murree, Kohsar University is a premier institution of higher education committed to academic excellence, research innovation, and community service. Our motto — <strong className="text-foreground">"Serve to Solve"</strong> — drives everything we do.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With eight faculties, 58+ academic programs, and a vibrant campus life surrounded by the natural beauty of the Murree hills, we offer a unique learning environment that inspires creativity and critical thinking.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="aspect-[4/3] rounded overflow-hidden">
            <img src={campusAerial} alt="Kohsar University campus aerial view" className="w-full h-full object-cover" width={1920} height={1080} />
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="bg-muted/50">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif text-foreground">Latest Announcements</h2>
            <Link to="/announcements" className="text-sm text-primary hover:underline">View All →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {announcements.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to={`/announcements/${item.id}`}
                className="group block border border-border bg-card rounded overflow-hidden hover:border-primary/30 transition-colors"
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
        </div>
      </section>

      {/* Featured Institutions */}
      <section className="container-main px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-serif text-foreground">Our Faculties</h2>
          <Link to="/institutions" className="text-sm text-primary hover:underline">View All →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {institutions.slice(0, 4).map((inst) => (
            <Link
              key={inst.id}
              to={`/institutions/${inst.id}`}
              className="group border border-border rounded overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img src={inst.image} alt={inst.name} loading="lazy" width={800} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center mb-2">
                  <inst.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-serif text-sm text-foreground group-hover:text-primary transition-colors">{inst.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{inst.students} Students · {inst.programs} Programs</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="bg-muted/50">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-serif text-foreground mb-6">Campus Life</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-[4/3] rounded overflow-hidden">
              <img src={campusStudents} alt="Students on campus" loading="lazy" width={1280} height={720} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[4/3] rounded overflow-hidden">
              <img src={campusLife} alt="Campus life" loading="lazy" width={1280} height={720} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[4/3] rounded overflow-hidden">
              <img src={graduationImg} alt="Graduation ceremony" loading="lazy" width={1280} height={720} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          <div className="text-center mt-6">
            <Link to="/campus-life" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              Explore Campus Life <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Kohsar */}
      <section className="container-main px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-serif text-foreground mb-6 text-center">Why Kohsar University?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {[
            { icon: MapPin, title: "Scenic Mountain Campus", desc: "Study in the breathtaking hills of Murree with clean air and serene surroundings." },
            { icon: GraduationCap, title: "HEC Recognized", desc: "All programs are recognized by the Higher Education Commission of Pakistan." },
            { icon: Globe, title: "International Partnerships", desc: "Exchange programs with universities in Turkey, China, Malaysia, and beyond." },
            { icon: Award, title: "Research Excellence", desc: "Active research centers in mountain ecology, AI, and sustainable development." },
            { icon: Users, title: "Small Class Sizes", desc: "Personalized attention with a favorable student-to-faculty ratio." },
            { icon: BookOpen, title: "Modern Facilities", desc: "State-of-the-art labs, digital library, and high-speed campus-wide WiFi." },
          ].map((item) => (
            <div key={item.title} className="border border-border rounded p-5 hover:border-primary/30 transition-colors">
              <item.icon className="h-5 w-5 text-primary mb-3" />
              <h3 className="font-serif text-base text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
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
