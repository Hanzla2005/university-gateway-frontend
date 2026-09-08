import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ExternalLink, FileText, Download, Phone, PhoneCall } from "lucide-react";
import AdmissionNoticePDF from "@/assets/pdfs/Admission Notice.pdf";

const helplines = [
  { number: "(051) 9269171", tel: "+92519269171", label: "Line 1" },
  { number: "(051) 9269172", tel: "+92519269172", label: "Line 2" },
  { number: "(051) 9269174", tel: "+92519269174", label: "Line 3" },
  { number: "(051) 9269270", tel: "+92519269270", label: "Line 4" },
  { number: "(051) 9265195", tel: "+92519265195", label: "Line 5" },
];

const ApplicationPortal = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <PageHeader title="Online Application Portal" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Admissions", path: "/online-admissions" }, { label: "Application Portal" }]} />
      
      <main className="flex-1 container-main py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="rounded-2xl shadow-lg border border-gray-100 overflow-hidden bg-white">
            {/* Content */}
            <div className="w-full p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight mb-6">
                Ready to Apply?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-6 max-w-2xl mx-auto">
                Click the button below to access our online application portal and start your admission process for the <strong className="font-semibold text-primary">Fall 2026</strong> session.
              </p>
              <div className="inline-block bg-red-100 text-red-700 font-semibold px-6 py-3 rounded-full text-base md:text-lg mb-8 border border-red-200 shadow-sm">
                The last date for BS & MS admissions has been extended to <span className="font-bold">21 September 2026</span>
              </div>
              <div>
                <a 
                  href="https://admissions.kum.edu.pk/application/index.php" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 text-lg w-full sm:w-auto"
                >
                  Go to Application Portal
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Admission Helplines Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-primary/5 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-serif font-semibold text-primary">Admission Desk Helplines</h3>
                <p className="text-xs sm:text-sm text-gray-500">Need help during the application process? Contact our admission team directly:</p>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {helplines.map((item, idx) => (
                  <a
                    key={idx}
                    href={`tel:${item.tel}`}
                    className="flex flex-col items-center justify-center p-3.5 rounded-lg border border-gray-200 bg-gray-50/70 hover:bg-primary/5 hover:border-primary/50 transition-all text-center group"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary mb-1">
                      {item.label}
                    </span>
                    <span className="font-bold text-primary text-sm group-hover:underline flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-accent" />
                      {item.number}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="px-4 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-serif text-primary flex items-center gap-3">
                <FileText className="text-primary w-8 h-8" />
                Admission Notice
              </h2>
              <a 
                href={AdmissionNoticePDF} 
                download
                className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium bg-primary/5 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
            
            <div className="w-full h-[600px] md:h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
              <iframe 
                src={`${AdmissionNoticePDF}#view=FitH`}
                className="w-full h-full"
                title="Admission Notice"
              />
            </div>
            
            <div className="mt-6 flex justify-center md:hidden">
              <a 
                href={AdmissionNoticePDF} 
                download
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium bg-primary/5 px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplicationPortal;
