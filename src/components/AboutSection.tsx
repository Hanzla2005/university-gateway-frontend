import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              About Prestige University
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 1965, Prestige University has grown into one of the
              nation's most respected institutions of higher learning. With a
              sprawling campus, world-class facilities, and a faculty of
              distinguished scholars, we are committed to fostering academic
              excellence and innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our interdisciplinary approach to education prepares students for
              the complexities of a rapidly changing world, equipping them with
              critical thinking skills, research capabilities, and a global
              perspective.
            </p>
          </motion.div>

          {/* Right - Mission & Vision */}
          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To advance knowledge through cutting-edge research and deliver transformative education that empowers individuals to lead, innovate, and serve society with integrity.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be a globally recognized university at the forefront of academic excellence, research innovation, and societal impact.",
              },
              {
                icon: Award,
                title: "Our Values",
                text: "Integrity, inclusivity, intellectual curiosity, collaboration, and a relentless pursuit of excellence define everything we do.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4 p-5 rounded-lg bg-background border border-border"
              >
                <div className="shrink-0 w-11 h-11 rounded-md bg-primary flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
