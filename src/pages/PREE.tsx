import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  Download,
  CheckCircle2,
  FileCheck2,
  ChevronRight,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  Layers,
  Users,
  SearchCheck
} from "lucide-react";

// QEC PREE Documents
import qecPreeComp2425 from "@/assets/QEC/PREE/2024-25/PREE Complaince Report (2024-25).pdf";
import qecPreePlan2425 from "@/assets/QEC/PREE/2024-25/PREE Implementation Plan (2024-25).pdf";
import qecPreePlan2526 from "@/assets/QEC/PREE/2025-26/PREE Implementation Plans (2025-26).pdf";
import qecDlSarTemplate from "@/assets/QEC/Downloads/SAR Template.pdf";

const PREE = () => {
  const preeCycles = [
    {
      cycle: "Academic Cycle 2024-25",
      badge: "2024-25",
      documents: [
        {
          title: "PREE Compliance Report",
          desc: "Evaluation and compliance verification report submitted following program team assessments and internal quality audits.",
          file: qecPreeComp2425,
          type: "Compliance Report"
        },
        {
          title: "PREE Implementation Plan",
          desc: "Departmental implementation blueprint detailing corrective actions and curriculum improvements from cycle 2024-25.",
          file: qecPreePlan2425,
          type: "Implementation Plan"
        },
      ]
    },
    {
      cycle: "Academic Cycle 2025-26",
      badge: "2025-26",
      documents: [
        {
          title: "PREE Implementation Plans",
          desc: "Consolidated implementation plans and executive summaries for 1st, 2nd, and 3rd cycles of PREE (2025-26).",
          file: qecPreePlan2526,
          type: "Implementation Blueprint"
        },
      ]
    }
  ];

  const preePillars = [
    {
      title: "Program Teams (PT)",
      desc: "Faculty nominated within each academic department responsible for collecting data, conducting surveys, and authoring the Self-Assessment Report (SAR).",
      icon: Users
    },
    {
      title: "Assessment Teams (AT)",
      desc: "Independent internal and external subject matter experts who audit the SAR, visit departmental facilities, and validate academic claims.",
      icon: SearchCheck
    },
    {
      title: "Self-Assessment Reports (SAR)",
      desc: "Comprehensive programmatic dossier addressing curriculum, faculty, student support, laboratories, and institutional resources based on 8 HEC criteria.",
      icon: FileCheck2
    },
    {
      title: "Implementation Plans",
      desc: "Action plans developed jointly by the Department Chair, QEC, and University Leadership to address findings and allocate resources.",
      icon: Layers
    }
  ];

  const sarCriteria = [
    "Program Mission, Objectives & Outcomes",
    "Curriculum Design & Organization",
    "Laboratories & Computing Facilities",
    "Student Support & Advising",
    "Faculty Qualifications & Development",
    "Institutional Facilities & Library Support",
    "Institutional Support & Financial Resources",
    "Continuous Assessment & Quality Enhancement"
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      <PageHeader
        title="Programme Review for Effectiveness & Enhancement (PREE)"
        subtitle="Quality Enhancement Cell — Self-Assessment Reports (SAR), Program Teams & Academic Evaluation"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container-main px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs sm:text-sm text-gray-600">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <Link to="/qec" className="hover:text-primary transition-colors">QEC</Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <span className="text-gray-900 font-medium">PREE</span>
        </div>
      </div>

      <div className="container-main px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Overview Section */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <ClipboardCheck className="h-4 w-4" />
                Outcome-Based Quality Review
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-primary">
                About Programme Review for Effectiveness & Enhancement
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  <strong>Programme Review for Effectiveness and Enhancement (PREE)</strong> is the cornerstone of academic program assessment at Kohsar University Murree.
                </p>
                <p>
                  Guided by the Higher Education Commission (HEC) Self-Assessment Manual and Quality Assurance Agency (QAA) provisions, PREE systematically evaluates all undergraduate and graduate programs to verify that Program Learning Outcomes (PLOs) and Course Learning Outcomes (CLOs) meet national and global standards.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-center sm:text-left">
              <div className="p-3 bg-white rounded-lg border border-gray-200 inline-block shadow-sm">
                <FileCheck2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Key Deliverable</h3>
                <p className="text-xs text-gray-600 mt-1">Self-Assessment Report (SAR)</p>
              </div>
              <div className="pt-2 border-t border-gray-200 text-xs text-gray-600 space-y-1.5">
                <p><strong>Evaluation Criteria:</strong> 8 Standard HEC Criteria</p>
                <p><strong>Team Structure:</strong> Program & Assessment Teams</p>
                <p><strong>Follow-Up:</strong> Annual Implementation Plans</p>
              </div>
            </div>
          </div>
        </section>

        {/* PREE Documents by Cycle */}
        <section className="space-y-10">
          <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-primary">
                PREE Compliance & Implementation Documents
              </h2>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Official program review records and multi-cycle implementation plans.
              </p>
            </div>
            <a
              href={qecDlSarTemplate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 hover:bg-accent/20 px-3 py-1.5 rounded transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download SAR Template</span>
            </a>
          </div>

          <div className="space-y-12">
            {preeCycles.map((cycleGroup, idx) => (
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
                          <ClipboardCheck className="h-5 w-5 text-gray-400 group-hover:text-accent transition-colors" />
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

        {/* 4 Core Pillars of PREE */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-primary">
              Core Pillars of the PREE Mechanism
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Structured operational components that drive program assessment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {preePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-start gap-4">
                  <div className="p-2.5 bg-primary/5 rounded-lg text-primary flex-shrink-0 mt-1">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">{pillar.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 8 HEC SAR Criteria */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-primary">
              8 Standard HEC Self-Assessment Criteria
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Every Self-Assessment Report (SAR) prepared by Program Teams is evaluated against these standards:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sarCriteria.map((crit, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
                  {crit}
                </span>
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
            to="/qec-pgpr"
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-primary hover:shadow-md transition-all group flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider">Explore</p>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-primary mt-1">PGPR (Graduate Reviews)</h3>
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

export default PREE;
