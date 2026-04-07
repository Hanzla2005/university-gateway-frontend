import { Monitor, Cpu, Briefcase, Stethoscope, Scale, FlaskConical, Palette, GraduationCap, type LucideIcon } from "lucide-react";
import csImg from "@/assets/institutions/computer-science.jpg";
import engImg from "@/assets/institutions/engineering.jpg";
import bizImg from "@/assets/institutions/business.jpg";
import healthImg from "@/assets/institutions/health-sciences.jpg";
import lawImg from "@/assets/institutions/law.jpg";
import sciImg from "@/assets/institutions/natural-sciences.jpg";
import artsImg from "@/assets/institutions/arts.jpg";
import eduImg from "@/assets/institutions/education.jpg";

export interface Institution {
  id: string;
  icon: LucideIcon;
  name: string;
  dean: string;
  students: string;
  programs: number;
  desc: string;
  image: string;
  overview: string;
  departments: string[];
}

export const institutions: Institution[] = [
  {
    id: "computer-science",
    icon: Monitor,
    name: "School of Computer Science",
    dean: "Prof. Dr. Imran Ali",
    students: "3,200",
    programs: 12,
    desc: "AI, cybersecurity, software engineering, and data science.",
    image: csImg,
    overview: "The School of Computer Science is at the forefront of technological innovation, offering programs in artificial intelligence, machine learning, cybersecurity, software engineering, and data science. Our graduates are employed at leading tech companies worldwide.",
    departments: ["Artificial Intelligence", "Software Engineering", "Cybersecurity", "Data Science", "Computer Networks", "Information Systems"],
  },
  {
    id: "engineering",
    icon: Cpu,
    name: "School of Engineering",
    dean: "Prof. Dr. Farhan Ahmed",
    students: "4,500",
    programs: 18,
    desc: "Electrical, mechanical, civil, and aerospace engineering.",
    image: engImg,
    overview: "The School of Engineering provides hands-on education in electrical, mechanical, civil, and aerospace engineering. Our state-of-the-art laboratories and industry partnerships ensure graduates are industry-ready from day one.",
    departments: ["Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Aerospace Engineering", "Chemical Engineering", "Mechatronics"],
  },
  {
    id: "business-management",
    icon: Briefcase,
    name: "School of Business & Management",
    dean: "Prof. Dr. Ayesha Malik",
    students: "3,800",
    programs: 14,
    desc: "MBA, finance, marketing, and entrepreneurship.",
    image: bizImg,
    overview: "The School of Business & Management offers internationally accredited programs in business administration, finance, marketing, and entrepreneurship. Our MBA program is ranked among the top in the region.",
    departments: ["Finance & Accounting", "Marketing", "Human Resources", "Supply Chain Management", "Entrepreneurship", "International Business"],
  },
  {
    id: "health-sciences",
    icon: Stethoscope,
    name: "School of Health Sciences",
    dean: "Prof. Dr. Nadia Shah",
    students: "2,600",
    programs: 10,
    desc: "Medicine, nursing, pharmacy, and public health.",
    image: healthImg,
    overview: "The School of Health Sciences trains the next generation of healthcare professionals through rigorous academic programs and clinical rotations at affiliated hospitals. Our research in public health and epidemiology has national impact.",
    departments: ["Medicine", "Nursing", "Pharmacy", "Public Health", "Dentistry", "Biomedical Sciences"],
  },
  {
    id: "law",
    icon: Scale,
    name: "School of Law",
    dean: "Prof. Dr. Kamran Hussain",
    students: "1,400",
    programs: 6,
    desc: "Constitutional law, corporate law, and international legal studies.",
    image: lawImg,
    overview: "The School of Law prepares students for distinguished careers in legal practice, judiciary, and public service. Our moot court program is nationally recognized, and our faculty includes practicing senior advocates.",
    departments: ["Constitutional Law", "Corporate Law", "Criminal Law", "International Law", "Human Rights Law", "Intellectual Property"],
  },
  {
    id: "natural-sciences",
    icon: FlaskConical,
    name: "School of Natural Sciences",
    dean: "Prof. Dr. Zara Butt",
    students: "2,100",
    programs: 9,
    desc: "Physics, chemistry, biology, and environmental science.",
    image: sciImg,
    overview: "The School of Natural Sciences drives fundamental research in physics, chemistry, biology, and environmental science. Our researchers have published in top-tier journals and our labs are equipped with world-class instruments.",
    departments: ["Physics", "Chemistry", "Biology", "Environmental Science", "Mathematics", "Earth Sciences"],
  },
  {
    id: "arts-humanities",
    icon: Palette,
    name: "School of Arts & Humanities",
    dean: "Prof. Dr. Saad Iqbal",
    students: "1,800",
    programs: 8,
    desc: "Literature, philosophy, fine arts, and cultural studies.",
    image: artsImg,
    overview: "The School of Arts & Humanities nurtures creative thinking and critical analysis through programs in literature, philosophy, fine arts, and cultural studies. Our graduates excel in media, publishing, education, and the creative industries.",
    departments: ["English Literature", "Philosophy", "Fine Arts", "History", "Cultural Studies", "Linguistics"],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "School of Education",
    dean: "Prof. Dr. Hina Tariq",
    students: "1,200",
    programs: 7,
    desc: "Teacher training, curriculum design, and educational leadership.",
    image: eduImg,
    overview: "The School of Education shapes future educators and educational leaders through innovative teaching methodologies, curriculum development, and educational research. Our graduates lead schools and educational institutions nationwide.",
    departments: ["Curriculum & Instruction", "Educational Leadership", "Special Education", "Educational Psychology", "STEM Education", "Early Childhood Education"],
  },
];
