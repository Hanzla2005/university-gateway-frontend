import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { publicationData } from "@/data/publications";
import { Search, BookOpen, ExternalLink, User, Building2, Calendar, Award, BarChart3, GraduationCap } from "lucide-react";

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Research Publications" 
        subtitle="A showcase of scholarly excellence and high-impact research contributions by our distinguished faculty."
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Key Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary p-8 rounded-xl text-white shadow-sm">
            <BarChart3 className="h-6 w-6 mb-4 opacity-70" />
            <div className="text-4xl font-serif font-bold mb-1">96.8</div>
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Total Impact Factor 2025</div>
          </div>
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
            <BookOpen className="h-6 w-6 mb-4 text-primary/60" />
            <div className="text-4xl font-serif font-bold mb-1 text-gray-900">50+</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Scholarly Articles</div>
          </div>
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
            <GraduationCap className="h-6 w-6 mb-4 text-primary/60" />
            <div className="text-4xl font-serif font-bold mb-1 text-gray-900">3</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Main Faculties</div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, author, journal, or department..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <select
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none text-sm"
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
              >
                {faculties.map(faculty => (
                  <option key={faculty} value={faculty}>{faculty === "All" ? "All Faculties" : faculty}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub) => (
              <div
                key={pub.id}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-primary/40 transition-all shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 bg-gray-50 text-gray-500 rounded text-[9px] font-bold uppercase tracking-wider border border-gray-200">
                        {pub.department}
                      </span>
                      {pub.impactFactor !== "Nil" && (
                        <span className="px-2 py-0.5 bg-accent/10 text-accent rounded text-[9px] font-bold uppercase tracking-wider border border-accent/20">
                          Impact Factor: {pub.impactFactor}
                        </span>
                      )}
                      {pub.hjrs !== "Nil" && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-[9px] font-bold uppercase tracking-wider border border-primary/20">
                          HJRS: {pub.hjrs}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-serif font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="h-4 w-4 text-primary/60" />
                        <span className="font-medium text-gray-900">{pub.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="h-4 w-4 text-primary/60" />
                        <span className="italic">{pub.journal}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4 text-primary/60" />
                        <span>{pub.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Award className="h-4 w-4 text-primary/60" />
                        <span>Pos: {pub.position}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <a 
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-50 text-primary rounded-lg border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all"
                      title="View Publication"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            )
          )) : (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <div className="text-4xl mb-4 opacity-20">📚</div>
              <h3 className="text-lg font-serif text-gray-900 mb-1">No Publications Found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your search or faculty filter.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResearchPublications;
