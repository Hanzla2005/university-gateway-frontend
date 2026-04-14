import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Users, BookOpen, Globe, Award, MapPin, GraduationCap } from "lucide-react";

import Footer from "@/components/Footer";
import { institutions } from "@/data/institutions";
import heroBg from "@/assets/home/bg.png";

import chancellorImg from "@/assets/home/chancellor.png";
import vcImg from "@/assets/home/vc.png";
import stemImg from "@/assets/home/stem.png";
import honeyProductionImg from "@/assets/home/honeyProduction.png";
import { topStories } from "@/data/stories";

const Index = () => {
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
              className="text-primary-foreground font-serif text-lg"
            >
              Welcome to Kohsar University Murree
            </button>
            <ChevronDown className="h-5 w-5 text-accent animate-bounce" />
          </div>
        </div>
      </section>

      {/* Top Stories - NUST style grid */}
      <section id="stories" className="bg-muted/50 py-14">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-foreground text-center mb-10">Top Stories</h2>

          {/* Row 1: 1 large + 2 small */}
          <div className="grid lg:grid-cols-3 gap-4 mb-4">
            {/* Large card */}
            <div className="lg:col-span-1 lg:row-span-1">
              <Link to="/stories/1" className="group block relative aspect-[4/3] overflow-hidden bg-foreground">
                <img src={topStories[0].image} alt={topStories[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" width={800} height={512} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{topStories[0].tag}</p>
                  <p className="text-sm text-primary-foreground leading-snug">{topStories[0].title}</p>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/stories/2" className="group block relative aspect-[4/3] overflow-hidden bg-foreground">
                <img src={topStories[1].image} alt={topStories[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" width={800} height={512} />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{topStories[1].tag}</p>
                  <p className="text-sm text-primary-foreground leading-snug">{topStories[1].title}</p>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/stories/3" className="group block relative aspect-[4/3] overflow-hidden bg-foreground">
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
              <Link key={story.id} to={`/stories/${story.id}`} className="group block relative aspect-[4/3] overflow-hidden bg-foreground">
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
              to="/stories"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-accent-foreground font-semibold rounded hover:brightness-110 transition-all text-sm"
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
            <h2 className="text-3xl font-serif text-foreground">Vice Chancellor's Message</h2>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            <div className="md:col-span-8">
              <blockquote className="text-lg text-foreground relative pl-8">
                <span className="text-6xl text-primary absolute -top-2 left-0 opacity-30 font-serif">“</span>
                As we embrace the future with a shared vision, our primary focus shall remain on equipping the next generation with world-class knowledge. Simultaneously, we shall emphasise internationalisation, interdisciplinary collaboration and foster cutting-edge research and innovation that align with national growth and collective progress....
                <span className="text-6xl text-primary absolute -bottom-8 right-4 opacity-30 font-serif">”</span>
              </blockquote>
              <Link to="/vice-chancellor" className="text-sm text-primary hover:underline mt-6 inline-block ml-8">View Details</Link>
            </div>
            <div className="md:col-span-4 text-center">
              <img src={vcImg} alt="Rector" className="w-40 h-40 rounded-full object-cover mx-auto mb-4 shadow-lg" />
              <h3 className="font-serif text-xl text-foreground">Dr. Rafia Mumtaz</h3>
              <p className="text-sm text-muted-foreground">Vice Chancellor Kohsar</p>
            </div>
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
                  <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-accent-foreground text-sm font-semibold absolute -top-4 left-4">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{inst.name}</h3>
                  <p className="text-sm text-muted-foreground">{inst.desc}</p>
                </div>
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
