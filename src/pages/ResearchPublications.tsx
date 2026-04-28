import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { publicationData, Publication } from "@/data/publications";
import { Search, BookOpen, ExternalLink, User, Building2, Calendar, Award, BarChart3, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ResearchPublications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState<string>("All");

  const faculties = useMemo(() => ["All", ...new Set(publicationData.map(p => p.faculty))], []);

  const filteredPublications = useMemo(() => {
    return publicationData.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.department.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFaculty = selectedFaculty === "All" || pub.faculty === selectedFaculty;
      return matchesSearch && matchesFaculty;
    });
  }, [searchTerm, selectedFaculty]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Research Publications" 
        subtitle="A showcase of scholarly excellence and high-impact research contributions by our distinguished faculty."
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Key Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary p-8 rounded-3xl text-primary-foreground shadow-lg shadow-primary/20">
            <BarChart3 className="h-8 w-8 mb-4 opacity-80" />
            <div className="text-4xl font-serif font-black mb-1">96.8</div>
            <div className="text-xs uppercase tracking-[0.2em] font-black opacity-60">Total Impact Factor 2025</div>
          </div>
          <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
            <BookOpen className="h-8 w-8 mb-4 text-primary" />
            <div className="text-4xl font-serif font-black mb-1">50+</div>
            <div className="text-xs uppercase tracking-[0.2em] font-black text-muted-foreground">Scholarly Articles</div>
          </div>
          <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
            <GraduationCap className="h-8 w-8 mb-4 text-primary" />
            <div className="text-4xl font-serif font-black mb-1">3</div>
            <div className="text-xs uppercase tracking-[0.2em] font-black text-muted-foreground">Main Faculties</div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-card border border-border rounded-3xl p-6 mb-8 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by title, author, journal, or department..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="w-full px-4 py-3 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none"
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
            >
              {faculties.map(faculty => (
                <option key={faculty} value={faculty}>{faculty === "All" ? "All Faculties" : faculty}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={pub.id}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-lg text-[10px] font-bold uppercase tracking-wider border border-border">
                          {pub.department}
                        </span>
                        {pub.impactFactor !== "Nil" && (
                          <span className="px-2 py-1 bg-accent/10 text-accent rounded-lg text-[10px] font-bold uppercase tracking-wider border border-accent/20">
                            Impact Factor: {pub.impactFactor}
                          </span>
                        )}
                        {pub.hjrs !== "Nil" && (
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                            HJRS: {pub.hjrs}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-serif font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User className="h-4 w-4 text-primary" />
                          <span className="font-medium text-foreground">{pub.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 className="h-4 w-4 text-primary" />
                          <span className="italic">{pub.journal}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{pub.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="h-4 w-4 text-primary" />
                          <span>Pos: {pub.position}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <a 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                        title="View Publication"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-primary/5 rounded-3xl border border-dashed border-primary/20"
              >
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-serif text-foreground mb-2">No Publications Found</h3>
                <p className="text-muted-foreground">Try adjusting your search or faculty filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResearchPublications;
