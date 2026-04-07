import { motion } from "framer-motion";
import { Bell, Calendar, ArrowUpRight } from "lucide-react";

const announcements = [
  {
    title: "Fall 2025 Admissions Now Open",
    description: "Applications are being accepted for undergraduate and graduate programs. Early applicants receive priority consideration.",
    date: "March 15, 2025",
    tag: "Admissions",
  },
  {
    title: "New Research Center Inaugurated",
    description: "The Center for Artificial Intelligence & Data Science has been officially opened with state-of-the-art facilities.",
    date: "March 10, 2025",
    tag: "Research",
  },
  {
    title: "Annual Convocation Ceremony",
    description: "The 58th convocation will be held on April 20. All graduating students must register by April 5.",
    date: "March 8, 2025",
    tag: "Academic",
  },
  {
    title: "International Exchange Program",
    description: "Partnership with 12 new European universities for semester exchange programs starting Fall 2025.",
    date: "March 5, 2025",
    tag: "Global",
  },
];

const AnnouncementsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        <div className="flex items-center gap-3 mb-2">
          <Bell className="h-5 w-5 text-accent" />
          <p className="text-accent font-semibold tracking-widest uppercase text-sm">
            Notices
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">
          Announcements
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {announcements.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-background border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
