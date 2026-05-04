import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, FileText, BookOpen, Users, Building2, GraduationCap, Briefcase, FileStack, Users2, Search, Download, ShieldCheck, Trophy, Handshake, Rocket } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";
import universityActPdf from "@/assets/pdfs/KOHSAR-UNIVERSITY-ACT.pdf";
import circularSpringPdf from "@/assets/pdfs/Circular-Regarding-spring-semester.pdf";
import dplAdvertisementPdf from "@/assets/pdfs/Advertisment-DPL.pdf";
import visitingFacultyPdf from "@/assets/pdfs/Visiting-Advertisment.pdf";
import adminPostFormPdf from "@/assets/pdfs/Job-Application-Form-Administrative-Post-KUM-1.pdf";
import internshipPdf from "@/assets/pdfs/WhatsApp-Image-2025-08-11-at-5.33.58-PM.pdf";
import admissionAdPdf from "@/assets/pdfs/Admission-Add.pdf";
import alumniFormPdf from "@/assets/pdfs/Alumni Registration from.pdf";

// ORIC PDFs - Downloads
import oricDlHjrs21_22 from "@/assets/ORIC Website/Downloads/HJRS  2021-22.pdf";
import oricDlHjrs20_21 from "@/assets/ORIC Website/Downloads/HJRS 2020-21.pdf";
import oricDlHjrs22_23 from "@/assets/ORIC Website/Downloads/HJRS 2022-23.pdf";
import oricDlHjrs23_24 from "@/assets/ORIC Website/Downloads/HJRS 2023-24.pdf";
import oricDlHonorarium from "@/assets/ORIC Website/Downloads/Honorarium Performa- Template.pdf";
import oricDlInvention from "@/assets/ORIC Website/Downloads/Invention Disclosure Form.pdf";
import oricDlAnnual2025 from "@/assets/ORIC Website/Downloads/KUM Annual Report 2025.pdf";

// ORIC PDFs - Ethical Review Board
import oricErbBoard from "@/assets/ORIC Website/Ethical Review Board/KUM Ethical institutional review board.pdf";
import oricErbRecon from "@/assets/ORIC Website/Ethical Review Board/Reconstitution of KUM Ethical institutional review board .pdf";

// ORIC PDFs - Annual Report
import oricAr2025 from "@/assets/ORIC Website/KUM Annual Report/KUM Annual Report 2025.pdf";

// ORIC PDFs - KUM Policies
import oricKpJournal from "@/assets/ORIC Website/KUM Policies/HEC Journal Recognition.pdf";
import oricKpPubPolicy from "@/assets/ORIC Website/KUM Policies/HEC Research Publications Policy.pdf";
import oricKpHjrs20_21 from "@/assets/ORIC Website/KUM Policies/hjrs 2020-21.pdf";
import oricKpHjrs21_22 from "@/assets/ORIC Website/KUM Policies/hjrs 2021-22.pdf";
import oricKpHjrs22_23 from "@/assets/ORIC Website/KUM Policies/hjrs 2022-23.pdf";
import oricKpHjrs23_24 from "@/assets/ORIC Website/KUM Policies/HJRS 2023-24.pdf";
import oricKpMou from "@/assets/ORIC Website/KUM Policies/KUM MOU Policy.pdf";
import oricKpSop from "@/assets/ORIC Website/KUM Policies/KUM Proposal SOPs.pdf";
import oricKpPolicy2021 from "@/assets/ORIC Website/KUM Policies/ORICs Policy 2021.pdf";

const topBarLinks = [
  { label: "Vice Chancellor", path: "/vice-chancellor" },
  { label: "Scholarships", path: "/scholarships" },
  { label: "Guest House", path: "/guest-house" },
  { label: "Downloads", path: "/downloads" },
  { label: "Jobs", path: "/jobs" },
  { label: "Alumni", path: alumniFormPdf, isExternal: true },
  { label: "Convocation", path: "https://docs.google.com/forms/d/e/1FAIpQLSdGaBUzTNJIW1xwpp5VfvMMdnFSU0z98oU95DlU26D3xvYv6A/viewform", isExternal: true },
];

const mainNavItems = [
  {
    label: "ABOUT",
    path: "/about",
    submenu: [
      { label: "Vice Chancellor Message", path: "/vice-chancellor", icon: Users },
      { label: "University Act", path: "/university-act", icon: FileText, isExternal: true },
      { label: "Study at KUM", path: "/study-at-kum", icon: BookOpen },
      { label: "Campus & Student Affairs", path: "/campus-student-affairs", icon: Building2 },
    ]
  },
  {
    label: "ADMISSIONS",
    path: "/online-admissions",
    submenu: [
      { label: "Online Admissions", path: "/online-admissions", icon: Users2 },
      { label: "Admissions Ad Fall 2025", path: "/admissions-ad-fall-2025", icon: FileText, isExternal: true },
      { label: "Scholarships", path: "/scholarships", icon: GraduationCap },
      { label: "Merit Lists", path: "/merit-lists", icon: FileStack },
    ]
  },
  {
    label: "FACULTIES",
    path: "/faculties",
    submenu: [
      { label: "All Faculty Members", path: "/all-faculty-members", icon: Users },
      {
        label: "Faculty of Applied Sciences and Computing",
        path: "/faculty-applied-sciences",
        icon: GraduationCap,
        nested: [
          { label: "Computer Science", path: "/departments/computer-science" },
          { label: "Mathematics", path: "/departments/mathematics" },
          { label: "Physics", path: "/departments/physics" },
          { label: "Software Engineering", path: "/departments/software-engineering" },
        ]
      },
      {
        label: "Faculty of Biomedical & Life Sciences",
        path: "/faculty-biomedical",
        icon: GraduationCap,
        nested: [
          { label: "Medical Laboratory Technology", path: "/departments/medical-laboratory-technology" },
          { label: "Biotechnology", path: "/departments/biotechnology" },
          { label: "Bioscience", path: "/departments/bioscience" },
          { label: "Botany", path: "/departments/botany" },
          { label: "Mountain Agriculture & Environmental Sciences", path: "/departments/mountain-agriculture" },
          { label: "Microbiology", path: "/departments/microbiology" },
          { label: "Forestry", path: "/departments/forestry" },
        ]
      },
      {
        label: "Faculty of Management, Humanities and Social Sciences",
        path: "/faculty-management",
        icon: GraduationCap,
        nested: [
          { label: "Art and Design", path: "/departments/art-and-design" },
          { label: "English", path: "/departments/english" },
          { label: "Psychology", path: "/departments/psychology" },
          { label: "Sociology", path: "/departments/sociology" },
          { label: "Tourism and Hospitality Management", path: "/departments/tourism-and-hospitality" },
          { label: "Business Administration", path: "/departments/business-administration" },
        ]
      },
      { label: "International Affiliate Faculty", path: "/faculty-international", icon: GraduationCap },
    ]
  },
  {
    label: "MANAGEMENT",
    path: "/management",
    submenu: [
      {
        label: "Media",
        path: "/media",
        icon: FileText,
        nested: [
          { label: "Circular Regarding Spring Semester", path: "/circular-spring-semester", isExternal: true },
          { label: "Gallery", path: "/gallery" },
          { label: "Conferences", path: "/conferences" },
          { label: "Diploma & Certification", path: "/diploma-certification" },
          { label: "Events", path: "/events" },
          { label: "MOUs", path: "/mous" },
          { label: "News", path: "/news" },
          { label: "Achievements", path: "/achievements" },
          { label: "Societies", path: "/societies" },
          { label: "Hostel", path: "/hostel" },
        ]
      },
      { label: "Scholarships", path: "/scholarships", icon: BookOpen },
      {
        label: "Policies",
        path: "/policies",
        icon: FileStack,
        nested: [
          { label: "Procurement", path: "/policy-procurement" },
          { label: "HEC Policy for Students with Disabilities", path: "/policy-hec-disabilities" },
          { label: "Complaints Form Students with Disabilities", path: "/policy-complaints-disabilities" },
          { label: "Labs", path: "/policy-labs" },
          { label: "Academic Rules", path: "/policy-academic-rules" },
          { label: "Harassment Notification", path: "/policy-harassment-notification" },
          { label: "Harassment Policy KUM", path: "/policy-harassment-kum" },
          { label: "Recruitment Complain Redressal Cell", path: "/policy-recruitment-complaints" },
          { label: "Act-2010 Harassments at workplace", path: "/policy-act-2010" },
          { label: "Sexual Harassment Policy", path: "/policy-sexual-harassment" },
          { label: "Notification & Drug Tobacco Policy", path: "/policy-drug-tobacco" },
          { label: "Protection Against Harassment", path: "/policy-protection-harassment" },
        ]
      },
      {
        label: "Jobs",
        path: "/jobs",
        icon: Briefcase,
        nested: [
          { label: "Advertisement DPL 2025", path: "/jobs-dpl-2025", isExternal: true },
          { label: "Visiting Faculty Advertisement Fall 2025", path: "/jobs-visiting-faculty", isExternal: true },
          { label: "Application Form for Administrative Posts", path: "/jobs-admin-posts", isExternal: true },
          { label: "Advertisement for paid Internship", path: "/jobs-internship", isExternal: true },
        ]
      },
    ]
  },
  {
    label: "ORIC",
    path: "/oric",
    submenu: [
      { label: "ORIC Introduction", path: "/oric", icon: Building2 },
      { 
        label: "Downloads", 
        path: "#oric-downloads", 
        icon: Download,
        nested: [
          { label: "HJRS 2021-22", path: "/oric-dl-hjrs-21-22", isExternal: true },
          { label: "HJRS 2020-21", path: "/oric-dl-hjrs-20-21", isExternal: true },
          { label: "HJRS 2022-23", path: "/oric-dl-hjrs-22-23", isExternal: true },
          { label: "HJRS 2023-24", path: "/oric-dl-hjrs-23-24", isExternal: true },
          { label: "Honorarium Performa - Template", path: "/oric-dl-honorarium", isExternal: true },
          { label: "Invention Disclosure Form", path: "/oric-dl-invention", isExternal: true },
        ]
      },
      { 
        label: "Ethical Review Board", 
        path: "#oric-erb", 
        icon: ShieldCheck,
        nested: [
          { label: "KUM Ethical Review Board", path: "/oric-erb-board", isExternal: true },
          { label: "Reconstitution of Board", path: "/oric-erb-recon", isExternal: true },
        ]
      },
      { label: "KUM Annual Report 2025", path: "/oric-ar-2025", icon: FileStack, isExternal: true },
      { 
        label: "KUM Policies", 
        path: "#oric-kp", 
        icon: FileText,
        nested: [
          { label: "HEC Journal Recognition", path: "/oric-kp-journal", isExternal: true },
          { label: "HEC Research Publications Policy", path: "/oric-kp-pub-policy", isExternal: true },
          { label: "hjrs 2020-21", path: "/oric-kp-hjrs-20-21", isExternal: true },
          { label: "hjrs 2021-22", path: "/oric-kp-hjrs-21-22", isExternal: true },
          { label: "hjrs 2022-23", path: "/oric-kp-hjrs-22-23", isExternal: true },
          { label: "HJRS 2023-24", path: "/oric-kp-hjrs-23-24", isExternal: true },
          { label: "KUM MOU Policy", path: "/oric-kp-mou", isExternal: true },
          { label: "KUM Proposal SOPs", path: "/oric-kp-sop", isExternal: true },
          { label: "ORICs Policy 2021", path: "/oric-kp-policy-2021", isExternal: true },
        ]
      },
      { label: "Landmark Achievements", path: "/oric", icon: Trophy },
      { label: "Collaborations", path: "/mous", icon: Handshake },
      { label: "ORIC Steering Committee", path: "/oric", icon: Users },
      { label: "R&D Projects", path: "/rd-projects", icon: Rocket },
      { label: "Research Publications", path: "/research-publications", icon: BookOpen },
    ]
  },
  { label: "ANNOUNCEMENTS", path: "/announcements" },
  { label: "CAMPUS LIFE", path: "/campus-life" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoveredNestedItem, setHoveredNestedItem] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSubmenu(null);
    setOpenNestedSubmenu(null);
  }, [location.pathname]);

  const navClasses = "shadow-lg bg-primary";
  const topBarClasses = "bg-primary";
  const mainBarClasses = "bg-primary/90";


  const handleSubmenuPdfClick = (pdfPath: string) => {
    if (pdfPath === "/university-act") window.open(universityActPdf, "_blank");
    else if (pdfPath === "/admissions-ad-fall-2025") window.open(admissionAdPdf, "_blank");
    else if (pdfPath === "/oric-ar-2025") window.open(oricAr2025, "_blank");
  };

  const handleNestedPdfClick = (pdfPath: string) => {
    if (pdfPath === "/circular-spring-semester") window.open(circularSpringPdf, "_blank");
    else if (pdfPath === "/jobs-dpl-2025") window.open(dplAdvertisementPdf, "_blank");
    else if (pdfPath === "/jobs-visiting-faculty") window.open(visitingFacultyPdf, "_blank");
    else if (pdfPath === "/jobs-admin-posts") window.open(adminPostFormPdf, "_blank");
    else if (pdfPath === "/jobs-internship") window.open(internshipPdf, "_blank");
    // ORIC Downloads
    else if (pdfPath === "/oric-dl-hjrs-21-22") window.open(oricDlHjrs21_22, "_blank");
    else if (pdfPath === "/oric-dl-hjrs-20-21") window.open(oricDlHjrs20_21, "_blank");
    else if (pdfPath === "/oric-dl-hjrs-22-23") window.open(oricDlHjrs22_23, "_blank");
    else if (pdfPath === "/oric-dl-hjrs-23-24") window.open(oricDlHjrs23_24, "_blank");
    else if (pdfPath === "/oric-dl-honorarium") window.open(oricDlHonorarium, "_blank");
    else if (pdfPath === "/oric-dl-invention") window.open(oricDlInvention, "_blank");
    else if (pdfPath === "/oric-dl-annual-2025") window.open(oricDlAnnual2025, "_blank");
    // ORIC ERB
    else if (pdfPath === "/oric-erb-board") window.open(oricErbBoard, "_blank");
    else if (pdfPath === "/oric-erb-recon") window.open(oricErbRecon, "_blank");
    // ORIC KUM Policies
    else if (pdfPath === "/oric-kp-journal") window.open(oricKpJournal, "_blank");
    else if (pdfPath === "/oric-kp-pub-policy") window.open(oricKpPubPolicy, "_blank");
    else if (pdfPath === "/oric-kp-hjrs-20-21") window.open(oricKpHjrs20_21, "_blank");
    else if (pdfPath === "/oric-kp-hjrs-21-22") window.open(oricKpHjrs21_22, "_blank");
    else if (pdfPath === "/oric-kp-hjrs-22-23") window.open(oricKpHjrs22_23, "_blank");
    else if (pdfPath === "/oric-kp-hjrs-23-24") window.open(oricKpHjrs23_24, "_blank");
    else if (pdfPath === "/oric-kp-mou") window.open(oricKpMou, "_blank");
    else if (pdfPath === "/oric-kp-sop") window.open(oricKpSop, "_blank");
    else if (pdfPath === "/oric-kp-policy-2021") window.open(oricKpPolicy2021, "_blank");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      {/* Top utility bar */}
      <div className={`border-b border-primary-foreground/10 transition-colors duration-300 ${topBarClasses}`}>
        <div className="container-main px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
          <Link to="/" className="flex items-center gap-2.5 text-primary-foreground">
            <img src={logo} alt="Kohsar University Murree" className="h-8 w-8 rounded-full bg-white p-0.5" />
            <span className="font-serif text-lg hidden sm:inline">Kohsar University Murree</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {topBarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => {
                  if (link.isExternal) {
                    e.preventDefault();
                    window.open(link.path, "_blank");
                  }
                }}
                className="text-sm text-primary-foreground/70 px-2 py-1 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            {/* <button className="ml-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:brightness-110 transition">
              <Search className="h-4 w-4" />
            </button> */}
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className={`hidden lg:block backdrop-blur-sm transition-colors duration-300 ${mainBarClasses}`}>
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-0">
            {mainNavItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setHoveredDropdown(item.submenu ? item.path : null)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-3.5 text-base font-medium tracking-wide transition-colors flex items-center gap-1 ${location.pathname === item.path
                    ? "text-primary-foreground bg-primary-foreground/15"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-accent"
                    }`}
                >
                  {item.label}
                  {item.submenu && <ChevronDown className={`h-3.5 w-3.5 transition-transform ${hoveredDropdown === item.path ? "rotate-180" : ""}`} />}
                </Link>

                {item.submenu && hoveredDropdown === item.path && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-0 w-72 bg-white border border-border shadow-xl"
                  >
                    <div className="py-2">
                      {item.submenu.map((subitem) => {
                        const Icon = subitem.icon;
                        const hasNested = subitem.nested && subitem.nested.length > 0;
                        return subitem.isExternal ? (
                          <button
                            key={subitem.path}
                            onClick={() => handleSubmenuPdfClick(subitem.path)}
                            className="w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-primary/5 transition-colors group"
                          >
                            <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-base text-foreground group-hover:text-accent transition-colors">{subitem.label}</span>
                          </button>
                        ) : (
                          <div
                            key={subitem.path}
                            className="relative"
                            onMouseEnter={() => hasNested && setHoveredNestedItem(subitem.path)}
                            onMouseLeave={() => setHoveredNestedItem(null)}
                          >
                            <Link
                              to={subitem.path}
                              className="px-4 py-2.5 flex items-center gap-3 hover:bg-primary/5 transition-colors group"
                            >
                              <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-base text-foreground group-hover:text-accent transition-colors flex-1">{subitem.label}</span>
                              {hasNested && <ChevronDown className="h-3.5 w-3.5 text-muted-foreground -rotate-90" />}
                            </Link>

                            {hasNested && hoveredNestedItem === subitem.path && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-full top-0 ml-0 w-64 bg-white border border-border shadow-xl"
                              >
                                <div className="py-2">
                                  {subitem.nested!.map((nestedItem) => (
                                    nestedItem.isExternal ? (
                                      <button
                                        key={nestedItem.path}
                                        onClick={() => handleNestedPdfClick(nestedItem.path)}
                                        className="w-full text-left block px-4 py-2 text-base text-foreground hover:text-accent hover:bg-primary/5 transition-colors"
                                      >
                                        {nestedItem.label}
                                      </button>
                                    ) : (
                                      <Link
                                        key={nestedItem.path}
                                        to={nestedItem.path}
                                        className="block px-4 py-2 text-base text-foreground hover:text-accent hover:bg-primary/5 transition-colors"
                                      >
                                        {nestedItem.label}
                                      </Link>
                                    )
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-primary overflow-hidden border-t border-primary-foreground/10 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 pb-4 space-y-1 pt-2">
              {/* Top bar links on mobile */}
              <div className="flex flex-wrap gap-2 pb-3 border-b border-primary-foreground/10 mb-2">
                {topBarLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => {
                      if (link.isExternal) {
                        e.preventDefault();
                        window.open(link.path, "_blank");
                      }
                    }}
                    className="text-sm text-primary-foreground/60 px-2 py-1 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {mainNavItems.map((item) => (
                <div key={item.path}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.path ? null : item.path)}
                        className={`w-full text-left px-4 py-3 rounded text-base font-medium tracking-wide transition-colors flex items-center justify-between ${location.pathname === item.path
                          ? "text-primary-foreground bg-primary-foreground/15"
                          : "text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-accent"
                          }`}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.path ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openSubmenu === item.path && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="bg-primary-foreground/5 rounded mt-1 overflow-hidden"
                          >
                            {item.submenu.map((subitem) => {
                              const Icon = subitem.icon;
                              const hasNested = subitem.nested && subitem.nested.length > 0;
                              return subitem.isExternal ? (
                                <button
                                  key={subitem.path}
                                  onClick={() => handleSubmenuPdfClick(subitem.path)}
                                  className="w-full text-left px-8 py-2.5 text-base text-primary-foreground/75 hover:bg-primary-foreground/10 transition-colors flex items-center gap-2 hover:text-accent"
                                >
                                  <Icon className="h-4 w-4" />
                                  {subitem.label}
                                </button>
                              ) : hasNested ? (
                                <div key={subitem.path}>
                                  <button
                                    onClick={() => setOpenNestedSubmenu(openNestedSubmenu === subitem.path ? null : subitem.path)}
                                    className="w-full text-left px-8 py-2.5 text-base text-primary-foreground/75 hover:bg-primary-foreground/10 transition-colors flex items-center gap-2 justify-between hover:text-accent"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Icon className="h-4 w-4" />
                                      {subitem.label}
                                    </div>
                                    <ChevronDown className={`h-4 w-4 transition-transform ${openNestedSubmenu === subitem.path ? "rotate-180" : ""}`} />
                                  </button>
                                  <AnimatePresence>
                                    {openNestedSubmenu === subitem.path && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="bg-primary-foreground/5 overflow-hidden pl-4"
                                      >
                                        {subitem.nested!.map((nestedItem) => (
                                          nestedItem.isExternal ? (
                                            <button
                                              key={nestedItem.path}
                                              onClick={() => handleNestedPdfClick(nestedItem.path)}
                                              className="w-full text-left block px-8 py-2 text-base text-primary-foreground/75 hover:text-accent hover:bg-primary-foreground/10 transition-colors"
                                            >
                                              {nestedItem.label}
                                            </button>
                                          ) : (
                                            <Link
                                              key={nestedItem.path}
                                              to={nestedItem.path}
                                              className="block px-8 py-2 text-base text-primary-foreground/75 hover:text-accent hover:bg-primary-foreground/10 transition-colors"
                                            >
                                              {nestedItem.label}
                                            </Link>
                                          )
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  key={subitem.path}
                                  to={subitem.path}
                                  className="px-8 py-2.5 text-base text-primary-foreground/75 hover:bg-primary-foreground/10 transition-colors flex items-center gap-2 hover:text-accent"
                                >
                                  <Icon className="h-4 w-4" />
                                  {subitem.label}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded text-base font-medium tracking-wide transition-colors ${location.pathname === item.path
                        ? "text-primary-foreground bg-primary-foreground/15"
                        : "text-primary-foreground/75 hover:bg-primary-foreground/10 hover:text-accent"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
