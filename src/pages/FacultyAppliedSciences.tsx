import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { departmentPages } from "@/data/departmentPages";

const departmentsList = [
  "computer-science",
  "mathematics",
  "statistics",
  "physics",
  "bioinformatics",
];

const FacultyAppliedSciences = () => {
  const depts = departmentsList
    .map((id) => departmentPages.find((d) => d.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="Faculty of Applied Sciences and Computing"
        subtitle="Explore our academic departments and programs"
      />
      <div className="flex-1">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {depts.map((dept) => {
              if (!dept) return null;
              return (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.id}`}
                  className="flex items-center justify-center p-6 min-h-[110px] bg-white border border-primary/40 hover:border-primary hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-all duration-300"
                >
                  <h3 className="text-[13px] md:text-[14px] font-bold text-primary uppercase tracking-wider leading-relaxed text-center hover:scale-105 transition-transform duration-300">
                    {dept.name}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyAppliedSciences;
