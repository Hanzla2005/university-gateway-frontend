import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, Users, BookOpen, Globe, Award, MapPin, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { institutions } from "@/data/institutions";
import heroBg from "@/assets/home/bg.png";

import chancellorImg from "@/assets/home/chancellor.png";
import vcImg from "@/assets/home/vc.png";
import stemImg from "@/assets/home/stem.png";
import honeyProductionImg from "@/assets/home/honeyProduction.png";
import story1 from "@/assets/stories/story1.jpg";
import story2 from "@/assets/stories/story2.jpg";
import story3 from "@/assets/stories/story3.jpg";
import story4 from "@/assets/stories/story4.jpg";
import story5 from "@/assets/stories/story5.jpg";
import story6 from "@/assets/stories/story6.jpg";



const topStories = [
  { id: 1, tag: "STUDENT ACHIEVEMENTS", title: "KUM Students Win National Robotics Competition 2025", image: story1, large: true },
  { id: 2, tag: "INTERACTIVE SESSION", title: "KUM Hosts Keynote on Pakistan-China Academic Relations", image: story2 },
  { id: 3, tag: "ACHIEVEMENT", title: "KUM Recognized in HEC Rankings for Excellence in Research", image: story3 },
  { id: 4, tag: "AWARENESS SESSION", title: "KUM Admissions Office Conducts Awareness Sessions in Rawalpindi", image: story4 },
  { id: 5, tag: "STUDENT ACHIEVEMENTS", title: "KUM Student Wins 1st Place in National Essay Competition", image: story5 },
  { id: 6, tag: "INDUSTRY-ACADEMIA COLLABORATION", title: "KUM Supports Youth Entrepreneurship at Pitch Bazar 2025", image: story6 },
];

const stats = [
  { icon: BookOpen, value: "3", label: "Faculties" },
  { icon: Users, value: "1,350", label: "Students" },
  { icon: Award, value: "51", label: "Teaching Faculty" },
  { icon: Globe, value: "4", label: "Campuses" },
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroImages.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero - Full image, no text, NUST style */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((image, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <img src={image} alt={`Campus view ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Slider controls at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 flex items-center justify-center transition-colors backdrop-blur-sm" aria-label="Previous">
            <ChevronLeft className="h-5 w-5 text-primary-foreground" />
          </button>
          <div className="flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-primary-foreground/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 flex items-center justify-center transition-colors backdrop-blur-sm" aria-label="Next">
            <ChevronRight className="h-5 w-5 text-primary-foreground" />
          </button>
        </div>

        {/* Welcome banner at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-primary/90 backdrop-blur-sm">
          <div className="container-main px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-2">
            <span className="text-primary-foreground font-serif text-lg">Welcome to Kohsar University Murree</span>
            <ChevronDown className="h-5 w-5 text-accent animate-bounce" />
          </div>
        </div>
      </section>

      {/* Top Stories - NUST style grid */}
      <section className="bg-muted/50 py-14">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-foreground text-center mb-10">Top Stories</h2>

          {/* Row 1: 1 large + 2 small */}
          <div className="grid lg:grid-cols-3 gap-4 mb-4">
            {/* Large card */}
            <div className="lg:col-span-1 lg:row-span-1">
              <Link to="/announcements" className="group block relative aspect-[4/3] overflow-hidden bg-foreground">
                <img src={topStories[0].image} alt={topStories[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" width={800} height={512} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{topStories[0].tag}</p>
                  <p className="text-sm text-primary-foreground leading-snug">{topStories[0].title}</p>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/announcements" className="group block relative aspect-[4/3] overflow-hidden bg-foreground">
                <img src={topStories[1].image} alt={topStories[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" width={800} height={512} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{topStories[1].tag}</p>
                  <p className="text-sm text-primary-foreground leading-snug">{topStories[1].title}</p>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/announcements" className="group block relative aspect-[4/3] overflow-hidden bg-foreground">
                <img src={topStories[2].image} alt={topStories[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" width={800} height={512} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{topStories[2].tag}</p>
                  <p className="text-sm text-primary-foreground leading-snug">{topStories[2].title}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 2: 3 equal cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topStories.slice(3).map((story) => (
              <Link key={story.id} to="/announcements" className="group block relative aspect-[4/3] overflow-hidden bg-foreground">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" width={800} height={512} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{story.tag}</p>
                  <p className="text-sm text-primary-foreground leading-snug">{story.title}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/announcements"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded hover:brightness-110 transition-all text-sm"
            >
              More Stories
            </Link>
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
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all">
              Explore More <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/vice-chancellor" className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-foreground font-semibold rounded hover:bg-primary/10 transition-all">
              Vice Chancellor Message <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                Sardar Saleem Haider Khan brings exceptional leadership and strategic vision to Kohsar University Murree. With a distinguished background in governance and education, he is committed to advancing the university's mission of delivering quality education and fostering innovation.
              </p>
            </div>
          </div>

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
                Professor Dr. Rafia Mumtaz is a visionary academic leader and distinguished researcher. She has made pioneering contributions in IoT, AI, and embedded systems, earning recognition for outstanding academic leadership and research excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                <p className="text-3xl font-serif text-primary-foreground">{s.value}</p>
                <p className="text-sm text-primary-foreground/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEM Section */}
      <section className="bg-muted/50">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-foreground">STEM</h2>
              <p className="text-foreground leading-relaxed text-justify">
                STEM is an educational program developed to prepare primary and secondary students for college, graduate study, and careers in the fields of science, technology, engineering and mathematics (STEM). In addition to subject-specific learning, STEM aims to foster inquiring minds, logical reasoning, and collaboration skills.
              </p>
              <Link to="/academics" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                View More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img src={stemImg} alt="STEM Laboratory" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture Section */}
      <section className="container-main px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <img src={honeyProductionImg} alt="Agriculture" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-foreground">Agriculture</h2>
            <p className="text-foreground leading-relaxed text-justify">
              Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock. It includes the preparation of plant and animal products for people to use and their distribution to markets.
            </p>
            <div className="space-y-3">
              <h3 className="font-serif text-lg text-foreground">Major disciplines of Agriculture are</h3>
              <p className="text-foreground leading-relaxed">
                Food Science and Technology, Environmental Science, Forestry, Agronomy, Soil Sciences, Plant Breeding and Genetics
              </p>
            </div>
            <Link to="/academics" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              View More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Faculties */}
      <section className="bg-muted/50 py-14">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif text-foreground">Our Faculties</h2>
            <Link to="/institutions" className="text-sm text-primary hover:underline">View All →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {institutions.slice(0, 4).map((inst) => (
              <Link
                key={inst.id}
                to={`/institutions/${inst.id}`}
                className="group border border-border rounded overflow-hidden hover:border-primary/30 transition-colors bg-card"
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

      <Footer />
    </div>
  );
};

export default Index;
