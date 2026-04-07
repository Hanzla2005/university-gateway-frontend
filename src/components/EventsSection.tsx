import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays } from "lucide-react";

const events = [
  {
    title: "International Science Symposium",
    date: "April 12, 2025",
    time: "9:00 AM – 5:00 PM",
    location: "Main Auditorium",
    description: "Leading researchers present breakthroughs in quantum computing, biotech, and sustainable energy.",
  },
  {
    title: "Career Fair 2025",
    date: "April 18, 2025",
    time: "10:00 AM – 4:00 PM",
    location: "Student Center Hall",
    description: "Over 80 companies recruiting for internships and full-time positions across all disciplines.",
  },
  {
    title: "Alumni Homecoming Weekend",
    date: "April 25–26, 2025",
    time: "All Day",
    location: "University Campus",
    description: "Reconnect with classmates, campus tours, gala dinner, and keynote by distinguished alumni.",
  },
  {
    title: "Hackathon: Code for Change",
    date: "May 3–4, 2025",
    time: "48 Hours",
    location: "Innovation Lab",
    description: "Build solutions for social impact. Open to all students. Prizes worth $10,000.",
  },
  {
    title: "Cultural Festival",
    date: "May 15, 2025",
    time: "6:00 PM – 10:00 PM",
    location: "Open Air Theatre",
    description: "Celebrate diversity with performances, food stalls, and art exhibitions from 30+ student societies.",
  },
  {
    title: "Research Poster Exhibition",
    date: "May 22, 2025",
    time: "2:00 PM – 6:00 PM",
    location: "Library Atrium",
    description: "Graduate students showcase cutting-edge research across engineering, sciences, and humanities.",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="section-padding bg-secondary/50">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">
            What's Happening
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Upcoming Events
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all"
            >
              {/* Date ribbon */}
              <div className="bg-primary px-5 py-4 flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-gold-light" />
                <span className="text-sm font-medium text-primary-foreground">
                  {event.date}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
