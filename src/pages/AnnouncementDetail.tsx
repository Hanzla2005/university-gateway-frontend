import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { announcements } from "@/data/announcements";

const AnnouncementDetail = () => {
  const { id } = useParams();
  const announcement = announcements.find((a) => a.id === id);

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
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-20">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-10">
          <Link to="/announcements" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Announcements
          </Link>

          <div className="max-w-3xl">
            <span className="text-xs font-medium text-accent">{announcement.tag}</span>
            <h1 className="text-3xl sm:text-4xl font-serif text-foreground mt-2 mb-3">{announcement.title}</h1>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
              <Calendar className="h-4 w-4" /> {announcement.date}
            </div>
          </div>

          <div className="aspect-[2/1] max-w-4xl rounded overflow-hidden mb-8">
            <img src={announcement.image} alt={announcement.title} className="w-full h-full object-cover" width={800} height={512} />
          </div>

          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed">{announcement.content}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnnouncementDetail;
