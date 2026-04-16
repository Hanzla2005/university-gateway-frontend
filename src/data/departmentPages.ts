import nadiaBatoolImg from "@/assets/departments/Psychology/nadiaBatool.png";
import cbImg from "@/assets/departments/Psychology/characterBuilding.png";
import pinkRibbon1 from "@/assets/departments/Psychology/pinkRibbon1.png";
import pinkRibbon2 from "@/assets/departments/Psychology/pinkRibbon2.png";
import pinkRibbon3 from "@/assets/departments/Psychology/pinkRibbon3.png";
import pinkRibbon4 from "@/assets/departments/Psychology/pinkRibbon4.png";
import ds1 from "@/assets/departments/Psychology/3DaysSeminar1.png";
import ds2 from "@/assets/departments/Psychology/3DaysSeminar2.png";
import ee1 from "@/assets/departments/Psychology/environmentalExhibition1.png";
import ee2 from "@/assets/departments/Psychology/environmentalExhibition2.png";
import ee3 from "@/assets/departments/Psychology/environmentalExhibition3.png";
import ee4 from "@/assets/departments/Psychology/environmentalExhibition4.png";
import bcImg from "@/assets/departments/Psychology/competitionOnBreastCancer.png";
import fm1 from "@/assets/departments/Psychology/FaisalabadMou1.png";
import fm2 from "@/assets/departments/Psychology/FaisalabadMou2.png";
import cd1 from "@/assets/departments/Psychology/CharacterDay1.png";
import cd2 from "@/assets/departments/Psychology/CharacterDay2.png";
import cd3 from "@/assets/departments/Psychology/CharacterDay3.png";
import cd4 from "@/assets/departments/Psychology/CharacterDay4.png";
import cd5 from "@/assets/departments/Psychology/CharacterDay5.png";
import cd6 from "@/assets/departments/Psychology/CharacterDay6.png";
import fr1 from "@/assets/departments/Psychology/reliefCampagin1.png";
import fr2 from "@/assets/departments/Psychology/reliefCampagin2.png";
import fr3 from "@/assets/departments/Psychology/reliefCampagin3.png";

import botanyIlyas from "@/assets/departments/botany/faculty/ilyas.png";
import botanyJaveria from "@/assets/departments/botany/faculty/javeria.png";
import botanyShafia from "@/assets/departments/botany/faculty/shafia.png";

import botanyEv1 from "@/assets/departments/botany/events/1.png";
import botanyEv2 from "@/assets/departments/botany/events/2.png";
import botanyEv3 from "@/assets/departments/botany/events/3.png";
import botanyEv4 from "@/assets/departments/botany/events/4.png";
import botanyEv5 from "@/assets/departments/botany/events/5.png";
import botanyEv6 from "@/assets/departments/botany/events/6.png";
import botanyEv7 from "@/assets/departments/botany/events/7.png";
import botanyEv8 from "@/assets/departments/botany/events/8.png";
import botanyEv9 from "@/assets/departments/botany/events/9.png";

import botanyCw1 from "@/assets/departments/botany/communityWorks/1.png";
import botanyCw2 from "@/assets/departments/botany/communityWorks/2.png";
import botanyCw3 from "@/assets/departments/botany/communityWorks/3.png";
import botanyCw4 from "@/assets/departments/botany/communityWorks/4.png";

import botanyCl1 from "@/assets/departments/botany/classes/1.png";
import botanyCl2 from "@/assets/departments/botany/classes/2.png";
import botanyCl3 from "@/assets/departments/botany/classes/3.png";

import artRabeea from "@/assets/departments/artAndDesign/rabeea.png";
import artStudio from "@/assets/departments/artAndDesign/artStudio.png";
import artWp1 from "@/assets/departments/artAndDesign/events/wallPainting1.png";
import artWp2 from "@/assets/departments/artAndDesign/events/wallPainting2.png";
import artWp3 from "@/assets/departments/artAndDesign/events/wallPainting3.png";
import artWp4 from "@/assets/departments/artAndDesign/events/wallPainting4.png";

import mbF1 from "@/assets/departments/microbiology/faculty/adnanShereen.png";
import mbF2 from "@/assets/departments/microbiology/faculty/aftabAhmad.png";
import mbF3 from "@/assets/departments/microbiology/faculty/ahmadMujtaba.png";
import mbF4 from "@/assets/departments/microbiology/faculty/habibBokhari.png";
import mbF5 from "@/assets/departments/microbiology/faculty/hinaMukhtar.png";
import mbF6 from "@/assets/departments/microbiology/faculty/nasarKhan.png";
import mbF7 from "@/assets/departments/microbiology/faculty/sadiaMehmood.png";
import mbF8 from "@/assets/departments/microbiology/faculty/shahSaud.png";

import physicsTahir from "@/assets/departments/physics/faculty/tahirAmin.png";

export interface FacultyMember {
  name: string;
  designation: string;
  email?: string;
  image?: string;
}

export interface CourseEntry {
  title: string;
  credits: number;
}

export interface SchemeCategory {
  name: string;
  courses: CourseEntry[];
  totalCredits: number;
}

export interface ProgramOffered {
  name: string;
  description: string;
  objectives?: string[];
  majors?: { name: string; description?: string }[];
  scheme?: SchemeCategory[];
}

export interface DepartmentEvent {
  title: string;
  images?: string[];
}

export interface DepartmentPage {
  id: string;
  name: string;
  shortName: string;
  overview?: string;
  aimsAndObjectives?: string[];
  vision: string;
  mission: string;
  faculty: FacultyMember[];
  programs: ProgramOffered[];
  facilities?: string[];
  events?: DepartmentEvent[];
}

export const departmentPages: DepartmentPage[] = [
  {
    id: "art-and-design",
    name: "Department of Art and Design",
    shortName: "Art and Design",
    vision:
      "The Department of Art and Design will achieve excellence in the diverse domains of contemporary Art & Design by giving its graduates opportunity to develop skills through extensive practical work (i.e., hand-on) knowledge of state-of-the art techniques and processes to develop a strong portfolio in the visual as well as digital arts.",
    mission:
      "The Department of Art and Design will achieve its vision by inculcating creative thinking, artistic expression, effective communication, indigenous cultural awareness among its graduates. Moreover, the creative skill-based learning through collaborative initiatives by merging visual, oral, and written communication with creative and technological innovation will help to produce employable graduates in various industries including Tourism Industry to promote Heritage & Culture as well.",
    faculty: [
      {
        name: "Ms. Rabeea Yousafzai",
        designation: "HOD / Lecturer",
        image: artRabeea,
      },
    ],
    events: [
      { 
        title: "Wall Painting Competition held on 16th June 2022. In collaboration with WPSA.", 
        images: [artWp1, artWp2, artWp3, artWp4] 
      },
      {
        title: "Art Studio at Admin block KUM",
        images: [artStudio]
      }
    ],
    programs: [
      {
        name: "Bachelor of Design",
        description:
          "The Bachelors of Design is a four-year degree Program which aims to meet the expanding needs of the national and international media and Digital industries. Through experimentation and innovative methods, the degree cultivates students' creative abilities and instincts.\n\nThis degree is designed by keeping in mind the current academic policies of HEC regarding Arts and Media. This curriculum will meet the demands of today's highly digitized world by developing high-quality Artistic skills of digital technologies including both still and Motion based media.\n\nStudents learn all aspects of digital media creation, including digital object creation, sound design, and animation, and much more as part of this degree. The practical work approach will equip students with capacity to break into the freelancing market in the field of Digital Arts, as well as work in a variety of professional roles as part of growing teams.",
        objectives: [
          "To encourage and strengthen the students' creative abilities, through the combination of arts and design using traditional as well as computer-based graphic tools.",
          "To train a workforce to satisfy the demands of a wide range of national and international industries for computer-based graphic art (for example advertising, gaming, animation, Graphic arts and Video production, etc.)",
          "To prepare professional with diverse skills who can work in future as Digital Artists and young entrepreneurs.",
          "To prepare students with freelancing expertise and for a variety of careers in multimedia industries.",
        ],
        majors: [
          { name: "Graphic Design" },
          { name: "Animation" },
          { name: "Video Production" },
          { name: "Game Design" },
        ],
        scheme: [
          {
            name: "Foundation Courses",
            totalCredits: 33,
            courses: [
              { title: "Drawing I", credits: 3 },
              { title: "Drawing II", credits: 3 },
              { title: "Interior Design", credits: 3 },
              { title: "History of Art and Culture I", credits: 3 },
              { title: "History of Art and Culture II", credits: 3 },
              { title: "History of Design/Fundamentals of Photography", credits: 3 },
              { title: "Foundation of Game Design", credits: 3 },
              { title: "Foundation of Graphic Design", credits: 3 },
              { title: "Foundation of Video Production", credits: 3 },
              { title: "Foundation of Animation", credits: 3 },
              { title: "Art of Storyboarding", credits: 3 },
            ],
          },
          {
            name: "Major 1 – Graphic Design",
            totalCredits: 36,
            courses: [
              { title: "Ideation", credits: 3 },
              { title: "Graphic Design I", credits: 3 },
              { title: "Web Design and Development", credits: 3 },
              { title: "Typography and Calligraphy", credits: 3 },
              { title: "Visual Story Telling", credits: 3 },
              { title: "Cinematography", credits: 3 },
              { title: "Concept Art and Digital Illustrations", credits: 3 },
              { title: "Interactive Design", credits: 3 },
              { title: "Brand Identity and Branding", credits: 3 },
              { title: "Graphic Design II", credits: 3 },
              { title: "Motion Graphic I", credits: 3 },
              { title: "Motion Graphics II", credits: 3 },
            ],
          },
          {
            name: "Major 2 – Animation",
            totalCredits: 36,
            courses: [
              { title: "Ideation", credits: 3 },
              { title: "Animation I", credits: 3 },
              { title: "Animation II", credits: 3 },
              { title: "Animation III", credits: 3 },
              { title: "Documentary Filmmaking", credits: 3 },
              { title: "Typography and Calligraphy", credits: 3 },
              { title: "Visual Storytelling", credits: 3 },
              { title: "Concept art and Digital Illustration", credits: 3 },
              { title: "Sound Design", credits: 3 },
              { title: "Art of Animatics", credits: 3 },
              { title: "Character Design", credits: 3 },
              { title: "Environment Design", credits: 3 },
            ],
          },
          {
            name: "Major 3 – Video Production",
            totalCredits: 36,
            courses: [
              { title: "Ideation", credits: 3 },
              { title: "Cross Culture Research", credits: 3 },
              { title: "History of Film & TV", credits: 3 },
              { title: "Typography and Calligraphy", credits: 3 },
              { title: "Visual Storytelling", credits: 3 },
              { title: "Cinematography", credits: 3 },
              { title: "Sound Design", credits: 3 },
              { title: "Editing", credits: 3 },
              { title: "Brand identity and Branding", credits: 3 },
              { title: "Fiction Filmmaking", credits: 3 },
              { title: "VFX & Special Effects", credits: 3 },
              { title: "Documentary Filmmaking", credits: 3 },
            ],
          },
          {
            name: "Major 4 – Game Design",
            totalCredits: 36,
            courses: [
              { title: "Ideation", credits: 3 },
              { title: "Motion Graphics I", credits: 3 },
              { title: "AR/ VR Gaming", credits: 3 },
              { title: "Visual Storytelling", credits: 3 },
              { title: "Game Design I", credits: 3 },
              { title: "Concept Art and Digital Illustration", credits: 3 },
              { title: "Character Design", credits: 3 },
              { title: "Game Design II", credits: 3 },
              { title: "Interactive Design", credits: 3 },
              { title: "Typography and Calligraphy", credits: 3 },
              { title: "Environment Design", credits: 3 },
              { title: "Sound Design", credits: 3 },
            ],
          },
        ],
      },
    ],
    facilities: ["Art Studio at Admin block KUM"],
  },
  {
    id: "mountain-agriculture",
    name: "Department of Mountain Agriculture and Environmental Sciences",
    shortName: "Mountain Agriculture & Environmental Sciences",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "bioinformatics",
    name: "Department of Bioinformatics",
    shortName: "Bioinformatics",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "biomedical-engineering",
    name: "Department of Biomedical Engineering",
    shortName: "Biomedical Engineering",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "bioscience",
    name: "Department of Bioscience",
    shortName: "Bioscience",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "botany",
    name: "Department of Botany",
    shortName: "Botany",
    overview: "Murree is blessed with lush green forests, valuable medicinal plants and rich biodiversity. The sustainable management and development of these invaluable resources need properly educated, adequately trained and dedicated plant biologists. The department of Botany aims at promoting an integral understanding for utilization of various plant resources and to explore the underlying mechanisms for promoting eco-friendly environment. The study of plants is essential for the socioeconomic development of the country which require education and training in the field of Plant Sciences. With this aim, the department of Botany was established in 2020 and since then it has made significant progress. The department is committed to train human resources with scientific skills that can be used for the uplift and betterment of the society. The Department is striving at its best to boost the diverse applications of plants and their products and to tackle the emerging issues of the rapidly growing population. The vision is to equip youth with the latest knowledge in Plant Sciences, by incorporating modern skills. Our goals include production of trained manpower with an independent thinking, that can play a leading role in teaching, research, industry, forestry and various research organizations etc. Additionally, all our energies are directed towards promoting conducive environment of learning and grooming talent through academic and co-curricular activities. Purpose is to nurture well-trained visionary manpower to shoulder responsibilities in the future scenario of developed Pakistan.",
    vision: "Our vision is to improve the quality of education and status of learning, teaching and research in the field of Botany nationally and internationally.",
    mission: "The Department is committed to train students and scientist for the uplift of the community through teaching, research, and participation. We focus on the patterns and processes that enable predictive understanding of plants and their environments at local, regional, and global scales, leading to strengths in the areas of ecology, evolution, and systematics.",
    aimsAndObjectives: [
      "To promote and understand the importance and scope of the discipline.",
      "To achieve excellence in teaching of Botanical sciences.",
      "To create a scientific attitude to make students open-minded, critical, and curious.",
      "To develop skills in practical work, experiments, Equipments, and laboratory use along with the collection and interpretation of biological materials and data.",
      "To make students aware of Biodiversity and the importance of its conservation.",
      "To develop the ability for the application of acquired knowledge in various fields of life sciences to make our country self-sufficient."
    ],
    faculty: [
      {
        name: "Dr. Muhammad Ilyas",
        designation: "Assistant professor / HOD",
        email: "dr.milyas@kum.edu.pk",
        image: botanyIlyas,
      },
      {
        name: "Mrs. Jaweria Naz",
        designation: "Lecturer",
        email: "Patriotic1989@gmail.com",
        image: botanyJaveria,
      },
      {
        name: "Mrs. Shafia Farooq",
        designation: "Lecturer",
        email: "shafiafarooq1987@gmail.com",
        image: botanyShafia,
      }
    ],
    facilities: [
      "Well established class rooms and labs",
      "Herbarium facility (with ≈200 samples)",
      "Seed collection facility"
    ],
    events: [
      { title: "Departmental Events & Activities (Sports Gala, Conferences, Study Trips)", images: [botanyEv1, botanyEv2, botanyEv3, botanyEv4, botanyEv5, botanyEv6, botanyEv7, botanyEv8, botanyEv9] },
      { title: "Community Works (Plantation drives, Flood relief, Waste collection)", images: [botanyCw1, botanyCw2, botanyCw3, botanyCw4] },
      { title: "Academic Activities & Labs", images: [botanyCl1, botanyCl2, botanyCl3] }
    ],
    programs: [
      {
        name: "BS Botany",
        description: "Eligibility Criteria: Pre-Medical or equivalent degree with 45 % Marks.\n\nCurrently, the Department is offering education in basic degrees of Botany at bachelor (BS) level and it is committed to conduct high quality research which will fulfill the needs of the country in general and local population in particular. The department has developed upto date curriculum with strong applied side which is updated from time to time. The program includes diverse range of courses covering both traditional and modern scientific knowledge. Precise emphasis is laid on focusing the application of current advances in Genomics, Plant Physiology, DNA recombinant technology, Sequencing methods, Plant tissue and cell culture, Genetic engineering, Applied botany, Phyto-medicines, GMOs and climate change impact assessment on the flora of Pakistan. The department also offer 6 months' research training (optional) at BS level which enhance the problem solving skills of the students. However, in future, the department intend to initiate M. Phil and Ph.D level studies. The mission is to conduct innovative research, teaching and outreach on the patterns and processes of life with a focus on plants and their environments. Besides, the main focus is to train students at theoretical and practical levels to make them aware of the importance of plant sciences and its role in the uplift of the community.",
        scheme: [
          {
            name: "1st Semester",
            totalCredits: 17,
            courses: [
              { title: "Diversity of plants", credits: "3(2,1)" },
              { title: "Principles of Animal Life I", credits: "3(2,1)" },
              { title: "Physical Chemistry", credits: "3(2,1)" },
              { title: "English 1 (Reading & Writing Skills)", credits: "3(3,0)" },
              { title: "Pakistan Studies", credits: "2(2,0)" },
              { title: "Mathematics-I", credits: "3(3,0)" },
            ]
          },
          {
            name: "2nd Semester",
            totalCredits: 17,
            courses: [
              { title: "Plant Systematics, Anatomy and Developmental Embryology", credits: "3(2,1)" },
              { title: "Principles of Animal Life II", credits: "3(2,1)" },
              { title: "Inorganic Chemistry", credits: "3(2,1)" },
              { title: "Islamic Studies or Ethics", credits: "2(2,0)" },
              { title: "Introduction to ICT", credits: "3(2,1)" },
              { title: "English II (Composition Writing)", credits: "3(3,0)" },
            ]
          },
          {
            name: "3rd Semester",
            totalCredits: 16,
            courses: [
              { title: "Cytology, Genetics and Evolution", credits: "3(2,1)" },
              { title: "Diversity in Animals Invertebrates", credits: "3(2,1)" },
              { title: "Organic Chemistry", credits: "3(2,1)" },
              { title: "English-III (Communication & presentation skills)", credits: "3(3,0)" },
              { title: "Statistics-I", credits: "3(3,0)" },
              { title: "Field Botany I", credits: "1(0,1)" },
            ]
          },
          {
            name: "4th Semester",
            totalCredits: 16,
            courses: [
              { title: "Plant Physiology and Ecology", credits: "3(2,1)" },
              { title: "Diversity of Animals Chordates", credits: "3(2,1)" },
              { title: "Basic Biochemistry", credits: "3(2,1)" },
              { title: "Applied Botany", credits: "3(2,1)" },
              { title: "Statistics-II", credits: "3(3,0)" },
              { title: "Field Botany II", credits: "1(0,1)" },
            ]
          },
          {
            name: "5th Semester",
            totalCredits: 18,
            courses: [
              { title: "Bacteriology and Virology", credits: "3(2,1)" },
              { title: "Phycology and Bryology", credits: "3(2,1)" },
              { title: "Mycology and Plant Pathology", credits: "3(2,1)" },
              { title: "Diversity of Vascular Plants", credits: "3(2,1)" },
              { title: "Principles of Taxonomy", credits: "3(2,1)" },
              { title: "Conservation Biology", credits: "3(2,1)" },
            ]
          },
          {
            name: "6th Semester",
            totalCredits: 18,
            courses: [
              { title: "Plant Anatomy", credits: "3(2,1)" },
              { title: "Genetics-I", credits: "3(2,1)" },
              { title: "Plant Biochemistry-I", credits: "3(2,1)" },
              { title: "Plant Ecology-I", credits: "3(2,1)" },
              { title: "Plant Physiology-I", credits: "3(2,1)" },
              { title: "Cell Biology", credits: "3(2,1)" },
            ]
          },
          {
            name: "7th Semester",
            totalCredits: 18,
            courses: [
              { title: "Molecular Biology", credits: "3(2,1)" },
              { title: "Plant Biochemistry-II", credits: "3(2,1)" },
              { title: "Plant Ecology-II", credits: "3(2,1)" },
              { title: "Plant Physiology-II", credits: "3(2,1)" },
              { title: "Internship / Research Project (IP) / Optional course", credits: "3(2,1)" },
              { title: "Research Methodology", credits: "3(3,0)" },
            ]
          },
          {
            name: "8th Semester",
            totalCredits: 15,
            courses: [
              { title: "Genetics-II", credits: "3(2,1)" },
              { title: "Plant Systematics", credits: "3(2,1)" },
              { title: "Internship / Research Project / Optional course", credits: "3(2,1)" },
              { title: "Pharmacognosy", credits: "3(2,1)" },
              { title: "Plant tissue & Cell culture", credits: "3(2,1)" },
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tourism-and-hospitality",
    name: "Department of Tourism and Hospitality",
    shortName: "Tourism and Hospitality",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "english",
    name: "Department of English",
    shortName: "English",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "urdu",
    name: "Department of Urdu",
    shortName: "Urdu",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "physics",
    name: "Department of Physics",
    shortName: "Physics",
    overview: "Physics is one of the most significant discipline of natural sciences, which describes the nature and properties of matter and energy. Physics play key role in maintaining and developing stable economic growth since it offers new technological advances in various fields such as engineering, computer science and biomedical science.\n\nThe physics program, here at Kohsar University Murree, is designed such that it covers the needs of those who want to pursue higher education in the field of physics, seek jobs, or want to have strong base while working in allied technological areas. We strive to offer research and study environment such that it creates equal opportunity for all. Department of Physics is newly established department at Kohsar University Murree (KUM), Pakistan. The department aims to build a strong foundation for excellence and encourages the development as a premier department by igniting and promoting enthusiasm, interest, and passion in the study of physics. Furthermore, department will train the next generation professionals and experts to gain advance knowledge in different fields of physics.",
    vision: "To build a strong foundation for excellence and encourage development as a premier department by igniting enthusiasm, interest, and passion in the study of physics.",
    mission: "To train the next generation professionals and experts to gain advance knowledge in different fields of physics and offer a research and study environment that creates equal opportunity for all.",
    faculty: [
      { name: "Dr. Muhammad Sultan", designation: "Professor BPS-21 / Dean of Faculties" },
      { name: "Dr. Syed Tahir Amin", designation: "Assistant Professor BPS-19 / HOD Physics", image: physicsTahir },
      { name: "Dr. Darvaish Khan", designation: "Assistant Professor, IPFP" },
      { name: "Mr. Ammar Shahid", designation: "Lecturer BPS-18" },
      { name: "Engr. Zeeshan Tariq", designation: "Lab. Incharge" }
    ],
    programs: [
      {
        name: "BS Physics",
        description: "Department of physics is newly established department at Kohsar University Murree (KUM), Pakistan. The department strongly aims to build a foundation for excellence and encourages the development as a premier department by igniting and promoting enthusiasm, interest, and passion in the study of physics. Furthermore, department will train the next generation professionals and experts to gain advance knowledge in different fields of physics. We are going to launch BS program with emphasis on Applied, Computational and Condensed Matter Physics. The courses taught at Department of Physics will provide strong analytical skills along with a wide range of mathematical and computational background.\n\nEligibility Criteria: Candidates with at least 45% marks in FSc (Pre-engineering or O/A level with Physics and Mathematics as major subjects) are eligible to apply for the admission in BS program.\n\nCareer Opportunities:\nGraduates of BS in Physics may pursue a career path in high technology companies, government laboratories, educational institutions, or proceed to higher studies (MS and PhD). Additionally, students are expected to develop transferable skills such as communications, problem-solving, and decision-making throughout their studies which they can utilize in many spheres of employment.",
        majors: [
          { name: "Applied Physics", description: "Nanoscience, Automation, Biophysics, and Photonics" },
          { name: "Computational and Condensed matter physics", description: "Topology in Condensed Matter Physics, Computational Physics, and Modeling and Simulations" }
        ],
        scheme: [
          {
            name: "1st Semester",
            totalCredits: 16,
            courses: [
              { title: "English-I", credits: "3" },
              { title: "Mechanics", credits: "4" },
              { title: "Calculus-I", credits: "3" },
              { title: "Islamic Studies/ Ethics and Moral Values", credits: "2" },
              { title: "GOF-I*", credits: "3" },
              { title: "Lab-I (Mechanics)", credits: "1" }
            ]
          },
          {
            name: "2nd Semester",
            totalCredits: 18,
            courses: [
              { title: "Introduction to Computing", credits: "4" },
              { title: "Electricity & Magnetism", credits: "4" },
              { title: "GRF-I*", credits: "3" },
              { title: "Calculus-II", credits: "3" },
              { title: "English-II", credits: "3" },
              { title: "Lab-II (Electricity & Magnetism)", credits: "1" }
            ]
          },
          {
            name: "3rd Semester",
            totalCredits: 16,
            courses: [
              { title: "English-III", credits: "3" },
              { title: "Differential Equations", credits: "3" },
              { title: "GRF-II*", credits: "3" },
              { title: "Heat & Thermodynamics", credits: "3" },
              { title: "Waves & Oscillations", credits: "3" },
              { title: "Lab-III (Heat & Thermodynamics)", credits: "1" }
            ]
          },
          {
            name: "4th Semester",
            totalCredits: 19,
            courses: [
              { title: "GOF-II*", credits: "3" },
              { title: "Modern Physics", credits: "3" },
              { title: "Linear Algebra", credits: "3" },
              { title: "Optics", credits: "3" },
              { title: "Probability and Statistics", credits: "3" },
              { title: "GRF-III*", credits: "3" },
              { title: "Lab-IV (Optics)", credits: "1" }
            ]
          },
          {
            name: "5th Semester",
            totalCredits: 17,
            courses: [
              { title: "Classical Mechanics", credits: "3" },
              { title: "Electronics", credits: "3" },
              { title: "Electrodynamics-I (EMT-I)", credits: "3" },
              { title: "Pakistan Studies and Global Perspectives", credits: "2" },
              { title: "Mathematical Methods of Physics-I (MMP-I)", credits: "3" },
              { title: "Lab-V (Electronics & Modern Physics)", credits: "3" }
            ]
          },
          {
            name: "6th Semester",
            totalCredits: 18,
            courses: [
              { title: "Solid State Physics-I (SSP-I)", credits: "3" },
              { title: "Quantum Mechanics-I (QM-I)", credits: "3" },
              { title: "Electrodynamics-II (EMT-II)", credits: "3" },
              { title: "Mathematical Methods of Physics-II (MMP-II)", credits: "3" },
              { title: "Nuclear Physics", credits: "3" },
              { title: "Elective-I", credits: "3" }
            ]
          },
          {
            name: "7th Semester",
            totalCredits: 15,
            courses: [
              { title: "Solid State Physics-II (SSP-II)", credits: "3" },
              { title: "Quantum Mechanics-II (QM-II)", credits: "3" },
              { title: "Statistical Physics", credits: "3" },
              { title: "Project/Internship/Thesis of Research/Elective-II", credits: "3" },
              { title: "Elective-IV", credits: "3" }
            ]
          },
          {
            name: "8th Semester",
            totalCredits: 15,
            courses: [
              { title: "Atomic & Molecular Physics", credits: "3" },
              { title: "Project/Internship/Thesis of Research/Elective-III", credits: "3" },
              { title: "Elective-V", credits: "3" },
              { title: "Elective-VI", credits: "3" },
              { title: "Elective-VII", credits: "3" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "computer-science",
    name: "Department of Computer Science",
    shortName: "Computer Science",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "mathematics",
    name: "Department of Mathematics",
    shortName: "Mathematics",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "psychology",
    name: "Department of Psychology",
    shortName: "Psychology",
    overview: "Psychology is an emerging subject in the field of health and sciences. With the advancement in technology, there is a specific focus on the diseases of the brain and their treatment. The Department of Psychology is committed to the discovery of knowledge about mind, brain and behaviour, and to sharing that knowledge and the research processes that produce it with our students and community. The department integrates undergraduate education, research and services activities to advance the overall mission of the university. The Department while keeping its emphasis on applied research intact substantially increased its teaching and training activities. Moreover, the Department will provide research facilities at MS/MPhil level in studying the racial attitudes and prejudice, different types of mental disorders, causes of gender and ethnic discrimination, intellectual abilities and aptitude in relation to cultural diversities, human resource management in relation to cultural belongings. The field of psychology refers to the application of knowledge to develop better understanding of cognitive and behavioral patterns.\n\nThe department of Psychology at Kohsar University Murree (KUM) seeks to provide students with opportunity to engage in an intensive academic environment that includes multi-disciplinary, advanced research, and an entrepreneurial Skills. The Department of Psychology provides students with an opportunity to interact with renowned psychologists through national and international conferences for achieving the highest standards of excellence in teaching, learning, research, and professional expertise.",
    aimsAndObjectives: [
      "To ensure that the students are aware of the nature, origin, history and scope of Psychology as a modern discipline and its relationship with other sciences.",
      "To be aware of the different perspectives-functional systems and theories-used in Psychology in order to study, understand and explain its subject matter.",
      "To be aware of the experimental and experimental underpinning of the study of Psychology and develop a scientific approach to the subject.",
      "To be conversant with the biological, biochemical and genetic basis of behavior.",
      "To be fully knowledgeable about the cognitive, behavioral and personality functioning of the individual: developmentally, interpersonally and socially.",
      "To be familiar with the methods it implies for studying (as it is) and changing behavior (as it should be) and the strengths and weaknesses of these methods.",
      "To be aware of the moral and ethical implications of psychological theories, procedures and practices.",
      "To have a working knowledge of the application and the practice of Psychology in real life and have all the necessary skills to continue a specialist study later on and achieve professional qualifications.",
      "To be able to conceive, design, and conduct small scale research project and analyze the information and share it with other colleagues.",
      "To ensure that Psychology is taught as an applied discipline in scientist-reflective.",
      "To be conversant with the biological, biochemical, psychosocial and genetic basis of behavior.",
      "Every student must participate in seminar and annual research papers in each course on current respective area of Psychology.",
      "The student should develop insight and personality growth through internship.",
      "Individually students need to inculcate the spirit of applying control over unbridled instinctive and impulsive actions, so that they acquire insight and behave on their rational judgment."
    ],
    vision: "To prepare professional psychologists for making contribution in diverse jobs like clinical psychologists, career counseling, academia, military services, special education, Social Walfare, aids control program, NGOs, HR, Marketing and Organizational Development conasultations. educate students with the scientific knowledge of Psychology through proficient teaching, professional training, and modern research which will enable them to serve in diverse fields in general and psychological professional as particular. To engage in psychological research and provide excellent teaching and service, informed and enhanced by our efforts to discover, synthesize and transmit knowledge.",
    mission: "The mission of department of Psychology is to prepare Ready to Serve Mental Health Professionals through modern education, up-to-date research and practical exposure, for contributing in the mental health of the society.",
    faculty: [
      {
        name: "Dr. Naila Batool",
        designation: "Ph.D International Islamic University, Islamabad",
        email: "nailabatool@kum.edu.pk",
        image: nadiaBatoolImg,
      }
    ],
    events: [
      { title: "Character Building Awareness Sessions", images: [cbImg] },
      { title: "Pink Ribbon Day", images: [pinkRibbon1, pinkRibbon2, pinkRibbon3, pinkRibbon4] },
      { title: "3 Days National Seminar on Disability Issues", images: [ds1, ds2] },
      { title: "Environmental Exhibition", images: [ee1, ee2, ee3, ee4] },
      { title: "Poster Competition on Breast Cancer", images: [bcImg] },
      { title: "MoU with Faisalabad Medical University", images: [fm1, fm2] },
      { title: "Character Day Celebration", images: [cd1, cd2, cd3, cd4, cd5, cd6] },
      { title: "Flood Relief Campaign", images: [fr1, fr2, fr3] }
    ],
    programs: [],
  },
  {
    id: "sociology",
    name: "Department of Sociology",
    shortName: "Sociology",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "statistics",
    name: "Department of Statistics",
    shortName: "Statistics",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "political-science",
    name: "Department of Political Science",
    shortName: "Political Science",
    vision: "",
    mission: "",
    faculty: [],
    programs: [],
  },
  {
    id: "microbiology",
    name: "Department of Microbiology",
    shortName: "Microbiology",
    overview: "The Department of Microbiology was established two years back at the KU, Murree. The department started with the BS Microbiology program in 2021. This field is becoming very popular in the region and across due to its mounting scope especially after siege of covid-19 across the globe. In addition to the BS program the department has started MS programs in Microbiology, Admissions will be announced soon for Fall-2022.",
    vision: "The interactive programs in Microbiology are intended to prepare aspiring skilled workforce to pursue not only a successful career in the field of Microbiology, but also translate knowledge into products through translational research.",
    mission: "The BS Microbiology program (Department of Biosciences) of KU Murree emphasizes not only on the education and training of the students in diverse disciplines of Microbiology, but also aims to expand the current body of knowledge through research. The graduates would gain in-depth knowledge about the beneficial as well as disease-causing microbes and would also contribute in enhancing the community understanding of the potential and challenges of microbes prevailing in the region. The program has been carefully designed to train students to understand biodiversity and evolutionary dynamics of microbes, molecular mechanism of drug resistance, and exploring new materials or natural products to be used as drug and vaccines, as well as plants pests or virus. The syllabi will introduce the students with the environmental, medical and industrial microbiology; biochemistry; cell biology; molecular biology; virology; mycology; immunology; plant pathology, microbiome and forensics microbiology or diagnostics and more. The graduate research projects will be focused on contemporary local and global challenges such as environmental waste management, sanitation and hygiene, water and food borne diseases and scientific discoveries into diagnostics, therapeutics, and vaccines against human, plant and animal diseases.\n\nStudents studying at the department will benefit from working with experts, remarkable library and state-of-the-art facilities. Department of Microbiology believe in strengthening the linkage between industry and institutions for sustainable growth and productivity.",
    facilities: [
      "Next Generation sequencer iSeq 100",
      "LC-MS",
      "Fluorescence microscope",
      "Ultracentrifuge",
      "Real Time PCR",
      "Tissue culture facility",
      "Gradient PCR",
      "Automatic tissue processor",
      "ELISA plate reader"
    ],
    faculty: [
      { name: "Professor Dr. Habib Bokhari (VC, KUM)", designation: "Professor", image: mbF4 },
      { name: "Dr. Aftab Ahmad", designation: "HOD / Assistant Professor", email: "aftabahmad@kum.edu.pk", image: mbF2 },
      { name: "Dr. Nasar Khan", designation: "Assistant Professor", email: "nasarkhan@kum.edu.pk", image: mbF6 },
      { name: "Dr. Muhammad Adnan Shereen", designation: "Lecturer", email: "adnan.shereen@kum.edu.pk", image: mbF1 },
      { name: "Dr. Sadia Mehmood Satti", designation: "Lecturer", email: "sadiasatti@kum.edu.pk", image: mbF7 },
      { name: "Dr. Ahmad Mujtaba", designation: "Assistant Professor (IPFP)", email: "amujtaba@kum.edu.pk", image: mbF3 },
      { name: "Dr. Shah Saud", designation: "Assistant Professor (IPFP)", email: "saud_lodhi@yahoo.com", image: mbF8 },
      { name: "Dr. Hina Mukhtar", designation: "Assistant Professor (IPFP)", email: "hinamukhtar90@hotmail.com", image: mbF5 }
    ],
    programs: [
      {
        name: "BS Microbiology",
        description: "Duration: A four-year degree program spread over 8 semesters.\nEligibility: F.Sc. Pre-Medical or equivalent qualification with at least 50% marks. Age limit 24 years.\n\nBachelor of Science in Microbiology aims to produce professionals who have thorough knowledge and skills to develop a career in any sub discipline ranging from Human Health (Diagnostics; Epidemiology & Sanitation & Hygiene; Immunology; Vaccines) as well as Livestock Health, Plant Microbiology to Environmental Microbiology. The program is committed to provide the budding scientists with an environment conducive for learning and critical thinking in different aspects of biological sciences. A degree in Microbiology discipline will prepare students for a promising career in the field of teaching, clinical and research institutes, pharmaceutical companies, biotechnology industries, etc. In short, graduates with focused and unique understanding as well as expertise in techniques involved in bacteriology/mycology/virology, emergence and re-emergence of infectious diseases, resistance acquired by the bacteria and viruses against antibacterial and antiviral drugs, failure of successful vaccines against infectious diseases. Upon successful completion of the degree program, the graduates should be able to apply knowledge of bacteriology/mycology/virology for agriculture, animal health, environment and clinical research in an applied context.",
      },
      {
        name: "MS Microbiology",
        description: "Duration: A two-year degree program spread over 4 semesters.\nEligibility: 16 years degree in relevant field from HEC accredited universities with CGPA 2.0/4 or 50% in annual system.\n\nMicrobiology program covers range of specialized fields, from more applied disciplines such as medical, public health, industrial, and food microbiology, to basic fields of immunology, microbial ecology and evolution, physiology, genetics of microbes, antibiotic resistance, microbial forensics and host-pathogen interaction. The training through taught courses will help students to understand the disease-causing potential of various pathogenic bacteria, fungi and viruses, and the responses of the immune system. These studies will teach the students that how knowledge gained by studying microbiology and immunology can be applied and will prepare them for suitable careers in areas as diverse as medicine (disease epidemiology), brewing, food spoilage, control of environmental pollution, biotechnology, diagnostics and therapeutics.",
      }
    ]
  }
];
