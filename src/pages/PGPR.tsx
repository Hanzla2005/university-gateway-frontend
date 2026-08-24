import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import {
  FileStack,
  Download,
  CheckCircle2,
  GraduationCap,
  ChevronRight,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  Clock
} from "lucide-react";

// QEC PGPR Documents
import qecPgprComp2425 from "@/assets/QEC/PGPR/2024-25/GPR Compliance Reports (2024-25).pdf";
import qecPgprPlan2425 from "@/assets/QEC/PGPR/2024-25/GPR Implementation Plans (2024-25).pdf";
import qecPgprComp2526 from "@/assets/QEC/PGPR/2025-26/GPR Compliance Reports (2025-26).pdf";

const PGPR = () => {
  const graduatePrograms = [
    { sr: 1, title: "MS (Food Sciences & Technology)", status: "Issued" },
    { sr: 2, title: "MS (Microbiology)", status: "Issued" },
    { sr: 3, title: "MS (Chemistry)", status: "Issued" },
    { sr: 4, title: "MS (Biotechnology)", status: "Issued" },
    { sr: 5, title: "MS (Botany)", status: "Issued" },
    { sr: 6, title: "MS (Physics)", status: "Case Submitted" },
  ];

  const pgprCycles = [
    {
      cycle: "Academic Cycle 2024-25",
      badge: "2024-25",
      documents: [
        {
          title: "GPR Compliance Reports",
          desc: "Comprehensive compliance verification and action-taken reports for postgraduate degree programs evaluated in cycle 2024-25.",
          file: qecPgprComp2425,
          type: "Compliance Dossier"
        },
        {
          title: "GPR Implementation Plans",
          desc: "Structured implementation blueprints addressing postgraduate program review recommendations and milestones.",
          file: qecPgprPlan2425,
          type: "Implementation Plan"
        },
      ]
    },
    {
      cycle: "Academic Cycle 2025-26",
      badge: "2025-26",
      documents: [
        {
          title: "GPR Compliance Reports",
          desc: "Updated compliance reviews and program dossier evaluation reports for graduate academic programs.",
          file: qecPgprComp2526,
          type: "Compliance Dossier"
        },
      ]
    }
  ];

  const pgprStandards = [
    {
      title: "Faculty Qualifications & Supervisors",
      desc: "HEC-approved PhD faculty ratio, maximum supervisory load limits, and active research credentials."
    },
    {
      title: "Curriculum Rigor & Coursework",
      desc: "Curriculum alignment with national standards, credit hours requirements, and advanced graduate seminars."
    },
    {
      title: "Research Infrastructure & Labs",
      desc: "Modern laboratory facilities, digital library subscriptions, journal access, and research funding."
    },
    {
      title: "Thesis Defense & Plagiarism Checks",
      desc: "Strict adherence to HEC plagiarism policies, external thesis review, and formal defense protocols."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      <PageHeader
        title="Postgraduate Program Review (PGPR / GPR)"
        subtitle="Quality Enhancement Cell — Graduate Academic Standards, NOC Verification & Quality Assurance"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container-main px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs sm:text-sm text-gray-600">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <Link to="/qec" className="hover:text-primary transition-colors">QEC</Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <span className="text-gray-900 font-medium">PGPR</span>
        </div>
      </div>

      <div className="container-main px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Overview Section */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <GraduationCap className="h-4 w-4" />
                Graduate Program Quality
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-primary">
                About Postgraduate Program Review (PGPR)
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  The <strong>Postgraduate Program Review (PGPR / GPR)</strong> is a specialized quality assurance mechanism established by Kohsar University Murree in accordance with the HEC Policy for Higher Education Institutions.
                </p>
                <p>
                  PGPR rigorously evaluates all MS, MPhil, and PhD degree programs to ensure academic integrity, adequate research supervision, research facility standards, and compliance with the HEC National Qualifications Framework.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-center sm:text-left">
              <div className="p-3 bg-white rounded-lg border border-gray-200 inline-block shadow-sm">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Regulatory Alignment</h3>
                <p className="text-xs text-gray-600 mt-1">HEC Policy on Graduate Programs</p>
              </div>
              <div className="pt-2 border-t border-gray-200 text-xs text-gray-600 space-y-1.5">
                <p><strong>Review Scope:</strong> MS / M.Phil & PhD Programs</p>
                <p><strong>NOC Authority:</strong> HEC & University Statues</p>
                <p><strong>Quality Cell:</strong> QEC Kohsar University Murree</p>
              </div>
            </div>
          </div>
        </section>

        {/* Graduate Programs NOC Status Table */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-primary">
              Status of Graduate Degree Programs
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Current NOC status and dossier evaluation stage for MS/MPhil programs at KUM.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-16">Sr.</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Degree Program Title</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">NOC Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {graduatePrograms.map((prog) => (
                    <tr key={prog.title} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-500 font-medium">{prog.sr}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{prog.title}</td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider ${
                            prog.status === "Issued"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {prog.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PGPR Documents by Cycle */}
        <section className="space-y-10">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-primary">
              Compliance Reports & Implementation Plans
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Official program review records categorized by academic evaluation cycles.
            </p>
          </div>

          <div className="space-y-12">
            {pgprCycles.map((cycleGroup, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
                    {cycleGroup.cycle}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {cycleGroup.documents.map((doc, dIdx) => (
                    <div
                      key={dIdx}
                      className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-primary/40 transition-all group"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700">
                            {doc.type}
                          </span>
                          <FileStack className="h-5 w-5 text-gray-400 group-hover:text-accent transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {doc.desc}
                        </p>
                      </div>
                      <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-medium">{cycleGroup.badge}</span>
                        <a
                          href={doc.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                        >
                          <Download className="h-4 w-4" />
                          <span>View Document</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation Standards */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-primary">
              PGPR Review Parameters
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Core evaluation criteria applied to all graduate programs at KUM.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {pgprStandards.map((std, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-start gap-4">
                <div className="p-2 bg-primary/5 rounded-lg text-primary flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{std.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{std.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Navigation Cards */}
        <section className="grid sm:grid-cols-3 gap-6 pt-4">
          <Link
            to="/qec-ripe"
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-primary hover:shadow-md transition-all group flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider">Explore</p>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-primary mt-1">RIPE (Institutional Review)</h3>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/qec-pree"
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-primary hover:shadow-md transition-all group flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider">Explore</p>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-primary mt-1">PREE (Program Reviews)</h3>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>

          <Link
            to="/qec"
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-primary hover:shadow-md transition-all group flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider">Explore</p>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-primary mt-1">QEC Main Overview</h3>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default PGPR;
