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
  GraduationCap,
  Mail,
  ChevronRight,
  ScrollText
} from "lucide-react";

// Team Images
import directorImg from "@/assets/ORIC Website/ORIC Team/Director ORIC.jpg";
import ddImg from "@/assets/ORIC Website/ORIC Team/DD ORIC.jpeg";

export interface CommitteeMember {
  srNo: number;
  name: string;
  designation: string;
  role: string;
  category: "Leadership" | "ORIC Directorate" | "Industry & Corporate Leaders" | "Secretariat";
  qualification?: string;
  email?: string;
  image?: string;
}

const steeringCommitteeMembers: CommitteeMember[] = [
  {
    srNo: 1,
    name: "Prof. Dr. Rafia Mumtaz",
    designation: "Vice Chancellor, KUM",
    role: "Chair",
    category: "Leadership"
  },
  {
    srNo: 2,
    name: "Mr. Yasir Niazi",
    designation: "CEO Akbar Niazi Teaching hospital/ GAK Healthcare International",
    role: "Co-Chair",
    category: "Industry & Corporate Leaders"
  },
  {
    srNo: 3,
    name: "Prof. Dr. Ramla Shahid",
    designation: "Prof-BPS-21 / Director ORIC, KUM",
    role: "Member",
    category: "ORIC Directorate",
    qualification: "PhD, Chemistry/Chemical Biology (Univ. of Cambridge, UK)",
    email: "director.oric@kum.edu.pk",
    image: directorImg
  },
  {
    srNo: 4,
    name: "Mr. Pervaiz Abbasi",
    designation: "EX Director National Incubation Center, Founder Adventures Studio",
    role: "Member",
    category: "Industry & Corporate Leaders"
  },
  {
    srNo: 5,
    name: "Mr. Muazzam Arslan Bhatti",
    designation: "CEO, Alfoze Technologies Pvt Ltd",
    role: "Member",
    category: "Industry & Corporate Leaders"
  },
  {
    srNo: 6,
    name: "Mr. Zain Ul Hassan",
    designation: "Associate, Systems, Pvt Ltd",
    role: "Member",
    category: "Industry & Corporate Leaders"
  },
  {
    srNo: 7,
    name: "Mr. Salman Ansari",
    designation: "Data Scientist, Walee Group",
    role: "Member",
    category: "Industry & Corporate Leaders"
  },
  {
    srNo: 8,
    name: "Muhammad Raheel Anjum",
    designation: "Deputy Director ORIC (BS-18), KUM",
    role: "Secretary",
    category: "ORIC Directorate",
    qualification: "MS (Materials & Surface Eng.), NUST",
    email: "qazi.raheel@kum.edu.pk",
    image: ddImg
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
              Official Registrar Notification
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold leading-tight">
              Constitution of KUM ORIC Steering Committee
            </h2>
            <p className="text-primary-foreground/90 text-sm sm:text-base leading-relaxed">
              In pursuance of section 15(5)(a) of Kohsar University Murree Act-2020 (Notification No. <strong>KUM/REG/Notif./198-2026</strong>, dated 16th July 2026), the Vice Chancellor, KUM, has been pleased to approve the constitution of the <strong>KUM ORIC Steering Committee</strong> to guide, monitor, and evaluate research, innovation, and commercialization activities at Kohsar University Murree till further orders.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-white/80">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <FileCheck2 className="h-4 w-4 text-accent" />
                No. KUM/REG/Notif./198-2026
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Building2 className="h-4 w-4 text-accent" />
                Dated 16th July 2026
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <Award className="h-4 w-4 text-accent" />
                Section 15(5)(a) KUM Act-2020
              </span>
            </div>
          </div>
        </section>

        {/* Complete Committee Members Table */}
        <section id="members" className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <h3 className="text-2xl font-serif text-primary font-bold flex items-center gap-2">
                <Users className="h-6 w-6 text-accent" />
                KUM ORIC Steering Committee Members
              </h3>
              <p className="text-sm text-gray-600 mt-1">Official composition as notified under Notification No. KUM/REG/Notif./198-2026.</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-semibold self-start sm:self-auto">
              <CheckCircle2 className="h-4 w-4" /> Official Registrar Notification
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-y border-gray-200 text-gray-700 font-serif font-semibold text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-4 w-16 text-center">Sr. No.</th>
                  <th className="py-3.5 px-4">Name & Designation</th>
                  <th className="py-3.5 px-4">Responsibilities</th>
                  <th className="py-3.5 px-4">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {steeringCommitteeMembers.map((member) => (
                  <tr key={member.srNo} className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-4 text-center font-bold text-gray-500">{String(member.srNo).padStart(2, '0')}</td>
                    <td className="py-4 px-4 font-semibold text-gray-900">
                      <div>
                        <div className="text-base text-gray-900 font-bold">{member.name}</div>
                        <div className="text-xs font-medium text-gray-600 mt-0.5">{member.designation}</div>
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
                    <td className="py-4 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        member.role === "Chair"
                          ? "bg-amber-100 text-amber-800 border border-amber-300"
                          : member.role === "Co-Chair"
                          ? "bg-accent/15 text-accent border border-accent/30"
                          : member.role === "Secretary"
                          ? "bg-blue-100 text-blue-800 border border-blue-300"
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
        <section id="tors" className="space-y-6 scroll-mt-24">
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
              For agenda submissions, meeting notices, or official correspondence regarding the ORIC Steering Committee at Kohsar University Murree:
            </p>
            <div className="pt-2 text-xs text-white/90 space-y-1">
              <p><strong>Secretary:</strong> Muhammad Raheel Anjum (Deputy Director ORIC (BS-18), KUM)</p>
              <p><strong>Email:</strong> qazi.raheel@kum.edu.pk / director.oric@kum.edu.pk</p>
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
