import artsImg from "@/assets/departments/arts.jpg";
import businessImg from "@/assets/departments/business.jpg";
import csImg from "@/assets/departments/computer-science.jpg";
import educationImg from "@/assets/departments/education.jpg";
import engineeringImg from "@/assets/departments/engineering.jpg";
import healthImg from "@/assets/departments/health-sciences.jpg";
import lawImg from "@/assets/departments/law.jpg";
import naturalImg from "@/assets/departments/natural-sciences.jpg";
import psychologyBg from "@/assets/departments/Psychology/bg.png";
import microBg from "@/assets/departments/microbiology/bg.png";

const departmentImages: Record<string, string> = {
  "computer-science": csImg,
  "mathematics": educationImg,
  "physics": naturalImg,
  "software-engineering": engineeringImg,
  "medical-laboratory-technology": healthImg,
  "biotechnology": engineeringImg,
  "bioscience": naturalImg,
  "botany": naturalImg,
  "mountain-agriculture": naturalImg,
  "art-and-design": artsImg,
  "english": educationImg,
  "psychology": psychologyBg,
  "sociology": businessImg,
  "tourism-and-hospitality": businessImg,
  "microbiology": microBg,
  "food-science": healthImg,
};

export default departmentImages;
