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
      <DialogContent className="max-w-[94vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-2xl p-0 overflow-hidden bg-white shadow-2xl border-0 max-h-[90vh] flex flex-col">
        
        {/* Content */}
        <div className="w-full px-4 sm:px-6 md:px-8 py-5 sm:py-7 md:py-8 overflow-y-auto flex flex-col justify-between">
          <DialogHeader className="mb-2 sm:mb-4">
            <DialogTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-primary text-center">
              Admissions Open Fall 2026
            </DialogTitle>
            <DialogDescription className="text-center pt-1.5 sm:pt-3 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Kohsar University Murree officially announces the commencement of admissions for the 2026 session. Join our prestigious institution and shape your future.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 py-2 sm:py-4 md:py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 md:gap-4 w-full">
              <a 
                href={admissionPdf} 
                target="_blank" 
                rel="noreferrer" 
                className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
              >
                <div className="mb-2 sm:mb-3 p-2.5 sm:p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-xs sm:text-sm md:text-base leading-tight">Official Notice</span>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">View announcement</span>
              </a>
              
              <Link 
                to="/application-portal" 
                className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
                onClick={() => setIsOpen(false)}
              >
                <div className="mb-2 sm:mb-3 p-2.5 sm:p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <Info className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-xs sm:text-sm md:text-base leading-tight">Guidelines</span>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Read before applying</span>
              </Link>

              <a 
                href="https://admissions.kum.edu.pk/application/index.php"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
                onClick={() => setIsOpen(false)}
              >
                <div className="mb-2 sm:mb-3 p-2.5 sm:p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <Laptop className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-xs sm:text-sm md:text-base leading-tight">BS Admissions</span>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Apply online</span>
              </a>

              <a 
                href="https://admissions.kum.edu.pk/application/index.php"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
                onClick={() => setIsOpen(false)}
              >
                <div className="mb-2 sm:mb-3 p-2.5 sm:p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-xs sm:text-sm md:text-base leading-tight">MS Admissions</span>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">Apply online</span>
              </a>

              <Link 
                to="/intermediate-admission" 
                className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center p-3 sm:p-4 md:p-5 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all text-center group cursor-pointer bg-white"
                onClick={() => setIsOpen(false)}
              >
                <div className="mb-2 sm:mb-3 p-2.5 sm:p-3 bg-primary/5 rounded-full group-hover:-translate-y-1 group-hover:bg-primary/10 transition-all duration-300">
                  <School className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-primary text-xs sm:text-sm md:text-base leading-tight">Intermediate Admissions</span>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">On-campus apply</span>
              </Link>
            </div>
          </div>

          <DialogFooter className="flex-row sm:justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1 sm:flex-none sm:w-32 border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all h-10 sm:h-12 text-xs sm:text-sm md:text-base">
              Maybe Later
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white flex-1 sm:flex-none sm:w-auto shadow-md px-4 sm:px-10 h-10 sm:h-12 text-xs sm:text-sm md:text-lg font-medium transition-all hover:shadow-lg">
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
