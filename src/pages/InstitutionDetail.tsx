import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { institutions } from "@/data/institutions";

const InstitutionDetail = () => {
  const { id } = useParams();
  const inst = institutions.find((i) => i.id === id);

  if (!inst) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-main px-4 py-32 text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Institution Not Found</h1>
          <Link to="/institutions" className="text-primary hover:underline">← Back to Institutions</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <div className="relative h-64 sm:h-80">
        <img src={inst.image} alt={inst.name} className="w-full h-full object-cover" width={800} height={512} />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-main px-4 sm:px-6 lg:px-8 pb-8">
            <h1 className="text-3xl sm:text-4xl font-serif text-primary-foreground">{inst.name}</h1>
            <p className="text-primary-foreground/75 mt-1">Dean: {inst.dean}</p>
          </div>
        </div>
      </div>

      <div className="container-main px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/institutions" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Institutions
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-serif text-foreground mb-3">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{inst.overview}</p>
            </section>

            <section>
              <h2 className="text-xl font-serif text-foreground mb-4">Departments</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {inst.departments.map((d) => (
                  <div key={d} className="border border-border rounded px-4 py-3 text-sm text-foreground">
                    {d}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="border border-border rounded p-5">
              <h3 className="font-serif text-base text-foreground mb-3">Quick Facts</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Students</dt>
                  <dd className="text-foreground font-medium">{inst.students}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Programs</dt>
                  <dd className="text-foreground font-medium">{inst.programs}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Dean</dt>
                  <dd className="text-foreground font-medium text-right">{inst.dean}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InstitutionDetail;
