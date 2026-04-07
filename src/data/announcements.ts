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
    excerpt: "Applications are now being accepted for all undergraduate and graduate programs for the Fall 2025 semester at Kohsar University Murree.",
    content: "Kohsar University Murree is pleased to announce that applications for the Fall 2025 semester are now open across all faculties. Prospective students can apply online through the admissions portal. Early bird applications submitted before April 30 will receive priority processing. Financial aid and scholarship applications are also available. Contact the admissions office at admissions@kohsar.edu.pk for more information.",
  },
  {
    id: "new-research-center",
    title: "New Research Center Inaugurated",
    date: "March 10, 2025",
    tag: "Research",
    image: researchCenterImg,
    excerpt: "The state-of-the-art Center for Mountain Ecosystem Research has been officially inaugurated on campus.",
    content: "The Vice Chancellor inaugurated the new Center for Mountain Ecosystem Research, a state-of-the-art facility dedicated to studying the ecology, biodiversity, and environmental sustainability of the Himalayan and Karakoram mountain ranges. The center will host 30 researchers and 80 graduate students, fostering interdisciplinary collaboration between the Departments of Environmental Science, Biology, and Geography.",
  },
  {
    id: "annual-convocation",
    title: "Annual Convocation Ceremony 2025",
    date: "March 8, 2025",
    tag: "Academic",
    image: convocationImg,
    excerpt: "Over 1,500 graduates received their degrees at the 7th Annual Convocation Ceremony.",
    content: "The 7th Annual Convocation Ceremony was held at the main auditorium, where 1,500 graduates were awarded degrees across all disciplines. The Chief Guest, Federal Minister for Education, delivered an inspiring address on the role of higher education in building a progressive Pakistan. Gold medals were awarded to 25 top-performing students from various departments.",
  },
  {
    id: "international-exchange",
    title: "International Exchange Program with Turkish Universities",
    date: "March 5, 2025",
    tag: "Global",
    image: exchangeImg,
    excerpt: "New partnerships with 8 Turkish universities open exchange opportunities for students and faculty.",
    content: "Kohsar University Murree has signed MoUs with 8 leading Turkish universities for student and faculty exchange programs. Starting Fall 2025, students can spend a semester abroad at partner institutions including Istanbul Technical University, Bogazici University, and Middle East Technical University. HEC-funded scholarships covering travel and accommodation are available for qualifying students.",
  },
  {
    id: "hackathon-2025",
    title: "National Hackathon 2025",
    date: "February 28, 2025",
    tag: "Events",
    image: hackathonImg,
    excerpt: "Kohsar University hosts the largest inter-university hackathon in northern Pakistan with 300+ participants.",
    content: "The Department of Computer Science successfully hosted the National Hackathon 2025, bringing together over 300 participants from 25 universities across Pakistan. Teams competed in categories including AI/ML, FinTech, HealthTech, and Sustainability. The winning team from Kohsar University developed an AI-powered landslide prediction system for mountainous regions. Prize money totaling PKR 5 million was distributed among the top 10 teams.",
  },
];
