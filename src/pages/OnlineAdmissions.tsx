import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import admissionAdPdf from "@/assets/pdfs/Admission-Spring-2026-KUM.pdf";
import revisedAdmissionRulesPdf from "@/assets/pdfs/Revised-Admission-Rules-and-Regulations2023.pdf";
import feeStructurePdf from "@/assets/pdfs/BS-Total-8-Semester-Fee-Detail.pdf";
import intermediateCircularPdf from "@/assets/pdfs/WhatsApp-Image-2025-07-30-at-11.33.57-AM.pdf";
import { ArrowRight, FileText, ExternalLink, DollarSign, BookOpen, Award, GraduationCap, Phone, PhoneCall, FileStack } from "lucide-react";

const helplines = [
  { number: "(051) 9269171", tel: "+92519269171", label: "Line 1" },
  { number: "(051) 9269172", tel: "+92519269172", label: "Line 2" },
  { number: "(051) 9269174", tel: "+92519269174", label: "Line 3" },
  { number: "(051) 9269270", tel: "+92519269270", label: "Line 4" },
  { number: "(051) 9265195", tel: "+92519265195", label: "Line 5" },
];

const OnlineAdmissions = () => {
  const admissionLinks = [
    {
      title: "Admission Merit Lists",
      href: "/merit-lists",
      isExternal: false,
      icon: FileStack,
      description: "View official Fall 2026 merit lists for all BS & undergraduate programs."
    },
    {
      title: "Advertisement",
      href: admissionAdPdf,
      isExternal: true,
      icon: FileText,
      description: "View the official admission advertisement for Spring 2026."
    },
    {
      title: "Apply for BS & MS Programs (Click Here)",
      href: "/application-portal",
      isExternal: false,
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
            <p className="text-xl md:text-2xl text-gray-700 font-light mb-4">BS & MS Admissions Open (Morning and Evening Programs)</p>
            <div className="inline-block bg-red-100 text-red-700 font-semibold px-6 py-3 rounded-full text-lg">
              The last date for BS & MS admissions has been extended to <span className="font-bold">21 September 2026</span>
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

          {/* Admission Desk Helplines Section */}
          <div className="mt-12 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <div className="bg-primary px-6 py-4 text-white flex items-center gap-3">
              <PhoneCall className="w-6 h-6 text-accent shrink-0" />
              <div>
                <h2 className="text-xl font-serif font-bold text-white">Admission Desk Helplines</h2>
                <p className="text-xs sm:text-sm text-primary-foreground/80">For queries, guidance, and assistance regarding the admission process</p>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Prospective students and parents can contact our dedicated admission desk on the following telephone numbers during official working hours:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {helplines.map((item, idx) => (
                  <a
                    key={idx}
                    href={`tel:${item.tel}`}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-gray-50/70 hover:bg-primary/5 hover:border-primary/50 hover:shadow-sm transition-all group text-center"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary mb-1">
                      {item.label}
                    </span>
                    <span className="font-bold text-primary text-base group-hover:underline flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-accent" />
                      {item.number}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OnlineAdmissions;
