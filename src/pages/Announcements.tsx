import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { announcements } from "@/data/announcements";

const Announcements = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="Announcements" subtitle="Latest news and updates from Prestige University." />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((a) => (
            <Link
              key={a.id}
              to={`/announcements/${a.slug}`}
              className="group block border border-border rounded overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted flex items-center justify-center">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-full object-contain transition-opacity duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-medium text-accent">{a.tag}</span>
                <h3 className="font-serif text-base text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{a.excerpt}</p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {a.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Announcements;
