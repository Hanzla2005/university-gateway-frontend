import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Target, Eye, Award, Users, BookOpen, Globe } from "lucide-react";

const leadership = [
  { name: "Prof. Dr. Ahmad Hassan", role: "Vice Chancellor" },
  { name: "Prof. Dr. Sarah Khan", role: "Pro Vice Chancellor" },
  { name: "Dr. Ali Raza", role: "Registrar" },
  { name: "Prof. Dr. Maria Qureshi", role: "Dean of Research" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="About Us" subtitle="Learn about our history, mission, and the people who lead us." />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Overview */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-serif text-foreground mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Founded in 1965, Prestige University has grown into one of the nation's most respected institutions of higher learning. With a sprawling campus, world-class facilities, and a faculty of distinguished scholars, we are committed to fostering academic excellence and innovation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our interdisciplinary approach to education prepares students for the complexities of a rapidly changing world, equipping them with critical thinking skills, research capabilities, and a global perspective.
          </p>
        </section>

        {/* Mission, Vision, Values */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">Mission, Vision & Values</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Target, title: "Mission", text: "To advance knowledge through cutting-edge research and deliver transformative education that empowers individuals to lead, innovate, and serve society with integrity." },
              { icon: Eye, title: "Vision", text: "To be a globally recognized university at the forefront of academic excellence, research innovation, and societal impact." },
              { icon: Award, title: "Values", text: "Integrity, inclusivity, intellectual curiosity, collaboration, and a relentless pursuit of excellence define everything we do." },
            ].map((item) => (
              <div key={item.title} className="border border-border rounded p-6">
                <item.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Facts */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">At a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Users, value: "25,000+", label: "Students" },
              { icon: BookOpen, value: "150+", label: "Programs" },
              { icon: Globe, value: "40+", label: "Partner Countries" },
              { icon: Award, value: "1,200+", label: "Faculty Members" },
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
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
      </div>

      <Footer />
    </div>
  );
};

export default About;
