import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { projectData, Project } from "@/data/projects";
import { Search, FlaskConical, Clock, CheckCircle2, FileText, Building2, Wallet, Calendar, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RDProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const statuses = ["All", "Ongoing", "Completed", "Approved", "Proposed"];

  const filteredProjects = useMemo(() => {
    return projectData.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.fundingSource.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (project.department?.toLowerCase() || "").includes(searchTerm.toLowerCase());
      const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, selectedStatus]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Completed": return "bg-green-100 text-green-700 border-green-200";
      case "Approved": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Proposed": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Research & Development Projects" 
        subtitle="Exploring new frontiers through diverse research initiatives funded by national and international bodies."
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Filters Section */}
        <div className="bg-card border border-border rounded-3xl p-6 mb-12 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by project title, funder, or department..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-border bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 p-1 bg-secondary rounded-2xl overflow-x-auto no-scrollbar">
              {statuses.map(status => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`flex-1 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    selectedStatus === status 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={project.id}
                  className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                          {project.cost && (
                            <span className="text-sm font-bold text-primary flex items-center gap-1">
                              <Wallet className="h-4 w-4" />
                              MRs. {project.cost}
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl lg:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="h-4 w-4 text-primary" />
                            <span className="font-medium text-foreground">{project.fundingSource}</span>
                          </div>
                          {project.department && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <FlaskConical className="h-4 w-4 text-primary" />
                              <span className="font-medium text-foreground">{project.department}</span>
                            </div>
                          )}
                          {project.duration && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-4 w-4 text-primary" />
                              <span>{project.duration}</span>
                            </div>
                          )}
                        </div>

                        {(project.startDate || project.completionDate) && (
                          <div className="pt-4 border-t border-border flex flex-wrap gap-6 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            {project.startDate && (
                              <div className="flex items-center gap-2">
                                <Calendar className="h-3.5 w-3.5 text-primary" />
                                <span>Started: {project.startDate}</span>
                              </div>
                            )}
                            {project.completionDate && (
                              <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                                <span>{project.status === 'Ongoing' ? 'Est. Completion' : 'Completed'}: {project.completionDate}</span>
                              </div>
                            )}
                          </div>
                        )}
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
                <div className="text-6xl mb-4">🧪</div>
                <h3 className="text-xl font-serif text-foreground mb-2">No Projects Found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RDProjects;
