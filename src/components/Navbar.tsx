import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, FileText, BookOpen, Users, Building2, GraduationCap, Briefcase, FileStack, Users2, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";
import universityActPdf from "@/assets/pdfs/KOHSAR-UNIVERSITY-ACT.pdf";
import circularSpringPdf from "@/assets/pdfs/Circular-Regarding-spring-semester.pdf";
import dplAdvertisementPdf from "@/assets/pdfs/Advertisment-DPL.pdf";
import visitingFacultyPdf from "@/assets/pdfs/Visiting-Advertisment.pdf";
import adminPostFormPdf from "@/assets/pdfs/Job-Application-Form-Administrative-Post-KUM-1.pdf";
import internshipPdf from "@/assets/pdfs/WhatsApp-Image-2025-08-11-at-5.33.58-PM.pdf";
import admissionAdPdf from "@/assets/pdfs/Admission-Add.pdf";

const topBarLinks = [
  { label: "Vice Chancellor", path: "/vice-chancellor" },
  { label: "Scholarships", path: "/scholarships" },
  { label: "Guest House", path: "/guest-house" },
  { label: "Downloads", path: "/downloads" },
  { label: "Jobs", path: "/jobs" },
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
      { label: "Faculty of Applied Sciences and Computing", path: "/faculty-applied-sciences", icon: GraduationCap },
      { label: "Faculty of Biomedical & Life Sciences", path: "/faculty-biomedical", icon: GraduationCap },
      { label: "Faculty of Management, Humanities and Social Sciences", path: "/faculty-management", icon: GraduationCap },
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

  const navClasses = isHomePage
    ? scrolled ? "shadow-lg bg-primary" : ""
    : "shadow-lg bg-primary";

  const topBarClasses = isHomePage
    ? scrolled ? "bg-primary" : "bg-transparent"
    : "bg-primary";

  const mainBarClasses = isHomePage
    ? scrolled ? "bg-primary/90" : "bg-black/20"
    : "bg-primary/90";


  const handleSubmenuPdfClick = (pdfPath: string) => {
    if (pdfPath === "/university-act") window.open(universityActPdf, "_blank");
    else if (pdfPath === "/admissions-ad-fall-2025") window.open(admissionAdPdf, "_blank");
  };

  const handleNestedPdfClick = (pdfPath: string) => {
    if (pdfPath === "/circular-spring-semester") window.open(circularSpringPdf, "_blank");
    else if (pdfPath === "/jobs-dpl-2025") window.open(dplAdvertisementPdf, "_blank");
    else if (pdfPath === "/jobs-visiting-faculty") window.open(visitingFacultyPdf, "_blank");
    else if (pdfPath === "/jobs-admin-posts") window.open(adminPostFormPdf, "_blank");
    else if (pdfPath === "/jobs-internship") window.open(internshipPdf, "_blank");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}>
      {/* Top utility bar */}
      <div className={`border-b border-primary-foreground/10 transition-colors duration-300 ${topBarClasses}`}>
        <div className="container-main px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
          <Link to="/" className="flex items-center gap-2.5 text-primary-foreground">
            <img src={logo} alt="Kohsar University Murree" className="h-8 w-8 rounded-full bg-white p-0.5" />
            <span className="font-serif text-base hidden sm:inline">Kohsar University Murree</span>
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
                className="text-xs text-primary-foreground/70 px-2 py-1 transition-colors hover:text-accent"
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
                  className={`px-4 py-3.5 text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${
                    location.pathname === item.path
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
                            <span className="text-sm text-foreground group-hover:text-accent transition-colors">{subitem.label}</span>
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
                              <span className="text-sm text-foreground group-hover:text-accent transition-colors flex-1">{subitem.label}</span>
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
                                        className="w-full text-left block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-primary/5 transition-colors"
                                      >
                                        {nestedItem.label}
                                      </button>
                                    ) : (
                                      <Link
                                        key={nestedItem.path}
                                        to={nestedItem.path}
                                        className="block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-primary/5 transition-colors"
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
                    className="text-xs text-primary-foreground/60 px-2 py-1 transition-colors hover:text-accent"
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
                        className={`w-full text-left px-4 py-3 rounded text-sm font-medium tracking-wide transition-colors flex items-center justify-between ${
                          location.pathname === item.path
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
                                  className="w-full text-left px-8 py-2.5 text-sm text-primary-foreground/75 hover:bg-primary-foreground/10 transition-colors flex items-center gap-2 hover:text-accent"
                                >
                                  <Icon className="h-4 w-4" />
                                  {subitem.label}
                                </button>
                              ) : hasNested ? (
                                <div key={subitem.path}>
                                  <button
                                    onClick={() => setOpenNestedSubmenu(openNestedSubmenu === subitem.path ? null : subitem.path)}
                                    className="w-full text-left px-8 py-2.5 text-sm text-primary-foreground/75 hover:bg-primary-foreground/10 transition-colors flex items-center gap-2 justify-between hover:text-accent"
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
                                              className="w-full text-left block px-8 py-2 text-sm text-primary-foreground/75 hover:text-accent hover:bg-primary-foreground/10 transition-colors"
                                            >
                                              {nestedItem.label}
                                            </button>
                                          ) : (
                                            <Link
                                              key={nestedItem.path}
                                              to={nestedItem.path}
                                              className="block px-8 py-2 text-sm text-primary-foreground/75 hover:text-accent hover:bg-primary-foreground/10 transition-colors"
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
                                  className="px-8 py-2.5 text-sm text-primary-foreground/75 hover:bg-primary-foreground/10 transition-colors flex items-center gap-2 hover:text-accent"
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
                      className={`block px-4 py-3 rounded text-sm font-medium tracking-wide transition-colors ${
                        location.pathname === item.path
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
