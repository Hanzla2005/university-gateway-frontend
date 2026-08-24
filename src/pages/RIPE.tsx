import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import {
  FileText,
  Download,
  CheckCircle2,
  ShieldCheck,
  Building2,
  ChevronRight,
  Target,
  FileCheck2,
  Layers,
  ArrowRight,
  Calendar
} from "lucide-react";

// QEC RIPE Documents
import qecRipeComplianceReport from "@/assets/QEC/RIPE/RIPE Compliance Reports (2025-26).pdf";
import qecRipeVisitReport from "@/assets/QEC/RIPE/RIPE Compliance Visit Report (2025-26).pdf";
import qecRipePlan from "@/assets/QEC/RIPE/RIPE Implementaion Plan (2025-26).pdf";

const RIPE = () => {
  const ripeDocuments = [
    {
      title: "RIPE Compliance Reports",
      session: "2025-26",
      desc: "Institutional action taken and compliance evaluation report across academic and administrative departments.",
      file: qecRipeComplianceReport,
      category: "Compliance Report"
    },
    {
      title: "RIPE Compliance Visit Report",
      session: "2025-26",
      desc: "Observations, findings, and departmental audit metrics recorded during institutional evaluation visits.",
      file: qecRipeVisitReport,
      category: "Audit & Visit"
    },
    {
      title: "RIPE Implementation Plan",
      session: "2025-26",
      desc: "Strategic roadmap for execution of recommendations, timelines, and departmental responsibilities.",
      file: qecRipePlan,
      category: "Implementation Blueprint"
    },
  ];

  const ripeObjectives = [
    {
      title: "Institutional Governance & Standards",
      desc: "Ensure all academic and administrative divisions comply with HEC QA criteria, statutory regulations, and KUM quality mandates."
    },
    {
      title: "Comprehensive Departmental Audits",
      desc: "Conduct structured evaluation visits to inspect academic infrastructure, faculty adequacy, student support, and operational workflows."
    },
    {
      title: "Action-Oriented Implementation",
      desc: "Formulate concrete Implementation Plans addressing evaluation visit recommendations with measurable milestones."
    },
    {
      title: "Continuous Quality Enhancement",
      desc: "Foster a data-driven quality culture through periodic progress reviews and Institutional Quality Circle (IQC) oversight."
    }
  ];

  const ripeWorkflow = [
    {
      step: "01",
      title: "Institutional Data Collection",
      desc: "Collection and preliminary analysis of departmental datasets, performance indicators, and QA compliance reports."
    },
    {
      step: "02",
      title: "Evaluation Visit & Audit",
      desc: "Physical and documentary inspection by designated review teams across academic and administrative departments."
    },
    {
      step: "03",
      title: "Findings & Visit Report",
      desc: "Documentation of findings, commendable practices, and areas needing institutional enhancement."
    },
    {
      step: "04",
      title: "Implementation & Compliance",
      desc: "Submission of department-wise Implementation Plans and compliance verification by QEC and University Leadership."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      <PageHeader
        title="Review of Institutional Performance & Enhancement (RIPE)"
        subtitle="Quality Enhancement Cell — Institutional Standards, Audits & Quality Framework"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container-main px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs sm:text-sm text-gray-600">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <Link to="/qec" className="hover:text-primary transition-colors">QEC</Link>
          <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
          <span className="text-gray-900 font-medium">RIPE</span>
        </div>
      </div>

      <div className="container-main px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Overview Section */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                Institutional Quality Framework
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-primary">
                About the RIPE Mechanism
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  The <strong>Review of Institutional Performance and Enhancement (RIPE)</strong> is an institutional quality assurance mechanism designed to evaluate, sustain, and continuously elevate the operational, academic, and research effectiveness of Kohsar University Murree.
                </p>
                <p>
                  Operating under the Higher Education Commission (HEC) Quality Assurance guidelines and the KUM Quality Policy, RIPE evaluates governance structures, infrastructure capability, academic processes, faculty contributions, and student support mechanisms across all departments.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4 text-center sm:text-left">
              <div className="p-3 bg-white rounded-lg border border-gray-200 inline-block shadow-sm">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">Governance Body</h3>
                <p className="text-xs text-gray-600 mt-1">Quality Enhancement Cell (QEC)</p>
              </div>
              <div className="pt-2 border-t border-gray-200 text-xs text-gray-600 space-y-1.5">
                <p><strong>Frequency:</strong> Annual Review Cycle</p>
                <p><strong>Target:</strong> Academic & Administrative Units</p>
                <p><strong>Oversight:</strong> Vice Chancellor / IQC</p>
              </div>
            </div>
          </div>
        </section>

        {/* Official Documents / Downloads */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-primary">
                Official RIPE Documents & Reports
              </h2>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Access official compliance reports, evaluation visit dossiers, and implementation plans.
              </p>
            </div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded">
              Cycle 2025-26
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ripeDocuments.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-primary/40 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                      {item.category}
                    </span>
                    <FileText className="h-5 w-5 text-gray-400 group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Session {item.session}</span>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>View PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Objectives */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-primary">
              Core Objectives & Focus Areas
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Guiding principles for maintaining rigorous institutional quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {ripeObjectives.map((obj, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-start gap-4">
                <div className="p-2 bg-primary/5 rounded-lg text-primary flex-shrink-0 mt-1">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{obj.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-serif text-primary">
              RIPE Review & Enhancement Workflow
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Systematic 4-stage cycle ensuring end-to-end accountability and implementation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ripeWorkflow.map((step, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-5 relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-serif font-bold text-accent">{step.step}</span>
                  <h3 className="font-bold text-gray-900 text-base mt-2 mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Navigation Cards */}
        <section className="grid sm:grid-cols-3 gap-6 pt-4">
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

export default RIPE;
