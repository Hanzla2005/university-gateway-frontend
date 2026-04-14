import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import meritListChemistryPdf from "@/assets/pdfs/Merit-list-Chemistry.pdf";
import { FileText } from "lucide-react";

const MeritLists = () => {
  const handlePdfClick = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <div>
      <Navbar />
      <PageHeader title="Merit List of BS and MS Programs" />
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-foreground mb-8">
            First Merit List of BS Spring 2026 Programs
          </h2>

          <div className="space-y-4">
            <button
              onClick={() =>
                alert("BSENG First Merit List Spring 2026 PDF not available yet.")
              }
              className="w-full text-left px-6 py-4 flex items-center gap-4 bg-muted/50 hover:bg-muted transition-colors rounded-lg"
            >
              <FileText className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-lg text-foreground">
                BSENG First Merit List Spring 2026
              </span>
            </button>
            <button
              onClick={() => handlePdfClick(meritListChemistryPdf)}
              className="w-full text-left px-6 py-4 flex items-center gap-4 bg-muted/50 hover:bg-muted transition-colors rounded-lg"
            >
              <FileText className="h-6 w-6 text-primary flex-shrink-0" />
              <span className="text-lg text-foreground">
                Merit list Chemistry
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeritLists;
