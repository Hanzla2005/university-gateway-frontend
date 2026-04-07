import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Home, Utensils, Dumbbell, Music, BookOpen, HeartPulse } from "lucide-react";

const facilities = [
  { icon: Home, name: "Student Housing", desc: "On-campus hostels for 6,000+ students with modern amenities." },
  { icon: Utensils, name: "Dining & Cafeterias", desc: "Multiple dining halls and cafés serving diverse cuisines." },
  { icon: Dumbbell, name: "Sports Complex", desc: "Olympic-size pool, gymnasium, cricket ground, and indoor courts." },
  { icon: BookOpen, name: "Central Library", desc: "500,000+ volumes, digital archives, and 24/7 study spaces." },
  { icon: HeartPulse, name: "Health Center", desc: "On-campus clinic with medical staff and counseling services." },
  { icon: Music, name: "Cultural Center", desc: "Auditorium, art gallery, and rehearsal spaces for student societies." },
];

const societies = [
  "Dramatic Society", "Debating Club", "Photography Society", "Music Club",
  "Coding Club", "Entrepreneurship Society", "Literary Circle", "Sports Council",
  "Community Service Club", "Environmental Society",
];

const CampusLife = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="Campus Life" subtitle="A vibrant community where learning extends beyond the classroom." />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Facilities */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">Facilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((f) => (
              <div key={f.name} className="border border-border rounded p-5 hover:border-primary/30 transition-colors">
                <f.icon className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-serif text-base text-foreground mb-1">{f.name}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Societies */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-2">Student Societies</h2>
          <p className="text-sm text-muted-foreground mb-5">Over 50 active student organizations. Here are some highlights:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {societies.map((s) => (
              <div key={s} className="border border-border rounded px-4 py-3 text-sm text-foreground text-center">
                {s}
              </div>
            ))}
          </div>
        </section>

        {/* Events highlight */}
        <section className="border border-border rounded p-6 bg-muted/30">
          <h2 className="text-xl font-serif text-foreground mb-2">Annual Events</h2>
          <p className="text-sm text-muted-foreground">
            Our campus comes alive with annual festivals, career fairs, hackathons, sports galas, and cultural nights. 
            These events foster community spirit and provide platforms for students to showcase their talents.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CampusLife;
