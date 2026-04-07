import admissionsImg from "@/assets/announcements/admissions.jpg";
import researchCenterImg from "@/assets/announcements/research-center.jpg";
import convocationImg from "@/assets/announcements/convocation.jpg";
import exchangeImg from "@/assets/announcements/exchange.jpg";
import hackathonImg from "@/assets/announcements/hackathon.jpg";

export interface Announcement {
  id: string;
  title: string;
  date: string;
  tag: string;
  image: string;
  excerpt: string;
  content: string;
}

export const announcements: Announcement[] = [
  {
    id: "fall-2025-admissions",
    title: "Fall 2025 Admissions Now Open",
    date: "March 15, 2025",
    tag: "Admissions",
    image: admissionsImg,
    excerpt: "Applications are now being accepted for all undergraduate and graduate programs for the Fall 2025 semester.",
    content: "Prestige University is pleased to announce that applications for the Fall 2025 semester are now open across all faculties. Prospective students can apply online through the admissions portal. Early bird applications submitted before April 30 will receive priority processing. Financial aid and scholarship applications are also available. Contact the admissions office at admissions@prestige.edu for more information.",
  },
  {
    id: "new-research-center",
    title: "New Research Center Inaugurated",
    date: "March 10, 2025",
    tag: "Research",
    image: researchCenterImg,
    excerpt: "The state-of-the-art Center for Advanced Materials has been officially inaugurated on campus.",
    content: "The Vice Chancellor inaugurated the new Center for Advanced Materials, a $25 million facility equipped with cutting-edge laboratories for nanotechnology, polymer science, and materials characterization. The center will host 50 researchers and 120 graduate students, fostering interdisciplinary collaboration between the Schools of Engineering and Natural Sciences.",
  },
  {
    id: "annual-convocation",
    title: "Annual Convocation Ceremony",
    date: "March 8, 2025",
    tag: "Academic",
    image: convocationImg,
    excerpt: "Over 3,000 graduates received their degrees at the 58th Annual Convocation Ceremony.",
    content: "The 58th Annual Convocation Ceremony was held at the main auditorium, where 3,200 graduates were awarded degrees across all disciplines. The Chief Guest, Dr. Sarah Mitchell, Nobel Laureate in Chemistry, delivered an inspiring address on the role of education in solving global challenges. Gold medals were awarded to 45 top-performing students.",
  },
  {
    id: "international-exchange",
    title: "International Exchange Program",
    date: "March 5, 2025",
    tag: "Global",
    image: exchangeImg,
    excerpt: "New partnerships with 12 international universities open exchange opportunities for students.",
    content: "Prestige University has signed MoUs with 12 leading universities across Europe, North America, and Asia-Pacific for student and faculty exchange programs. Starting Fall 2025, students can spend a semester abroad at partner institutions including TU Munich, University of Toronto, and National University of Singapore. Scholarships covering travel and accommodation are available for qualifying students.",
  },
  {
    id: "hackathon-2025",
    title: "National Hackathon 2025",
    date: "February 28, 2025",
    tag: "Events",
    image: hackathonImg,
    excerpt: "Prestige University hosts the largest inter-university hackathon with 500+ participants.",
    content: "The School of Computer Science successfully hosted the National Hackathon 2025, bringing together over 500 participants from 40 universities across the country. Teams competed in categories including AI/ML, FinTech, HealthTech, and Sustainability. The winning team from Prestige University developed an AI-powered crop disease detection system. Prize money totaling $50,000 was distributed among the top 10 teams.",
  },
];
