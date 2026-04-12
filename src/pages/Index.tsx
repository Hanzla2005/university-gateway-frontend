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
import hero1 from "@/assets/home/hero.png";
import hero2 from "@/assets/home/hero1.png";
import hero3 from "@/assets/home/hero3.png";
import hero4 from "@/assets/home/hero4.png";
import chancellorImg from "@/assets/home/chancellor.png";
import vcImg from "@/assets/home/vc.png";
import stemImg from "@/assets/home/stem.png";
import honeyProductionImg from "@/assets/home/honeyProduction.png";

const heroImages = [hero1, hero2, hero3, hero4];

const stats = [
  { icon: BookOpen, value: "3", label: "Faculties" },
  { icon: Users, value: "1,350", label: "Students" },
  { icon: Award, value: "51", label: "Teaching Faculty" },
  { icon: Globe, value: "4", label: "Campuses" },
];

const quickLinks = [
  { label: "About the University", path: "/about", desc: "Our history, mission, and leadership." },
  { label: "Institutions & Faculties", path: "/institutions", desc: "Explore our eight faculties and departments." },
  { label: "Academic Programs", path: "/academics", desc: "Undergraduate, graduate, and doctoral programs." },
  { label: "Campus Life", path: "/campus-life", desc: "Student activities, housing, and facilities." },
  { label: "Announcements", path: "/announcements", desc: "Latest news, notices, and updates." },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroImages.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length), []);

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
        {heroImages.map((image, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <img src={image} alt={`Hero slide ${i + 1}`} className="w-full h-full object-cover" />
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
            {heroImages.map((_, i) => (
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

      {/* Kohsar University in One Look */}
      <section className="container-main px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-6 text-center">Kohsar University Murree in one look</h2>
          <p className="text-foreground leading-relaxed text-justify mb-8">
            One of the cornerstones of Higher Education Commission's (HEC's) policies is to establish higher education institutions in the field of Applied Sciences. The Government of Pakistan has already heavily invested in training of critical human resource, and it further intends to develop a large pool of high-quality researchers and technicians in various fields of Science, Technology, and Allied Industries. In this connection, Kohsar University Murree (KUM) is an initiative of Government of Punjab to bring improvements in the tourism & hospitality linked economy as well as other interlinked areas to improve the overall health of Community, Environment, and Ecosystem. This is scheduled to be achieved by tightly linking basic research & translational research with entrepreneurial activities to build conducive on campus <span className="font-semibold italic text-primary">Serve to Solve</span>.
          </p>
          <div className="flex justify-center gap-3 mb-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all"
            >
              Explore More <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/vice-chancellor"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-black font-semibold rounded hover:bg-primary/10 transition-all"
            >
              Vice Chancellor Message <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Chancellor Card */}
          <div className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all bg-card shadow-sm hover:shadow-md flex flex-col">
            <div className="p-6">
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={chancellorImg} alt="Chancellor" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-accent tracking-widest uppercase mb-2">Chancellor</p>
                  <h3 className="font-serif text-lg text-foreground">Sardar Saleem Haider Khan</h3>
                  <p className="text-xs text-muted-foreground mt-1">Leading with vision and commitment</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed border-t pt-4">
                Sardar Saleem Haider Khan brings exceptional leadership and strategic vision to Kohsar University Murree. With a distinguished background in governance and education, he is committed to advancing the university's mission of delivering quality education and fostering innovation. His leadership emphasizes the university's role in developing human capital and contributing to national development.
              </p>
            </div>
          </div>

          {/* Vice Chancellor Card */}
          <div className="border rounded-lg overflow-hidden bg-card hover:border-primary/30 shadow-sm hover:shadow-md flex flex-col">
            <div className="p-6">
              <div className="flex gap-4 mb-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={vcImg} alt="Vice Chancellor" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-accent tracking-widest uppercase mb-2">Vice Chancellor</p>
                  <h3 className="font-serif text-lg text-foreground">Prof. Dr. Rafia Mumtaz</h3>
                  <p className="text-xs text-muted-foreground mt-1">Visionary leader in innovation</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed border-t pt-4">
                Professor Dr. Rafia Mumtaz is a visionary academic leader and distinguished researcher serving as the Vice Chancellor of Kohsar University Murree. She has made pioneering contributions in Internet of Things (IoT), Artificial Intelligence (AI), and embedded systems. Before joining Kohsar University, Dr. Rafia served at the National University of Sciences and Technology (NUST) for over 15 years, earning recognition for outstanding academic leadership and research excellence. Her innovative work addresses critical challenges in healthcare, agriculture, and environmental sustainability through intelligent technology solutions.
              </p>
            </div>
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

      {/* STEM Section */}
      <section className="bg-muted/50">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-foreground">STEM</h2>
              <p className="text-foreground leading-relaxed text-justify">
                STEM is an educational program developed to prepare primary and secondary students for college, graduate study, and careers in the fields of science, technology, engineering and mathematics (STEM). In addition to subject-specific learning, STEM aims to foster inquiring minds, logical reasoning, and collaboration skills. The goal of STEM programs is to increase the supply of qualified high-tech workers in the Pakistan, bolster innovation, improve the country's competitive position globally and strengthen economic growth. STEM gained importance in the early 2000s following the publication of several reports. STEM emphasized the importance of science and technology jobs in fostering innovation, addressing societal problems and maintaining country's prosperity.
              </p>
              <Link
                to="/academics"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right - Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img src={stemImg} alt="STEM Laboratory and Facilities" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture & Honey Production Section */}
      <section className="container-main px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <img src={honeyProductionImg} alt="Honey Production Unit and Agriculture" className="w-full h-full object-cover" />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-foreground">Agriculture</h2>
            <p className="text-foreground leading-relaxed text-justify">
              Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock. It includes the preparation of plant and animal products for people to use and their distribution to markets. Agriculture provides most of the world's food and fabric.
            </p>
            <div className="space-y-3">
              <h3 className="font-serif text-lg text-foreground">Major disciplines of Agriculture are</h3>
              <p className="text-foreground leading-relaxed">
                Food Science and Technology, Environmental Science, Forestry, Agronomy, Soil Sciences, Plant Breeding and Genetics
              </p>
            </div>
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View More <ArrowRight className="h-4 w-4" />
            </Link>
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
