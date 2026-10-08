import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  Award, 
  Calendar, 
  Building2, 
  FileStack, 
  ExternalLink,
  BookOpen,
  ArrowRight,
  GraduationCap,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

// Import MS Merit List Images from src/assets/pdfs/Merit Lists
import imgMsBiotech from "@/assets/pdfs/Merit Lists/WhatsApp Image 2026-10-06 at 16.00.12 (2).jpeg";
import imgMsBotany from "@/assets/pdfs/Merit Lists/WhatsApp Image 2026-10-06 at 16.00.12.jpeg";
import imgMsChemistry from "@/assets/pdfs/Merit Lists/WhatsApp Image 2026-10-06 at 16.00.12 (1).jpeg";
import imgMsFST from "@/assets/pdfs/Merit Lists/WhatsApp Image 2026-10-06 at 16.00.11.jpeg";
import imgMsMicrobiology from "@/assets/pdfs/Merit Lists/WhatsApp Image 2026-10-06 at 16.00.13.jpeg";

export interface MSMeritListItem {
  id: string;
  listNo: number;
  title: string;
  degreeName: string;
  department: string;
  faculty: string;
  category: "Applied Sciences" | "Management Sciences" | "Social Sciences & Humanities";
  term: string;
  listRound?: string;
  file: string;
  downloadFileName: string;
}

const msMeritListData: MSMeritListItem[] = [
  {
    id: "ms-biotech",
    listNo: 1,
    title: "MS Biotechnology",
    degreeName: "Master of Science in Biotechnology",
    department: "Department of Biotechnology",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    listRound: "1st Merit List",
    file: imgMsBiotech,
    downloadFileName: "MS Biotechnology 1st Merit List Fall 2026.jpeg",
  },
  {
    id: "ms-botany",
    listNo: 2,
    title: "MS / MPhil Botany",
    degreeName: "Master of Science / MPhil in Botany",
    department: "Department of Botany",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    listRound: "1st Merit List",
    file: imgMsBotany,
    downloadFileName: "MS Botany 1st Merit List Fall 2026.jpeg",
  },
  {
    id: "ms-chemistry",
    listNo: 3,
    title: "MS Chemistry",
    degreeName: "Master of Science in Chemistry",
    department: "Department of Chemistry",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    listRound: "1st Merit List",
    file: imgMsChemistry,
    downloadFileName: "MS Chemistry 1st Merit List Fall 2026.jpeg",
  },
  {
    id: "ms-fst",
    listNo: 4,
    title: "MS Food Science & Technology (FST)",
    degreeName: "Master of Science in Food Science and Technology",
    department: "Department of Food Science & Technology",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    listRound: "1st Merit List",
    file: imgMsFST,
    downloadFileName: "MS Food Science and Technology 1st Merit List Fall 2026.jpeg",
  },
  {
    id: "ms-microbiology",
    listNo: 5,
    title: "MS Microbiology",
    degreeName: "Master of Science in Microbiology",
    department: "Department of Microbiology",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    listRound: "1st Merit List",
    file: imgMsMicrobiology,
    downloadFileName: "MS Microbiology 1st Merit List Fall 2026.jpeg",
  },
];

const categoryBadgeStyle: Record<string, string> = {
  "Applied Sciences": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  "Management Sciences": "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
  "Social Sciences & Humanities": "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
};

const MSMeritLists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [previewItem, setPreviewItem] = useState<MSMeritListItem | null>(null);
  const [imageZoom, setImageZoom] = useState<number>(1);

  const categories = ["All", "Applied Sciences"];

  const filteredLists = useMemo(() => {
    return msMeritListData.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.degreeName.toLowerCase().includes(q) ||
        item.department.toLowerCase().includes(q) ||
        item.faculty.toLowerCase().includes(q) ||
        (item.listRound && item.listRound.toLowerCase().includes(q));
      
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-slate-50/60 min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="MS Admission Merit Lists" 
        breadcrumbs={[
          { label: "Home", path: "/" }, 
          { label: "Merit Lists", path: "/merit-lists" },
          { label: "MS Merit Lists" }
        ]}
        subtitle="Fall 2026 Merit Lists for Postgraduate (MS / MPhil) Programs — Kohsar University Murree"
      />

      <main className="container-main px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex-1">
        
        {/* Navigation Banner Between MS and BS */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-white dark:bg-card border border-border/80 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-foreground">Postgraduate (MS / MPhil) Merit Lists</h2>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300">
                  Fall 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Official 1st merit lists announced for Kohsar University Murree Master of Science (MS) programs.
              </p>
            </div>
          </div>

          <Link
            to="/merit-lists"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-primary/10 text-foreground hover:text-primary border border-border/80 text-xs sm:text-sm font-semibold transition-all duration-200 group self-stretch md:self-auto justify-center shrink-0"
          >
            <GraduationCap className="w-4 h-4 text-primary" />
            <span>Looking for BS Merit Lists?</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Search & Category Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white dark:bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat === "All" ? `All Programs (${msMeritListData.length})` : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by MS program or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/70"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Merit List Cards Grid */}
        {filteredLists.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredLists.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-card rounded-2xl border border-border/80 hover:border-primary/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Card Header & Content */}
                <div className="p-6">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${categoryBadgeStyle[item.category] || "bg-slate-100 text-slate-700"}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {item.listRound && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded border bg-slate-100 dark:bg-slate-800/80 text-muted-foreground border-transparent">
                          {item.listRound}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded">
                        <Calendar className="w-3 h-3 text-primary" />
                        {item.term}
                      </span>
                    </div>
                  </div>

                  {/* Program Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.degreeName}
                      </p>
                    </div>
                  </div>

                  {/* Department & Faculty Info */}
                  <div className="space-y-1.5 pt-3 border-t border-border/60 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span className="truncate">{item.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span className="truncate">{item.faculty}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 bg-slate-50/80 dark:bg-slate-900/40 border-t border-border/70 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setImageZoom(1);
                      setPreviewItem(item);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-medium text-xs sm:text-sm transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View List</span>
                  </button>

                  <a
                    href={item.file}
                    download={item.downloadFileName}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 font-medium text-xs sm:text-sm transition-all duration-200 shadow-xs"
                    title={`Download ${item.title} Merit List`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>

                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-card border border-border rounded-2xl p-12 text-center my-8">
            <FileStack className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-1">No MS Merit Lists Found</h3>
            <p className="text-sm text-muted-foreground mb-4">
              No postgraduate programs match your search term "{searchQuery}". Please try another keyword or clear the filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-semibold hover:bg-primary/90 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Image Preview Modal */}
      <Dialog open={!!previewItem} onOpenChange={(open) => !open && setPreviewItem(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl w-full h-[90vh] flex flex-col p-0 overflow-hidden bg-white dark:bg-card rounded-2xl">
          <DialogHeader className="px-6 py-4 border-b border-border flex flex-row items-center justify-between">
            <div>
              <DialogTitle className="text-lg sm:text-xl font-serif text-primary flex items-center gap-2">
                <span>{previewItem?.title}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary">
                  MS Merit List
                </span>
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                {previewItem?.department} • {previewItem?.term} • {previewItem?.listRound || "1st Merit List"}
              </DialogDescription>
            </div>
            {previewItem && (
              <div className="flex items-center gap-2 mr-6">
                <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-border mr-2">
                  <button
                    onClick={() => setImageZoom(prev => Math.min(prev + 0.25, 3))}
                    className="p-1 rounded hover:bg-white dark:hover:bg-card text-muted-foreground hover:text-foreground transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono font-medium px-1 text-muted-foreground">
                    {Math.round(imageZoom * 100)}%
                  </span>
                  <button
                    onClick={() => setImageZoom(prev => Math.max(prev - 0.25, 0.5))}
                    className="p-1 rounded hover:bg-white dark:hover:bg-card text-muted-foreground hover:text-foreground transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setImageZoom(1)}
                    className="p-1 rounded hover:bg-white dark:hover:bg-card text-muted-foreground hover:text-foreground transition-colors"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <a
                  href={previewItem.file}
                  download={previewItem.downloadFileName}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
                <a
                  href={previewItem.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-foreground rounded-lg text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  New Tab
                </a>
              </div>
            )}
          </DialogHeader>

          <div className="flex-1 w-full bg-slate-900/90 dark:bg-slate-950 p-2 sm:p-4 overflow-auto flex items-center justify-center">
            {previewItem && (
              <div className="w-full h-full flex items-center justify-center overflow-auto p-4">
                <img
                  src={previewItem.file}
                  alt={`${previewItem.title} Merit List`}
                  style={{ transform: `scale(${imageZoom})`, transformOrigin: "center center" }}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-200"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default MSMeritLists;
