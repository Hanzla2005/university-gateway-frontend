import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Lightbulb, BookOpen, Users, FlaskConical } from "lucide-react";
import researchImg from "@/assets/research-hero.jpg";

const centers = [
  { name: "Center for Artificial Intelligence", focus: "Machine learning, NLP, computer vision, and robotics." },
  { name: "Center for Sustainable Energy", focus: "Solar technology, grid optimization, and green engineering." },
  { name: "Center for Biotechnology", focus: "Genomics, drug development, and agricultural biotech." },
  { name: "Center for Policy Research", focus: "Public policy, governance, and socioeconomic studies." },
];

const highlights = [
  { icon: FlaskConical, value: "350+", label: "Active Research Projects" },
  { icon: BookOpen, value: "1,200+", label: "Published Papers (2024)" },
  { icon: Users, value: "80+", label: "Industry Partnerships" },
  { icon: Lightbulb, value: "25", label: "Patents Filed" },
];

const Research = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="Research & Innovation" subtitle="Driving discovery and real-world impact across disciplines." />

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

        <section className="max-w-3xl">
          <h2 className="text-2xl font-serif text-foreground mb-4">Research at Prestige</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Prestige University is committed to advancing the frontiers of knowledge. Our researchers work across disciplines to tackle society's most pressing challenges — from climate change and public health to artificial intelligence and governance.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We foster a culture of innovation through interdisciplinary collaboration, state-of-the-art laboratories, and strong industry partnerships.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">Research Centers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {centers.map((c) => (
              <div key={c.name} className="border border-border rounded p-5 hover:border-primary/30 transition-colors">
                <h3 className="font-serif text-base text-foreground mb-1">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border border-border rounded p-6 bg-muted/30">
          <h2 className="text-xl font-serif text-foreground mb-2">Funding & Grants</h2>
          <p className="text-sm text-muted-foreground">
            In 2024, our faculty secured over $45 million in external research funding from national and international agencies. Graduate students can apply for internal research grants through the Office of Research.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Research;
