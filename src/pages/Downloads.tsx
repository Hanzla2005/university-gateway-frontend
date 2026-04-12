import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Download, FileText } from "lucide-react";
import casualLeavePdf from "@/assets/pdfs/KUM-Casual-Leave-Profroma.pdf";
import clearanceFormPdf from "@/assets/pdfs/KUM-Clearnace-Form.pdf";

const downloads = [
  {
    title: "Casual Leave Proforma",
    description: "Application form for requesting casual leave.",
    file: casualLeavePdf,
    fileName: "KUM-Casual-Leave-Profroma.pdf",
  },
  {
    title: "Clearance Form",
    description: "Form to be completed for clearance from the university.",
    file: clearanceFormPdf,
    fileName: "KUM-Clearnace-Form.pdf",
  },
];

const Downloads = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <PageHeader 
        title="Downloads" 
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Downloads" }]}
        subtitle="Find important forms, documents, and resources here."
      />
      <main className="container-main py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {downloads.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
                <a
                  href={item.file}
                  download={item.fileName}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;
