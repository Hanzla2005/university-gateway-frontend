import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  Lightbulb,
  Search,
  Rocket,
  Handshake,
  FileCheck,
  Database,
  ShieldCheck,
  GraduationCap,
  Users,
  Mail,
  Building,
  BookOpen,
  FlaskConical,
  BarChart3
} from "lucide-react";

// Team Images
import directorImg from "@/assets/ORIC Website/ORIC Team/Director ORIC.jpg";
import ddImg from "@/assets/ORIC Website/ORIC Team/DD ORIC.jpeg";

const teamMembers = [
  {
    name: "Prof. Dr. Ramla Shahid",
    title: "Director ORIC",
    qualification: "PhD, Chemistry/Chemical Biology",
    institute: "University of Cambridge, UK",
    email: "director.oric@kum.edu.pk",
    image: directorImg
  },
  {
    name: "Mr. Qazi Muhammad Raheel Anjum",
    title: "Deputy Director ORIC",
    qualification: "MS (Materials & Surface Engineering)",
    institute: "SCME, NUST, Islamabad, Pakistan",
    email: "qazi.raheel@kum.edu.pk",
    image: ddImg
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
    content: "ORIC is committed to providing comprehensive support for research activities. It proactively identifies and shares research grant opportunities with faculty members, assisting them throughout the process from proposal preparation and submission to approval and completion. The office also facilitates and manages collaborative research projects while fostering strong research linkages with other universities, industry partners, and the corporate sector. ORIC also identifies consultancy opportunities for faculty and oversees the management of consultancy projects. All types of projects are managed by ORIC. Besides Projects ORIC deals with Policy Advocacies, Research Ethics Evaluation and Industrial linkages."
  },
  {
    title: "Innovation and Commercialization",
    icon: Lightbulb,
    content: "The ORIC department plays a pivotal role in managing intellectual property and promoting research and commercialization initiatives. It oversees national and international IP disclosures and formulates policies that support research, innovation, and commercialization activities. In addition, the department organizes industrial visits, establishes memoranda of understanding (MOUs) with industry and the corporate sector, and facilitates the University's participation in project exhibitions, and industrial fairs."
  },
  {
    title: "Sustainability and Capacity Building",
    icon: Rocket,
    content: "ORIC conducts a wide range of training sessions, workshops, seminars, and conferences on research, innovation, and commercialization for faculty, researchers, and research students. It also supports the participation of faculty and students in external training programs hosted by other institutions. In addition, ORIC oversees the organization of exhibitions, showcasing events, and industry linkage fairs. To remain current with emerging trends, ORIC staff actively engage in relevant training sessions, workshops, and seminars."
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="ORIC"
        subtitle="Office of Research, Innovation & Commercialization"
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-16 space-y-32">

        {/* Introduction Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-foreground mb-6">Introduction</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Office of Research, Innovation & Commercialization (ORIC) was established in 2021 at Kohsar University Murree, under the guidelines of the Higher Education Commission (HEC) Pakistan.
              </p>
              <p>
                Aligned with the Kohsar University vision, <span className="italic font-medium text-primary">"To be amongst the top institutions in the world with a great environment for promoting high-impact applied research, entrepreneurship, and innovation,"</span> KUM ORIC is committed to strengthening collaboration between the University's research groups, HEC, and various national and international research funding bodies.
              </p>
              <p>
                The department is dedicated to securing a substantial portfolio of research and development projects that offer mutual value to both Kohsar University and its partner organizations. KUM's research output aligns closely with national priorities and contributes meaningfully to Pakistan's socio-economic development.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="text-xl font-serif text-foreground mb-4 flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                ORIC Policies
              </h3>
              <div className="grid gap-2">
                {oricPolicies.map((policy) => (
                  <button
                    key={policy.name}
                    onClick={() => window.open(policy.url, "_blank")}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors text-left group"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    {policy.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10"
          >
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Mission</h3>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "To foster a collaborative atmosphere among researchers, financial sources, and industries in order to raise the research and development environment at Kohsar University through a knowledge-based economy through research, innovation, development, commercialization, and entrepreneurship."
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Vision</h3>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "To be amongst the top institutions in the world with a great environment for promoting high-impact applied research, entrepreneurship, and innovation."
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Key Functions */}
        <section className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl font-serif text-foreground mb-8 text-center">Key Functions of KUM ORIC</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFunctions.map((func, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground">{func}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif text-foreground mb-4">KUM ORIC Domains</h2>
            <p className="text-muted-foreground">ORIC at KUM is working under following major domains to drive innovation and impact.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <domain.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-4">{domain.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{domain.content}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Collaborations Summary Section */}
        <section className="relative overflow-hidden rounded-[3rem] bg-primary py-20 px-8 lg:px-16 text-primary-foreground">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full -ml-48 -mb-48 blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
                <div className="p-4 bg-primary-foreground/10 rounded-3xl backdrop-blur-sm shadow-xl border border-white/10">
                  <Handshake className="h-10 w-10 text-accent" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold tracking-tight">National & International Collaborations</h2>
              </div>

              <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed font-medium">
                Kohsar University Murree has established a robust network of <span className="text-accent font-bold">60+ strategic partnerships</span> across academia, industry, and social sectors, fostering a vibrant ecosystem for research and innovation.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                {[
                  { label: "Total MOUs", value: "60+" },
                  { label: "International", value: "10+" },
                  { label: "National", value: "50+" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-2xl">
                    <div className="text-5xl font-serif font-black mb-2 text-accent">{stat.value}</div>
                    <div className="text-xs text-primary-foreground/60 uppercase tracking-[0.2em] font-black">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/mous"
                  className="group relative inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground rounded-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-accent/40 overflow-hidden"
                >
                  <span className="relative z-10">Explore All MOUs</span>
                  <Search className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <span className="text-primary-foreground/50 text-sm font-medium italic">Latest MOU signed: 17-Apr-2026</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* R&D Projects Summary Section */}
        <section className="relative overflow-hidden rounded-[3rem] bg-secondary py-20 px-8 lg:px-16 text-secondary-foreground border border-border shadow-xl">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mt-48 blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <FlaskConical className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">Research & Development Portfolio</h2>
              </div>

              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Our research initiatives drive innovation across multiple disciplines, from AI-enabled biodiversity monitoring to sustainable energy solutions. We manage a diverse portfolio of ongoing and proposed projects funded by HEC, NRPU, and PSF.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                  { label: "Ongoing", value: "1", color: "text-blue-600" },
                  { label: "Completed", value: "3", color: "text-green-600" },
                  { label: "Approved", value: "1", color: "text-purple-600" },
                  { label: "Proposed", value: "30", color: "text-orange-600" }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-card border border-border rounded-3xl shadow-sm">
                    <div className={`text-4xl font-serif font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">{stat.label} Projects</div>
                  </div>
                ))}
              </div>

              <Link
                to="/rd-projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
              >
                Explore R&D Projects
                <Rocket className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Research Excellence Section */}
        <section className="relative overflow-hidden rounded-[3rem] bg-accent py-20 px-8 lg:px-16 text-accent-foreground">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
                <BarChart3 className="h-4 w-4" />
                Scholarly Impact 2025
              </div>

              <h2 className="text-4xl lg:text-6xl font-serif font-black mb-8 leading-tight">
                96.8 Total Impact Factor
              </h2>

              <p className="text-xl text-accent-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
                Our faculty members are contributing to global knowledge through high-impact research published in world-class journals like Nature Scientific Reports, IEEE Transactions, and Frontiers in Immunology.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-md">
                  <div className="text-4xl font-serif font-bold mb-1">50+</div>
                  <div className="text-[10px] text-accent-foreground/60 uppercase tracking-widest font-black">Publications</div>
                </div>
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-md">
                  <div className="text-4xl font-serif font-bold mb-1">W/X</div>
                  <div className="text-[10px] text-accent-foreground/60 uppercase tracking-widest font-black">HJRS Categories</div>
                </div>
              </div>

              <Link
                to="/research-publications"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accent rounded-2xl font-black hover:scale-105 transition-all shadow-2xl shadow-white/20"
              >
                View Research Portal
                <BookOpen className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ORIC Team */}
        <section id="oric-team">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-foreground mb-4">Our Leadership</h2>
            <p className="text-muted-foreground">The dedicated team behind KUM ORIC.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20 shadow-inner">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <Users className="h-10 w-10 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground leading-tight">{member.name}</h3>
                      <p className="text-primary font-medium">{member.title}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {member.qualification} <br />
                        <span className="font-medium text-foreground">{member.institute}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a href={`mailto:${member.email}`} className="text-sm text-primary hover:underline">{member.email}</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default ORIC;
