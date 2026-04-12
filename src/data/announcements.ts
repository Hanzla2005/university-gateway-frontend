import img1 from "@/assets/announcements/1.png";
import img2 from "@/assets/announcements/2.png";
import img3 from "@/assets/announcements/3.png";
import img4 from "@/assets/announcements/4.png";
import img5 from "@/assets/announcements/5.png";


export interface Announcement {
  id: string;
  slug: string;
  title: string;
  date: string;
  tag: string;
  image: string;
  excerpt: string;
  content: string;
}

export const announcements: Announcement[] = [
  {
    id: "5",
    slug: "prof-dr-rafia-mumtaz-honored-with-ieee-distinguished-service-award-medal",
    title: "Professor. Dr. Rafia Mumtaz Honored with IEEE Distinguished Service Award Medal",
    date: "January 17, 2026",
    tag: "Achievement",
    image: img5,
    excerpt: "The Vice Chancellor of Kohsar University Murree, Professor Dr. Rafia Mumtaz has been honored with the IEEE Distinguished Service Award Medal by the Institute of Electrical and Electronics Engineers (IEEE) Islamabad Section.",
    content: "The Vice Chancellor of Kohsar University Murree, Professor Dr. Rafia Mumtaz has been honored with the IEEE Distinguished Service Award Medal by the Institute of Electrical and Electronics Engineers (IEEE) Islamabad Section, in recognition of her outstanding contributions to academia, industry, and the engineering profession. The prestigious award was conferred during the Annual General Meeting (AGM) of the IEEE Islamabad Section, held on 16 January 2026, at the Islamabad Club. The ceremony was part of the celebrations marking the 25th Anniversary of the IEEE Islamabad Section, a significant milestone in the organization's history. IEEE is the world's largest technical professional organization, serving professionals across more than 190 countries. The Distinguished Service Award Medal is bestowed upon individuals who have demonstrated exemplary leadership, distinguished service, and sustained impact in advancing engineering, technology, and professional excellence. The conferment of this award stands as a testament to Professor Dr. Rafia Mumtaz's dedication, visionary leadership, and invaluable services to the engineering and academic community. Her recognition not only highlights her personal achievements but also brings pride and distinction to Kohsar University Murree and the institutions she represents.",
  },
  {
    id: "1",
    slug: "prof-dr-rafia-mumtaz-meets-chairman-hec",
    title: "Prof. Dr. Rafia Mumtaz Meets Chairman Higher Education Commission of Pakistan",
    date: "March 15, 2026",
    tag: "Administration",
    image: img1,
    excerpt: "The Vice Chancellor of Kohsar University Murree, Prof. Dr. Rafia Mumtaz, held a meeting with Prof. Dr. Niaz Ahmad Akhtar, Chairman of the Higher Education Commission of Pakistan.",
    content: "The Vice Chancellor of Kohsar University Murree, Prof. Dr. Rafia Mumtaz, held a meeting with Prof. Dr. Niaz Ahmad Akhtar, Chairman of the Higher Education Commission of Pakistan. During the meeting, Prof. Dr. Rafia Mumtaz congratulated Prof. Dr. Niaz Ahmad Akhtar on his appointment as Chairman of HEC and conveyed her best wishes for his tenure. She also formally invited him to attend the first convocation of Kohsar University Murree. The discussion focused on the academic and institutional progress of Kohsar University Murree. Prof. Dr. Rafia Mumtaz highlighted the initiatives and strategic steps taken by the university administration to strengthen academic standards, enhance research activities, and promote overall institutional development. Prof. Dr. Niaz Ahmad Akhtar appreciated the progress made by Kohsar University Murree and assured his full support. He emphasized that HEC would extend all possible assistance for the development of university and the improvement of the quality of academic programs. The meeting concluded with a shared commitment to further strengthening higher education standards and supporting the continued growth and excellence of Kohsar University Murree.",
  },
  {
    id: "4",
    slug: "10th-syndicate-meeting-of-kohsar-university-murree",
    title: "10th Syndicate Meeting of Kohsar University Murree",
    date: "February 9, 2026",
    tag: "Academic",
    image: img4,
    excerpt: "The 10th Syndicate Meeting of Kohsar University Murree was held on December 30, 2025, at the Punjab Higher Education Commission (PHEC), Lahore.",
    content: "The 10th Syndicate Meeting of Kohsar University Murree was held on December 30, 2025, at the Punjab Higher Education Commission (PHEC), Lahore, under the chairmanship of the Honorable Minister for Higher Education, Punjab, Mr. Rana Sikandar Hayat. The Vice Chancellor of Kohsar University Murree, Professor Dr. Rafia Mumtaz, presented a comprehensive progress report highlighting the university's academic achievements, administrative developments, and future plans. All agenda items presented during the meeting were discussed in detail and unanimously approved by the Syndicate. The Syndicate members highly appreciated the efforts of the university leadership, particularly acknowledging the significant progress made in academic growth, institutional development, and governance under the leadership of Professor Dr. Rafia Mumtaz. The top management also expressed full confidence in the Vice Chancellor's vision and leadership. Following the successful conduct of the Syndicate meeting, faculty members of Kohsar University Murree extended their heartfelt congratulations to Vice Chancellor Professor Dr. Rafia Mumtaz, commending her dedication and effective leadership in steering the university toward excellence. The meeting concluded with a renewed commitment to strengthening higher education standards and fostering sustainable academic development at Kohsar University Murree.",
  },
  {
    id: "3",
    slug: "kohsar-university-murree-receives-ac-coaster",
    title: "Kohsar University Murree has received an AC coaster",
    date: "February 9, 2026",
    tag: "News",
    image: img3,
    excerpt: "The Vice Chancellor of Kohsar University Murree, Professor. Dr. Rafia Mumtaz, has expressed her sincere gratitude for the generous provision of an AC Coaster to the university.",
    content: "The Vice Chancellor of Kohsar University Murree, Professor. Dr. Rafia Mumtaz, has expressed her sincere gratitude to the Chief Minister Punjab, Ms. Maryam Nawaz Sharif, the Provincial Minister for Higher Education, Mr. Rana Sikandar Hayat, and the Secretary, Higher Education Department, Mr. Ghulam Farid for the generous provision of an AC Coaster to the university. She acknowledged the Chief Minister Punjab's initiative as a significant step toward ensuring safe, comfortable, and reliable transportation for female students. Professor. Dr. Rafia Mumtaz also appreciated the continued support and patronage of the Higher Education Department, stating that such initiatives reflect the government's strong commitment to academic excellence, student welfare, and the promotion of a conducive learning environment.",
  },
  {
    id: "2",
    slug: "preparations-for-first-convocation-2026",
    title: "Preparations for First Convocation-2026",
    date: "February 9, 2026",
    tag: "Admissions",
    image: img2,
    excerpt: "Kohsar University Murree has officially initiated preparations for first Convocation-2026 with detailed discussions on arrangements and coordination.",
    content: "Kohsar University Murree has officially initiated preparations for first Convocation-2026. The first meeting in this regard was held at the Vice Chancellor Secretariat, Kashmir Point, Murree, under the directions of vice chancellor, Professor Dr. Rafia Mumtaz. The meeting was attended by university management and committee members, who engaged in detailed discussions on various arrangements for the upcoming convocation. Key aspects, including administrative planning, logistics, and overall coordination, were thoroughly reviewed and evaluated. The university management exchanged views to ensure the event is conducted in a well-organized and dignified manner. Several important decisions were taken, and responsibilities were assigned to facilitate smooth and effective arrangements. The forthcoming convocation is expected to be a historic milestone in the history of Kohsar University Murree. The university extends its best wishes to its graduating students for a successful future, marking the beginning of new achievements and higher aspirations.",
  },
];
