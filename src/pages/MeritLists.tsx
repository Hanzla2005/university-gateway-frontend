import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  GraduationCap, 
  Calendar, 
  Building2, 
  FileStack, 
  ExternalLink,
  BookOpen
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

// Import all 11 Merit List PDFs from src/assets/pdfs/Merit Lists
import pdfBiotech from "@/assets/pdfs/Merit Lists/1. BS Biotechnology Merit List Fall 2026.pdf";
import pdfBotany from "@/assets/pdfs/Merit Lists/2. BS Botany  Merit List Fall 2026.pdf";
import pdfChemistry from "@/assets/pdfs/Merit Lists/3. BS Chemistry Merit List Fall 2026.pdf";
import pdfEnglish from "@/assets/pdfs/Merit Lists/4. BS English Merit List Fall 2026.pdf";
import pdfFST from "@/assets/pdfs/Merit Lists/5. BS FST Merit List Fall 2026.pdf";
import pdfMLT from "@/assets/pdfs/Merit Lists/6. BS MLT Merit List Fall 2026.pdf";
import pdfTourism from "@/assets/pdfs/Merit Lists/7. BS Tourisim & Hospitality Management Merit List Fall 2026.pdf";
import pdfMicrobiology from "@/assets/pdfs/Merit Lists/8. BS Microbiology Merit List Fall 2026.pdf";
import pdfSociology from "@/assets/pdfs/Merit Lists/9. BS Sociology Merit List Fall 2026.pdf";
import pdfBBA from "@/assets/pdfs/Merit Lists/Bba merit list fall-26.pdf";
import pdfPhysics from "@/assets/pdfs/Merit Lists/Physics MERIT LIST.pdf";

interface MeritListItem {
  id: string;
  listNo: number;
  title: string;
  degreeName: string;
  department: string;
  faculty: string;
  category: "Applied Sciences" | "Management Sciences" | "Social Sciences & Humanities";
  term: string;
  file: string;
  downloadFileName: string;
}

const meritListData: MeritListItem[] = [
  {
    id: "biotech",
    listNo: 1,
    title: "BS Biotechnology",
    degreeName: "Bachelor of Science in Biotechnology",
    department: "Department of Biotechnology",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    file: pdfBiotech,
    downloadFileName: "1. BS Biotechnology Merit List Fall 2026.pdf",
  },
  {
    id: "botany",
    listNo: 2,
    title: "BS Botany",
    degreeName: "Bachelor of Science in Botany",
    department: "Department of Botany",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    file: pdfBotany,
    downloadFileName: "2. BS Botany Merit List Fall 2026.pdf",
  },
  {
    id: "chemistry",
    listNo: 3,
    title: "BS Chemistry",
    degreeName: "Bachelor of Science in Chemistry",
    department: "Department of Chemistry",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    file: pdfChemistry,
    downloadFileName: "3. BS Chemistry Merit List Fall 2026.pdf",
  },
  {
    id: "english",
    listNo: 4,
    title: "BS English",
    degreeName: "Bachelor of Science in English (Language & Literature)",
    department: "Department of English",
    faculty: "Faculty of Arts & Humanities",
    category: "Social Sciences & Humanities",
    term: "Fall 2026",
    file: pdfEnglish,
    downloadFileName: "4. BS English Merit List Fall 2026.pdf",
  },
  {
    id: "fst",
    listNo: 5,
    title: "BS Food Science & Technology (FST)",
    degreeName: "Bachelor of Science in Food Science & Technology",
    department: "Department of Food Science & Technology",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    file: pdfFST,
    downloadFileName: "5. BS FST Merit List Fall 2026.pdf",
  },
  {
    id: "mlt",
    listNo: 6,
    title: "BS Medical Laboratory Technology (MLT)",
    degreeName: "Bachelor of Science in Medical Laboratory Technology",
    department: "Department of Allied Health Sciences",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    file: pdfMLT,
    downloadFileName: "6. BS MLT Merit List Fall 2026.pdf",
  },
  {
    id: "tourism",
    listNo: 7,
    title: "BS Tourism & Hospitality Management",
    degreeName: "Bachelor of Science in Tourism & Hospitality Management",
    department: "Department of Tourism & Hospitality",
    faculty: "Faculty of Management Sciences",
    category: "Management Sciences",
    term: "Fall 2026",
    file: pdfTourism,
    downloadFileName: "7. BS Tourisim & Hospitality Management Merit List Fall 2026.pdf",
  },
  {
    id: "microbiology",
    listNo: 8,
    title: "BS Microbiology",
    degreeName: "Bachelor of Science in Microbiology",
    department: "Department of Microbiology",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    file: pdfMicrobiology,
    downloadFileName: "8. BS Microbiology Merit List Fall 2026.pdf",
  },
  {
    id: "sociology",
    listNo: 9,
    title: "BS Sociology",
    degreeName: "Bachelor of Science in Sociology",
    department: "Department of Sociology",
    faculty: "Faculty of Arts & Humanities",
    category: "Social Sciences & Humanities",
    term: "Fall 2026",
    file: pdfSociology,
    downloadFileName: "9. BS Sociology Merit List Fall 2026.pdf",
  },
  {
    id: "bba",
    listNo: 10,
    title: "Bachelor of Business Administration (BBA)",
    degreeName: "BBA (Bachelor of Business Administration)",
    department: "Department of Management Sciences",
    faculty: "Faculty of Management Sciences",
    category: "Management Sciences",
    term: "Fall 2026",
    file: pdfBBA,
    downloadFileName: "Bba merit list fall-26.pdf",
  },
  {
    id: "physics",
    listNo: 11,
    title: "BS Physics",
    degreeName: "Bachelor of Science in Physics",
    department: "Department of Physics",
    faculty: "Faculty of Applied Sciences & Computing",
    category: "Applied Sciences",
    term: "Fall 2026",
    file: pdfPhysics,
    downloadFileName: "Physics MERIT LIST.pdf",
  },
];

const categoryBadgeStyle: Record<string, string> = {
  "Applied Sciences": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800",
  "Management Sciences": "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
  "Social Sciences & Humanities": "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800",
};

const MeritLists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [previewItem, setPreviewItem] = useState<MeritListItem | null>(null);

  const categories = ["All", "Applied Sciences", "Management Sciences", "Social Sciences & Humanities"];

  const filteredLists = useMemo(() => {
    return meritListData.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.degreeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.faculty.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-slate-50/60 min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="Admission Merit Lists" 
        breadcrumbs={[
          { label: "Home", path: "/" }, 
          { label: "Admissions", path: "/online-admissions" }, 
          { label: "Merit Lists" }
        ]}
        subtitle="Merit Lists of BS & Undergraduate Programs — Kohsar University Murree"
      />

      <main className="container-main px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex-1">
        
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
                {cat === "All" ? `All Programs (${meritListData.length})` : cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by program or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-muted-foreground/70"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
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
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${categoryBadgeStyle[item.category]}`}>
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded">
                      <Calendar className="w-3 h-3 text-primary" />
                      {item.term}
                    </span>
                  </div>

                  {/* Program Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                      <GraduationCap className="w-6 h-6" />
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
                    onClick={() => setPreviewItem(item)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-medium text-xs sm:text-sm transition-all duration-200"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View PDF</span>
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
            <h3 className="text-lg font-bold text-foreground mb-1">No Merit Lists Found</h3>
            <p className="text-sm text-muted-foreground mb-4">
              No programs match your search term "{searchQuery}". Please try another keyword or clear the filter.
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

      {/* PDF Preview Modal */}
      <Dialog open={!!previewItem} onOpenChange={(open) => !open && setPreviewItem(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl md:max-w-5xl lg:max-w-6xl w-full h-[90vh] flex flex-col p-0 overflow-hidden bg-white dark:bg-card rounded-2xl">
          <DialogHeader className="px-6 py-4 border-b border-border flex flex-row items-center justify-between">
            <div>
              <DialogTitle className="text-lg sm:text-xl font-serif text-primary">
                {previewItem?.title} — Merit List
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-0.5">
                {previewItem?.department} • {previewItem?.term}
              </DialogDescription>
            </div>
            {previewItem && (
              <div className="flex items-center gap-2 mr-6">
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

          <div className="flex-1 w-full bg-slate-100 dark:bg-slate-900 p-2 sm:p-4">
            {previewItem && (
              <iframe
                src={`${previewItem.file}#view=FitH`}
                title={`${previewItem.title} Merit List PDF`}
                className="w-full h-full rounded-lg border border-border bg-white"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default MeritLists;
