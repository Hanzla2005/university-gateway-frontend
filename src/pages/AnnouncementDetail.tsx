import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { announcements } from "@/data/announcements";

const AnnouncementDetail = () => {
  const { slug } = useParams();
  const announcement = announcements.find((a) => a.slug === slug);

  if (!announcement) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container-main px-4 py-32 text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Announcement Not Found</h1>
          <Link to="/announcements" className="text-primary hover:underline">← Back to Announcements</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/announcements" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to All Announcements
            </Link>

            <article>
              <header className="mb-8">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">{announcement.tag}</span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mt-2 mb-4 leading-tight">{announcement.title}</h1>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{announcement.date}</span>
                </div>
              </header>

              <div className="aspect-video rounded-lg overflow-hidden mb-10 border border-border bg-muted flex items-center justify-center">
                <img src={announcement.image} alt={announcement.title} className="w-full h-full object-contain" width={1200} height={675} />
              </div>

              <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
                <p>{announcement.content}</p>
              </div>
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnnouncementDetail;
