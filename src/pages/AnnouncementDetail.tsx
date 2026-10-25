import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { announcements } from "@/data/announcements";

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s]+|[a-zA-Z0-9.-]+\.punjab\.gov\.pk[^\s]*)/g);
  return parts.map((part, index) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-bold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline inline-flex items-center gap-1"
        >
          {part}
        </a>
      );
    }
    if (part.endsWith(".punjab.gov.pk")) {
      return (
        <a
          key={index}
          href={`https://${part}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline inline-flex items-center gap-1"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

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
                {announcement.content.split(/\n\n+/).map((block, bIdx) => {
                  const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
                  if (lines.length === 0) return null;

                  const firstLine = lines[0];
                  // Section Heading detection: ends with colon and short, or bolded with **, or emoji header
                  const isHeading =
                    (firstLine.startsWith("**") && firstLine.endsWith("**")) ||
                    (firstLine.endsWith(":") && !firstLine.startsWith("•") && !firstLine.startsWith("-") && firstLine.length < 60) ||
                    (firstLine.startsWith("🌟") && firstLine.endsWith("🌟"));

                  if (isHeading) {
                    const cleanHeading = firstLine.replace(/^\*\*|\*\*$/g, "");
                    const listLines = lines.slice(1);
                    return (
                      <div key={bIdx} className="my-6">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-3 tracking-tight">
                          {renderFormattedText(cleanHeading)}
                        </h3>
                        {listLines.length > 0 && (
                          <ul className="space-y-2 ml-1">
                            {listLines.map((line, lIdx) => {
                              const isBullet = line.startsWith("•") || line.startsWith("-");
                              const cleanLine = isBullet ? line.replace(/^[•-]\s*/, "") : line;
                              return (
                                <li key={lIdx} className="flex items-start gap-2.5 text-foreground/90">
                                  {isBullet && <span className="text-primary font-bold mt-0.5 text-base">•</span>}
                                  <span className="leading-relaxed">{renderFormattedText(cleanLine)}</span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    );
                  }

                  const isBulletList = lines.every((l) => l.startsWith("•") || l.startsWith("-"));
                  if (isBulletList) {
                    return (
                      <ul key={bIdx} className="space-y-2 my-4 ml-1">
                        {lines.map((line, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2.5 text-foreground/90">
                            <span className="text-primary font-bold mt-0.5 text-base">•</span>
                            <span className="leading-relaxed">{renderFormattedText(line.replace(/^[•-]\s*/, ""))}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return (
                    <p key={bIdx} className="my-4 text-foreground/90 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                      {renderFormattedText(block)}
                    </p>
                  );
                })}
              </div>

              {announcement.content.includes("cmitinterns.punjab.gov.pk") && (
                <div className="mt-10 p-6 bg-primary/5 border border-primary/20 rounded-xl flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-serif font-bold text-foreground text-lg mb-1">Official Application Portal</h3>
                    <p className="text-sm text-muted-foreground">Submit your application for the Chief Minister Punjab IT Internship Program directly online.</p>
                  </div>
                  <a
                    href="https://cmitinterns.punjab.gov.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-all font-semibold text-sm shadow-sm"
                  >
                    <span>Apply at cmitinterns.punjab.gov.pk</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnnouncementDetail;
