import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { 
  Home, 
  Utensils, 
  Dumbbell, 
  BookOpen, 
  HeartPulse, 
  Wifi, 
  Bus, 
  Trees, 
  Camera, 
  Users, 
  Trophy,
  Compass
} from "lucide-react";
import { motion } from "framer-motion";

// New images from assets/campus-life
import campus1 from "@/assets/campus-life/1.png";
import campus2 from "@/assets/campus-life/2.png";
import campus3 from "@/assets/campus-life/3.png";
import campus4 from "@/assets/campus-life/4.png";

const facilities = [
  { 
    icon: Home, 
    name: "Modern Hostels", 
    desc: "Separate, secure accommodation for boys and girls with 24/7 power backup, heating systems, and high-speed internet." 
  },
  { 
    icon: BookOpen, 
    name: "Hilltop Library", 
    desc: "Our central library offers a vast collection of resources and a peaceful study environment with panoramic mountain views." 
  },
  { 
    icon: Bus, 
    name: "Safe Transport", 
    desc: "A reliable fleet of university buses connecting the campus to Murree, Rawalpindi, and Islamabad for students and staff." 
  },
  { 
    icon: Dumbbell, 
    name: "Sports & Fitness", 
    desc: "State-of-the-art indoor sports complex and outdoor courts for cricket, basketball, and badminton." 
  },
  { 
    icon: Trees, 
    name: "Nature Trails", 
    desc: "Unique campus hiking trails through pine forests, offering students a chance to connect with nature between classes." 
  },
  { 
    icon: Utensils, 
    name: "Student Cafeterias", 
    desc: "Multiple dining facilities serving a variety of hygienic and nutritious meals, from traditional cuisine to quick snacks." 
  },
  { 
    icon: HeartPulse, 
    name: "Health Services", 
    desc: "Fully equipped on-campus medical center with resident healthcare professionals and emergency response units." 
  },
  { 
    icon: Wifi, 
    name: "Digital Campus", 
    desc: "Campus-wide high-speed WiFi connectivity and advanced computer labs supporting research and digital learning." 
  },
];

const societies = [
  { name: "KUM Adventure Club", icon: Compass },
  { name: "Environmental Society", icon: Trees },
  { name: "Literary & Debating Society", icon: BookOpen },
  { name: "IT & Robotics Club", icon: Wifi },
  { name: "Arts & Photography Society", icon: Camera },
  { name: "Sports Council", icon: Trophy },
  { name: "Community Service Club", icon: Users },
];

const CampusLife = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Campus Life" 
        subtitle="A vibrant community in the heart of the Murree hills."
        backgroundImage={campus1}
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Experience Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
              Life Above the Clouds at Kohsar
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Kohsar University Murree, the educational journey extends far beyond the classroom. Situated at an elevation that offers breathtaking views of the Himalayas, our campus provides a unique environment where academic rigour meets natural serenity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're engaging in a spirited debate in our auditorium, conducting research in the hilltop library, or exploring the surrounding pine trails with the Adventure Club, life at Kohsar is an experience of growth, discovery, and community.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src={campus2} 
                alt="Student Life at Kohsar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-xl shadow-xl hidden md:block max-w-[200px]">
              <p className="text-white font-serif text-lg leading-tight">
                "An inspiring environment for future leaders."
              </p>
            </div>
          </motion.div>
        </section>

        {/* Facilities Grid */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-serif text-foreground mb-4">World-Class Facilities</h2>
            <p className="text-muted-foreground text-lg">
              We provide a supportive ecosystem designed to help students excel academically and personally.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {facilities.map((f) => (
              <motion.div 
                key={f.name} 
                variants={itemVariants}
                className="group p-6 rounded-2xl border border-border bg-card hover:bg-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-2">{f.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Visual Showcase */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-[16/10] rounded-3xl overflow-hidden shadow-lg"
          >
            <img 
              src={campus3} 
              alt="Campus View" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-[16/10] rounded-3xl overflow-hidden shadow-lg"
          >
            <img 
              src={campus4} 
              alt="Academic Environment" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
        </section>

        {/* Societies Section */}
        <section className="bg-primary/5 rounded-[2rem] p-8 md:p-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-serif text-foreground mb-6">Vibrant Student Societies</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our campus life is driven by student-led organizations that foster leadership, creativity, and teamwork. Join one of our 50+ active societies and make your mark.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {societies.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 p-3 bg-white/50 dark:bg-white/5 rounded-xl border border-white/20">
                    <s.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                <div className="absolute inset-8 border-2 border-primary/30 rounded-full border-dashed" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl font-serif text-primary block mb-2">50+</span>
                    <span className="text-muted-foreground font-medium">Active Groups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Highlights */}
        <section className="border border-border rounded-3xl overflow-hidden bg-card shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 space-y-6">
              <h2 className="text-3xl font-serif text-foreground">Annual Highlights</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Kohsar calendar is packed with events that celebrate culture, technology, and excellence.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full" />
                  <div>
                    <h4 className="font-bold text-foreground">Murree Literature Festival</h4>
                    <p className="text-sm text-muted-foreground">A grand gathering of writers, poets, and thinkers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full" />
                  <div>
                    <h4 className="font-bold text-foreground">Annual Sports Gala</h4>
                    <p className="text-sm text-muted-foreground">Competing in the spirit of sportsmanship and teamwork.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full" />
                  <div>
                    <h4 className="font-bold text-foreground">Tech Innovation Summit</h4>
                    <p className="text-sm text-muted-foreground">Showcasing the latest in computing and engineering.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-primary rounded-full" />
                  <div>
                    <h4 className="font-bold text-foreground">Spring Plantation Drive</h4>
                    <p className="text-sm text-muted-foreground">Our commitment to a greener and more sustainable Murree.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 flex items-center justify-center p-12">
              <div className="text-center space-y-4">
                <Trophy className="h-20 w-20 text-primary mx-auto opacity-50" />
                <h3 className="text-2xl font-serif text-foreground italic">"Where excellence is a way of life."</h3>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default CampusLife;
