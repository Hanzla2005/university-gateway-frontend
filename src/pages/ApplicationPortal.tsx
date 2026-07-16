import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ExternalLink, FileText, Download } from "lucide-react";
import AdmissionNoticePDF from "@/assets/pdfs/Admission Notice.pdf";

const ApplicationPortal = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <PageHeader title="Online Application Portal" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Admissions", path: "/online-admissions" }, { label: "Application Portal" }]} />
      
      <main className="flex-1 container-main py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center px-4 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Click the button below to access our online application portal and start your admission process.
            </p>
            <a 
              href="https://admissions.kum.edu.pk/application/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg text-lg"
            >
              Go to Application Portal
              <ExternalLink className="w-5 h-5" />
            </a>
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
