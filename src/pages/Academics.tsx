import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const undergrad = [
  "BS Computer Science", "BS Electrical Engineering", "BS Mechanical Engineering",
  "BS Business Administration", "BS Mathematics", "BS Physics", "BS Chemistry",
  "BA English Literature", "BBA Finance", "BS Environmental Science",
];

const graduate = [
  "MS Computer Science", "MS Data Science", "MBA", "MS Electrical Engineering",
  "MA English", "MS Physics", "MPhil Education", "MS Public Health",
];

const doctoral = [
  "PhD Computer Science", "PhD Engineering", "PhD Business Administration",
  "PhD Physics", "PhD Education", "PhD Law",
];

const Academics = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="Academics" subtitle="Explore our undergraduate, graduate, and doctoral programs." />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Undergraduate */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-2">Undergraduate Programs</h2>
          <p className="text-sm text-muted-foreground mb-5">4-year degree programs across all disciplines.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {undergrad.map((p) => (
              <div key={p} className="border border-border rounded px-4 py-3 text-sm text-foreground hover:border-primary/30 transition-colors">
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* Graduate */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-2">Graduate Programs</h2>
          <p className="text-sm text-muted-foreground mb-5">Master's and MPhil programs for advanced study.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {graduate.map((p) => (
              <div key={p} className="border border-border rounded px-4 py-3 text-sm text-foreground hover:border-primary/30 transition-colors">
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* Doctoral */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-2">Doctoral Programs</h2>
          <p className="text-sm text-muted-foreground mb-5">PhD programs for research scholars.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {doctoral.map((p) => (
              <div key={p} className="border border-border rounded px-4 py-3 text-sm text-foreground hover:border-primary/30 transition-colors">
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* Admission Info */}
        <section className="border border-border rounded p-6 bg-muted/30">
          <h2 className="text-xl font-serif text-foreground mb-2">Admissions</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Applications for Fall 2025 are now open. Eligibility criteria vary by program.
            Contact the admissions office for details.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Deadline:</strong> May 31, 2025 &nbsp;|&nbsp;
            <strong className="text-foreground">Email:</strong> admissions@prestige.edu
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Academics;
