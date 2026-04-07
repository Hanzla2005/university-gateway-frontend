import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import academicsImg from "@/assets/academics-hero.jpg";
import graduationImg from "@/assets/graduation.jpg";

const undergrad = [
  "BS Computer Science", "BS Software Engineering", "BS Data Science",
  "BS Electrical Engineering", "BS Mechanical Engineering", "BS Civil Engineering",
  "BS Environmental Engineering", "BBA", "BS Accounting & Finance",
  "BS Mathematics", "BS Physics", "BS Chemistry", "BS Biology",
  "BA English Literature", "BS Education", "LLB (5-Year)",
  "BS Public Health", "BS Pharmacy", "BFA Fine Arts", "BS Urdu",
];

const graduate = [
  "MS Computer Science", "MS Data Science", "MS AI & Machine Learning",
  "MS Electrical Engineering", "MS Environmental Engineering",
  "MBA", "MS Finance", "MS Marketing",
  "MA English", "MA Urdu", "MS Physics", "MS Chemistry",
  "MPhil Education", "MS Public Health", "LLM",
];

const doctoral = [
  "PhD Computer Science", "PhD Electrical Engineering", "PhD Environmental Science",
  "PhD Business Administration", "PhD Physics", "PhD Education",
  "PhD English Literature", "PhD Law",
];

const Academics = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="Academics" subtitle="Explore our undergraduate, graduate, and doctoral programs at Kohsar University Murree." />

      {/* Hero image */}
      <div className="container-main px-4 sm:px-6 lg:px-8 pt-10">
        <div className="aspect-[3/1] rounded overflow-hidden">
          <img src={academicsImg} alt="Academic lecture hall" className="w-full h-full object-cover" width={800} height={512} />
        </div>
      </div>

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Academic Overview */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-serif text-foreground mb-4">Academic Excellence</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Kohsar University Murree offers 58+ HEC-recognized academic programs across eight faculties. Our curriculum blends theoretical knowledge with practical skills, preparing graduates for professional success and lifelong learning.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With a semester-based credit hour system, modern teaching methodologies, and industry-relevant coursework, we ensure our students receive education that meets international standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-foreground mb-2">Undergraduate Programs</h2>
          <p className="text-sm text-muted-foreground mb-5">4-year degree programs across all faculties.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {undergrad.map((p) => (
              <div key={p} className="border border-border rounded px-4 py-3 text-sm text-foreground hover:border-primary/30 transition-colors">{p}</div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-foreground mb-2">Graduate Programs</h2>
          <p className="text-sm text-muted-foreground mb-5">Master's, MS, and MPhil programs for advanced study.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {graduate.map((p) => (
              <div key={p} className="border border-border rounded px-4 py-3 text-sm text-foreground hover:border-primary/30 transition-colors">{p}</div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-foreground mb-2">Doctoral Programs</h2>
          <p className="text-sm text-muted-foreground mb-5">PhD programs for research scholars.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {doctoral.map((p) => (
              <div key={p} className="border border-border rounded px-4 py-3 text-sm text-foreground hover:border-primary/30 transition-colors">{p}</div>
            ))}
          </div>
        </section>

        {/* Graduation image */}
        <div className="aspect-[3/1] rounded overflow-hidden">
          <img src={graduationImg} alt="Graduation ceremony" loading="lazy" className="w-full h-full object-cover" width={1280} height={720} />
        </div>

        {/* Scholarships */}
        <section className="border border-border rounded p-6 bg-muted/30">
          <h2 className="text-xl font-serif text-foreground mb-2">Scholarships & Financial Aid</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Kohsar University offers merit-based and need-based scholarships to deserving students. HEC scholarships, Punjab Government scholarships, and university-funded financial aid packages are available.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>Vice Chancellor's Merit Scholarship (100% tuition waiver)</li>
            <li>Dean's Honor Scholarship (50% tuition waiver)</li>
            <li>Need-Based Financial Assistance</li>
            <li>HEC Indigenous & PEEF Scholarships</li>
          </ul>
        </section>

        <section className="border border-border rounded p-6 bg-muted/30">
          <h2 className="text-xl font-serif text-foreground mb-2">Admissions</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Applications for Fall 2025 are now open. Eligibility criteria vary by program. Apply online through the admissions portal.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Deadline:</strong> May 31, 2025 &nbsp;|&nbsp;
            <strong className="text-foreground">Email:</strong> admissions@kohsar.edu.pk &nbsp;|&nbsp;
            <strong className="text-foreground">Helpline:</strong> +92 (51) 923-4567
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Academics;
