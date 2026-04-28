import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { mouData, MOU } from "@/data/mous";
import { Search, Globe, MapPin, Calendar, Building2, Clock, CheckCircle2, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MOUs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [selectedDominion, setSelectedDominion] = useState<string>("All");

  const years = useMemo(() => ["All", ...new Set(mouData.map(m => m.year))].sort((a, b) => b.localeCompare(a)), []);
  const dominions = ["All", "National", "International"];

  const filteredMOUs = useMemo(() => {
    return mouData.filter(mou => {
      const matchesSearch = mou.partner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mou.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          mou.scope.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesYear = selectedYear === "All" || mou.year === selectedYear;
      const matchesDominion = selectedDominion === "All" || mou.dominion === selectedDominion;
      return matchesSearch && matchesYear && matchesDominion;
    });
  }, [searchTerm, selectedYear, selectedDominion]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="National & International Collaborations" 
        subtitle="Strategic partnerships with industry and academia to foster research, innovation, and growth."
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filters Section */}
        <div className="bg-card border border-border rounded-3xl p-6 mb-12 shadow-sm">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by partner, type, or scope..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year === "All" ? "All Years" : `Year: ${year}`}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <select
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none"
                value={selectedDominion}
                onChange={(e) => setSelectedDominion(e.target.value)}
              >
                {dominions.map(d => (
                  <option key={d} value={d}>{d === "All" ? "All Regions" : d}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-muted-foreground font-medium">
            Showing <span className="text-primary">{filteredMOUs.length}</span> collaborations
          </p>
        </div>

        {/* MOUs Table/Grid */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredMOUs.length > 0 ? (
              filteredMOUs.map((mou, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={mou.id}
                  className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="space-y-4 max-w-3xl">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            mou.dominion === "International" 
                            ? "bg-accent/10 text-accent border border-accent/20" 
                            : "bg-primary/10 text-primary border border-primary/20"
                          }`}>
                            {mou.dominion}
                          </span>
                          <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {mou.year}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                          {mou.partner}
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="h-4 w-4 text-primary" />
                            <span className="font-medium text-foreground">{mou.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>Duration: <span className="font-medium text-foreground">{mou.duration}</span></span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>Signed on: <span className="font-medium text-foreground">{mou.date}</span></span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-widest flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            Scope of Collaboration
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {mou.scope.map((item, i) => (
                              <span 
                                key={i} 
                                className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-xl text-xs font-medium border border-border group-hover:border-primary/20 transition-all"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
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
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-serif text-foreground mb-2">No Collaborations Found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MOUs;
