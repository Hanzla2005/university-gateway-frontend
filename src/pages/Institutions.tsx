import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { institutions } from "@/data/institutions";

const Institutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="Institutions" subtitle="Our eight schools and faculties offering world-class education." />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-5">
          {institutions.map((inst) => (
            <Link
              key={inst.id}
              to={`/institutions/${inst.id}`}
              className="group border border-border rounded overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="aspect-[2/1] overflow-hidden">
                <img
                  src={inst.image}
                  alt={inst.name}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center shrink-0">
                    <inst.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{inst.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{inst.desc}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                      <span>Dean: {inst.dean}</span>
                      <span>{inst.students} Students</span>
                      <span>{inst.programs} Programs</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Institutions;
