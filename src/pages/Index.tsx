import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, FlaskConical, HeartPulse, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import Footer from "@/components/Footer";
import AnnouncementsSlider from "@/components/AnnouncementsSlider";
import { departmentPages } from "@/data/departmentPages";
import departmentImages from "@/data/departmentImages";
import heroBg from "@/assets/home/bg.png";

import chancellorImg from "@/assets/home/chancellor.png";
import vcImg from "@/assets/home/vc.png";
import stemImg from "@/assets/home/stem.png";
import honeyProductionImg from "@/assets/home/honeyProduction.png";
import graduationImg from "@/assets/graduation.jpg";
import { topStories } from "@/data/stories";

const facultyGroups = [
  {
    key: "applied",
    name: "Applied Sciences & Computing",
    icon: FlaskConical,
    departments: ["computer-science", "mathematics", "statistics", "physics", "bioinformatics"],
  },
  {
    key: "biomedical",
    name: "Biomedical & Life Sciences",
    icon: HeartPulse,
    departments: ["biomedical-engineering", "bioscience", "botany", "mountain-agriculture", "microbiology"],
  },
  {
    key: "management",
    name: "Management, Humanities & Social Sciences",
    icon: BookOpen,
    departments: ["art-and-design", "english", "urdu", "psychology", "sociology", "political-science", "tourism-and-hospitality"],
  },
];

const Index = () => {
  const [activeFaculty, setActiveFaculty] = useState(facultyGroups[0].key);

  return (
    <div className="min-h-screen">

      {/* Hero - Single full image, navbar overlays on top */}
      <section className="relative h-screen overflow-hidden">
        <img src={heroBg} alt="Kohsar University Murree Campus" className="w-full h-full object-cover" width={1920} height={1080} />

        {/* Welcome banner at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-primary/90 backdrop-blur-sm">
          <div className="container-main px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center gap-2">
            <button
              onClick={() => {
                const storiesSection = document.getElementById("stories");
                if (storiesSection) {
                  storiesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-primary-foreground font-serif text-xl"
            >
              Welcome to Kohsar University Murree
            </button>
            <ChevronDown className="h-5 w-5 text-accent animate-bounce" />
          </div>
        </div>
      </section>

      {/* Top Stories */}
      <section id="stories" className="bg-white py-16">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-foreground text-center mb-12">Top Stories</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/stories/${story.id}`} className="group block bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={512}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{story.tag}</p>
                    <h3 className="text-base font-serif text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">{story.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 px-7 py-2.5 bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all text-base"
            >
              More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Vice Chancellor's Message */}
      <section className="bg-muted/95 py-16">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif text-foreground">Vice Chancellor's Message</h2>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            <div className="md:col-span-8">
              <blockquote className="text-xl text-foreground relative pl-8">
                <span className="text-6xl text-primary absolute -top-2 left-0 opacity-30 font-serif">“</span>
                As we embrace the future with a shared vision, our primary focus shall remain on equipping the next generation with world-class knowledge. Simultaneously, we shall emphasise internationalisation, interdisciplinary collaboration and foster cutting-edge research and innovation that align with national growth and collective progress....
                <span className="text-6xl text-primary absolute -bottom-8 right-4 opacity-30 font-serif">”</span>
              </blockquote>
              <Link to="/vice-chancellor" className="text-base text-primary hover:underline mt-6 inline-block ml-8">View Details</Link>
            </div>
            <div className="md:col-span-4 text-center">
              <img src={vcImg} alt="Rector" className="w-40 h-40 rounded-full object-cover mx-auto mb-4 shadow-lg" />
              <h3 className="font-serif text-2xl text-foreground">Dr. Rafia Mumtaz</h3>
              <p className="text-base text-muted-foreground">Vice Chancellor Kohsar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kohsar University in One Look */}
      <section className="container-main px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-foreground mb-6 text-center">Kohsar University Murree in one look</h2>
          <p className="text-lg text-foreground leading-relaxed text-justify mb-8">
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
                  <p className="text-sm font-medium text-accent tracking-widest uppercase mb-2">Chancellor</p>
                  <h3 className="font-serif text-xl text-foreground">Sardar Saleem Haider Khan</h3>
                  <p className="text-sm text-muted-foreground mt-1">Leading with vision and commitment</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed border-t pt-4">
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
                  <p className="text-sm font-medium text-accent tracking-widest uppercase mb-2">Vice Chancellor</p>
                  <h3 className="font-serif text-xl text-foreground">Prof. Dr. Rafia Mumtaz</h3>
                  <p className="text-sm text-muted-foreground mt-1">Visionary leader in innovation</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed border-t pt-4">
                Professor Dr. Rafia Mumtaz is a visionary academic leader and distinguished researcher. She has made pioneering contributions in IoT, AI, and embedded systems, earning recognition for outstanding academic leadership and research excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Slider */}
      <AnnouncementsSlider />

      {/* STEM Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-serif text-foreground">STEM</h2>
              <p className="text-lg text-foreground leading-relaxed text-justify">
                STEM is an educational program developed to prepare primary and secondary students for college, graduate study, and careers in the fields of science, technology, engineering and mathematics (STEM). In addition to subject-specific learning, STEM aims to foster inquiring minds, logical reasoning, and collaboration skills.
              </p>
              <Link to="/academics" className="inline-block px-5 py-2 bg-accent text-accent-foreground text-sm font-semibold hover:brightness-110 transition-all">
                View More
              </Link>
            </motion.div>
            <motion.div
              className="aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <img src={stemImg} alt="STEM Laboratory" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agriculture Section */}
      <section className="bg-white py-16">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="aspect-[4/3] overflow-hidden lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <img src={honeyProductionImg} alt="Agriculture" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="space-y-6 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="text-4xl font-serif text-foreground">Agriculture</h2>
              <p className="text-lg text-foreground leading-relaxed text-justify">
                Agriculture is the art and science of cultivating the soil, growing crops, and raising livestock. It includes the preparation of plant and animal products for people to use and their distribution to markets.
              </p>
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-foreground">Major disciplines of Agriculture are</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Food Science and Technology, Environmental Science, Forestry, Agronomy, Soil Sciences, Plant Breeding and Genetics
                </p>
              </div>
              <Link to="/academics" className="inline-block px-5 py-2 bg-accent text-accent-foreground text-sm font-semibold hover:brightness-110 transition-all">
                View More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Faculties & Departments - Structural Design */}
      <section className="bg-[#f0f1f3] py-20 border-y border-gray-200">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 mb-4">
              Kohsar Faculties & Departments
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
            {/* Left Sidebar - Faculty Selector */}
            <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-1 border-r border-gray-300 pr-0 lg:pr-6">
              {facultyGroups.map((group) => {
                const isActive = activeFaculty === group.key;
                const Icon = group.icon;
                return (
                  <button
                    key={group.key}
                    onClick={() => setActiveFaculty(group.key)}
                    className={`relative flex items-center gap-4 text-left p-4 pr-6 transition-all duration-300 rounded overflow-hidden ${
                      isActive 
                        ? "bg-white shadow-sm border border-gray-200" 
                        : "hover:bg-gray-200/50 border border-transparent"
                    }`}
                  >
                    {/* Active Indigo Indicator Bar */}
                    {isActive && (
                      <motion.div 
                        layoutId="active-faculty-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className={`p-2.5 rounded-full ${isActive ? "bg-primary/10 text-primary" : "bg-gray-200 text-gray-500"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`text-[15px] leading-snug font-semibold ${isActive ? "text-primary" : "text-gray-600"}`}>
                      {group.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Content - Department Slider/Cards */}
            <div className="flex-1 min-w-0 pl-0 lg:pl-4">
              <AnimatePresence mode="wait">
                {facultyGroups.map((group) => {
                  if (activeFaculty !== group.key) return null;
                  
                  return (
                    <motion.div
                      key={group.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="h-full"
                    >
                      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        {group.name} Schools <ArrowRight className="h-5 w-5 text-primary" />
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {group.departments.map((id, idx) => {
                          const dept = departmentPages.find((d) => d.id === id);
                          if (!dept) return null;
                          const img = departmentImages[dept.id];
                          
                          return (
                            <motion.div
                              key={dept.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: idx * 0.08 }}
                              whileHover={{ scale: 1.02 }}
                              className="h-full"
                            >
                              <Link
                                to={`/departments/${dept.id}`}
                                className="flex items-center justify-center p-6 min-h-[110px] h-full bg-white border border-primary/40 hover:border-primary hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300 group"
                              >
                                <h4 className="text-[13px] md:text-[14px] font-bold text-primary uppercase tracking-wider leading-relaxed text-center transition-colors">
                                  {dept.name}
                                </h4>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
