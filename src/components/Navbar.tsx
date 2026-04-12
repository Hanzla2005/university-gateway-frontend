import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, FileText, BookOpen, Users, Building2, GraduationCap, Briefcase, FileStack, Users2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";
import universityActPdf from "@/assets/pdfs/KOHSAR-UNIVERSITY-ACT.pdf";
import circularSpringPdf from "@/assets/pdfs/Circular-Regarding-spring-semester.pdf";
import dplAdvertisementPdf from "@/assets/pdfs/Advertisment-DPL.pdf";
import visitingFacultyPdf from "@/assets/pdfs/Visiting-Advertisment.pdf";
import adminPostFormPdf from "@/assets/pdfs/Job-Application-Form-Administrative-Post-KUM-1.pdf";
import internshipPdf from "@/assets/pdfs/WhatsApp-Image-2025-08-11-at-5.33.58-PM.pdf";
import admissionAdPdf from "@/assets/pdfs/Admission-Add.pdf";

const navItems = [
  { label: "Home", path: "/" },
  { 
    label: "About", 
    path: "/about",
    submenu: [
      { label: "Vice Chancellor Message", path: "/vice-chancellor", icon: Users },
      { label: "University Act", path: "/university-act", icon: FileText, isExternal: true },
      { label: "Study at KUM", path: "/study-at-kum", icon: BookOpen },
      { label: "Campus & Student Affairs", path: "/campus-student-affairs", icon: Building2 },
    ]
  },
  {
    label: "Admissions",
    path: "/online-admissions",
    submenu: [
      { label: "Online Admissions", path: "/online-admissions", icon: Users2 },
      { label: "Admissions Ad Fall 2025", path: "/admissions-ad-fall-2025", icon: FileText, isExternal: true },
      { label: "Scholarships", path: "/scholarships", icon: GraduationCap },
      { label: "Merit Lists", path: "/merit-lists", icon: FileStack },
    ]
  },
  { 
    label: "Faculties", 
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
    label: "Management", 
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
      { 
        label: "Scholarships", 
        path: "/scholarships",
        icon: BookOpen,
      },
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
  { label: "Guest House", path: "/guest-house" },
  { label: "Announcements", path: "/announcements" },
  { label: "Downloads", path: "/downloads" },
  { label: "Convocation", path: "https://docs.google.com/forms/d/e/1FAIpQLSdGaBUzTNJIW1xwpp5VfvMMdnFSU0z98oU95DlU26D3xvYv6A/viewform", isExternal: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoveredNestedItem, setHoveredNestedItem] = useState<string | null>(null);
  const location = useLocation();

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

  const handleUniversityActClick = () => {
    window.open(universityActPdf, "_blank");
  };

  const handleSubmenuPdfClick = (pdfPath: string) => {
    if (pdfPath === "/university-act") {
      window.open(universityActPdf, "_blank");
    } else if (pdfPath === "/admissions-ad-fall-2025") {
      window.open(admissionAdPdf, "_blank");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container-main flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground">
          <img src={logo} alt="Kohsar University Murree" className="h-10 w-10 rounded-full bg-white p-0.5" />
          <span className="font-serif text-lg">Kohsar University Murree</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.path} 
              className="relative"
              onMouseEnter={() => setHoveredDropdown(item.submenu ? item.path : null)}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <Link
                to={item.path}
                onClick={(e) => {
                  if (item.isExternal) {
                    e.preventDefault();
                    window.open(item.path, "_blank");
                  }
                }}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors flex items-center gap-1 ${
                  location.pathname === item.path
                    ? "text-primary-foreground bg-primary-foreground/15"
                    : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item.label}
                {item.submenu && <ChevronDown className={`h-4 w-4 transition-transform ${hoveredDropdown === item.path ? "rotate-180" : ""}`} />}
              </Link>

              {item.submenu && hoveredDropdown === item.path && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 mt-0 w-64 bg-white border border-border shadow-xl"
                >
                  <div className="py-3">
                    {item.submenu.map((subitem) => {
                      const Icon = subitem.icon;
                      const hasNested = subitem.nested && subitem.nested.length > 0;
                      return subitem.isExternal ? (
                        <button
                          key={subitem.path}
                          onClick={() => handleSubmenuPdfClick(subitem.path)}
                          className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-primary/5 transition-colors group"
                        >
                          <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <div className="flex-1 text-left">
                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{subitem.label}</p>
                            <p className="text-xs text-muted-foreground">PDF Document</p>
                          </div>
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
                            className="px-4 py-3 flex items-start gap-3 hover:bg-primary/5 transition-colors group"
                          >
                            <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <div className="flex-1 text-left">
                              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{subitem.label}</p>
                            </div>
                            {hasNested && <ChevronDown className="h-4 w-4 text-primary mt-1 group-hover:rotate-180 transition-transform" />}
                          </Link>
                          
                          {/* Nested submenu */}
                          {hasNested && hoveredNestedItem === subitem.path && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-full top-0 ml-0 w-56 bg-white border border-border shadow-xl"
                            >
                              <div className="py-2">
                                {subitem.nested!.map((nestedItem) => {
                                  const handleNestedPdfClick = (pdfPath: string) => {
                                    if (pdfPath === "/circular-spring-semester") {
                                      window.open(circularSpringPdf, "_blank");
                                    } else if (pdfPath === "/jobs-dpl-2025") {
                                      window.open(dplAdvertisementPdf, "_blank");
                                    } else if (pdfPath === "/jobs-visiting-faculty") {
                                      window.open(visitingFacultyPdf, "_blank");
                                    } else if (pdfPath === "/jobs-admin-posts") {
                                      window.open(adminPostFormPdf, "_blank");
                                    } else if (pdfPath === "/jobs-internship") {
                                      window.open(internshipPdf, "_blank");
                                    }
                                  };

                                  return nestedItem.isExternal ? (
                                    <button
                                      key={nestedItem.path}
                                      onClick={() => handleNestedPdfClick(nestedItem.path)}
                                      className="w-full text-left block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                                    >
                                      {nestedItem.label}
                                    </button>
                                  ) : (
                                    <Link
                                      key={nestedItem.path}
                                      to={nestedItem.path}
                                      className="block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  );
                                })}
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

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-primary overflow-hidden border-t border-primary-foreground/10"
          >
            <div className="px-4 pb-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenSubmenu(openSubmenu === item.path ? null : item.path)}
                        className={`w-full text-left px-4 py-3 rounded text-sm font-medium transition-colors flex items-center justify-between ${
                          location.pathname === item.path
                            ? "text-primary-foreground bg-primary-foreground/15"
                            : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openSubmenu === item.path ? "rotate-180" : ""
                          }`}
                        />
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
                              const handleSubitemClick = () => {
                                if (subitem.isExternal) {
                                  if (subitem.path === '/university-act') {
                                    window.open(universityActPdf, "_blank");
                                  } else if (subitem.path === '/admissions-ad-fall-2025') {
                                    window.open(admissionAdPdf, "_blank");
                                  }
                                }
                              };
                              return subitem.isExternal ? (
                                <button
                                  key={subitem.path}
                                  onClick={handleSubitemClick}
                                  className="w-full text-left px-8 py-3 text-sm text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors flex items-center gap-2"
                                >
                                  <Icon className="h-4 w-4" />
                                  {subitem.label}
                                </button>
                              ) : hasNested ? (
                                <div key={subitem.path}>
                                  <button
                                    onClick={() => setOpenNestedSubmenu(openNestedSubmenu === subitem.path ? null : subitem.path)}
                                    className="w-full text-left px-8 py-3 text-sm text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors flex items-center gap-2 justify-between"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Icon className="h-4 w-4" />
                                      {subitem.label}
                                    </div>
                                    <ChevronDown
                                      className={`h-4 w-4 transition-transform ${
                                        openNestedSubmenu === subitem.path ? "rotate-180" : ""
                                      }`}
                                    />
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
                                        {subitem.nested!.map((nestedItem) => {
                                          const handleNestedPdfClick = (pdfPath: string) => {
                                            if (pdfPath === "/circular-spring-semester") {
                                              window.open(circularSpringPdf, "_blank");
                                            } else if (pdfPath === "/jobs-dpl-2025") {
                                              window.open(dplAdvertisementPdf, "_blank");
                                            } else if (pdfPath === "/jobs-visiting-faculty") {
                                              window.open(visitingFacultyPdf, "_blank");
                                            } else if (pdfPath === "/jobs-admin-posts") {
                                              window.open(adminPostFormPdf, "_blank");
                                            } else if (pdfPath === "/jobs-internship") {
                                              window.open(internshipPdf, "_blank");
                                            }
                                          };

                                          return nestedItem.isExternal ? (
                                            <button
                                              key={nestedItem.path}
                                              onClick={() => handleNestedPdfClick(nestedItem.path)}
                                              className="w-full text-left block px-8 py-2 text-sm text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                                            >
                                              {nestedItem.label}
                                            </button>
                                          ) : (
                                            <Link
                                              key={nestedItem.path}
                                              to={nestedItem.path}
                                              className="block px-8 py-2 text-sm text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                                            >
                                              {nestedItem.label}
                                            </Link>
                                          );
                                        })}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  key={subitem.path}
                                  to={subitem.path}
                                  className="px-8 py-3 text-sm text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors flex items-center gap-2"
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
                      onClick={(e) => {
                        if (item.isExternal) {
                          e.preventDefault();
                          window.open(item.path, "_blank");
                        }
                      }}
                      className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-primary-foreground bg-primary-foreground/15"
                          : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/10"
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
