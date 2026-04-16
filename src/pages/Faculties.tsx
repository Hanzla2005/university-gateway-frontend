import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { departmentPages } from "@/data/departmentPages";
import departmentImages from "@/data/departmentImages";

const facultyGroups = [
  {
    faculty: "Faculty of Applied Sciences and Computing",
    departments: [
      "computer-science",
      "mathematics",
      "statistics",
      "physics",
      "bioinformatics",
    ],
  },
  {
    faculty: "Faculty of Biomedical & Life Sciences",
    departments: [
      "biomedical-engineering",
      "bioscience",
      "botany",
      "mountain-agriculture",
      "microbiology",
    ],
  },
  {
    faculty: "Faculty of Management, Humanities and Social Sciences",
    departments: [
      "art-and-design",
      "english",
      "urdu",
      "psychology",
      "sociology",
      "political-science",
      "tourism-and-hospitality",
    ],
  },
];

const Faculties = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader
        title="Faculties & Departments"
        subtitle="Explore our academic departments across three faculties"
      />

      <div className="flex-1">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-14">

          {facultyGroups.map((group) => {
            const depts = group.departments
              .map((id) => departmentPages.find((d) => d.id === id))
              .filter(Boolean);

            return (
              <section key={group.faculty}>
                <div className="mb-6">
                  <h2 className="text-2xl font-serif text-foreground">{group.faculty}</h2>
                  <div className="w-16 h-0.5 bg-primary mt-2" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {depts.map((dept) => {
                    if (!dept) return null;
                    const img = departmentImages[dept.id];

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
              </section>
            );
          })}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faculties;
