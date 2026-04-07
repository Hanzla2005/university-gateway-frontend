import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Home, Utensils, Dumbbell, Music, BookOpen, HeartPulse, Wifi, Bus } from "lucide-react";
import campusStudents from "@/assets/campus-students.jpg";
import campusLife from "@/assets/campus-life.jpg";
import sportsComplex from "@/assets/sports-complex.jpg";

const facilities = [
  { icon: Home, name: "Student Hostels", desc: "Separate boys and girls hostels for 3,000+ students with modern amenities, heating, and hot water." },
  { icon: Utensils, name: "Dining & Cafeterias", desc: "Multiple dining halls and cafés serving Pakistani cuisine, snacks, and beverages." },
  { icon: Dumbbell, name: "Sports Complex", desc: "Cricket ground, basketball courts, gymnasium, indoor badminton, and hiking trails through the campus." },
  { icon: BookOpen, name: "Central Library", desc: "100,000+ volumes, HEC digital library access, 24/7 reading rooms, and group study spaces." },
  { icon: HeartPulse, name: "Health Center", desc: "On-campus medical clinic with resident doctors, first aid, and mental health counseling services." },
  { icon: Music, name: "Cultural Center", desc: "Auditorium with 800 seats, art gallery, and rehearsal spaces for student societies." },
  { icon: Wifi, name: "IT & Connectivity", desc: "Campus-wide high-speed WiFi, computer labs, and video conferencing facilities." },
  { icon: Bus, name: "Transport", desc: "University bus service connecting campus to Rawalpindi, Islamabad, and surrounding areas." },
];

const societies = [
  "Dramatic Society", "Debating Club", "Photography Society", "Naat & Qiraat Society",
  "Coding Club", "Entrepreneurship Society", "Literary Circle", "Sports Council",
  "Community Service Club", "Environmental Society", "Adventure Club", "Media Society",
];

const CampusLife = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="Campus Life" subtitle="A vibrant community in the heart of the Murree hills." />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* Campus image */}
        <div className="aspect-[3/1] rounded overflow-hidden">
          <img src={campusStudents} alt="Campus life at Kohsar University" className="w-full h-full object-cover" width={1280} height={720} />
        </div>

        {/* Overview */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-serif text-foreground mb-4">Life at Kohsar</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            At Kohsar University Murree, campus life is enriched by the stunning natural surroundings of the Murree hills. Students enjoy a unique blend of rigorous academics and refreshing outdoor experiences — from morning hikes through pine forests to evening study sessions overlooking mountain vistas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With over 50 student societies, modern sports facilities, comfortable hostels, and a welcoming community, there's always something happening on campus.
          </p>
        </section>

        {/* Facilities */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">Facilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((f) => (
              <div key={f.name} className="border border-border rounded p-5 hover:border-primary/30 transition-colors">
                <f.icon className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-serif text-base text-foreground mb-1">{f.name}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">Campus Gallery</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-[16/10] rounded overflow-hidden">
              <img src={campusLife} alt="Campus activities" loading="lazy" width={1280} height={720} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="aspect-[16/10] rounded overflow-hidden">
              <img src={sportsComplex} alt="Sports complex" loading="lazy" width={1280} height={720} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </section>

        {/* Societies */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-2">Student Societies</h2>
          <p className="text-sm text-muted-foreground mb-5">Over 50 active student organizations. Here are some highlights:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
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
          <p className="text-sm text-muted-foreground mb-3">
            Our campus comes alive with annual festivals, career fairs, hackathons, sports galas, and cultural nights.
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li><strong className="text-foreground">Kohsar Fest</strong> — Annual cultural and sports festival</li>
            <li><strong className="text-foreground">Tech Summit</strong> — Technology conference and hackathon</li>
            <li><strong className="text-foreground">Career Fair</strong> — Corporate recruitment drive</li>
            <li><strong className="text-foreground">Spring Hike</strong> — University-wide nature expedition</li>
            <li><strong className="text-foreground">Convocation</strong> — Annual graduation ceremony</li>
          </ul>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CampusLife;
