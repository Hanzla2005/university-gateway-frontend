import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Lightbulb, BookOpen, Users, FlaskConical, Mountain, Leaf, Cpu, Globe } from "lucide-react";
import researchImg from "@/assets/research-hero.jpg";
import campusLife from "@/assets/campus-life.jpg";

const centers = [
  { icon: Mountain, name: "Center for Mountain Ecosystem Research", focus: "Biodiversity, ecology, and conservation of Himalayan and Karakoram ecosystems." },
  { icon: Cpu, name: "Center for Artificial Intelligence", focus: "Machine learning, NLP, computer vision, and smart agriculture applications." },
  { icon: Leaf, name: "Center for Sustainable Development", focus: "Renewable energy, green construction, and sustainable tourism in hill stations." },
  { icon: FlaskConical, name: "Center for Biotechnology", focus: "Genomics, medicinal plants research, and agricultural biotech." },
  { icon: Globe, name: "Center for Policy Research", focus: "Public policy, governance, regional development, and socioeconomic studies." },
  { icon: Lightbulb, name: "Center for Innovation & Entrepreneurship", focus: "Startup incubation, technology transfer, and industry collaboration." },
];

const highlights = [
  { icon: FlaskConical, value: "120+", label: "Active Research Projects" },
  { icon: BookOpen, value: "450+", label: "Published Papers (2024)" },
  { icon: Users, value: "30+", label: "Industry Partnerships" },
  { icon: Lightbulb, value: "12", label: "Patents Filed" },
];

const Research = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="Research & Innovation" subtitle="Driving discovery and real-world impact from the mountains of Murree." />

      {/* Hero image */}
      <div className="container-main px-4 sm:px-6 lg:px-8 pt-10">
        <div className="aspect-[3/1] rounded overflow-hidden">
          <img src={researchImg} alt="Research facility" className="w-full h-full object-cover" width={800} height={512} />
        </div>
      </div>

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="border border-border rounded p-5 text-center">
                <h.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-serif text-foreground">{h.value}</p>
                <p className="text-xs text-muted-foreground">{h.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-serif text-foreground mb-4">Research at Kohsar University</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Kohsar University Murree is committed to advancing knowledge through impactful research. Our unique location in the Murree hills provides exceptional opportunities for research in mountain ecology, environmental science, and sustainable development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Our researchers work across disciplines to address challenges facing mountain communities — from climate change and natural disaster mitigation to digital connectivity and healthcare access in remote areas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We foster innovation through interdisciplinary collaboration, modern laboratories, and partnerships with national and international research institutions including COMSATS, NARC, and ICIMOD.
            </p>
          </div>
          <div className="aspect-[4/3] rounded overflow-hidden">
            <img src={campusLife} alt="Research activities" loading="lazy" className="w-full h-full object-cover" width={1280} height={720} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">Research Centers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {centers.map((c) => (
              <div key={c.name} className="border border-border rounded p-5 hover:border-primary/30 transition-colors">
                <c.icon className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-serif text-base text-foreground mb-1">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Focus Areas */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-4">Key Research Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Mountain Ecology & Biodiversity", "Climate Change & Adaptation", "Artificial Intelligence & ML",
              "Sustainable Tourism", "Medicinal Plants & Ethnobotany", "Renewable Energy Systems",
              "Water Resource Management", "Disaster Risk Reduction", "Smart Agriculture",
              "Public Health in Hill Communities", "Cultural Heritage Preservation", "Cybersecurity",
            ].map((area) => (
              <div key={area} className="border border-border rounded px-4 py-3 text-sm text-foreground hover:border-primary/30 transition-colors">
                {area}
              </div>
            ))}
          </div>
        </section>

        <section className="border border-border rounded p-6 bg-muted/30">
          <h2 className="text-xl font-serif text-foreground mb-2">Funding & Grants</h2>
          <p className="text-sm text-muted-foreground mb-3">
            In 2024, our faculty secured over PKR 500 million in external research funding from HEC, PSF (Pakistan Science Foundation), and international agencies. Graduate students can apply for internal research grants through the Office of Research, Innovation & Commercialization (ORIC).
          </p>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Contact ORIC:</strong> oric@kohsar.edu.pk &nbsp;|&nbsp;
            <strong className="text-foreground">Phone:</strong> +92 (51) 923-4570
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Research;
