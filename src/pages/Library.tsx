import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Search, 
  Database, 
  Cpu, 
  Users, 
  Clock, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Info
} from "lucide-react";
import campus1 from "@/assets/campus-life/1.png";

const stats = [
  { value: "75,000+", label: "E-Resources & Journals", desc: "Via HEC Digital Library" },
  { value: "3", label: "Campuses Connected", desc: "Centralized support" },
  { value: "SAP", label: "Circulation System", desc: "Fully automated records" },
  { value: "24/7", label: "Remote Databases", desc: "Access anywhere, anytime" }
];

const digitalDatabases = [
  { 
    name: "SpringerLink", 
    desc: "One of the world's leading interactive databases for scientific, technical, and medical research.",
    url: "https://link.springer.com"
  },
  { 
    name: "Taylor & Francis", 
    desc: "Extensive peer-reviewed scholarly literature covering humanities, social sciences, science, and technology.",
    url: "https://taylorandfrancis.com"
  },
  { 
    name: "Wiley-Blackwell", 
    desc: "High-impact research journals in science, medicine, social sciences, and humanity disciplines.",
    url: "https://onlinelibrary.wiley.com"
  },
  { 
    name: "ASTM Standards & Engineering", 
    desc: "Crucial engineering standards, technical papers, and digital library resources for applied sciences.",
    url: "https://www.astm.org"
  },
  { 
    name: "INFORMS", 
    desc: "Leading research and publications in operations research, management sciences, and analytics.",
    url: "https://pubsonline.informs.org"
  },
  { 
    name: "Wolters Kluwer Ovid", 
    desc: "Premium medical, nursing, and healthcare databases providing international clinical standards.",
    url: "https://ovidsp.ovid.com"
  },
  { 
    name: "Free Medical Journals", 
    desc: "Open-access high-quality medical databases to support healthcare and biological investigations.",
    url: "http://www.freemedicaljournals.com"
  }
];

const physicalCollections = [
  { title: "Core Textbooks", desc: "Prescribed coursebooks and reading materials for all offered degree programs." },
  { title: "Reference Works", desc: "Encyclopedias, standard dictionaries, yearbooks, and global directories." },
  { title: "Research Monographs", desc: "Advanced in-depth monographs supporting graduate and doctoral research." },
  { title: "Literary & General Works", desc: "A rich selection of Urdu and English literature, biographies, and world history." }
];

const Library = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="University Library" 
        subtitle="A central pillar of academic support, research, and intellectual growth across all campuses."
        backgroundImage={campus1}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Library" }
        ]}
      />

      {/* Main Container */}
      <div className="container-main px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Intro Section / Stats */}
        <section className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm">
              <Sparkles className="h-4 w-4" /> Academic Support & Research
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
              Gateway to Global Knowledge & Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Library of Kohsar University Murree serves as a central pillar of academic support and intellectual growth across all three campuses of the University. Designed to facilitate teaching, learning, and research, the library provides students, faculty members, and researchers with access to a wide range of scholarly resources that promote academic excellence and lifelong learning.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The University recognizes that a strong library is essential for a vibrant academic environment; therefore, continuous efforts are being made to expand collections, modernize services, and integrate advanced technologies to meet the evolving needs of its academic community.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all group hover:border-primary/20"
              >
                <div>
                  <span className="text-3xl md:text-4xl font-bold font-serif text-primary block group-hover:text-accent transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-foreground mt-2 block">
                    {stat.label}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 border-t border-border/50 pt-2">
                  {stat.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Physical Resources Section */}
        <section className="bg-primary/5 rounded-[2rem] p-8 md:p-16 border border-primary/10 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-foreground">Growing Physical Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                The library maintains a growing collection of physical resources covering diverse fields of knowledge aligned with the academic programmes offered at the University. Textbooks, reference monographs, and literary works are regularly updated to remain contemporary.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {physicalCollections.map((item, index) => (
                  <div key={index} className="flex gap-3 bg-white dark:bg-card border border-border/50 p-4 rounded-xl">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 bg-card border border-border p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 text-primary">
                <BookOpen className="h-6 w-6" />
                <h3 className="text-2xl font-serif">Conducive Study Spaces</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Comfortable reading spaces and a quiet study environment enable students to engage in focused learning and academic exploration. All our campus library branches are designed with proper lighting, comfortable seating arrangements, and designated spaces for individual and group study.
              </p>
              <div className="border-t border-border pt-4 mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-muted-foreground">General Spaces:</span>
                  <span className="text-foreground">Quiet Study, Newspaper Desk</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-muted-foreground">Research Support:</span>
                  <span className="text-foreground">Individual Reference Cubicles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Learning & HEC Programme */}
        <section className="space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
              <Database className="h-4 w-4 animate-pulse" /> National Digital Library
            </div>
            <h2 className="text-3xl font-serif text-foreground">HEC National Digital Library Access</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Kohsar University Murree provides extensive access to digital learning resources through the Higher Education Commission’s (HEC) National Digital Library Programme, granting access to approximately <strong>75,000 electronic resources</strong> including peer-reviewed journals, articles, e-books, and reference materials.
            </p>
          </div>

          {/* Database Grid */}
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {digitalDatabases.map((db, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
                    <Database className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                    {db.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {db.desc}
                  </p>
                </div>
                <a 
                  href={db.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent font-semibold transition-colors mt-auto border-t border-border/50 pt-4"
                >
                  Access Database <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Automation, Digitization, Staff and Culture */}
        <section className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Modern Library Automation */}
          <div className="border border-border rounded-3xl p-8 bg-card shadow-sm space-y-6 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif text-foreground">Advanced Automation & SAP</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                In line with contemporary trends in library management, the University has initiated the automation and digitization of library services through modern software systems such as SAP to maintain computerized records of books, user registrations, and item tracking.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Trained and professional library staff provide excellent guidance and assistance in locating resources, navigating digital databases, and developing effective research practices. Standard circulation, borrowing, and return procedures are strictly implemented.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-xl flex items-center gap-3 border border-primary/10 mt-6">
              <Info className="h-5 w-5 text-primary shrink-0" />
              <p className="text-xs text-primary font-medium">
                Standard circulation and borrowing limits conform strictly to standards in top-tier universities of Pakistan.
              </p>
            </div>
          </div>

          {/* Card 2: Promoting a Culture of Reading */}
          <div className="border border-border rounded-3xl p-8 bg-card shadow-sm space-y-6 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif text-foreground">Intellectual Engagement & Culture</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Beyond providing academic and research resources, the library actively promotes a vibrant culture of reading and intellectual engagement within the Kohsar University Murree community.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A rich variety of activities are designed to encourage students and faculty to develop lifelong reading habits and research interests.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-foreground font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Annual Book Fairs & Literary Displays</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-foreground font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Library Orientation & Information Literacy Sessions</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-foreground font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Reading Promotion & Book Review Events</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 pt-6 mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="bg-muted p-3 rounded-lg">
                <span className="text-lg font-bold text-foreground font-serif">100%</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Faculty Enrolled</span>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <span className="text-lg font-bold text-foreground font-serif">Annual</span>
                <span className="text-xs text-muted-foreground block mt-0.5">Orientation Drives</span>
              </div>
            </div>
          </div>
        </section>

        {/* Help & Desk Contact Details */}
        <section className="bg-secondary/40 border border-secondary p-8 rounded-[2rem] max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-serif text-primary">Need help with research or references?</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Our professional library staff are available across all campuses to assist you with physical catalogue searches, digital resource access, and citing guides.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 w-full md:w-auto text-sm">
              <div className="flex items-center gap-2.5 bg-white dark:bg-card px-4 py-2.5 rounded-xl border border-border shadow-sm">
                <Clock className="h-4 w-4 text-accent shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground block leading-none">Library Hours</span>
                  <span className="font-semibold text-foreground text-xs">Mon – Fri: 08:30 AM – 04:30 PM</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5 bg-white dark:bg-card px-4 py-2.5 rounded-xl border border-border shadow-sm">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground block leading-none">Reference Desk</span>
                  <span className="font-semibold text-foreground text-xs">library@kum.edu.pk</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default Library;
