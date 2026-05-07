import { useParams, Navigate } from "react-router-dom";
import { Mail, ArrowLeft, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { departmentPages } from "@/data/departmentPages";

const FacultyProfile = () => {
  const { id } = useParams<{ id: string }>();
  
  let facultyMember = null;
  let departmentName = "";
  let departmentId = "";
  
  for (const dept of departmentPages) {
    const found = dept.faculty.find(f => f.id === id);
    if (found) {
      facultyMember = found;
      departmentName = dept.name;
      departmentId = dept.id;
      break;
    }
  }

  if (!facultyMember) {
    return <Navigate to="/faculties" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1">
        {/* Header Section */}
        <div className="bg-slate-50 border-b border-slate-200 py-12">
          <div className="container-main px-4 sm:px-6 lg:px-8">
            <Link 
              to={`/departments/${departmentId}`} 
              className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-8 text-sm font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Department
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-48 h-56 shrink-0 bg-white border border-slate-200 rounded overflow-hidden shadow-sm">
                {facultyMember.image ? (
                  <img src={facultyMember.image} alt={facultyMember.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300">
                    <span className="text-4xl font-serif">{facultyMember.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-serif text-slate-900">{facultyMember.name}</h1>
                <p className="text-xl text-primary font-medium">{facultyMember.designation}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Building2 className="h-4 w-4 text-slate-400" />
                    <span>{departmentName}</span>
                  </div>
                  {facultyMember.email && (
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <a href={`mailto:${facultyMember.email}`} className="hover:text-primary underline decoration-slate-300 underline-offset-4 transition-colors">
                        {facultyMember.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl space-y-12">
            
            {/* Biography */}
            {facultyMember.bio && (
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">Professional Summary</h2>
                <div className="text-slate-700 leading-relaxed text-justify whitespace-pre-line">
                  {facultyMember.bio}
                </div>
              </section>
            )}

            {/* Education */}
            {facultyMember.education && facultyMember.education.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">Academic Qualifications</h2>
                <ul className="space-y-3 list-disc pl-5">
                  {facultyMember.education.map((edu, idx) => (
                    <li key={idx} className="text-slate-700 leading-relaxed">
                      {edu}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Research Interests */}
            {facultyMember.researchInterests && facultyMember.researchInterests.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">Research Interests & Expertise</h2>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {facultyMember.researchInterests.map((interest, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FacultyProfile;
