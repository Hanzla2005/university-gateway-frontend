import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { mouData } from "@/data/mous";
import { Search, Globe, MapPin, Calendar, Building2, Clock, CheckCircle2, Filter } from "lucide-react";

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="National & International Collaborations" 
        subtitle="Strategic partnerships with industry and academia to foster research, innovation, and growth."
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filters Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
          <div className="grid lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by partner, type, or scope..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none text-sm"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year === "All" ? "All Years" : `Year: ${year}`}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none appearance-none text-sm"
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
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm font-medium">
            Showing <span className="text-primary font-bold">{filteredMOUs.length}</span> collaborations
          </p>
        </div>

        {/* MOUs List */}
        <div className="space-y-4">
          {filteredMOUs.length > 0 ? (
            filteredMOUs.map((mou) => (
              <div
                key={mou.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary/40 transition-all shadow-sm"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${
                          mou.dominion === "International" 
                          ? "bg-accent/10 text-accent border-accent/20" 
                          : "bg-primary/10 text-primary border-primary/20"
                        }`}>
                          {mou.dominion}
                        </span>
                        <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {mou.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight">
                        {mou.partner}
                      </h3>

                      <div className="grid sm:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Building2 className="h-4 w-4 text-primary/60" />
                          <span>{mou.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4 text-primary/60" />
                          <span>Duration: <span className="font-medium text-gray-900">{mou.duration}</span></span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4 text-primary/60" />
                          <span>Signed: <span className="font-medium text-gray-900">{mou.date}</span></span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest flex items-center gap-2">
                          Scope of Collaboration
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {mou.scope.map((item, i) => (
                            <span 
                              key={i} 
                              className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded border border-gray-200 text-[11px] font-medium"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )) : (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <div className="text-4xl mb-4 opacity-20">🔍</div>
              <h3 className="text-lg font-serif text-gray-900 mb-1">No Collaborations Found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MOUs;
