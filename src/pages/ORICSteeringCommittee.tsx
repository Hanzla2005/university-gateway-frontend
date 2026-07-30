import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import {
  Users,
  Building2,
  FileCheck2,
  Award,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Mail,
  ChevronRight,
  Download,
  ScrollText
} from "lucide-react";

// Team Images
import directorImg from "@/assets/ORIC Website/ORIC Team/Director ORIC.jpg";
import ddImg from "@/assets/ORIC Website/ORIC Team/DD ORIC.jpeg";
import oricTeamPdf from "@/assets/pdfs/ORIC Team Orignal.pdf";

export interface CommitteeMember {
  srNo: number;
  name: string;
  designation: string;
  role: string;
  category: "Internal Leadership" | "ORIC Directorate" | "Faculty Deans" | "External & Industry Experts" | "Secretariat";
  qualification?: string;
  email?: string;
  image?: string;
}

const steeringCommitteeMembers: CommitteeMember[] = [
  {
    srNo: 1,
    name: "Prof. Dr. Rafia Mumtaz (Pride of Performance)",
    designation: "Vice Chancellor, Kohsar University Murree",
    role: "Chairperson / Patron",
    category: "Internal Leadership"
  },
  {
    srNo: 2,
    name: "Prof. Dr. Ramla Shahid",
    designation: "Director ORIC",
    qualification: "PhD, Chemistry/Chemical Biology (Univ. of Cambridge, UK)",
    email: "director.oric@kum.edu.pk",
    role: "Convener / Member Secretary",
    category: "ORIC Directorate",
    image: directorImg
  },
  {
    srNo: 3,
    name: "Dr. Riffat Batool",
    designation: "Deputy Director ORIC (RM)",
    qualification: "PhD (Plant Sciences), QAU, Islamabad",
    email: "Riffat.batool@kum.edu.pk",
    role: "Member",
    category: "ORIC Directorate"
  },
  {
    srNo: 4,
    name: "Mr. Qazi Muhammad Raheel Anjum",
    designation: "Deputy Director ORIC (I&C)",
    qualification: "MS (Materials & Surface Eng.), SCME, NUST, Islamabad",
    email: "qazi.raheel@kum.edu.pk",
    role: "Member",
    category: "ORIC Directorate",
    image: ddImg
  },
  {
    srNo: 5,
    name: "Dean, Faculty of Applied Sciences & Technology",
    designation: "Kohsar University Murree",
    role: "Member",
    category: "Faculty Deans"
  },
  {
    srNo: 6,
    name: "Dean, Faculty of Social Sciences & Humanities",
    designation: "Kohsar University Murree",
    role: "Member",
    category: "Faculty Deans"
  },
  {
    srNo: 7,
    name: "Dean, Faculty of Management Sciences",
    designation: "Kohsar University Murree",
    role: "Member",
    category: "Faculty Deans"
  },
  {
    srNo: 8,
    name: "Treasurer / Director Finance",
    designation: "Kohsar University Murree",
    role: "Member",
    category: "Internal Leadership"
  },
  {
    srNo: 9,
    name: "HEC Nominee / R&D Expert",
    designation: "Higher Education Commission (HEC), Islamabad",
    role: "External Member",
    category: "External & Industry Experts"
  },
  {
    srNo: 10,
    name: "Industry & Corporate Leader",
    designation: "Chamber of Commerce & Corporate Sector Nominee",
    role: "External Member",
    category: "External & Industry Experts"
  },
  {
    srNo: 11,
    name: "Ms. Kubra Fida",
    designation: "Communication Assistant, ORIC",
    qualification: "MA (Political Science), PU",
    email: "kubrafida@kum.edu.pk",
    role: "Secretariat Support",
    category: "Secretariat"
  }
];

const committeeTORs = [
  {
    title: "Strategic Policy & Direction",
    description: "Formulate institutional policies and strategic plans for promoting high-impact research, innovation, and commercialization in accordance with HEC ORIC guidelines."
  },
  {
    title: "Resource Allocation & Funding",
    description: "Approve annual research plans, seed grant allocations, and review major multi-disciplinary research projects submitted for external funding."
  },
  {
    title: "Intellectual Property & Commercialization",
    description: "Oversight of patent disclosures, licensing agreements, technology transfers, and university-industry joint ventures."
  },
  {
    title: "Industry & Corporate Linkages",
    description: "Foster strategic partnerships with industrial hubs, national funding bodies (HEC, PSF, IGNITE), and international research institutes."
  },
  {
    title: "Performance Review & Governance",
    description: "Monitor ORIC key performance indicators (KPIs), review annual reports, and ensure compliance for HEC ORIC recognition."
  }
];

const ORICSteeringCommittee = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      <PageHeader
        title="KUM ORIC Steering Committee"
        subtitle="Office of Research, Innovation & Commercialization — Governance & Committee Composition"
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container-main px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs sm:text-sm text-gray-600">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <Link to="/oric" className="hover:text-primary transition-colors">ORIC</Link>
          <ChevronRight className="h-3 w-3 text-gray-400" />
          <span className="font-semibold text-primary">Steering Committee</span>
        </div>
      </div>

      <div className="container-main px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Notification Banner */}
        <section id="notification" className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-primary/20 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <ScrollText className="w-80 h-80 text-white" />
          </div>
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold text-xs uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              HEC Recognition Requirement
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
              Constitution of KUM ORIC Steering Committee
            </h2>
            <p className="text-primary-foreground/90 text-sm sm:text-base leading-relaxed">
              In pursuance of the Higher Education Commission (HEC) ORIC Policy Guidelines 2021 and Kohsar University Murree Statues, the Vice Chancellor, Kohsar University Murree, has been pleased to approve the constitution of the <strong>KUM ORIC Steering Committee</strong> to guide, monitor, and evaluate research, innovation, and commercialization activities.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-white/80">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <FileCheck2 className="h-4 w-4 text-accent" />
                Notification Enclosed
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Building2 className="h-4 w-4 text-accent" />
                Kohsar University Murree
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Award className="h-4 w-4 text-accent" />
                HEC ORIC Framework 2021
              </span>
            </div>
          </div>
        </section>

        {/* Committee Key Leadership Cards */}
        <section id="members" className="space-y-6">
          <div className="border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-serif text-primary font-bold">Committee Leadership & ORIC Directorate</h2>
              <p className="text-sm text-gray-600">Key office bearers leading the KUM ORIC Steering Committee.</p>
            </div>
            <a
              href={oricTeamPdf}
              download="ORIC Team Orignal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-sm hover:shadow border border-primary/20 self-start sm:self-auto group"
            >
              <Download className="h-4 w-4 text-accent group-hover:translate-y-0.5 transition-transform" />
              <span>Download ORIC Team PDF</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* VC */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary font-serif font-bold text-2xl border-2 border-primary/20">
                VC
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-full mb-2">Chairperson</span>
              <h3 className="font-bold text-gray-900 text-base leading-snug">Prof. Dr. Rafia Mumtaz</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">Pride of Performance</p>
              <p className="text-xs text-primary font-semibold mt-2">Vice Chancellor, KUM</p>
            </div>

            {/* Director ORIC */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary/20 shadow-inner bg-gray-100">
                {directorImg ? (
                  <img src={directorImg} alt="Prof. Dr. Ramla Shahid" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary font-serif font-bold text-xl">RS</div>
                )}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-2">Convener / Secretary</span>
              <h3 className="font-bold text-gray-900 text-base leading-snug">Prof. Dr. Ramla Shahid</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">PhD, Univ. of Cambridge, UK</p>
              <p className="text-xs text-primary font-semibold mt-2">Director ORIC, KUM</p>
            </div>

            {/* DD ORIC (RM) */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary font-serif font-bold text-xl border-2 border-primary/20">
                RB
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Member</span>
              <h3 className="font-bold text-gray-900 text-base leading-snug">Dr. Riffat Batool</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">PhD (Plant Sciences), QAU</p>
              <p className="text-xs text-primary font-semibold mt-2">Deputy Director ORIC (RM)</p>
            </div>

            {/* DD ORIC (I&C) */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary/20 shadow-inner bg-gray-100">
                {ddImg ? (
                  <img src={ddImg} alt="Qazi Muhammad Raheel Anjum" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary font-serif font-bold text-xl">RA</div>
                )}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full mb-2">Member</span>
              <h3 className="font-bold text-gray-900 text-base leading-snug">Qazi M. Raheel Anjum</h3>
              <p className="text-xs text-gray-500 font-medium mt-1">MS (Materials & Surface Eng.), NUST</p>
              <p className="text-xs text-primary font-semibold mt-2">Deputy Director ORIC (I&C)</p>
            </div>
          </div>
        </section>

        {/* Complete Committee Members Table */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <h3 className="text-2xl font-serif text-primary font-bold flex items-center gap-2">
                <Users className="h-6 w-6 text-accent" />
                KUM ORIC Steering Committee Members
              </h3>
              <p className="text-sm text-gray-600 mt-1">Full list of internal leadership, deans, directorate, and external representatives.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-semibold self-start sm:self-auto">
              <CheckCircle2 className="h-4 w-4" /> Official HEC Constitution
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-y border-gray-200 text-gray-700 font-serif font-semibold text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 w-12 text-center">Sr.</th>
                  <th className="py-3.5 px-4">Name & Position</th>
                  <th className="py-3.5 px-4">Designation & Institution</th>
                  <th className="py-3.5 px-4">Role in Committee</th>
                  <th className="py-3.5 px-4">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {steeringCommitteeMembers.map((member) => (
                  <tr key={member.srNo} className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-gray-400">{member.srNo}</td>
                    <td className="py-4 px-4 font-semibold text-gray-900">
                      <div>
                        {member.name}
                        {member.qualification && (
                          <div className="text-xs font-normal text-gray-500 mt-0.5 flex items-center gap-1">
                            <GraduationCap className="h-3 w-3 text-primary/60" />
                            {member.qualification}
                          </div>
                        )}
                        {member.email && (
                          <div className="text-xs font-normal text-primary mt-0.5 flex items-center gap-1">
                            <Mail className="h-3 w-3 text-primary/60" />
                            <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-700">{member.designation}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                        member.role.includes("Chairperson")
                          ? "bg-accent/15 text-accent border border-accent/30"
                          : member.role.includes("Convener")
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : member.role.includes("Secretariat")
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}>
                        {member.role}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-xs font-medium text-gray-500">{member.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TORs & Functions Section */}
        <section id="tors" className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-serif text-primary font-bold">Terms of Reference (TORs)</h2>
            <p className="text-sm text-gray-600">Core mandate and responsibilities of the KUM ORIC Steering Committee under HEC framework.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeTORs.map((tor, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3 hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold font-serif text-lg">
                  0{index + 1}
                </div>
                <h3 className="font-serif font-bold text-primary text-lg">{tor.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Secretariat & Contact Box */}
        <section className="bg-gradient-to-r from-gray-900 to-primary p-8 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-bold text-accent">ORIC Steering Committee Secretariat</h3>
            <p className="text-sm text-white/80 max-w-2xl">
              For agenda submissions, meeting notices, or inquiries regarding the ORIC Steering Committee at Kohsar University Murree:
            </p>
            <div className="pt-2 text-xs text-white/90 space-y-1">
              <p><strong>Communication Assistant:</strong> Ms. Kubra Fida (MA Political Science, PU)</p>
              <p><strong>Email:</strong> kubrafida@kum.edu.pk / director.oric@kum.edu.pk</p>
            </div>
          </div>

          <Link
            to="/oric"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold text-sm rounded-lg hover:bg-accent/90 transition-colors flex-shrink-0"
          >
            Back to ORIC Overview
            <ChevronRight className="h-4 w-4" />
          </Link>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default ORICSteeringCommittee;
