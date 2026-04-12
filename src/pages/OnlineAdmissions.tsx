import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import admissionAdPdf from "@/assets/pdfs/Admission-Spring-2026-KUM.pdf";
import revisedAdmissionRulesPdf from "@/assets/pdfs/Revised-Admission-Rules-and-Regulations2023.pdf";
import feeStructurePdf from "@/assets/pdfs/BS-Total-8-Semester-Fee-Detail.pdf";
import intermediateCircularPdf from "@/assets/pdfs/WhatsApp-Image-2025-07-30-at-11.33.57-AM.pdf";
import { ArrowRight, FileText, ExternalLink, DollarSign, BookOpen, Award, GraduationCap } from "lucide-react";

const OnlineAdmissions = () => {
  const admissionLinks = [
    {
      title: "Advertisement",
      href: admissionAdPdf,
      isExternal: true,
      icon: FileText,
      description: "View the official admission advertisement for Spring 2026."
    },
    {
      title: "Apply for BS Programs (Click Here)",
      href: "https://admissions.kum.edu.pk/main",
      isExternal: true,
      icon: ExternalLink,
      description: "Start your application process through our online portal."
    },
    {
      title: "Intermediate Admission's Circular",
      href: intermediateCircularPdf,
      isExternal: true,
      icon: BookOpen,
      description: "Important circular regarding intermediate admissions."
    },
    {
      title: "Fee Structure of BS Program",
      href: feeStructurePdf,
      isExternal: true,
      icon: DollarSign,
      description: "Detailed fee structure for all BS programs."
    },
    {
      title: "Revised Admission Rules",
      href: revisedAdmissionRulesPdf,
      isExternal: true,
      icon: Award,
      description: "Read the updated admission rules and regulations."
    },
    {
      title: "Diploma & Certifications",
      href: "/diploma-certification",
      isExternal: false,
      icon: GraduationCap,
      description: "Explore our diploma and certification programs."
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <PageHeader title="Online Admissions" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Admissions" }]} />
      
      <main className="container-main py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-12">
            <h1 className="text-3xl md:text-4xl font-serif text-primary mb-3">Admissions Spring 2026</h1>
            <p className="text-xl md:text-2xl text-gray-700 font-light mb-4">BS Admissions Open (Morning and Evening Programs)</p>
            <div className="inline-block bg-red-100 text-red-700 font-semibold px-6 py-3 rounded-full text-lg">
              Last Date for BS Admission: <span className="font-bold">10 March 2026</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionLinks.map((link, index) => {
              const cardContent = (
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg border border-gray-200 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <link.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-gray-800 flex-1">{link.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 flex-grow mb-4">{link.description}</p>
                  <div className="mt-auto flex items-center text-sm font-semibold text-primary">
                    <span>{link.isExternal ? "Open Link" : "View Page"}</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              );

              if (link.isExternal) {
                return (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="block">
                    {cardContent}
                  </a>
                );
              }
              return (
                <Link key={index} to={link.href} className="block">
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OnlineAdmissions;
