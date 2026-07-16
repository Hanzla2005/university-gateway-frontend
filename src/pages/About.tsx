import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Target, Eye, Award, Users, BookOpen, Globe, MapPin, GraduationCap } from "lucide-react";
import campusAerial from "@/assets/campus-aerial.jpg";
import campusStudents from "@/assets/campus-students.jpg";

const leadership = [
  { name: "Prof. Dr. Ahmad Hassan", role: "Vice Chancellor" },
  { name: "Prof. Dr. Sarah Khan", role: "Pro Chancellor" },
  { name: "Dr. Ali Raza", role: "Registrar" },
  { name: "Prof. Dr. Maria Qureshi", role: "Dean of Research" },
  { name: "Mr. Tariq Mehmood", role: "Director Finance" },
  { name: "Dr. Faisal Nawaz", role: "Controller of Examinations" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHeader title="About Kohsar University" subtitle="Learn about our history, mission, and the people who lead us." />

      <div className="flex-1">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="max-w-lg mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <BookOpen className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-serif text-foreground mb-4">Coming Soon</h2>
            <p className="text-muted-foreground mb-8">
              We are currently finalizing the comprehensive history, mission, and leadership details for Kohsar University Murree. 
              Please check back soon for the updated information.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
