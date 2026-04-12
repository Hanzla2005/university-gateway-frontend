import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Target, Eye, Award, Users, BookOpen, Globe, MapPin, GraduationCap } from "lucide-react";
import campusAerial from "@/assets/campus-aerial.jpg";
import campusStudents from "@/assets/campus-students.jpg";

const leadership = [
  { name: "Prof. Dr. Ahmad Hassan", role: "Vice Chancellor" },
  { name: "Prof. Dr. Sarah Khan", role: "Pro Vice Chancellor" },
  { name: "Dr. Ali Raza", role: "Registrar" },
  { name: "Prof. Dr. Maria Qureshi", role: "Dean of Research" },
  { name: "Mr. Tariq Mehmood", role: "Director Finance" },
  { name: "Dr. Faisal Nawaz", role: "Controller of Examinations" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="About Kohsar University" subtitle="Learn about our history, mission, and the people who lead us." />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Overview with image */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Kohsar University Murree was established in 2017 by the Government of Punjab with the vision of bringing quality higher education to the Murree hills and surrounding regions. Named after the Urdu word for "mountain," Kohsar University embodies the strength, resilience, and natural beauty of its location.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Starting with just three faculties and 200 students, the university has rapidly grown to become a recognized center of academic excellence with eight faculties, 58+ programs, and a student body of over 1,350 from across Pakistan.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our campus, spread across 250 acres of pine-covered hills, provides a peaceful and inspiring environment for learning, research, and personal growth. The motto <strong className="text-foreground">"Serve to Solve"</strong> reflects our commitment to using knowledge for the betterment of society.
            </p>
          </div>
          <div className="aspect-[4/3] rounded overflow-hidden">
            <img src={campusAerial} alt="Kohsar University campus" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">Mission, Vision & Values</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Target, title: "Mission", text: "To provide accessible, high-quality education that empowers students from northern Punjab and beyond to become innovative thinkers, ethical leaders, and agents of positive change in their communities." },
              { icon: Eye, title: "Vision", text: "To be a nationally recognized university renowned for academic excellence, impactful research in mountain sciences and sustainability, and a deep commitment to community development." },
              { icon: Award, title: "Values", text: "Integrity, inclusivity, intellectual curiosity, community service, environmental stewardship, and a relentless pursuit of excellence define everything we do at Kohsar University." },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded p-6">
                <item.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Campus image */}
        <section className="aspect-[3/1] rounded overflow-hidden">
          <img src={campusStudents} alt="Students at Kohsar University" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
        </section>

        {/* Key Facts */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Users, value: "7,900+", label: "Students" },
              { icon: BookOpen, value: "58+", label: "Programs" },
              { icon: Globe, value: "15+", label: "Partner Universities" },
              { icon: Award, value: "51", label: "Faculty Members" },
              { icon: MapPin, value: "250", label: "Acres Campus" },
              { icon: GraduationCap, value: "8", label: "Faculties" },
              { icon: Target, value: "12", label: "Research Centers" },
              { icon: Eye, value: "5,000+", label: "Alumni" },
            ].map((s) => (
              <div key={s.label} className="border border-border rounded p-5 text-center">
                <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-serif text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">University Leadership</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {leadership.map((person) => (
              <div key={person.name} className="border border-border rounded p-5">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3 text-muted-foreground font-serif text-lg">
                  {person.name.charAt(0)}
                </div>
                <h3 className="text-sm font-medium text-foreground">{person.name}</h3>
                <p className="text-xs text-muted-foreground">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accreditation */}
        <section className="border border-border rounded p-6 bg-muted/30">
          <h2 className="text-xl font-serif text-foreground mb-2">Accreditation & Recognition</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kohsar University Murree is chartered by the Government of Punjab and recognized by the Higher Education Commission (HEC) of Pakistan. 
            All degree programs are accredited by their respective professional bodies including PEC (Pakistan Engineering Council), PMDC (Pakistan Medical & Dental Council), 
            and PBA (Pakistan Bar Council). The university is also a member of the Association of Commonwealth Universities (ACU).
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
