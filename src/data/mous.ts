export interface MOU {
  id: string;
  partner: string;
  scope: string[];
  duration: string;
  type: string;
  dominion: "National" | "International";
  date: string;
  year: string;
}

export const mouData: MOU[] = [
  // 2026
  {
    id: "2026-1",
    partner: "Software Productivity Strategits, Inc (SPS)",
    scope: [
      "Knowledge Exchange and Faculty Development",
      "Joint Research Projects",
      "Capacity Development and Impact Training of students and Faculty in AWS, Google Cloud, IBM etc.",
      "Intrenships and Placements",
      "Joint Commercialization and Intellectuap Property Development",
      "Establishment of SPS-SpinnLabs Innovation Center"
    ],
    duration: "03 Years",
    type: "IT and Software Organization",
    dominion: "National",
    date: "17-Apr-2026",
    year: "2026"
  },
  {
    id: "2026-2",
    partner: "Techsol Space (SMC) Pvt Ltd",
    scope: [
      "Knowledge Exchange",
      "Joint Research Projects",
      "Capacity Development and Impact Training",
      "Intrenships and Placements",
      "Joint Usage of Research Facilities",
      "Curriculum Design",
      "Commercialization",
      "Incubation and Startups"
    ],
    duration: "03 Years",
    type: "IT and Software Organization",
    dominion: "National",
    date: "7-Apr-2026",
    year: "2026"
  },
  {
    id: "2026-3",
    partner: "HBL & Investment Banking",
    scope: [
      "Around 200 Student Internships",
      "Research and Development",
      "Capacity Development",
      "Funding of 10 million PKR through CSR with Agha Khan Foundation"
    ],
    duration: "05 Years",
    type: "Management & Corporate Industry",
    dominion: "National",
    date: "31-Mar-2026",
    year: "2026"
  },
  {
    id: "2026-4",
    partner: "THQ Hospital Murree",
    scope: [
      "Knowledge Exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Intrenships and Placements",
      "Faculty & staff Exchange",
      "Joint Usage of Research Facilities",
      "Provision of Medical Data for Research"
    ],
    duration: "05 Years",
    type: "Health Sector",
    dominion: "National",
    date: "23-Feb-2026",
    year: "2026"
  },
  // 2025
  {
    id: "2025-1",
    partner: "Guangdong Cas Cogniser Information Technology Co. Ltd., China",
    scope: [
      "Knowledge Exchange",
      "Establishment of Joint Lab",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Enterpreneurship & Startup Development",
      "Research Funding by Guangdong Cas Cogniser"
    ],
    duration: "03 Years",
    type: "IT and Software Organization",
    dominion: "International",
    date: "26-Dec-2025",
    year: "2025"
  },
  {
    id: "2025-2",
    partner: "Chiang Mai University, Thailand",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "03 Years",
    type: "Academia-Higher Education Institute",
    dominion: "International",
    date: "18-Dec-2025",
    year: "2025"
  },
  {
    id: "2025-3",
    partner: "KhudMukhtar Khatoon-Hakeem",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development",
      "Social Civic Engagement Events"
    ],
    duration: "05 Years",
    type: "Social Organization",
    dominion: "National",
    date: "19-Nov-2025",
    year: "2025"
  },
  {
    id: "2025-4",
    partner: "Pakistan Software Export Board (PSEB)",
    scope: [
      "Student Placement",
      "Research and Development",
      "Industrial Visits",
      "Capacity Development",
      "Curriculum Development"
    ],
    duration: "05 Years",
    type: "Software Regulatiory Body",
    dominion: "National",
    date: "Pending",
    year: "2025"
  },
  {
    id: "2025-5",
    partner: "Punjab Food Authority",
    scope: [
      "Student Placement",
      "Research and Development",
      "Industrial Visits",
      "Capacity Development",
      "Curriculum Development"
    ],
    duration: "05 Years",
    type: "Food Sciences Regulatory Body",
    dominion: "National",
    date: "Pending",
    year: "2025"
  },
  {
    id: "2025-6",
    partner: "Pak-Austria Fachhochschule Institute of Applied Sciences and Technology",
    scope: [
      "Student Exchange",
      "Cultural Exchange",
      "Academic Staff exchange",
      "Joint Research"
    ],
    duration: "05 Years",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "Pending",
    year: "2025"
  },
  {
    id: "2025-7",
    partner: "Tourism Development Corporation of Punjab",
    scope: [
      "Student Placement",
      "Research and Development",
      "Industrial Visits",
      "Capacity Development",
      "Tourism Awareness Programs"
    ],
    duration: "Indefinite",
    type: "TourismDevelopment Body",
    dominion: "National",
    date: "10-Dec-2025",
    year: "2025"
  },
  {
    id: "2025-8",
    partner: "Welee Group Company",
    scope: [
      "Student Placement",
      "Research and Development",
      "Industrial Visits",
      "Capacity Development",
      "Curriculum Development"
    ],
    duration: "05 Years",
    type: "Management & Corporate Industry",
    dominion: "National",
    date: "19-Nov-2025",
    year: "2025"
  },
  {
    id: "2025-9",
    partner: "HBL & Investment Banking",
    scope: [
      "Student Placement",
      "Research and Development",
      "Industrial Visits",
      "Capacity Development",
      "Curriculum Development"
    ],
    duration: "05 Years",
    type: "Management & Corporate Industry",
    dominion: "National",
    date: "27-Nov-2025",
    year: "2025"
  },
  {
    id: "2025-10",
    partner: "Akhuwat Foundation",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development",
      "Social Civic Engagement Events"
    ],
    duration: "8 Years",
    type: "Social Organization",
    dominion: "National",
    date: "27-Nov-2025",
    year: "2025"
  },
  {
    id: "2025-11",
    partner: "Diya Welfare Foundation",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development",
      "Social Civic Engagement Events"
    ],
    duration: "05 Years",
    type: "Social Organization",
    dominion: "National",
    date: "29-Nov-2025",
    year: "2025"
  },
  {
    id: "2025-12",
    partner: "Kafalah Welfare Organization",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development",
      "Social Civic Engagement Events"
    ],
    duration: "10 Years",
    type: "Social Organization",
    dominion: "National",
    date: "29-Nov-2025",
    year: "2025"
  },
  {
    id: "2025-13",
    partner: "Agriculure University Faislabad",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects",
      "Joint Publications",
      "Capacity Development",
      "Curriculum Development",
      "Faculty & Student Exchange"
    ],
    duration: "05 Years",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "1-Dec-2025",
    year: "2025"
  },
  {
    id: "2025-14",
    partner: "National Textile University Faisalabad",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects",
      "Joint Publications",
      "Capacity Development",
      "Curriculum Development",
      "Faculty & Student Exchange"
    ],
    duration: "05 Years",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "3-Dec-2025",
    year: "2025"
  },
  {
    id: "2025-15",
    partner: "Faislabad Bussiness School-NTU",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects",
      "Joint Publications",
      "Capacity Development",
      "Curriculum Development",
      "Faculty & Student Exchange"
    ],
    duration: "05 Years",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "3-Dec-2025",
    year: "2025"
  },
  {
    id: "2025-16",
    partner: "Zakat Foundation of America (ZFA)",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development",
      "Social Civic Engagement Events"
    ],
    duration: "03 Years",
    type: "Social Organization",
    dominion: "International",
    date: "12-Nov-2025",
    year: "2025"
  },
  {
    id: "2025-17",
    partner: "KHADIM ALI SHAH BUKHARI INSTITUTE OF TECHNOLOGY (KASBIT), KARACHI",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Student Exchange"
    ],
    duration: "05 Years",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "30-Sep-2025",
    year: "2025"
  },
  {
    id: "2025-18",
    partner: "Alkhidmat foundation Punjab North (AKFPN)",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development and Impact Training",
      "Social Work and civic Engagement Events"
    ],
    duration: "05 Years",
    type: "Social Organization",
    dominion: "National",
    date: "29-Aug-2025",
    year: "2025"
  },
  {
    id: "2025-19",
    partner: "FRIENDS OF ENVIRONMENT (FOE), Islamabad",
    scope: [
      "Plants Growth through preservation and protection",
      "Promote the Sarsabz o Shadab Pakistan campaigns",
      "Promote eco-tourism, clean energy Polocies",
      "Promote Environment Friendly Policies",
      "Capcity Development & Awareness"
    ],
    duration: "05 Years",
    type: "Social Organization",
    dominion: "National",
    date: "25-Aug-2025",
    year: "2025"
  },
  {
    id: "2025-20",
    partner: "ISLAMIA UMNIVERSITY BAHAWALPUR",
    scope: [
      "Student Exchange",
      "Cultural Exchange",
      "Academic Staff exchange",
      "Joint Research"
    ],
    duration: "05 Years",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "11-Jul-2025",
    year: "2025"
  },
  {
    id: "2025-21",
    partner: "WOMEN UMNIVERSITY MULTAN",
    scope: [
      "Student Exchange",
      "Cultural Exchange",
      "Academic Staff exchange",
      "Joint Research"
    ],
    duration: "05 Years",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "11-Jul-2025",
    year: "2025"
  },
  {
    id: "2025-22",
    partner: "NORTH SOUTH UNIVERSITY BANGLADESH",
    scope: [
      "Student Exchange",
      "Cultural Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development",
      "Joint Degree Certification Program"
    ],
    duration: "5 Years",
    type: "Academia-Higher Education Institute",
    dominion: "International",
    date: "19-Jun-2025",
    year: "2025"
  },
  {
    id: "2025-23",
    partner: "INTENATIONAL ISLAMIC UNIVERSITY CHITTAGONG BANGLADESH",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "05 Years",
    type: "Academia-Higher Education Institute",
    dominion: "International",
    date: "19-Jun-2025",
    year: "2025"
  },
  {
    id: "2025-24",
    partner: "DAFFODILS INTERNATIONAL U IVERSITY BANGLADESH",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "5 Years",
    type: "Academia-Higher Education Institute",
    dominion: "International",
    date: "19-Jun-2025",
    year: "2025"
  },
  {
    id: "2025-25",
    partner: "UNIVERSITY OF ASIA PACIFIC BANGLADESH",
    scope: [
      "Student Exchange",
      "Cultural Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development",
      "Joint Degree Certification Program"
    ],
    duration: "05 Years",
    type: "Academia-Higher Education Institute",
    dominion: "International",
    date: "19-Jun-2025",
    year: "2025"
  },
  {
    id: "2025-26",
    partner: "HOCHSCHULE RHEINMEIN",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "5 Years",
    type: "Research Institte",
    dominion: "International",
    date: "18-Jun-2025",
    year: "2025"
  },
  {
    id: "2025-27",
    partner: "CITY TRAFFIC POLICE OFFICE MURREE",
    scope: [
      "Establish Thematic Working Group on Road Safety",
      "Dgital Mapping of Traffic congestion zones",
      "Capcity Development",
      "Implement Women on Wheel Initiative",
      "Favilitation of Student Driving License Process",
      "Research & Innovation in Smart Mobility Solutions"
    ],
    duration: "5 Years",
    type: "Government Department",
    dominion: "National",
    date: "4-Jun-2025",
    year: "2025"
  },
  {
    id: "2025-28",
    partner: "AJMAIR FOODs (PVT) LTD, LAHORE",
    scope: [
      "Student Placement",
      "Research and Development",
      "Industrial Visits",
      "Capacity Development and Impact Training",
      "Curriculum Development"
    ],
    duration: "3 Years",
    type: "Food Industry",
    dominion: "National",
    date: "30-May-2025",
    year: "2025"
  },
  // 2024
  {
    id: "2024-1",
    partner: "LEVERIFY",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Research Projects",
      "Capacity Development and Impact Training"
    ],
    duration: "Non-Specific",
    type: "Electronic Product Seller",
    dominion: "National",
    date: "6-Jul-2024",
    year: "2024"
  },
  {
    id: "2024-2",
    partner: "HELPING HAND FOR RELIFE AND DEVELPOMENT PAKISTAN",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development and Impact Training",
      "Social Work and civic Engagement Events"
    ],
    duration: "Non-Specific",
    type: "Social Welware Orfganization",
    dominion: "National",
    date: "16-Apr-2024",
    year: "2024"
  },
  // 2023
  {
    id: "2023-1",
    partner: "HAZARA UNIVERSITY , MANSEHRA KPK",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "1-Dec-2023",
    year: "2023"
  },
  {
    id: "2023-2",
    partner: "MUSLIM INSTITUTE, ISLAMABAD",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Research Projects",
      "Capacity Development and Impact Training"
    ],
    duration: "Non-Specific",
    type: "Research Center",
    dominion: "National",
    date: "14-Nov-2023",
    year: "2023"
  },
  {
    id: "2023-3",
    partner: "VIRTUAL UNIVERSITY OF PAKISTAN",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "8-Oct-2023",
    year: "2023"
  },
  {
    id: "2023-4",
    partner: "NATIONAL ALLIANCE FOR SAFE FOOD PAKISTAN",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Research Projects",
      "Capacity Development and Impact Training"
    ],
    duration: "Non-Specific",
    type: "food Industry",
    dominion: "National",
    date: "13-Sep-2023",
    year: "2023"
  },
  {
    id: "2023-5",
    partner: "URBAN PEST MANAGEMENT PAKISTAN",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Research Projects",
      "Capacity Development and Impact Training"
    ],
    duration: "Non-Specific",
    type: "Agricultural Industry",
    dominion: "National",
    date: "13-Sep-2023",
    year: "2023"
  },
  {
    id: "2023-6",
    partner: "MOMINA CHEEMA FOUNDATION",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development and Impact Training",
      "Social Work and civic Engagement Events"
    ],
    duration: "Non-Specific",
    type: "Social Welware Orfganization",
    dominion: "National",
    date: "10-Sep-2023",
    year: "2023"
  },
  {
    id: "2023-7",
    partner: "ULEARN PVT.PAKISTAN",
    scope: [
      "Knowledge Exchange",
      "Capacity Development and Impact Training",
      "Online Education & Learning"
    ],
    duration: "Non-Specific",
    type: "Academia-Educational Platform",
    dominion: "National",
    date: "20-Jun-2023",
    year: "2023"
  },
  {
    id: "2023-8",
    partner: "UNIVERSITY OF GUJRAT",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "15-May-2023",
    year: "2023"
  },
  {
    id: "2023-9",
    partner: "TIANSHUI NORMAL UNIVERSITY",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "International",
    date: "30-Apr-2023",
    year: "2023"
  },
  {
    id: "2023-10",
    partner: "LANZHOOU UNIVERSITY, PEOPLE’S REPUBLIC OF CHAINA",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "International",
    date: "24-Apr-2023",
    year: "2023"
  },
  {
    id: "2023-11",
    partner: "ORGANIZATION OF STANDING COMMITTEE ON SCIENTIFIC AND TECHNOLOGY COOPERATION",
    scope: [
      "Student Placement",
      "Research and Development",
      "Capacity Development and Impact Training",
      "Knowledge Exchange"
    ],
    duration: "Non-Specific",
    type: "Science & Technology Forumn",
    dominion: "National",
    date: "18-Apr-2023",
    year: "2023"
  },
  {
    id: "2023-12",
    partner: "PAKISTAN SCIENCE FOUNDATION",
    scope: [
      "Research Projects Funding",
      "Capcity Development",
      "Impact Training",
      "Knowledge Exchange"
    ],
    duration: "Non-Specific",
    type: "Research Funding Organization",
    dominion: "National",
    date: "18-Apr-2023",
    year: "2023"
  },
  {
    id: "2023-13",
    partner: "PUNJAB EMERGENCY SERVICE DEPARTMENT(RESCUE 1122)",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development and Impact Training",
      "Social Work and Civic Engagement Events"
    ],
    duration: "Non-Specific",
    type: "Social Welfare Organization",
    dominion: "National",
    date: "14-Apr-2023",
    year: "2023"
  },
  {
    id: "2023-14",
    partner: "UNIVERSITY OF SARGODHA",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "9-Apr-2023",
    year: "2023"
  },
  {
    id: "2023-15",
    partner: "KARAKORAM INTERNATIONAL UNIVERSITY GILGIT-BALTISTAN",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "6-Jan-2023",
    year: "2023"
  },
  // 2022
  {
    id: "2022-1",
    partner: "AL-KHAWARIZMI INSTITUTE OF COMPUTER SCIENCE(KICS),UET LAHORE",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "12-Dec-2022",
    year: "2022"
  },
  {
    id: "2022-2",
    partner: "PAKISTAN YOUNG INNOVATION MIDS(PYIMS), ISLAMABAD",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Research Projects",
      "Capacity Development and Impact Training"
    ],
    duration: "Non-Specific",
    type: "Enterpreneurship Forumn",
    dominion: "National",
    date: "22-Nov-2022",
    year: "2022"
  },
  {
    id: "2022-3",
    partner: "GUJRANWALA INSTITUTE OF FUTURE TECHNOLOGY (GIFT) GUJRANWALA",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "21-Oct-2022",
    year: "2022"
  },
  {
    id: "2022-4",
    partner: "PAKISTAN BOYS SCOUTS ASSOCIATION",
    scope: [
      "Knowledge Exchange",
      "Internships and Placements",
      "Joint Social Sector Projects",
      "Capacity Development and Impact Training",
      "Social Work and Civic Engagement Events"
    ],
    duration: "Non-Specific",
    type: "Social Welfare Organization",
    dominion: "National",
    date: "21-Jun-2022",
    year: "2022"
  },
  {
    id: "2022-5",
    partner: "MIR CHAKAR KHAN RIND UNIVERSITY OF TECHNOLOGY DEAR GHAZI KHAN",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "26-Apr-2022",
    year: "2022"
  },
  // 2021
  {
    id: "2021-1",
    partner: "MOHI UDDIN ISLAMIC UNIVERSITY, AJK",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "14-Dec-2021",
    year: "2021"
  },
  {
    id: "2021-2",
    partner: "PAKISTAN TOURISM DEVELOPMENT COOPERATION",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development"
    ],
    duration: "Non-Specific",
    type: "Tourism Industry",
    dominion: "National",
    date: "26-Jun-2021",
    year: "2021"
  },
  {
    id: "2021-3",
    partner: "NATIONAL SKILLS UNIVERSITY ISLAMABAD",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development",
      "Faculty & Staff Exchange"
    ],
    duration: "Non-Specific",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "26-Jun-2021",
    year: "2021"
  },
  {
    id: "2021-4",
    partner: "UNIVERSITY of HARIPUR",
    scope: [
      "Student Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capcity Development",
      "Joint Degree Certification Program"
    ],
    duration: "03 Years",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "Pending",
    year: "2021"
  },
  {
    id: "2021-5",
    partner: "INTER UNIVERSITY CONSORTIUM FOR PROMOTION OF SOCIAL SCIENCES",
    scope: [
      "Knowledge Exchange",
      "Academic Staff exchange",
      "Joint Research Projects & Publications",
      "Capacity Development and Impact Training",
      "Curriculum Development"
    ],
    duration: "03 Years",
    type: "Academia-Higher Education Institute",
    dominion: "National",
    date: "Pending",
    year: "2021"
  }
];
