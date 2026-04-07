import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Monitor, Cpu, Briefcase, Stethoscope, Scale, FlaskConical, Palette, GraduationCap } from "lucide-react";

const institutions = [
  { icon: Monitor, name: "School of Computer Science", dean: "Prof. Dr. Imran Ali", students: "3,200", programs: 12, desc: "AI, cybersecurity, software engineering, and data science." },
  { icon: Cpu, name: "School of Engineering", dean: "Prof. Dr. Farhan Ahmed", students: "4,500", programs: 18, desc: "Electrical, mechanical, civil, and aerospace engineering." },
  { icon: Briefcase, name: "School of Business & Management", dean: "Prof. Dr. Ayesha Malik", students: "3,800", programs: 14, desc: "MBA, finance, marketing, and entrepreneurship." },
  { icon: Stethoscope, name: "School of Health Sciences", dean: "Prof. Dr. Nadia Shah", students: "2,600", programs: 10, desc: "Medicine, nursing, pharmacy, and public health." },
  { icon: Scale, name: "School of Law", dean: "Prof. Dr. Kamran Hussain", students: "1,400", programs: 6, desc: "Constitutional law, corporate law, and international legal studies." },
  { icon: FlaskConical, name: "School of Natural Sciences", dean: "Prof. Dr. Zara Butt", students: "2,100", programs: 9, desc: "Physics, chemistry, biology, and environmental science." },
  { icon: Palette, name: "School of Arts & Humanities", dean: "Prof. Dr. Saad Iqbal", students: "1,800", programs: 8, desc: "Literature, philosophy, fine arts, and cultural studies." },
  { icon: GraduationCap, name: "School of Education", dean: "Prof. Dr. Hina Tariq", students: "1,200", programs: 7, desc: "Teacher training, curriculum design, and educational leadership." },
];

const Institutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="Institutions" subtitle="Our eight schools and faculties offering world-class education." />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-5">
          {institutions.map((inst) => (
            <div key={inst.name} className="border border-border rounded p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center shrink-0">
                  <inst.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-foreground mb-1">{inst.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{inst.desc}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                    <span>Dean: {inst.dean}</span>
                    <span>{inst.students} Students</span>
                    <span>{inst.programs} Programs</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Institutions;
