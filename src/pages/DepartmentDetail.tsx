import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import {
  ChevronDown, ChevronRight, ChevronLeft, Eye, Target, BookOpen, Users,
  GraduationCap, Palette, Info, CheckCircle, Calendar, Mail, X, Images
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { departmentPages } from "@/data/departmentPages";
import departmentImages from "@/data/departmentImages";

const SectionHeading = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="w-1 h-8 bg-primary rounded-full" />
    <Icon className="h-6 w-6 text-primary" />
    <h2 className="text-2xl font-bold tracking-tight text-slate-800">{title}</h2>
  </div>
);

const DepartmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const department = departmentPages.find((d) => d.id === id);
  const [openScheme, setOpenScheme] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [activeSlides, setActiveSlides] = useState<Record<number, number>>({});

  const getSlide = (eventIdx: number) => activeSlides[eventIdx] ?? 0;
  const setSlide = (eventIdx: number, slide: number) =>
    setActiveSlides((prev) => ({ ...prev, [eventIdx]: slide }));

  if (!department) {
    return <Navigate to="/faculties" replace />;
  }

  const hasContent = !!(
    department.overview ||
    department.vision ||
    department.mission ||
    department.programs.length > 0 ||
    department.faculty.length > 0
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f6f8]">
      <PageHeader
        title={department.name}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Faculties", path: "/faculties" },
          { label: department.shortName },
        ]}
        backgroundImage={departmentImages[department.id]}
      />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
            onClick={() => setLightbox(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="flex-1">
        {!hasContent ? (
          <div className="container-main px-4 sm:px-6 lg:px-8 py-24 text-center">
            <div className="max-w-lg mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Palette className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground mb-4">Coming Soon</h2>
              <p className="text-muted-foreground mb-8">
                We're currently preparing the content for the {department.shortName} department.
                Please check back soon for updates!
              </p>
              <Link
                to="/faculties"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all"
              >
                View All Departments
              </Link>
            </div>
          </div>
        ) : (
          <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-16">

            {/* ── OVERVIEW ─────────────────────────────────────────── */}
            {department.overview && (
              <section>
                <SectionHeading icon={Info} title="Overview" />
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 lg:p-10 space-y-5">
                  {department.overview.split("\n\n").map((para, i) => (
                    <p key={i} className="text-[16px] text-slate-600 leading-[1.85] text-justify">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            )}

            {/* ── AIMS & OBJECTIVES ────────────────────────────────── */}
            {department.aimsAndObjectives && department.aimsAndObjectives.length > 0 && (
              <section>
                <SectionHeading icon={CheckCircle} title="Aims and Objectives" />
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 lg:p-10">
                  <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                    {department.aimsAndObjectives.map((aim, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-slate-600 leading-relaxed">{aim}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* ── VISION & MISSION ─────────────────────────────────── */}
            {(department.vision || department.mission) && (
              <section>
                <SectionHeading icon={Eye} title="Vision & Mission" />
                <div className="grid md:grid-cols-2 gap-6">
                  {department.vision && (
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 lg:p-8 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Eye className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Vision</h3>
                      </div>
                      <div className="w-12 h-0.5 bg-primary rounded-full" />
                      <p className="text-slate-600 leading-relaxed text-justify">{department.vision}</p>
                    </div>
                  )}
                  {department.mission && (
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 lg:p-8 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Target className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">Mission</h3>
                      </div>
                      <div className="w-12 h-0.5 bg-primary rounded-full" />
                      <p className="text-slate-600 leading-relaxed text-justify">{department.mission}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* ── FACULTY ──────────────────────────────────────────── */}
            {department.faculty.length > 0 && (
              <section>
                <SectionHeading icon={Users} title="Faculty" />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {department.faculty.map((member) => (
                    <div
                      key={member.name}
                      className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow text-center"
                    >
                      {member.image ? (
                        <div className="w-full aspect-square bg-slate-50 flex items-center justify-center p-4">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-contain drop-shadow-sm"
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-square bg-primary/5 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center text-primary font-serif text-3xl">
                            {member.name.charAt(0)}
                          </div>
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-base font-bold text-slate-800 mb-1">{member.name}</h3>
                        <p className="text-sm text-slate-500 mb-3 leading-snug">{member.designation}</p>
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="inline-flex items-center justify-center gap-1.5 text-xs text-primary bg-primary/8 hover:bg-primary/15 py-1.5 px-3 rounded-full transition-colors w-full"
                          >
                            <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="truncate">{member.email}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── PROGRAMS OFFERED ─────────────────────────────────── */}
            {department.programs.length > 0 && (
              <section>
                <SectionHeading icon={GraduationCap} title="Programs Offered" />
                {department.programs.map((program) => (
                  <div key={program.name} className="space-y-8">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 lg:p-8 border-l-4 border-l-primary">
                      <h3 className="text-xl font-bold text-slate-800 mb-4">{program.name}</h3>
                      {program.description.split("\n\n").map((para, i) => (
                        <p key={i} className="text-slate-600 leading-relaxed text-justify mb-3">{para}</p>
                      ))}
                    </div>

                    {program.objectives && program.objectives.length > 0 && (
                      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 lg:p-8">
                        <h4 className="text-lg font-bold text-slate-800 mb-5">Program Objectives</h4>
                        <ul className="space-y-3">
                          {program.objectives.map((obj, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="text-primary font-bold flex-shrink-0 mt-0.5">•</span>
                              <span className="text-slate-600 leading-relaxed">{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {program.majors && program.majors.length > 0 && (
                      <div className="bg-primary/5 border border-primary/15 rounded-xl p-6 lg:p-8">
                        <h4 className="text-lg font-bold text-slate-800 mb-5">Approved Specialization Areas</h4>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                          {program.majors.map((major, i) => (
                            <div key={major.name} className="bg-white border border-border rounded-lg p-4 text-center hover:border-primary/30 transition-colors">
                              <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-1">Major {i + 1}</span>
                              <span className="text-sm font-medium text-foreground">{major.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {program.scheme && program.scheme.length > 0 && (
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <BookOpen className="h-5 w-5 text-primary" />
                          <h4 className="text-lg font-bold text-slate-800">Scheme of Studies</h4>
                        </div>
                        <div className="space-y-3">
                          {program.scheme.map((category) => {
                            const isOpen = openScheme === category.name;
                            return (
                              <div key={category.name} className="border border-border rounded-xl overflow-hidden bg-white">
                                <button
                                  onClick={() => setOpenScheme(isOpen ? null : category.name)}
                                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-primary/5 transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <h5 className="text-base font-semibold text-foreground text-left">{category.name}</h5>
                                    <span className="text-xs bg-primary/10 text-primary font-medium px-2 py-0.5 rounded">
                                      {category.courses.length} courses · {category.totalCredits} credits
                                    </span>
                                  </div>
                                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                </button>
                                {isOpen && (
                                  <div className="border-t border-border overflow-x-auto">
                                    <table className="w-full">
                                      <thead className="bg-primary/5 border-b border-border">
                                        <tr>
                                          <th className="px-6 py-2.5 text-left text-sm font-semibold text-foreground w-12">#</th>
                                          <th className="px-6 py-2.5 text-left text-sm font-semibold text-foreground">Course Title</th>
                                          <th className="px-6 py-2.5 text-right text-sm font-semibold text-foreground w-24">Credits</th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-border">
                                        {category.courses.map((course, i) => (
                                          <tr key={i} className="hover:bg-primary/5 transition-colors">
                                            <td className="px-6 py-2.5 text-sm text-muted-foreground">{i + 1}</td>
                                            <td className="px-6 py-2.5 text-sm text-foreground">{course.title}</td>
                                            <td className="px-6 py-2.5 text-sm text-muted-foreground text-right">{course.credits}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                      <tfoot className="bg-primary/5 border-t border-border">
                                        <tr>
                                          <td className="px-6 py-2.5 text-sm font-bold text-foreground" colSpan={2}>Total</td>
                                          <td className="px-6 py-2.5 text-sm font-bold text-foreground text-right">{category.totalCredits}</td>
                                        </tr>
                                      </tfoot>
                                    </table>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </section>
            )}

            {/* ── EVENTS ───────────────────────────────────────────── */}
            {department.events && department.events.length > 0 && (
              <section>
                <SectionHeading icon={Calendar} title="Events & Activities" />
                <div className="space-y-8">
                  {department.events.map((event, eventIdx) => {
                    const images = event.images ?? [];
                    const currentSlide = getSlide(eventIdx);

                    return (
                      <div key={eventIdx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        
                        {/* Event Title Bar */}
                        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
                          <div className="flex items-center gap-2 flex-1 min-w-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                            <h3 className="text-[17px] font-bold text-slate-800 truncate">{event.title}</h3>
                          </div>
                          {images.length > 0 && (
                            <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium flex-shrink-0">
                              <Images className="h-3.5 w-3.5" />
                              {images.length} photo{images.length !== 1 ? "s" : ""}
                            </span>
                          )}
                        </div>

                        {images.length > 0 && (
                          <div className="p-5">
                            {/* Main image viewer */}
                            <div className="relative bg-slate-50 rounded-xl overflow-hidden border border-gray-100 mb-4">
                              {/* Main image */}
                              <div className="relative flex items-center justify-center" style={{ minHeight: '320px', maxHeight: '460px' }}>
                                <img
                                  key={currentSlide}
                                  src={images[currentSlide]}
                                  alt={`${event.title} – photo ${currentSlide + 1}`}
                                  className="max-h-[460px] w-full object-contain cursor-zoom-in"
                                  loading="lazy"
                                  onClick={() => setLightbox({ src: images[currentSlide], alt: `${event.title} – photo ${currentSlide + 1}` })}
                                />
                              </div>

                              {/* Prev / Next arrows */}
                              {images.length > 1 && (
                                <>
                                  <button
                                    onClick={() => setSlide(eventIdx, (currentSlide - 1 + images.length) % images.length)}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                                  >
                                    <ChevronLeft className="h-5 w-5" />
                                  </button>
                                  <button
                                    onClick={() => setSlide(eventIdx, (currentSlide + 1) % images.length)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                                  >
                                    <ChevronRight className="h-5 w-5" />
                                  </button>
                                </>
                              )}

                              {/* Slide counter badge */}
                              {images.length > 1 && (
                                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                                  {currentSlide + 1} / {images.length}
                                </div>
                              )}
                            </div>

                            {/* Thumbnail strip */}
                            {images.length > 1 && (
                              <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'thin' }}>
                                {images.map((img, thumbIdx) => (
                                  <button
                                    key={thumbIdx}
                                    onClick={() => setSlide(eventIdx, thumbIdx)}
                                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                                      thumbIdx === currentSlide
                                        ? 'border-primary shadow-md'
                                        : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400'
                                    }`}
                                  >
                                    <img
                                      src={img}
                                      alt={`Thumbnail ${thumbIdx + 1}`}
                                      className="w-full h-full object-cover"
                                      loading="lazy"
                                    />
                                  </button>
                                ))}
                              </div>
                            )}

                            {/* Dot indicators for small sets */}
                            {images.length > 1 && images.length <= 6 && (
                              <div className="flex justify-center gap-1.5 mt-3">
                                {images.map((_, dotIdx) => (
                                  <button
                                    key={dotIdx}
                                    onClick={() => setSlide(eventIdx, dotIdx)}
                                    className={`rounded-full transition-all ${
                                      dotIdx === currentSlide
                                        ? 'w-5 h-2 bg-primary'
                                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* ── FACILITIES ───────────────────────────────────────── */}
            {department.facilities && department.facilities.length > 0 && (
              <section>
                <SectionHeading icon={BookOpen} title="Facilities" />
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 lg:p-8">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {department.facilities.map((facility) => (
                      <li key={facility} className="flex items-center gap-3 text-slate-600">
                        <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentDetail;
