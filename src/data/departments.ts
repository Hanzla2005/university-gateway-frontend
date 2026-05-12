import { Monitor, Cpu, Briefcase, Stethoscope, Scale, FlaskConical, Palette, GraduationCap, type LucideIcon } from "lucide-react";
import csImg from "@/assets/departments/computer-science.jpg";
import engImg from "@/assets/departments/engineering.jpg";
import bizImg from "@/assets/departments/business.jpg";
import healthImg from "@/assets/departments/health-sciences.jpg";
import lawImg from "@/assets/departments/law.jpg";
import sciImg from "@/assets/departments/natural-sciences.jpg";
import artsImg from "@/assets/departments/arts.jpg";
import eduImg from "@/assets/departments/education.jpg";

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
    name: "Faculty of Computer Science & IT",
    dean: "Prof. Dr. Imran Ali",
    students: "1,200",
    programs: 8,
    desc: "AI, cybersecurity, software engineering, and data science programs in the scenic hills of Murree.",
    image: csImg,
    overview: "The Faculty of Computer Science & IT at Kohsar University Murree offers cutting-edge programs in artificial intelligence, machine learning, cybersecurity, software engineering, and data science. Located in the serene mountain environment, our students benefit from focused learning with modern computing labs and industry partnerships across Pakistan.",
    departments: ["Artificial Intelligence", "Software Engineering", "Cybersecurity", "Data Science", "Computer Networks", "Information Systems"],
  },
  {
    id: "engineering",
    icon: Cpu,
    name: "Faculty of Engineering & Technology",
    dean: "Prof. Dr. Farhan Ahmed",
    students: "1,800",
    programs: 12,
    desc: "Electrical, mechanical, civil, and environmental engineering programs.",
    image: engImg,
    overview: "The Faculty of Engineering & Technology provides hands-on education in electrical, mechanical, civil, and environmental engineering. Our state-of-the-art laboratories and industry partnerships with organizations like NESPAK, FWO, and NHA ensure graduates are industry-ready.",
    departments: ["Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Environmental Engineering", "Chemical Engineering", "Mechatronics"],
  },
  {
    id: "business-management",
    icon: Briefcase,
    name: "Faculty of Business & Management Sciences",
    dean: "Prof. Dr. Ayesha Malik",
    students: "1,400",
    programs: 10,
    desc: "MBA, finance, marketing, and entrepreneurship programs.",
    image: bizImg,
    overview: "The Faculty of Business & Management Sciences offers HEC-recognized programs in business administration, finance, marketing, and entrepreneurship. Our MBA program emphasizes case-based learning and includes internship placements with leading Pakistani corporations.",
    departments: ["Finance & Accounting", "Marketing", "Human Resources", "Supply Chain Management", "Entrepreneurship", "International Business"],
  },
  {
    id: "health-sciences",
    icon: Stethoscope,
    name: "Faculty of Health Sciences",
    dean: "Prof. Dr. Nadia Shah",
    students: "900",
    programs: 6,
    desc: "Public health, pharmacy, and allied health sciences.",
    image: healthImg,
    overview: "The Faculty of Health Sciences trains healthcare professionals through rigorous academic programs and clinical rotations at affiliated hospitals in Rawalpindi and Islamabad. Our research in public health and mountain community healthcare has regional significance.",
    departments: ["Public Health", "Pharmacy", "Nursing", "Nutrition & Dietetics", "Medical Lab Technology", "Physiotherapy", "Food Science & Technology"],
  },
  {
    id: "law",
    icon: Scale,
    name: "Faculty of Law & Governance",
    dean: "Prof. Dr. Kamran Hussain",
    students: "600",
    programs: 4,
    desc: "Constitutional law, corporate law, and governance studies.",
    image: lawImg,
    overview: "The Faculty of Law & Governance prepares students for distinguished careers in legal practice, judiciary, and public service. Our moot court program is nationally recognized, and our faculty includes practicing senior advocates of the Supreme Court of Pakistan.",
    departments: ["Constitutional Law", "Corporate Law", "Criminal Law", "International Law", "Human Rights Law", "Islamic Jurisprudence"],
  },
  {
    id: "natural-sciences",
    icon: FlaskConical,
    name: "Faculty of Natural Sciences",
    dean: "Prof. Dr. Zara Butt",
    students: "800",
    programs: 7,
    desc: "Physics, chemistry, biology, environmental science, and mountain ecology.",
    image: sciImg,
    overview: "The Faculty of Natural Sciences drives fundamental research in physics, chemistry, biology, and environmental science. Our unique location in the Murree hills provides unparalleled access to diverse ecosystems for field research in mountain ecology and biodiversity.",
    departments: ["Physics", "Chemistry", "Biology", "Environmental Science", "Mathematics", "Earth Sciences"],
  },
  {
    id: "arts-humanities",
    icon: Palette,
    name: "Faculty of Arts & Humanities",
    dean: "Prof. Dr. Saad Iqbal",
    students: "700",
    programs: 6,
    desc: "Literature, philosophy, fine arts, and cultural studies.",
    image: artsImg,
    overview: "The Faculty of Arts & Humanities nurtures creative thinking and critical analysis through programs in literature, philosophy, fine arts, and cultural studies. The scenic campus environment inspires artistic expression across all disciplines.",
    departments: ["English Literature", "Philosophy", "Fine Arts", "History", "Pakistan Studies"],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Faculty of Education",
    dean: "Prof. Dr. Hina Tariq",
    students: "500",
    programs: 5,
    desc: "Teacher training, curriculum design, and educational leadership.",
    image: eduImg,
    overview: "The Faculty of Education shapes future educators and educational leaders through innovative teaching methodologies and curriculum development. Our graduates serve as teachers and administrators in schools across Pakistan, with a special focus on improving education in northern regions.",
    departments: ["Curriculum & Instruction", "Educational Leadership", "Special Education", "Educational Psychology", "STEM Education", "Early Childhood Education"],
  },
];
