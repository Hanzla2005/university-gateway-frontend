import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import vcImg from "@/assets/home/vc.png";

const ViceChancellor = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <PageHeader 
        title="Message of the Vice Chancellor" 
        subtitle="Prof. Dr. Rafia Mumtaz"
      />

      <section className="container-main px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left - Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-1">Prof. Dr. Rafia Mumtaz</h2>
              <p className="text-muted-foreground">Vice Chancellor, Kohsar University Murree</p>
            </div>

            <div className="space-y-4 text-foreground leading-relaxed text-justify">
              <p>
                It is a privilege and an honor to lead Kohsar University Murree, a beacon of learning set amidst the natural beauty of Pakistan's northern hills. Our university stands at the intersection of tradition and transformation, committed to creating an environment where knowledge inspires innovation and education drives societal progress.
              </p>

              <p>
                At Kohsar University, we believe that true education extends beyond classrooms and degrees. It is about nurturing curiosity, integrity, and a lifelong passion for discovery. We are shaping a generation of thinkers, leaders, and changemakers who will respond to the challenges of the modern world with creativity, compassion, and courage.
              </p>

              <p>
                Our vision is to develop Kohsar University as a center of excellence that blends academic rigor with practical relevance. Through innovative programs, cutting-edge research, and meaningful collaborations, we are equipping our students with the skills and mindset needed to thrive in a global knowledge economy.
              </p>

              <p>
                We are also deeply committed to community engagement and sustainable development, drawing inspiration from our surroundings to promote environmental awareness, responsible tourism, and inclusive growth.
              </p>

              <p>
                As we continue to build this institution, I invite our students, faculty, alumni, and partners to join hands in realizing our shared vision. Together, we can transform Kohsar University Murree into a model of academic excellence, innovation, and human impact that uplifts not only our region but the nation as a whole.
              </p>

              <p>
                The journey of Kohsar University Murree is one of continuous evolution and growth. We remain committed to maintaining the highest standards of academic excellence while embracing innovation and inclusivity. Our commitment to research and development, coupled with our focus on practical application of knowledge, sets us apart as an institution that truly serves to solve the challenges of our time.
              </p>

              <p>
                I extend my gratitude to all stakeholders—students, faculty, staff, administrators, and our supporting partners—for their unwavering commitment and contribution to our collective success. Your dedication and hard work are the driving force behind our achievements.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all"
            >
              Back to Home <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right - Image and Badge */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg border border-border">
              <img src={vcImg} alt="Prof. Dr. Rafia Mumtaz, Vice Chancellor" className="w-full h-full object-cover" />
            </div>
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center shadow-md">
              <p className="font-serif text-xl font-semibold">Prof. Dr. Rafia Mumtaz</p>
              <p className="text-sm text-primary-foreground/80 mt-2">Vice Chancellor</p>
              <p className="text-xs text-primary-foreground/70 mt-3">Kohsar University Murree</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Leadership */}
      <section className="bg-muted/50">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-serif text-foreground mb-8 text-center">University Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Link to="/about" className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors bg-card">
              <h3 className="font-serif text-lg text-foreground mb-2">About the University</h3>
              <p className="text-sm text-muted-foreground mb-4">Learn more about our leadership, history, and mission.</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link to="/about" className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors bg-card">
              <h3 className="font-serif text-lg text-foreground mb-2">Leadership Team</h3>
              <p className="text-sm text-muted-foreground mb-4">Meet the dedicated leaders driving our vision forward.</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ViceChancellor;
