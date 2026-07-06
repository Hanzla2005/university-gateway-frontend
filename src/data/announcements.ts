import img10 from "@/assets/announcements/10.png";
import img11 from "@/assets/announcements/11.png";
import img12 from "@/assets/announcements/12.png";
import img13 from "@/assets/announcements/13.png";
import img5 from "@/assets/announcements/5.png";
import img6 from "@/assets/announcements/6.png";
import img7 from "@/assets/announcements/7.jpeg";
import img8 from "@/assets/announcements/8.jpeg";
import img9 from "@/assets/announcements/9.jpeg";

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
    id: "10",
    slug: "4th-conference-on-future-of-education-2026",
    title: "4th Conference on Future of Education 2026",
    date: "July 10, 2026",
    tag: "Event",
    image: img10,
    excerpt: "Kohsar University Murree is hosting the 4th Conference on Future of Education 2026 on July 10-11, 2026.",
    content: "Kohsar University Murree, in collaboration with the University of Sargodha, is hosting the 4th Conference on Future of Education 2026 under the theme 'Shaping Minds, Building Futures for a Better Tomorrow'. The conference will be held on July 10-11, 2026. Prof. Dr. Muhammad Iqbal Choudhary (Coordinator General OIC-COMSTECH) will be the Chief Guest, and Prof. Dr. Qaisar Abbas (Vice Chancellor, University of Sargodha) will be the Patron in Chief. The event will feature keynote speakers from various universities and a panel discussion on 'Pakistan's Higher Education at a Crossroad'.",
  },
  {
    id: "11",
    slug: "22nd-global-science-technology-and-management-conference",
    title: "22nd Global Science Technology and Management Conference (GSTMC-26)",
    date: "September 14, 2026",
    tag: "Event",
    image: img11,
    excerpt: "Kohsar University Murree and Evolution EduTech are jointly organizing the 22nd Global Science Technology and Management Conference on 14-15 September, 2026.",
    content: "Kohsar University Murree and Evolution EduTech (Pakistan) are jointly organizing the 22nd Global Science Technology and Management Conference (GSTMC-26) in Murree on 14-15 September, 2026. The conference covers fields including Biological & Chemical Sciences, Environmental, Pharmacy & Allied Health Sciences, Computer, Physics & Numerical Sciences, Commerce & Management Sciences, and Social Sciences & Languages. Prof. Dr. Rafia Mumtaz, Vice Chancellor Kohsar University Murree, will serve as the Patron-in-Chief.",
  },
  {
    id: "12",
    slug: "panel-discussion-pakistans-higher-education-at-a-crossroad",
    title: "Panel Discussion: Pakistan's Higher Education at a Crossroad",
    date: "July 10, 2026",
    tag: "Event",
    image: img12,
    excerpt: "A panel discussion featuring eminent Vice Chancellors on the topic of 'Pakistan's Higher Education at a Crossroad' will take place at Kohsar University Murree.",
    content: "As part of the upcoming conference, a high-level panel discussion titled 'Pakistan's Higher Education at a Crossroad' will take place. The esteemed panelists include Prof. Dr. Ashfaq Ahmad (VC Ghazi University), Prof. Dr. Omer Chaudhry (VC GC University Lahore), Prof. Dr. Saeed Ahmad Buzdar (VC Thal University Bhakkar), Prof. Dr. Rafia Mumtaz (VC Kohsar University), Prof. Dr. Shazia Anjum (VC Government Sadiq College Women University), and Prof. Dr. Syeda Shahida Batool (VC The Women University Multan). The session will be held under the patronage of Prof. Dr. Qaisar Abbas, Vice Chancellor University of Sargodha.",
  },
  {
    id: "13",
    slug: "keynote-speakers-at-future-of-education-conference",
    title: "Keynote Speakers announced for the Future of Education Conference",
    date: "July 10, 2026",
    tag: "Event",
    image: img13,
    excerpt: "Distinguished keynote speakers have been announced for the 4th Conference on Future of Education 2026.",
    content: "The 4th Conference on Future of Education 2026 will feature an array of distinguished keynote speakers from leading academic institutions across Pakistan. The lineup includes Prof. Dr. M. Kamran (VC The Islamia University of Bahawalpur), Prof. Dr. Nasir Mahmood (VC AIOU Islamabad), Prof. Dr. Rauf-i-Azam (VC GC University Faisalabad), Prof. Dr. Kanwal Ameen (VC GC Women University Faisalabad), Prof. Dr. M. Zubair Iqbal (VC Bahauddin Zakariya University Multan), and Prof. Dr. Uzma Quraishi (VC Lahore College for Women University). They will share their insights on shaping the future of education.",
  },
  {
    id: "9",
    slug: "students-of-botany-secure-1st-position-at-idea-fest-2026",
    title: "Students of Department of Botany Secure 1st Position at Idea-Fest 2026",
    date: "May 15, 2026",
    tag: "Achievement",
    image: img9,
    excerpt: "The students of the Department of Botany, Kohsar University Murree, under the supervision of Dr. Riffat Batool, achieved a remarkable milestone by securing 1st Position at the 3rd Idea-Fest 2026.",
    content: "The students of the Department of Botany, Kohsar University Murree, under the supervision of Dr. Riffat Batool, achieved a remarkable milestone by securing 1st Position at the 3rd Idea-Fest 2026 hosted by Rawalpindi Women University. The prestigious event witnessed enthusiastic participation from students representing 19 universities from across Pakistan, providing a competitive platform for innovative ideas, research, and academic excellence. This outstanding achievement is a matter of great pride for Kohsar University Murree and reflects the students’ innovation, teamwork, creativity, and unwavering dedication. The accomplishment also highlights the commitment of the university and its faculty toward promoting quality education, research, and experiential learning opportunities for students.",
  },
  {
    id: "7",
    slug: "presidential-pride-of-performance-conferred-upon-prof-dr-rafia-mumtaz",
    title: "Presidential Pride of Performance Conferred Upon Prof. Dr. Rafia Mumtaz",
    date: "May 15, 2026",
    tag: "Achievement",
    image: img7,
    excerpt: "The Governor of Punjab honored Professor. Dr. Rafia Mumtaz, Vice Chancellor of Kohsar University Murree, with the prestigious Presidential Pride of Performance.",
    content: "The Governor of Punjab, Sardar Saleem Haider Khan, today honored Professor. Dr. Rafia Mumtaz, Vice Chancellor of Kohsar University Murree, with the prestigious Presidential Pride of Performance in recognition of her outstanding and exemplary contributions to the fields of Science, Technology, and the Internet of Things (IoT). Professor. Dr. Rafia Mumtaz has made remarkable contributions to higher education, scientific research, and technological advancement in Pakistan through her visionary leadership, academic excellence, and dedication to innovation-driven education. Professor. Dr. Rafia Mumtaz has successfully secured more than Rs. 215 million through 24 national and international competitive research grants, reflecting her exceptional research capabilities and international academic standing. Prof. Dr. Rafia Mumtaz has also played a pioneering role in strengthening global academic partnerships. She established joint research laboratories and collaborative research initiatives in partnership with Coventry University (London) and Chiang Mai University (Thiland). These collaborations are focused on promoting international scientific cooperation, advanced technological research, faculty and student exchange programs, and innovation in emerging fields of science and engineering. Under her dynamic educational leadership, major reforms have been introduced in curriculum modernization, outcome-based education, and quality assurance in higher education. She has led the successful accreditation of Software Engineering programs in accordance with international academic standards and played a vital role in launching postgraduate-level specializations in Internet of Things (IoT). Through her initiatives, the university has strengthened its research ecosystem, enhanced industry-academia linkages, and expanded opportunities for young researchers and students in advanced technological domains. In recognition of her extraordinary services, groundbreaking research contributions, and dedication to the advancement of Science and Internet of Things (IoT), the President of the Pakistan conferred upon her the distinguished Presidential Pride of Performance, one of the nation’s highest civilian honors. The academic community, researchers, students, and civil society members have widely appreciated this prestigious recognition, describing it as a proud moment for Pakistan’s higher education sector and a testament to the growing role of women leaders in science, research, and technological innovation.",
  },
  {
    id: "8",
    slug: "visit-of-prof-dr-rafia-mumtaz-to-allah-walay-trust",
    title: "Visit of Professor. Dr. Rafia Mumtaz to Allah Walay Trust",
    date: "May 15, 2026",
    tag: "News",
    image: img8,
    excerpt: "Professor. Dr. Rafia Mumtaz, Vice Chancellor of Kohsar University Murree, paid a distinguished visit to Allah Walay Trust to explore potential avenues of collaboration.",
    content: "Professor. Dr. Rafia Mumtaz, Vice Chancellor of Kohsar University Murree, paid a distinguished visit to Allah Walay Trust (AWF) on the invitation of Mr. Khalid Mahmood Head Youth Programs AWF to explore potential avenues of collaboration between Allah Walay Trust and Kohsar University Murree. During the visit, comprehensive discussions were held regarding future partnerships focused on students’ educational initiatives, and community engagement programs. Mr. Khalid Mahmood emphasized the significance of strengthening educational opportunities for deserving students and expressed his keen interest in organizing community-oriented educational activities in collaboration with Kohsar University Murree. Addressing the students and participants, Professor Dr. Rafia Mumtaz shared her inspiring life journey, reflecting on the challenges, experiences, and achievements that shaped her professional career and ultimately led her to the esteemed position of Vice Chancellor. Her insightful and motivational address encouraged students to remain steadfast in pursuing their goals, overcome challenges with determination and resilience, and contribute positively to society through education, leadership, and community service. The visit concluded on a positive and encouraging note, with both institutions expressing a mutual commitment to fostering educational development, empowering youth through and promoting meaningful community engagement through collaborative initiatives between Allah Walay Trust and Kohsar University Murree",
  },
  {
    id: "6",
    slug: "chief-minister-punjab-it-internship-opportunities",
    title: "Chief Minister Punjab Initiative: IT Internship Opportunities",
    date: "May 8, 2026",
    tag: "News",
    image: img6,
    excerpt: "The Chief Minister Punjab has launched an initiative offering 2400+ IT Internship Opportunities with leading IT companies across Punjab, providing a monthly stipend of 50,000 PKR.",
    content: "A Chief Minister Punjab Initiative has been announced, offering exceptional Internship Opportunities with Leading IT Companies Across Punjab. With over 2400+ positions available, this program is designed to empower young professionals and provide them with hands-on experience in the tech industry.\n\nAvailable fields include 3D Animation & Graphics, Laravel/PHP Development, Software Development, DevOps Engineering, Salesforce Administration, Product Management, and many more.\n\nSelected interns will receive a Monthly Stipend of 50,000 PKR (subject to monthly performance and an HEC verified degree) for a maximum internship duration of 5 months.\n\nEligibility Criteria:\n• IT / CS or Relevant Degree\n• Degree completed within the last 4 years\n• Valid CNIC (Computerized National Identity Card)\n• Punjab Domicile\n\nInterested candidates can apply now at cmitinterns.punjab.gov.pk. For more information, contact 042-99000000 Ext: (1925, 1908, 1207) or email info@cmitinterns.punjab.gov.pk.",
  },
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
];

