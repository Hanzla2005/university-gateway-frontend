import { motion } from "framer-motion";
import {
  Monitor,
  Cpu,
  Briefcase,
  Stethoscope,
  Scale,
  FlaskConical,
  Palette,
  GraduationCap,
} from "lucide-react";

const programs = [
  { icon: Monitor, name: "Computer Science", desc: "AI, cybersecurity, software engineering, and data science programs." },
  { icon: Cpu, name: "Engineering", desc: "Electrical, mechanical, civil, and aerospace engineering disciplines." },
  { icon: Briefcase, name: "Business & Management", desc: "MBA, finance, marketing, and entrepreneurship pathways." },
  { icon: Stethoscope, name: "Health Sciences", desc: "Medicine, nursing, pharmacy, and public health programs." },
  { icon: Scale, name: "Law", desc: "Constitutional law, corporate law, and international legal studies." },
  { icon: FlaskConical, name: "Natural Sciences", desc: "Physics, chemistry, biology, and environmental science research." },
  { icon: Palette, name: "Arts & Humanities", desc: "Literature, philosophy, fine arts, and cultural studies." },
  { icon: GraduationCap, name: "Education", desc: "Teacher training, curriculum design, and educational leadership." },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-primary">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">
            Academics
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground">
            Programs & Departments
          </h2>
          <p className="text-primary-foreground/60 mt-3 max-w-xl mx-auto">
            Explore our diverse range of undergraduate and graduate programs
            across eight faculties.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 hover:bg-primary-foreground/10 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                <prog.icon className="h-6 w-6 text-gold-light" />
              </div>
              <h3 className="font-serif text-lg text-primary-foreground mb-2">
                {prog.name}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {prog.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
