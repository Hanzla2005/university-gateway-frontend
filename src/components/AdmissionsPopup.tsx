import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import admissionPdf from "@/assets/pdfs/Admission Notice.pdf";
import { FileText, Info, GraduationCap, Laptop, School } from "lucide-react";

const AdmissionsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem("admissionsPopupShown");

    if (!hasShownPopup) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("admissionsPopupShown", "true");
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-4xl lg:max-w-5xl w-[95vw] rounded-xl p-0 overflow-hidden bg-white shadow-2xl border-0">

        {/* Content */}
        <div className="w-full px-6 py-8 md:py-10 flex flex-col justify-center">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-3xl md:text-4xl font-serif text-primary text-center">
              Admissions Open Fall 2026
            </DialogTitle>
            <DialogDescription className="text-center pt-3 text-base text-gray-600 leading-relaxed">
              Kohsar University Murree officially announces the commencement of admissions for the 2026 session. Join our prestigious institution and shape your future.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 w-full">
              <a
                href={admissionPdf}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
              >
                <div className="mb-3 p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <FileText className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-sm md:text-base">Official Notice</span>
                <span className="text-xs text-gray-500 mt-1">View announcement</span>
              </a>

              <Link
                to="/application-portal"
                className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
                onClick={() => setIsOpen(false)}
              >
                <div className="mb-3 p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <Info className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-sm md:text-base">Guidelines</span>
                <span className="text-xs text-gray-500 mt-1">Read before applying</span>
              </Link>

              <a
                href="https://admissions.kum.edu.pk/application/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
                onClick={() => setIsOpen(false)}
              >
                <div className="mb-3 p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <Laptop className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-sm md:text-base">BS Admissions</span>
                <span className="text-xs text-gray-500 mt-1">Apply online</span>
              </a>

              <a
                href="https://admissions.kum.edu.pk/application/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
                onClick={() => setIsOpen(false)}
              >
                <div className="mb-3 p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-sm md:text-base">MS Admissions</span>
                <span className="text-xs text-gray-500 mt-1">Apply online</span>
              </a>

              <Link
                to="/intermediate-admission"
                className="flex flex-col items-center justify-center p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
                onClick={() => setIsOpen(false)}
              >
                <div className="mb-3 p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <School className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-sm md:text-base">Intermediate Admissions</span>
                <span className="text-xs text-gray-500 mt-1">On-campus apply</span>
              </Link>
            </div>
          </div>

          <DialogFooter className="sm:justify-center flex-col sm:flex-row gap-3 mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)} className="w-full sm:w-32 border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all h-12">
              Maybe Later
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-md px-10 h-12 text-lg font-medium transition-all hover:shadow-lg">
              <a href="https://admissions.kum.edu.pk/application/index.php" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </DialogFooter>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default AdmissionsPopup;
