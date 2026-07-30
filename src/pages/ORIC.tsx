import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";
import {
  Target,
  Lightbulb,
  Search,
  Rocket,
  Handshake,
  FileCheck,
  GraduationCap,
  Mail,
  BookOpen,
  FlaskConical,
  BarChart3,
  CheckCircle2,
  Users,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

// Team Images
import directorImg from "@/assets/ORIC Website/ORIC Team/Director ORIC.jpg";
import ddImg from "@/assets/ORIC Website/ORIC Team/DD ORIC.jpeg";

interface TeamMember {
  name: string;
  title: string;
  qualification: string;
  institute: string;
  email: string;
  image?: string;
  initials?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Prof. Dr. Ramla Shahid",
    title: "Director ORIC",
    qualification: "PhD, Chemistry/Chemical Biology",
    institute: "University of Cambridge, UK",
    email: "director.oric@kum.edu.pk",
    image: directorImg
  },
  {
    name: "Dr. Riffat Batool",
    title: "Deputy Director ORIC (RM)",
    qualification: "PhD (Plant Sciences)",
    institute: "QAU, Islamabad",
    email: "Riffat.batool@kum.edu.pk",
    initials: "RB"
  },
  {
    name: "Mr. Qazi Muhammad Raheel Anjum",
    title: "Deputy Director ORIC (I&C)",
    qualification: "MS (Materials & Surface Engineering)",
    institute: "SCME, NUST, Islamabad, Pakistan",
    email: "qazi.raheel@kum.edu.pk",
    image: ddImg
  },
  {
    name: "Ms. Kubra Fida",
    title: "Communication Assistant",
    qualification: "MA (Political Science)",
    institute: "PU",
    email: "kubrafida@kum.edu.pk",
    initials: "KF"
  }
];

const keyFunctions = [
  "Promoting and enhancing cross-cutting and multi-disciplinary research initiatives",
  "Increasing and diversifying external research funding.",
  "Strengthening university-industry relationships.",
  "Promoting entrepreneurship, technology-transfer and commercialization activities.",
  "Managing campus-wide record of University publications with associated detail.",
  "Managing the database of R & D Projects, Collaborations and MOUs of University.",
  "Working on IP Disclosures/Patents/Copy Right/Policy Briefs."
];

const domains = [
  {
    title: "Research Support",
    icon: Search,
    content: "ORIC is committed to providing comprehensive support for research activities. It proactively identifies and shares research grant opportunities with faculty members, assisting them throughout the process from proposal preparation and submission to approval and completion. The office also facilitates and manages collaborative research projects while fostering strong research linkages with other universities, industry partners, and the corporate sector. ORIC also identifies consultancy opportunities for faculty and oversees the management of consultancy projects."
  },
  {
    title: "Innovation and Commercialization",
    icon: Lightbulb,
    content: "The ORIC department plays a pivotal role in managing intellectual property and promoting research and commercialization initiatives. It oversees national and international IP disclosures and formulates policies that support research, innovation, and commercialization activities. In addition, the department organizes industrial visits, establishes memoranda of understanding (MOUs) with industry and the corporate sector."
  },
  {
    title: "Sustainability and Capacity Building",
    icon: Rocket,
    content: "ORIC conducts a wide range of training sessions, workshops, seminars, and conferences on research, innovation, and commercialization for faculty, researchers, and research students. It also supports the participation of faculty and students in external training programs hosted by other institutions. In addition, ORIC oversees the organization of exhibitions, showcasing events, and industry linkage fairs."
  }
];

// ORIC Policies PDFs
import HECJournalRec_OP from "@/assets/ORIC Website/ORIC Policies/HEC Journal Recognition.pdf";
import HECPubPolicy_OP from "@/assets/ORIC Website/ORIC Policies/HEC Research Publications Policy.pdf";
import IP_Consult_Draft from "@/assets/ORIC Website/ORIC Policies/IP and_Consultancy Policy_Draft.pdf";
import KUM_MOU_OP from "@/assets/ORIC Website/ORIC Policies/KUM MOU Policy.pdf";
import KUM_Prop_SOPs_OP from "@/assets/ORIC Website/ORIC Policies/KUM Proposal SOPs.pdf";
import ORIC_Comm_Policy from "@/assets/ORIC Website/ORIC Policies/ORIC Commercialization Policy.pdf";
import ORIC_Policy_2021_OP from "@/assets/ORIC Website/ORIC Policies/ORICs Policy 2021.pdf";

const oricPolicies = [
  { name: "HEC Journal Recognition", url: HECJournalRec_OP },
  { name: "HEC Research Publications Policy", url: HECPubPolicy_OP },
  { name: "IP and Consultancy Policy Draft", url: IP_Consult_Draft },
  { name: "KUM MOU Policy", url: KUM_MOU_OP },
  { name: "KUM Proposal SOPs", url: KUM_Prop_SOPs_OP },
  { name: "ORIC Commercialization Policy", url: ORIC_Comm_Policy },
  { name: "ORICs Policy 2021", url: ORIC_Policy_2021_OP },
];

const ORIC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHeader
        title="ORIC"
        subtitle="Office of Research, Innovation & Commercialization"
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Introduction & Policies Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-start border-b border-gray-100 pb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-primary border-l-4 border-accent pl-4">
              Introduction
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>
                Office of Research, Innovation & Commercialization (ORIC) was established in 2021 at Kohsar University Murree, under the guidelines of the Higher Education Commission (HEC) Pakistan.
              </p>
              <p>
                Aligned with the Kohsar University vision, <span className="italic font-medium text-primary">"To be amongst the top institutions in the world with a great environment for promoting high-impact applied research, entrepreneurship, and innovation,"</span> KUM ORIC is committed to strengthening collaboration between the University's research groups, HEC, and various national and international research funding bodies.
              </p>
              <p>
                The department is dedicated to securing a substantial portfolio of research and development projects that offer mutual value to both Kohsar University and its partner organizations.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-serif text-primary mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
              <FileCheck className="h-5 w-5 text-accent" />
              ORIC Policies
            </h3>
            <div className="grid gap-3">
              {oricPolicies.map((policy) => (
                <button
                  key={policy.name}
                  onClick={() => window.open(policy.url, "_blank")}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors text-left group"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent/60 group-hover:text-accent" />
                  {policy.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-serif text-primary">ORIC Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "To foster a collaborative atmosphere among researchers, financial sources, and industries in order to raise the research and development environment at Kohsar University through a knowledge-based economy through research, innovation, development, commercialization, and entrepreneurship."
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-serif text-primary">ORIC Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "To be amongst the top institutions in the world with a great environment for promoting high-impact applied research, entrepreneurship, and innovation."
            </p>
          </div>
        </section>

        {/* Key Functions */}
        <section className="space-y-8">
          <h2 className="text-3xl font-serif text-primary border-b border-gray-200 pb-4 text-center">Key Functions of KUM ORIC</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {keyFunctions.map((func, index) => (
              <div key={index} className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-100">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">{func}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Domains Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-primary mb-4">KUM ORIC Domains</h2>
            <p className="text-gray-600">ORIC at KUM is working under following major domains to drive innovation and impact.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {domains.map((domain) => (
              <div
                key={domain.title}
                className="p-8 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <domain.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-primary mb-4">{domain.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{domain.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Grid - Collaborations & Research */}
        <section className="grid lg:grid-cols-3 gap-8">
          {/* Collaborations */}
          <div className="lg:col-span-1 bg-primary p-8 rounded-2xl text-white space-y-6">
            <div className="flex items-center gap-3">
              <Handshake className="h-8 w-8 text-accent" />
              <h2 className="text-2xl font-serif font-bold">Collaborations</h2>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed">
              Established a network of 60+ strategic partnerships across academia and industry.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">International</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">National</div>
              </div>
            </div>
            <Link
              to="/mous"
              className="inline-flex items-center gap-2 text-sm font-bold bg-white text-primary px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors w-full justify-center"
            >
              Explore All MOUs
              <Search className="h-4 w-4" />
            </Link>
          </div>

          {/* R&D Portfolio */}
          <div className="lg:col-span-1 bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-6">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-serif font-bold text-primary">R&D Portfolio</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Driving innovation across multiple disciplines with funded projects from HEC and PSF.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Ongoing", value: "1", color: "text-blue-600" },
                { label: "Completed", value: "3", color: "text-green-600" },
                { label: "Approved", value: "1", color: "text-purple-600" },
                { label: "Proposed", value: "30", color: "text-orange-600" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-3 rounded-xl border border-gray-100 text-center">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link
              to="/rd-projects"
              className="inline-flex items-center gap-2 text-sm font-bold bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors w-full justify-center"
            >
              View Projects
              <Rocket className="h-4 w-4" />
            </Link>
          </div>

          {/* Research Impact */}
          <div className="lg:col-span-1 bg-accent p-8 rounded-2xl text-white space-y-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="h-8 w-8 text-white" />
              <h2 className="text-2xl font-serif font-bold">Research Impact</h2>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              High-impact research published in Nature, IEEE, and other world-class journals.
            </p>
            <div className="bg-white/10 p-6 rounded-xl border border-white/10 text-center">
              <div className="text-4xl font-serif font-bold mb-1">96.8</div>
              <div className="text-[10px] uppercase tracking-widest opacity-70">Total Impact Factor 2025</div>
            </div>
            <Link
              to="/research-publications"
              className="inline-flex items-center gap-2 text-sm font-bold bg-white text-accent px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors w-full justify-center"
            >
              Research Portal
              <BookOpen className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* KUM ORIC Steering Committee Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-8 sm:p-10 rounded-2xl text-white shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              HEC Framework Governance
            </div>
            <h2 className="text-3xl font-serif font-bold text-white">KUM ORIC Steering Committee</h2>
            <p className="text-primary-foreground/90 text-sm sm:text-base leading-relaxed">
              As per Higher Education Commission (HEC) guidelines, Kohsar University Murree has constituted the KUM ORIC Steering Committee to oversee strategic research directions, policy formulation, industry collaborations, and commercialization initiatives.
            </p>
            <div className="pt-2">
              <Link
                to="/oric-steering-committee"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold text-sm rounded-lg hover:bg-accent hover:text-white transition-all shadow-md"
              >
                <Users className="h-4 w-4 text-accent group-hover:text-white" />
                View Committee Members & Notification
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ORIC Team */}
        <section id="team" className="space-y-12">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-serif text-primary font-bold">ORIC Team & Leadership</h2>
            <p className="text-gray-600 text-sm mt-1">Dedicated officers leading research management, innovation, and communication at KUM.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-4 border-gray-50 shadow-inner bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-serif font-bold text-2xl text-primary">{member.initials || "KUM"}</span>
                  )}
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">{member.name}</h3>
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4 h-8 flex items-center justify-center">{member.title}</p>
                
                <div className="space-y-3 w-full pt-4 border-t border-gray-100 text-xs mt-auto">
                  <div className="flex items-start justify-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 leading-relaxed text-left">
                      {member.qualification} <br />
                      <span className="text-gray-900 font-semibold">{member.institute}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    <Mail className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${member.email}`} className="text-primary hover:underline transition-colors truncate max-w-full">{member.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default ORIC;
