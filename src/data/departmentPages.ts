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

import bioinformaticsSara from "@/assets/departments/bioinformatics/faculty/sara.png";
import bioinformaticsShehroz from "@/assets/departments/bioinformatics/faculty/shehroz.png";
import bioinformaticsRozeena from "@/assets/departments/bioinformatics/faculty/rozeena.png";

import csWaqas from "@/assets/departments/CS/faculty/waqas.png";
import csRehan from "@/assets/departments/CS/faculty/rehan.png";
import csFaran from "@/assets/departments/CS/faculty/faran.png";
import csAsma from "@/assets/departments/CS/faculty/asma.png";
import csHussain from "@/assets/departments/CS/faculty/husssain.png";

import agriShahida from "@/assets/departments/AgricultureAndEnvironmentalScience/faculty/shahida.png";
import agriSumaira from "@/assets/departments/AgricultureAndEnvironmentalScience/faculty/sumaira.png";
import agriZia from "@/assets/departments/AgricultureAndEnvironmentalScience/faculty/zia.png";
import agriKhadija from "@/assets/departments/AgricultureAndEnvironmentalScience/faculty/khadija.png";

import bioAftab from "@/assets/departments/bioscience/faculty/aftab.png";
import bioGallery1 from "@/assets/departments/bioscience/gallery1.png";
import bioGallery2 from "@/assets/departments/bioscience/gallery2.png";

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
  plos?: string[];
  slos?: string[];
  careersOverview?: string;
  careers?: string[];
  mous?: string[];
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
  aimsAndObjectivesOverview?: string;
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
    id: "bioinformatics",
    name: "Department of Bioinformatics",
    shortName: "Bioinformatics",
    overview: "Bioinformatics is a broad scientific research field that combines Biology, Computer Science, Data Science, Mathematics and Statistics to drive the analysis of the vast amount of data associated with modern Bioscience. It involves the scientific interpretation with the computational information and analysis of various factors which affects the movement in our biological systems. Computers and software tools are extensively used for observations of these databases and preserve them for further analyses.\n\nAs computational power increases and becomes more accessible, the age of Bioinformatics will accelerate our ability to understand and tackle global challenges like never before. From discovering new antibiotics to fighting pandemics or making agriculture more sustainable, the promise is great and the applications are already rolling in. The Department of Bioinformatics at Kohsar University is established in 2022. It is housed in GPO Chowk Campus at Kohsar University Murree with state of the art computational lab and well-designed classrooms. Currently the department is run by three faculty members with an aim to expand it further.",
    vision: "Department of Bioinformatics at Kohsar University Murree aims to postulate an encouraging and varied research environment within which fundamental and existing areas of modern Biology can be studied. Faculty of the department of Bioinformatics intends to train the next generation professionals and researchers in the interdisciplinary field of Bioinformatics that is required to design and implement novel methods and tools to provide a better understanding of biological systems.",
    mission: "Our mission is to to translate knowledge into products through translational research or complex data analysis and prepare skilled researchers with practical knowledge of the field so that they can pursue career in diverse academic discipline of Biosciences.",
    aimsAndObjectivesOverview: "Primary objecive of Bioinformatics is to enhance the understading of biological processes. Our goal is that the graduates should have strong understanding of:",
    aimsAndObjectives: [
      "Various aspects of biological systems.",
      "Different areas of Computer Science including programming languages.",
      "Existing Bioinformatics tools and databases.",
      "Computational applications related to biological systems.",
      "Analysis and interpretation of biological data."
    ],
    faculty: [
      {
        name: "Dr. Sara Sarfaraz",
        designation: "Assistant Professor (HOD)",
        email: "dr.sara@kum.edu.pk",
        image: bioinformaticsSara
      },
      {
        name: "Mr. Muhammad Shehroz",
        designation: "Lecturer",
        email: "muhammadshehroz@kum.edu.pk",
        image: bioinformaticsShehroz
      },
      {
        name: "Ms. Rozeena Arif",
        designation: "Lecturer",
        email: "rozeenaarif@kum.edu.pk",
        image: bioinformaticsRozeena
      }
    ],
    programs: [
      {
        name: "BS Bioinformatics",
        description: "Total numbers of Credit hours 132\nDuration 4 years (8 Semesters)\nSemester duration 16-18 weeks\nCourse Load per Semester 15-18 credit hours\nNumber of courses per semester 4-6 (not more than 3 lab/ practical courses)",
        plos: [
          "Explain the relationship between genes and proteins and use of computer to handle biological data.",
          "Have a deeper insight into various tools and techniques commonly used in Bioinformatics.",
          "Be able to identify diversified areas and applications like Genomics, Drug Designing, Agri- and Health Informatics, Biotechnology, Systems Biology and others."
        ],
        careersOverview: "Bioinformatics or computational biology is an interdisciplinary field of science that combines computer science, mathematics, engineering and statistics to understand and interpret biological information. It is the application of computer technology to the management of biological data. Bioinformatics is an emerging scientific discipline with highly remunerative career options.",
        careers: [
          "Bioinformatics has become an important part of many areas of Biology. It plays an important role in Biomedical Research.",
          "The career prospect in Bioinformatics has been gradually increasing with the use of information technology in the area of Molecular Biology.",
          "Bioinformatics degree holder can work in all sectors of Pharmaceutical, Biomedical organizations, Biotechnology, scientific research institutes, hospital, industry and even NGOs.",
          "You can work in private & government hospitals and as a teacher in private and public colleges/universities.",
          "One can also find employment in manufacturing industries of various biomedical products.",
          "Students having a degree in Bioinformatics can be a part of the leading IT Companies.",
          "Other career opportunities include database design & maintenance, proteomics, pharmacology, sequence assembly & analysis, informatics developer, bio analytics, clinical pharmacologist, etc.",
          "Bioinformatics has applications in broad range of fields including microbial genome applications, molecular medicine, personalized medicine, gene therapy, drug development, evolutionary studies, Biotechnology, climate change studies, crop improvement, forensic analysis, improving nutritional quality and many others."
        ],
        scheme: [
          {
            name: "Semester 1",
            totalCredits: 17,
            courses: [
              { title: "Mathematics (MATH-)", credits: "3(3-0)" },
              { title: "Chemistry (CHEM-)", credits: "3(3-0)" },
              { title: "Introduction to Computer (CSC-)", credits: "3(2-1)" },
              { title: "English-I (Functional English) (ENG-)", credits: "3(3-0)" },
              { title: "Islamic Studies or Ethics (IST-/ETH-)", credits: "2(2-0)" },
              { title: "Basic Cell Biology (BIF-111)", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 2",
            totalCredits: 16,
            courses: [
              { title: "English II (Communication Skills) (ENG-)", credits: "3(3-0)" },
              { title: "Pakistan Studies (PST-)", credits: "2(2-0)" },
              { title: "Programming Fundamentals (CSC-)", credits: "4(3-1)" },
              { title: "Biochemistry I (BIF-121)", credits: "4(3-1)" },
              { title: "Bioinformatics-I (BIF-122)", credits: "3(2-1)" }
            ]
          },
          {
            name: "Semester 3",
            totalCredits: 18,
            courses: [
              { title: "English III (Technical Writing and Presentation Skills) (ENG-)", credits: "3(3-0)" },
              { title: "Calculus I (MATH-)", credits: "3(3-0)" },
              { title: "Object Oriented Programming (CSC-)", credits: "4(3-1)" },
              { title: "Bioinformatics Computing I (BIF-231)", credits: "4(3-1)" },
              { title: "Molecular Biology (BIF-232)", credits: "4(3-1)" }
            ]
          },
          {
            name: "Semester 4",
            totalCredits: 18,
            courses: [
              { title: "Sociology (SOC-)", credits: "3(3-0)" },
              { title: "Discrete Mathematics (MATH-)", credits: "3(3-0)" },
              { title: "Data Structure and Algorithms (CSC-)", credits: "4(3-1)" },
              { title: "Ethical and Legal Issues in Bioinformatics (BIF-241)", credits: "2(2-0)" },
              { title: "Bioinformatics Database Development (BIF-242)", credits: "3(2-1)" },
              { title: "Essential of Genetics (BIF-243)", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 5",
            totalCredits: 18,
            courses: [
              { title: "Linear Algebra and Differential Equation (MATH-)", credits: "3(3-0)" },
              { title: "Biochemistry II (BIF-351)", credits: "3(3-0)" },
              { title: "Bioinformatics II (BIF-352)", credits: "3(2-1)" },
              { title: "Probability and Biostatistics (BIF-353)", credits: "3(3-0)" },
              { title: "Genomics (BIF-354)", credits: "3(3-0)" },
              { title: "Elective I", credits: "3" }
            ]
          },
          {
            name: "Semester 6",
            totalCredits: 18,
            courses: [
              { title: "Recombinant DNA Technology (BIF-361)", credits: "3(2-1)" },
              { title: "Bioinformatics Computing II (BIF-362)", credits: "3(0-3)" },
              { title: "Proteomics (BIF-363)", credits: "3(3-0)" },
              { title: "Modern Programming Languages (BIF-364)", credits: "3(2-1)" },
              { title: "Scientific Writing (BIF-365)", credits: "3(3-0)" },
              { title: "Elective II", credits: "3" }
            ]
          },
          {
            name: "Semester 7",
            totalCredits: 18,
            courses: [
              { title: "Bioinformatics Software Engineering (BIF-471)", credits: "3(2-1)" },
              { title: "Systems Biology (BIF-472)", credits: "3(3-0)" },
              { title: "Artificial Intelligence (CSC-)", credits: "3(3-0)" },
              { title: "Special Topics in Bioinformatics (BIF-473)", credits: "3(3-0)" },
              { title: "Biological Modeling and Simulation (BIF-474)", credits: "3(2-1)" },
              { title: "Research Project part I/ Internship (BIF-475)", credits: "3(0-3)" }
            ]
          },
          {
            name: "Semester 8",
            totalCredits: 9,
            courses: [
              { title: "Elective III", credits: "3" },
              { title: "Elective IV", credits: "3" },
              { title: "Research Project part II / Internship (BIF-481)", credits: "3(0-3)" }
            ]
          }
        ]
      }
    ]
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
    overview: "The Department of Biosciences was established a year back at the KUM, Murree. The department started with the BS Microbiology program in 2021. This program is becoming very popular in the country and will fulfill the future needs of Pakistan in this very important field of study. In addition to the BS program the department has started MS programs in Microbiology, Admissions will be announced soon for fall 2022.\n\nWelcome to the Department of Biosciences at Jhika Galli campus Kohsar University Murree. The Department of Biosciences was established in 2020 with a mission to provide quality education and research in emerging horizons of biosciences. This department aims to equip the learner with emerging technologies and nascent skills currently being applied in various fields of modern biological sciences. Biology interconnects to almost all fields of basic and applied sciences. The department of Biosciences is proving as unique platform of emerging disciplines of life sciences. Our collaborative research based, and conducive teaching learning culture empowers our students with a excellent understanding of life sciences systems through genetic, molecular, and computational methods of exploration. The department is growing at excellent pace in various branches of biosciences offering BS, MS programs in the fields of Microbiology, Bioinformatics, Biochemistry, and Zoology. Currently, we are an impressive team of PhD faculty members groomed and trained in the top labs and universities of the developed countries including USA, UK, Denmark, and France. The department offers 3 BS and 3 MS programs in different domains of biological sciences with a considerable student body.\n\nThe department welcomes a students and researchers each year. We have strong research linkages and collaborations with some celebrated labs of USA, Denmark, Netherlands, Italy and UK where our undergraduate graduate students have secured future opportunities of international exposure to equip themselves with advanced skills and research techniques.\n\nOur research spans the breadth of biological sciences, and currently we are moving ahead with interdisciplinary approach to interlink the departments. Departmental Research Publications 2021-22: >20",
    vision: "The Department of Biosciences will formally combine the research and teaching excellence of the Departments of bioinformatics, biomedical engineering, microbiology and Zoology, allowing us to build upon KUM legacy leading biological research in an increasingly interdisciplinary manner. The Department of Biosciences will continue to teach undergraduate course, as well as launching a new BS and MS programmes. Students studying at the Department will benefit from working with experts, remarkable library and state-of-the-art facilities.",
    mission: "Department of Biosciences believe in strengthening the linkage between industry and institutions for sustainable growth and productivity.",
    faculty: [
      {
        name: "Dr. Aftab Ahmad",
        designation: "Assistant Professor / HOD | Specialization: Human Gut microbiota dynamics in health & Disease conditions.",
        image: bioAftab
      },
      {
        name: "Dr. Nasar Khan",
        designation: "Assistant Professor | Specialization: Regenerative medicine, umbilical cord stem cell therapy"
      },
      {
        name: "Dr. Muhammad Adnan Shereen",
        designation: "Faculty Member | Specialization: Virology/Zika Virus"
      },
      {
        name: "Dr. Sadia Mehmood Satti",
        designation: "Faculty Member | Specialization: Microbial Degradation of plastics"
      },
      {
        name: "Dr. Muhammad Imran Khan",
        designation: "Faculty Member | Specialization: Biomedical Engineering"
      },
      {
        name: "Mr. Shahid Hussain",
        designation: "Faculty Member | Specialization: Cancer Exosomes Biology."
      }
    ],
    programs: [
      {
        name: "Undergraduate Programs",
        description: "• Bachelor of Science in Microbiology\n• Bachelor of Science in Bioinformatics\n• Bachelor of Science in Biotechnology"
      },
      {
        name: "Graduate Programs",
        description: "• Master of Science in Microbiology\n• Master of Science in Bioinformatics\n• Master of Science in Biotechnology"
      }
    ],
    events: [
      {
        title: "Photo Gallery",
        images: [bioGallery1, bioGallery2]
      }
    ]
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
    name: "Department of Tourism and Hospitality Management",
    shortName: "Tourism and Hospitality Management",
    overview: "The Tourism & Hospitality program intends to create an intellectual, collaborative, ethical and inclusive environment for students, faculty, industry and community to produce innovative education, leadership and research opportunities. This will be achieved by producing leaders and professionals in the field of Tourism and Hospitality Management using modern pedagogical approaches, intensive fieldwork, internships, community work, and hands-on experiences/extensive laboratory work. This practical work approach will equip them with the essential soft skills, critical thinking, and hospitality-specific content knowledge. This program will train our students to deal in diverse fields ranging from Tour Operations, Culinary, Restaurants, Front Office, Housekeeping. The program intends to advance its progressive vision and mission of maintaining high student achievement and research excellence by setting high standards of imparting knowledge through best management practices, which will help raise the tourism and hospitality industry standards and providing highly progress careers to its graduating students.",
    vision: "Department of Tourism and Hospitality Management envisions to rebrand the tourism sector of Pakistan through highly skilled professional work force in the domain of tourism and hospitality, encourage tourism entrepreneurship and broaden the canvas of tourism sector through linking the cottage and agriculture sector to introduce new tourism products in the booming tourism industry of the country.",
    mission: "The department of tourism and hospitality management, is keen on imparting skills based education, providing dynamic environment to its students through reorganized curriculum, experimental/industry-based learning and with its international outreach and linkages with world-class schools of tourism and hospitality.",
    aimsAndObjectives: [],
    aimsAndObjectivesOverview: "The Tourism & Hospitality program intends to create an intellectual, collaborative, ethical and inclusive environment for students, faculty, industry and community to produce innovative education, leadership and research opportunities. This will be achieved by producing leaders and professionals in the field of Tourism and Hospitality Management using modern pedagogical approaches, intensive fieldwork, internships, community work, and hands-on experiences/extensive laboratory work.",
    faculty: [],
    programs: [
      {
        name: "BS in Tourism and Hospitality Management",
        description: "Duration: 04 Years (08 Semesters)\nOffering Campus: Punjab House\nAdmission Requirements: Higher Secondary School certificate or equivalent (2nd division with at least 50% marks) in pre-engineering/pre-medical/Intermediate in computer sciences/relevant subjects.",
        plos: [
          "To prepare professional business leaders with diverse skills who can work in future as policy makers and young entrepreneurs",
          "To develop new tourism/hospitality product and explore the diverse tourism attraction which enhancing the opportunities for tourism in the region.",
          "To bridge the gap between the academia & industry that supports the development of the industry",
          "To enable students to promote tourism for the sustainable development of the region",
          "To prepare professionals in the field of Tourism and Hospitality who can cope with arising issues in the field"
        ],
        slos: [
          "To equip students with all skills needed in tour operations.",
          "To equip students with all skills needed in the restaurants ranging from production, Bakery & Confectionary to culinary arts.",
          "To equip students with all the skills needed in the Hospitality industry e.g. Front Office, housekeeping.",
          "Work on the self-confidence, language proficiency and public dealing of the students to make them able to deal with international tourists as effective front office managers.",
          "To inculcate the creative thinking and innovation among students that could make them effective entrepreneurs in the tourism sector.",
          "The program envisages to groom future leaders in the tourism sector who could take lead for the growth of tourism sector and make it an effective tool for the growth of the region.",
          "Skill development to effectively manage Sanitation & Hygiene of the resorts.",
          "Sensitize the students of the tourism sector in context of cultural, social, and psychological behavior of people, to make them more hospitable and effective hosts."
        ],
        careersOverview: "The program intends to advance its progressive vision and mission of maintaining high student achievement and research excellence by setting high standards of imparting knowledge through best management practices, which will help raise the tourism and hospitality industry standards and provide highly progress careers to its graduating students.",
        careers: [
          "Hotel Managers",
          "Front office manager",
          "Restaurant Managers",
          "Tour Operators",
          "Resort Managers",
          "Travel and Transport Operators",
          "Tourism Consultancy Services",
          "Sports and Adventure Tourism Companies",
          "Tourism souvenir production Businesses"
        ],
        mous: [
          "PTDC (Skill Development)",
          "Pak-Austria Association (Skill Development)",
          "World Federation of Tourist Guide (Skill Development)",
          "Pakistan Business and Professional Council (Skill Development)",
          "Sustainable Tourism Foundation of Pakistan (Skill Development)",
          "Discover Pakistan TV Channel (Skill Development)"
        ],
        scheme: [
          {
            name: "Semester 1",
            totalCredits: 18,
            courses: [
              { title: "English I (Functional English) (ENG-301)", credits: 3 },
              { title: "Pakistan Studies/ Cultural History of Pakistan (PST-301)", credits: 3 },
              { title: "Chinese & French Language (HUM-301)", credits: 3 },
              { title: "Introduction to Human Services and Helping Profession (KTH-301)", credits: 3 },
              { title: "Introduction to Tourism & Hospitality Industry (KTH-303)", credits: 3 },
              { title: "Cultural History of Pakistan (KTH-305)", credits: 3 }
            ]
          },
          {
            name: "Semester 2",
            totalCredits: 18,
            courses: [
              { title: "English II (Communication Skills) (ENG-302)", credits: 3 },
              { title: "Introduction to ICT (CSC-302)", credits: 3 },
              { title: "Introduction to Archaeology (KTH-302)", credits: 3 },
              { title: "Introduction to Social Psychology (KTH-304)", credits: 3 },
              { title: "Islamic studies/ Ethics (IST-302)", credits: 3 },
              { title: "Trends in Tourism and Hospitality Management (KTH-306)", credits: 3 }
            ]
          }
        ]
      }
    ]
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
    overview: "HOD’s Message:\n\nIt is a pleasure to head the department of computer science at Kohsar University, Murree. The department has a team of highly experienced and motivated faculty members who are in process of tuning the young minds to make them globally competitive. The strength of the department is highly motivated students who understand the dynamics of the industry and upgrade their skills accordingly. The scope of computer science is endless. The students of the computer science are highly demanded by the recruiters of the top companies. Depending upon the interest of the student, he/she may choose to go for higher studies or if employed can choose to do research, development, design, production, application, testing, or management in the Information Technology industry. In our department we not only give emphasis on study but also apply our knowledge in understanding what computers are, what is its architecture, how to efficiently program them, different tools to write an effective algorithm, the interface between the computer and the user, the computer graphics, computer networking, managing the software database, software engineering and testing them efficiently and more. Through innovative teaching-learning process a teamwork approach and leadership building experience, our students gain vital communication and critical-thinking skills. Our institution provides a platform for the students to enhance their employability skills through Industry Institute Collaboration.\n\nOverview:\n\nThe Department of Computer Science at Kohsar university Murree is one of the largest departments that was founded in 2021 as an undergraduate program along with the inauguration of the University. The main objective of establishment of the department of computer science is to produce Computer Scientists to meet the growing demand for computer professionals in the country. BS Computer science covers a wide spectrum of areas within the field of computing, ranging from the theoretical to practical. Computer scientists can specialize in areas such as artificial intelligence, distributed systems, computer graphics, databases, human computer interaction and security.\n\nThe BS Computer Science is offered successfully in Fall 2021. Department of Computer Science is planning to offer BS Software Engineering, BS Artificial Engineering, BS Data Science and BS Information Technology as undergraduate programs. and MSCS as graduate degree. Each degree program has a specific objective and focus under the guideline of HEC and NCEAC. The course of study and syllabus for each degree is updated and is in-line with its objectives and market demand.",
    vision: "To become a centre of excellence in Computer Science education and research. The department excels in teaching, research, and service that advance the economic strength of the region, state, nation, and beyond. Our faculty members conduct nationally recognized teaching and research in key areas of computer science. Our graduates bring technical, ethical, and life-long learning skills to the computer science profession.",
    mission: "Computer Science Department offers HEC designed curriculum to meet the global challenges. In addition, department is continuously analysing international trends. Department of computer science Provide quality undergraduate and graduate education in both the theoretical and applied foundations of computer science and train students to effectively apply this education to solve real-world problems thus amplifying their potential for lifelong high-quality careers and give them a competitive advantage in the ever-changing and challenging global work environment of the 21st century. Conduct research to advance the state of the art in computer science and integrate research results and innovations into other scientific disciplines. Provide computer science education and training to students in allied departments at Kohsar University and public sector offices and Provide computer science expertise / digital solutions to the people of Pakistan.",
    aimsAndObjectivesOverview: "Our aim is to provide knowledge to our graduates can:",
    aimsAndObjectives: [
      "Apply the fundamental practices and concepts of computer science and develop an appreciation of the diverse role of computing technology in society and the environment in which they live.",
      "Analyze a complex computing problem and to apply principles of computing and other relevant disciplines to identify solutions.",
      "Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program’s discipline.",
      "Communicate effectively in a variety of professional contexts.",
      "Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.",
      "Function effectively as a member or leader of a team engaged in activities appropriate to the program’s discipline.",
      "Apply computer science theory and software development fundamentals to produce computing-based solutions"
    ],
    faculty: [
      {
        name: "Dr. Waqas Haider Khan Bangyal",
        designation: "Associate Professor / Head of Department",
        email: "waqas.bangyal@kum.edu.pk",
        image: csWaqas
      },
      {
        name: "Dr. Rehan Tariq Chohan",
        designation: "Assistant Professor",
        email: "Rehan.chohan@kum.edu.pk",
        image: csRehan
      },
      {
        name: "Dr. Muhammad Faran Majeed",
        designation: "Assistant Professor",
        email: "Faran.majeed@kum.edu.pk",
        image: csFaran
      },
      {
        name: "Ms. Asma Bibi",
        designation: "Lecturer",
        email: "asma.aashi@yahoo.com",
        image: csAsma
      },
      {
        name: "Mr. Sadam Hussain Abbasi",
        designation: "Lecturer",
        email: "Saddam.abbasi@kum.edu.pk",
        image: csHussain
      }
    ],
    programs: [
      {
        name: "BS Computer Science",
        description: "Primarily emphasize on a dynamic systems approach that provides a framework for incorporating computing knowledge to solve the real-world problems.\n\nDuration: 8 Semester / 4 years\nSemester duration: 16-18 weeks\nCourse Load per Semester: 13-18 credit hours\nMaximum Duration: 12 Semesters / 6 Years.",
        objectives: [
          "Demonstrate proficiency in problem-solving techniques using computing gadgets / and programming tools.",
          "Demonstrate proficiency in the analysis of complex problems and the synthesis of solutions to those problems.",
          "Demonstrate comprehension of modern software engineering principles.",
          "Demonstrate a breadth and depth of knowledge in the discipline of computer science.",
          "Practice computer science and software engineering, understand the fundamental principles of computer science, and continue to develop their technical competencies.",
          "Pursue advanced education, research and development, and other creative efforts in science and technology.",
          "Lead in industry, academics, and the community."
        ],
        slos: [
          "Analyze a complex computing problem and apply principles of computing and other relevant disciplines to identify solutions.",
          "Design, implement, and evaluate a computing-based solution to meet a given set of computing requirements in the context of the program's discipline.",
          "Communicate effectively in a variety of professional contexts.",
          "Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles.",
          "Function effectively as a member or leader of a team engaged in activities appropriate to the program's discipline.",
          "Apply computer science theory and software development fundamentals to produce computing-based solutions."
        ],
        careersOverview: "As computing education is most demanding and popular discipline, the scope of computer science as a career spread in every field from Anthropology to Zoology. Computer Science graduates are always in demand across varied sectors like IT companies, business organisations, research institutes, designing firms, to name a few. Take a look at the major jobs offered in Computer Science and Computer Science Engineering:",
        careers: [
          "Software Developer",
          "Database Administrator",
          "Hardware Engineers",
          "Systems Analyst",
          "Computer Network Architect",
          "Web Developer",
          "Information Security Analyst",
          "Computer and Information Research Scientists",
          "Computer and Information Systems Manager",
          "IT Project Manager",
          "Applications Developer",
          "Business Intelligence Analyst",
          "Mobile Applications Developer",
          "Data Architect",
          "Quality Assurance Associate / Analyst",
          "UX Designer",
          "Information Technology Auditor",
          "CRM System Analyst",
          "Project Manager",
          "Database Developer"
        ],
        majors: [
          { name: "Electives (Networks Domain)", description: "Internet of Things, Sensor Networks, Wireless Networking, Networking Strategies, Network Security" },
          { name: "Electives (AI Domain)", description: "Computer Vision, Digital Image Processing, Expert Systems, Artificial Neural Networks, Fuzzy Logic Systems, Multi-agent Systems, Natural Language Processing, Deep Learning, Machine Learning, Data Analytics" }
        ],
        scheme: [
          {
            name: "Semester 1",
            totalCredits: 18,
            courses: [
              { title: "Programming Fundamentals", credits: "4(3-1)" },
              { title: "Calculus & Analytical Geometry", credits: "3(3-0)" },
              { title: "Applied Physics", credits: "3(3-0)" },
              { title: "Introduction to Grammar", credits: "3(3-0)" },
              { title: "Islamic Studies/ Ethics", credits: "2(2-0)" },
              { title: "Introduction to ICT", credits: "3(2-1)" }
            ]
          },
          {
            name: "Semester 2",
            totalCredits: 19,
            courses: [
              { title: "Object Oriented Programming", credits: "4(3-1)" },
              { title: "Multivariate Calculus", credits: "3(3-0)" },
              { title: "Digital Logic Design", credits: "4(3-1)" },
              { title: "English Language Skills", credits: "3(3-0)" },
              { title: "Pakistan Studies", credits: "2(2-0)" },
              { title: "Probability and Statistics", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 3",
            totalCredits: 18,
            courses: [
              { title: "Data Structures & Algorithms", credits: "4(3-1)" },
              { title: "Discrete Structures", credits: "4(3-1)" },
              { title: "Database Systems", credits: "4(3-1)" },
              { title: "Software Engineering", credits: "3(3-0)" },
              { title: "University Elective – I", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 4",
            totalCredits: 19,
            courses: [
              { title: "Operating Systems", credits: "4(3-1)" },
              { title: "Linear Algebra", credits: "3(3-0)" },
              { title: "Computer Organization & Assembly Language", credits: "4(3-1)" },
              { title: "Computer Networks", credits: "4(3-1)" },
              { title: "Artificial Intelligence", credits: "4(3-1)" }
            ]
          },
          {
            name: "Semester 5",
            totalCredits: 18,
            courses: [
              { title: "Design & Analysis of Algorithms", credits: "3(3-0)" },
              { title: "Differential Equations", credits: "3(3-0)" },
              { title: "CS Elective – I (Mobile Application Development)", credits: "3(3-0)" },
              { title: "Parallel & Distributed Computing", credits: "3(3-0)" },
              { title: "CS Elective – II", credits: "3(3-0)" },
              { title: "University Elective - II", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 6",
            totalCredits: 18,
            courses: [
              { title: "Theory of Automata", credits: "3(3-0)" },
              { title: "University Elective – III", credits: "3(3-0)" },
              { title: "CS Elective – III (Web System Technologies)", credits: "3(3-0)" },
              { title: "Technical & Business Writing", credits: "3(3-0)" },
              { title: "CS Elective – IV", credits: "3(3-0)" },
              { title: "University Elective – IV", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 7",
            totalCredits: 15,
            courses: [
              { title: "Compiler Construction", credits: "3(3-0)" },
              { title: "Final Year Project-I", credits: "3(3-0)" },
              { title: "CS Elective – V (OOAD)", credits: "3(3-0)" },
              { title: "CS Elective – VI", credits: "3(3-0)" },
              { title: "Information Security", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 8",
            totalCredits: 9,
            courses: [
              { title: "Final Year Project-II", credits: "3(3-0)" },
              { title: "CS Supporting Course (Numerical Analysis)", credits: "3(3-0)" },
              { title: "Professional Practices", credits: "3(3-0)" }
            ]
          }
        ]
      }
    ]
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
  },
  {
    id: "business-administration",
    name: "Department of Business Administration",
    shortName: "Business Administration",
    vision: "",
    mission: "",
    faculty: [],
    programs: [
      {
        name: "Bachelor of Business Administration (BBA)",
        description: "The Bachelor of Business Administration (BBA) is a comprehensive program designed to develop students' core business skills and leadership capabilities.",
        scheme: [
          {
            name: "Semester 1",
            totalCredits: 17,
            courses: [
              { title: "Introduction to Business (MGT-101)", credits: "3(3-0)" },
              { title: "Environmental Management Sciences (ENV-208)", credits: "3(3-0)" },
              { title: "History of Art and Culture (DES-301)", credits: "3(3-0)" },
              { title: "Ideology and Constitution of Pakistan (GEN-105)", credits: "2(2-0)" },
              { title: "Functional English (ENG-101)", credits: "3(3-0)" },
              { title: "Application of Information and Computer Technologies (ICT-103)", credits: "3(2-1)" },
              { title: "Translation of Holy Quran-I (GEN-214)", credits: "NC" }
            ]
          },
          {
            name: "Semester 2",
            totalCredits: 16,
            courses: [
              { title: "Principles of Accounting (MGT-102)", credits: "3(3-0)" },
              { title: "Principles of Management (MGT-104)", credits: "3(3-0)" },
              { title: "Principles of Marketing (MGT-106)", credits: "3(3-0)" },
              { title: "Expository Writing (ENG-102)", credits: "3(3-0)" },
              { title: "Introduction to Psychology (PSY-101)", credits: "2(2-0)" },
              { title: "Islamic Studies (OR) Religious Education/Ethics (IST-104)", credits: "2(2-0)" },
              { title: "Translation of Holy Quran-II (GEN-214)", credits: "NC" }
            ]
          },
          {
            name: "Semester 3",
            totalCredits: 17,
            courses: [
              { title: "Business Communication (MGT-201)", credits: "3(3-0)" },
              { title: "Fundamentals of Human Resource Management (MGT-203)", credits: "3(3-0)" },
              { title: "Financial Management (MGT-205)", credits: "3(3-0)" },
              { title: "Civics and Community Engagement (GEN-211)", credits: "2(2-0)" },
              { title: "Microeconomics (GEN-106)", credits: "3(3-0)" },
              { title: "Quantitative Reasoning-I (GEN-210)", credits: "3(3-0)" },
              { title: "Translation of Holy Quran-III (GEN-214)", credits: "NC" }
            ]
          },
          {
            name: "Semester 4",
            totalCredits: 17,
            courses: [
              { title: "Management Information Systems (MGT-202)", credits: "3(3-0)" },
              { title: "Corporate Finance (MGT-204)", credits: "3(3-0)" },
              { title: "Business Analytics (MGT-206)", credits: "3(3-0)" },
              { title: "Marketing Research (MGT-208)", credits: "3(3-0)" },
              { title: "Quantitative Reasoning-II (GEN-210)", credits: "3(3-0)" },
              { title: "Entrepreneurship (GEN-212)", credits: "2(2-0)" },
              { title: "Seerat of the Holy Prophet (SAW) (GEN-107)", credits: "NC" },
              { title: "Translation of Holy Quran-IV (GEN-214)", credits: "NC" }
            ]
          },
          {
            name: "Semester 5",
            totalCredits: 18,
            courses: [
              { title: "Supply Chain Management (MGT-301)", credits: "3(3-0)" },
              { title: "Organizational Behavior (MGT-303)", credits: "3(3-0)" },
              { title: "Total Quality Management (MGT-305)", credits: "3(3-0)" },
              { title: "International Business (MGT-307)", credits: "3(3-0)" },
              { title: "Financial Accounting (MGT-309)", credits: "3(3-0)" },
              { title: "Macro Economics (GEN-107)", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 6",
            totalCredits: 15,
            courses: [
              { title: "Information Technology Innovations in Business (MGT-302)", credits: "3(3-0)" },
              { title: "Marketing Management (MGT-304)", credits: "3(3-0)" },
              { title: "Business Law (MGT-306)", credits: "3(3-0)" },
              { title: "Elective-I", credits: "3(3-0)" },
              { title: "Elective-II", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 7",
            totalCredits: 15,
            courses: [
              { title: "Statistical Tools for Research (STA-105)", credits: "3(3-0)" },
              { title: "Strategic Management (MGT-401)", credits: "3(3-0)" },
              { title: "Business Research Methods (MGT-403)", credits: "3(3-0)" },
              { title: "Elective-III", credits: "3(3-0)" },
              { title: "Elective-IV", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 8",
            totalCredits: 15,
            courses: [
              { title: "Business Ethics and Corporate Social Responsibility (CSR) (MGT-402)", credits: "3(3-0)" },
              { title: "Operations Management (MGT-404)", credits: "3(3-0)" },
              { title: "Digital Entrepreneurship (MGT-406)", credits: "3(3-0)" },
              { title: "Introduction to Tourism and Hospitality (THM-105)", credits: "3(3-0)" },
              { title: "Capstone Project (MGT-408)", credits: "3(0-3)" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "forestry",
    name: "Department of Forestry",
    shortName: "Forestry",
    overview: "Pakistan has meagre forest resources and presently due to the continued deforestation and forest degradation, the positive environmental impacts on forestry sectors demanding attention for this sector not only at governmental level but at all concerns. Realizing the importance & location of the Kohsar University, the university has put the mountain forestry resource conservation and management at the top of its agenda to play its regional as well as national role in Forestry sector. This role could be played efficiently through advance degree programs including BS and Master degree program in Forestry. This might be flagship program of KUM later on. Initially undergraduate degree in Forestry will provide highest learning opportunities to National as well as local youngster to become professional foresters to serve the nation. Being located in natural mountainous forests the BS Forestry Program of KUM is mandated to impart forestry education with main focus on mountain forestry. The indigenous knowledge and practices will also be considered for practical forestry operations. This will help the graduate in professional life later on.",
    vision: "To produce professional foresters with ample knowledge and skills of mountainous and plain forest conservation and management. The BS forestry program is meant to be unique in terms of contributing excellence in preserving and protecting the nature for sustainable Ecotourism as well as ameliorating the climate change impact. It is envisioned that the communities will be actively engaged in Ecosystem Restoration for sustainable management of forest resources for their welfare in particular, and masses in general.",
    mission: "The mission is to impart quality education in Forestry by creating an intellectual, collaborative, ethical and inclusive environment for students, faculty, industry and community to produce innovative education, leadership and research opportunities for clean and green as well as prosperous and resilient Pakistan.",
    aimsAndObjectivesOverview: "The undergraduate program in Forestry is committed to supporting the vision of the Kohsar University Murree (KUM). It will be brought through excellence in classroom instruction, by motivating students to acquire the knowledge, skills, and competencies sought by employers, and by creating knowledge that informs and advances in Forestry& Range Management.\n\nThe graduates of BS Forestry program will be able to practice the profession with competence and integrity in promoting sustainable management of forest resources and ecosystem services and conservation of soil, water and biodiversity of the country and region in particular.",
    aimsAndObjectives: [],
    faculty: [
      {
        name: "Dr. Muhammad Safdar Hussain",
        designation: "Lecturer / HOD",
        email: "safdarhussain@kum.edu.pk"
      },
      {
        name: "Dr. Mohiuddin Zia",
        designation: "Assistant Professor (IPFP)",
        email: "md.mohiuddin87@gmail.com"
      },
      {
        name: "Dr. Muhammad Qasim",
        designation: "Assistant Professor (IPFP)",
        email: "qasimagri@yahoo.com"
      }
    ],
    programs: [
      {
        name: "BS Forestry",
        description: "The candidates holding F.Sc. Pre-Medical/Pre-Engineering/General group/DAE (Civil Engineering) or equivalent with minimum 2nd division.\n\nNote: Hybrid mood of teaching and interactive education techniques will be adopted to instruct and assess the students due to the possibility of prevailing covid-19 condition in case where required.",
        plos: [
          "Forestry Knowledge: An ability to apply knowledge of forestry, biology, mathematics, science, forestry fundamentals and an forestry specialization to the solution of complex forestry problems",
          "Problem Analysis: An ability to identify, formulate, research literature, and analyze complex NRM problems reaching substantiated conclusions using first principles of Forestry, Economics and sociology",
          "Design/Development of Solutions: An ability to design solutions for complex problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations",
          "Investigation: An ability to investigate complex forestry problems in a methodical way including literature survey, design and conduct of experiments, analysis and interpretation of experimental data, and synthesis of information to derive valid conclusions",
          "Modern Tool Usage: An ability to investigate modern tools used in forestry for data collection",
          "Professional Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of Forestry practices",
          "Environment and Sustainability: An ability to understand the impact of professional Forestry solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development",
          "Physical Fitness: The graduate must be physically and mentally fit to work in challenging & hard ecosystems.",
          "Individual and Team Work: An ability to work effectively, as an individual or in a team, on multifaceted and/or multidisciplinary settings",
          "Communication: An ability to communicate effectively, orally as well as in writing, on complex forestry activities with the Forester community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions",
          "Project Management: An ability to demonstrate management skills and apply forestry principles to one’s own work, as a member and/or leader in a team, to manage projects in a multidisciplinary environment",
          "Lifelong Learning: An ability to recognize importance of, and pursue lifelong learning in the broader context of innovation, technological developments and international commitments"
        ],
        careersOverview: "Kohsar university Murree offers this program to provide best learning opportunities in diversified ecosystem where the students will be exposed to highly qualified faculty in domain of forestry that will produce highly skilled professionals for our country.",
        careers: [
          "Provincial Forest Department",
          "Forest Training Institutes",
          "Universities",
          "PARC & NARC",
          "Research Institutes",
          "Ministry of Climate Change",
          "Private Sector (pesticide, seed & fertilizer)",
          "National NGOs",
          "International NGOs",
          "Banking Sector",
          "Timber Industries",
          "Non-timber Industries",
          "Forest Farm Sector"
        ],
        majors: [
          { name: "University Elective Courses", description: "Travel Ethics and Social Responsibilities, Social Services, Entrepreneurship, Travel, Trade and Tourism, Psychology, Forestry Extension, Non-Timber Forest Products, Silviculture-II, Social Forestry, Mountain Forest & Risk Management, Forest Pathology, Forest Policy and Law, Ecotourism and Park Management, Forest Management Plan-1, Natural Resource Management, Forest Ecosystem Management, Biostatistics, Sustainable Development, Wood Science and Technology, Forest Management Plan-II, FYP/Thesis/Internship, Pre and Post Covid-19 Response, Utilization of IT Tools in Tourism, Computer Graphics, Graphics Art and Design, Mountain communities & Indigenous knowledge, Demographic Features of Pakistan, Cyber Security, Data Science & Health Data, Impacts of Urbanization on Tourism, Bio complexities Laws, Sustainable Development, Iqbaliyat, Community Nutrition & Public Health, Introduction to Economics" }
        ],
        scheme: [
          {
            name: "Semester 1",
            totalCredits: 18,
            courses: [
              { title: "Biology / Mathematics (BOT-305/MATH-305)", credits: "3(3-0)" },
              { title: "Introduction to ICT (Information & Computer Technology) (CSC-301)", credits: "3(3-0)" },
              { title: "English-I (Functional English) (ELL-311)", credits: "3(3-0)" },
              { title: "Islamic Studies/Ethics (KUC-311)", credits: "3(3-0)" },
              { title: "Introduction to Forestry (FOR-301)", credits: "3(3-0)" },
              { title: "Physical Geography & Climate Change (FOR-303)", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 2",
            totalCredits: 18,
            courses: [
              { title: "English-II (Communication Skills) (ELL-312)", credits: "3(3-0)" },
              { title: "Pakistan Studies (KUC-312)", credits: "3(3-0)" },
              { title: "Biodiversity & Conservation (FOR-302)", credits: "3(2-1)" },
              { title: "Introduction to Soil Science (SES-304)", credits: "3(3-0)" },
              { title: "Basic Agriculture (AGR-301)", credits: "3(3-0)" },
              { title: "Fundamentals of Ecology (FOR-304)", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 3",
            totalCredits: 18,
            courses: [
              { title: "Introduction to watershed Management (FOR-401)", credits: "3(3-0)" },
              { title: "English III (Technical Writing and Presentation Skills) (ELL-411)", credits: "3(3-0)" },
              { title: "Forest Taxonomy (FOR-403)", credits: "3(3-0)" },
              { title: "Introduction to Economics (GEN-401)", credits: "3(3-0)" },
              { title: "Forest surveying & Engineering (FOR-405)", credits: "3(2-1)" },
              { title: "Introduction to GIS and RS (CSC-407)", credits: "3(2-1)" }
            ]
          },
          {
            name: "Semester 4",
            totalCredits: 18,
            courses: [
              { title: "Introduction to wildlife Management (FOR-402)", credits: "3(3-0)" },
              { title: "Forest Entomology (FOR-404)", credits: "3(3-0)" },
              { title: "Introduction to Range Management (FOR-406)", credits: "3(3-0)" },
              { title: "Forest Biometrics (FOR-408)", credits: "3(2-1)" },
              { title: "Mountain Community and Indigenous Knowledge (Elective) (FOR-412)", credits: "3(3-0)" },
              { title: "Forest Accounts & Procedure (FOR-410)", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 5",
            totalCredits: 18,
            courses: [
              { title: "Silviculture I (FOR-501)", credits: "3(3-0)" },
              { title: "Forest Utilization (FOR-503)", credits: "3(3-0)" },
              { title: "Modern Trends in Forestry (FOR-505)", credits: "3(3-0)" },
              { title: "Entrepreneurship", credits: "3(3-0)" },
              { title: "Forestry Extension (FOR-507)", credits: "3(3-0)" },
              { title: "Non-Timber Forest Products (FOR-509)", credits: "3(2-1)" }
            ]
          },
          {
            name: "Semester 6",
            totalCredits: 18,
            courses: [
              { title: "Silviculture-II (FOR-502)", credits: "3(2-1)" },
              { title: "Social Forestry (FOR-504)", credits: "3(3-0)" },
              { title: "Mountain Forest & Risk Management (FOR-506)", credits: "3(3-0)" },
              { title: "Forest Pathology (FOR-508)", credits: "3(2-1)" },
              { title: "Forest Policy and Law (FOR-510)", credits: "3(3-0)" },
              { title: "Ecotourism and Park Management (FOR-512)", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 7",
            totalCredits: 18,
            courses: [
              { title: "Forest Management Plan-1 (FOR-601)", credits: "3(2-1)" },
              { title: "Natural Resource Management (FOR-603)", credits: "3(3-0)" },
              { title: "Forest Ecosystem Management (FOR-605)", credits: "3(3-0)" },
              { title: "Biostatistics (STAT-609)", credits: "3(3-0)" },
              { title: "Sustainable Development (FOR-607)", credits: "3(3-0)" },
              { title: "Wood Science and Technology (FOR-609)", credits: "3(2-1)" }
            ]
          },
          {
            name: "Semester 8",
            totalCredits: 10,
            courses: [
              { title: "Forest Management Plan-II (FOR-602)", credits: "4(0-4)" },
              { title: "FYP/Thesis/Internship (FOR-699)", "credits": "6(0-6)" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "mountain-agriculture",
    name: "Department of Mountain, Agriculture and Environmental Sciences",
    shortName: "Mountain, Agriculture & Environmental Sciences",
    overview: "Mountain, Agriculture and Environmental Sciences is an interdisciplinary field that deals with an assemblage of Physical, chemical, Biological and social sciences under one umbrella. The discipline of Environmental sciences deals with the direct and indirect interaction of human beings with environmental issues that influence the environmental laws and policies.\n\nThe Department of Mountain, Agriculture and Environmental Sciences is going to be establish in FA-2022, at Kohsar University Murree. Its main focus is the protection and management of environment from the emerging pollutants nationally and globally through research and public awareness.",
    vision: "The KUM’s Department of Mountain, Agriculture and Environmental Sciences will lead in innovative discovery, education, and service not only to the students of Murree as well as to the world. We envision a future in which high-impact science based on our collective arthropod biology expertise addresses and solves large societal concerns in agriculture, the environment, and human health. Our vision and mission is the provision of comprehensive knowledge and skills about the basics of natural, biological and physical sciences in solving the emerging environmental issues globally that will reflects the Sustainable Development Goals for the protection of natural resources.",
    mission: "Our mission is to generate and disseminate fundamental and applied scientific knowledge about arthropods, insects that contributes to human well-being through breakthroughs in human health, agriculture, and the environment.\nTo prepare, train, and inspire students from diverse backgrounds to achieve personal goals and make meaningful societal contributions; and to engage citizens and policymakers/stakeholders in making informed proactive decisions that maximize the benefits, minimize the risks, and minimize the environmental impact of insects and arthropods. We enhance the quality of life in Murree and throughout the world by doing globally relevant and exceptional research, extension, and teaching. We succeed by cultivating a collegial, inclusive, and enthusiastic department culture that values mutual respect, work/life balance, cross-disciplinary cooperation, and shared accomplishments.",
    aimsAndObjectivesOverview: "The major aims and objectives of the Department of Mountain, Agriculture and Environmental Sciences, are following i.e. Department's teaching mission is extensive, ranging from fundamental aspects of Agriculture, biological control and Environmental sciences.\n\nMajor aspects of agriculture includes arthropod ecology, morphology, parasitology, physiology, systematics, and toxicity to applied disciplines such as, agricultural, medical, and veterinary pest management.\nMajor aspects of Environmental sciences includes soil, air and water toxicology, environmental biotechnology, GIS, Conservation of natural resources and biodiversity, ecology, and wastewater management. We offer a diverse range of basic courses aimed at educating and inspiring BS and MS students in agriculture and Environmental Sciences as well as complete courses for undergraduate majors and advanced course work for outstanding graduate student education.\n\nAdditionally, students studying these areas have a range of interests, depending on their professional route. Regardless of their future orientation, there are similar learning goals and objectives that we will assist students in achieving through their different education.\nThe primary Program Learning Objectives (PLOs) will be the following:",
    aimsAndObjectives: [
      "Attain a solid foundation in Agriculture, insect biology, including general entomology, basic systematics, morphology, physiology, and biodiversity.",
      "Understand evolution and biodiversity generation through macro- and micro- evolutionary processes, including how these processes have formed and diversified insects.",
      "Develop the ability to read and interpret scientific papers in entomology, and critically assess content.",
      "Attain skills in written and verbal scientific communication.",
      "Develop the ability to design and perform a scientific study on insects, and to analyze results.",
      "Develop an understanding of the distributions and abundances of organisms including insects, and their interactions with each other and the environment.",
      "Learn modern techniques in insect science such as molecular biology, bioinformatics, and/or imaging.",
      "To provide enduring solutions for environmental problems by using innovative green technologies.",
      "To develop collaboration with national and international environment supporting bodies for research and development revenues generation.",
      "To establish productive programs that develops an association between our expert faculty members and students for strengthen our department.",
      "To develop competence among students to face the ongoing environmental challenges (air, soil, water, overuse of natural resources, energy crises and climate change) with environment friendly scientific skills"
    ],
    faculty: [
      {
        name: "Dr. Shahida Shaheen",
        designation: "Lecturer / HOD",
        email: "shahida.shaheen@kum.edu.pk",
        image: agriShahida
      },
      {
        name: "Dr. Sumaira Maqsood",
        designation: "Lecturer",
        email: "sumairamaqsood@kum.edu.pk",
        image: agriSumaira
      },
      {
        name: "Dr. Mohiuddin Zia",
        designation: "Assistant Professor (IPFP)",
        email: "md.mohiuddin87@gmail.com",
        image: agriZia
      },
      {
        name: "Dr. Khadija Javed",
        designation: "Assistant Professor (IPFP)",
        email: "dr.khadijajaved@kum.edu.pk",
        image: agriKhadija
      }
    ],
    programs: [
      {
        name: "BS Environmental Sciences",
        description: "Primarily emphasize on a dynamic systems approach that provides a framework for incorporating physical, chemical, and biological aspects of environmental systems.\n\nTotal numbers of Credit hours: 124-136\nDuration: 4 years\nSemester duration: 16-18 weeks\nCourse Load per Semester: 13-18 credit hours",
        slos: [
          "Demonstrate a comprehensive understanding of environmental systems and issues using an interdisciplinary framework to incorporate ideas and concepts from biological and physical natural sciences",
          "Develop skills in data analysis and problem solving of relevant environmental problems.",
          "Use a systems approach to conduct integrated, quantitative, and interdisciplinary analyses and modeling of environmental systems and issues."
        ],
        careersOverview: "Students who earn a degree in BS and MS Agriculture can expect a diverse range of professional prospects. Being an interdisciplinary field the department of Mountain, Agriculture and Environmental sciences has established the following career opportunities in Research and development (R&D), Industrial Linkages, Environmental impact assessment (EIA) Consultancy, National and International funding agencies.",
        careers: [
          "Ministry of Environment (MoE)",
          "Ministry of Climate Change (MCC)",
          "Environmental Protection Agency (EPA)",
          "Environmental Protection Department (EPD)",
          "Water and Sanitation Agency (WASA)",
          "Nature Conservation Organizations (NCOs)",
          "Various international agencies such as UNEP, IUCN, TSBF, and World Bank",
          "Research and Development (R&D)",
          "Water Authority and Urban Planning",
          "Environmental Monitoring Organizations",
          "Biodiversity Conservation Department",
          "Environmental consultancies",
          "Solid Waste Management and Treatment",
          "Sanitation and Health Department",
          "Air pollution management wing",
          "NGOs working on environmental resources and environmental issues",
          "Industries (Food processing, Refineries, Distilleries and Fertilizer plants etc.)",
          "Colleagues, Universities and Research centers",
          "Print and electronic media (Environmental journalist)",
          "Agriculture, and Biotechnology",
          "Environmental Microbiology Department",
          "Soil sciences lab",
          "Environmental Nano sciences and materials",
          "Soil and ecosystem ecology",
          "Environmental engineering lab",
          "Research Groups",
          "Environmental technologies",
          "Sustainable agriculture",
          "Renewable Energy",
          "Environmental Nanotechnology",
          "Private Industry",
          "Organizations Non-Governmental",
          "Seed Industry",
          "Agrochemical Industry",
          "Food Industry",
          "Crop Consultants",
          "Urban Pest Control",
          "Military, both federal and state",
          "Federal Research Laboratories",
          "State Departments of Agriculture",
          "State Departments of Natural Resources",
          "Departments of Health at the state, county, and city levels",
          "Extensive Services",
          "Federal and State Regulatory Agencies",
          "Academic Institutions",
          "Zoos, Botanical Gardens, and Butterfly Houses"
        ],
        majors: [
          { name: "Elective Courses", description: "Fresh Water Ecology, Environmental Planning and Governance, Green Economy, Physical Geography & Climate Change, Epidemiology, Introduction to Watershed Management, An Introduction to Environmental Economics, Polymers and the Environment, Environmental Geology" }
        ],
        scheme: [
          {
            name: "Semester 1", totalCredits: 17, courses: [
              { title: "Fundamentals of environmental Sciences", credits: "3 (3-0)" },
              { title: "Fundamental of Biology", credits: "3 (2-1)" },
              { title: "Basic Concept of Chemistry", credits: "3 (2-1)" },
              { title: "Introduction to mathematics", credits: "3 (3-0)" },
              { title: "Refresher English", credits: "3 (3-0)" },
              { title: "Pakistan studies", credits: "2 (2-0)" }
            ]
          },
          {
            name: "Semester 2", totalCredits: 17, courses: [
              { title: "Biodiversity", credits: "3 (3-0)" },
              { title: "Science and sustainable development", credits: "3 (3-0)" },
              { title: "Basic concept of statistics", credits: "3 (3-0)" },
              { title: "Fundamentals of computer", credits: "3 (2-1)" },
              { title: "Functional English", credits: "3 (3-0)" },
              { title: "Islamic studies", credits: "2 (2-0)" }
            ]
          },
          {
            name: "Semester 3", totalCredits: 18, courses: [
              { title: "Environmental sociology", credits: "3 (3-0)" },
              { title: "Earth and environmental chemistry", credits: "3 (3-0)" },
              { title: "Fundamentals of ecology", credits: "3 (3-0)" },
              { title: "Environmental Economics", credits: "3 (3-0)" },
              { title: "Basic Research Methodology", credits: "3 (3-0)" },
              { title: "Plants and people", credits: "3 (2-1)" }
            ]
          },
          {
            name: "Semester 4", totalCredits: 18, courses: [
              { title: "Natural and environmental hazards", credits: "3 (3-0)" },
              { title: "Environmental microbiology", credits: "3 (2-1)" },
              { title: "Environmental Pollution", credits: "3 (3-0)" },
              { title: "Climatology", credits: "3 (3-0)" },
              { title: "Earth systems dynamics and analysis", credits: "3 (2-1)" },
              { title: "Environmental toxicology", credits: "3 (2-1)" }
            ]
          },
          {
            name: "Semester 5", totalCredits: 18, courses: [
              { title: "Applied ecology", credits: "3 (3-0)" },
              { title: "Hydrological systems and environment", credits: "3 (2-1)" },
              { title: "Environmental profile of Pakistan", "credits": "3 (3-0)" },
              { title: "Introduction to bioremediation", credits: "3 (3-0)" },
              { title: "Multivariate statistic", credits: "3 (3-0)" },
              { title: "ELECTIVE-I", credits: "3 (3-0)" }
            ]
          },
          {
            name: "Semester 6", totalCredits: 18, courses: [
              { title: "Wildlife and forest conservation", credits: "3 (3-0)" },
              { title: "Introduction to GIS and remote sensing", credits: "3 (2-1)" },
              { title: "Health, safety & environmental management", credits: "3 (3-0)" },
              { title: "Biodiversity and genetic resources", credits: "3 (2-1)" },
              { title: "Environmental monitoring", credits: "3 (2-1)" },
              { title: "ELECTIVE-II", credits: "3 (3-0)" }
            ]
          },
          {
            name: "Semester 7", totalCredits: 18, courses: [
              { title: "Disaster risk management", credits: "3 (3-0)" },
              { title: "Environmental impact assessment", credits: "3 (2-1)" },
              { title: "Analytical techniques in environmental science", credits: "3 (2-1)" },
              { title: "Sustainable agriculture", credits: "3 (3-0)" },
              { title: "ELECTIVE-III", "credits": "3 (3-0)" },
              { title: "ELECTIVE-IV", "credits": "3 (3-0)" }
            ]
          },
          {
            name: "Semester 8", totalCredits: 18, courses: [
              { title: "Treatment and management of wastewater", credits: "3 (3-0)" },
              { title: "Environmental application of nanomaterials", credits: "3 (3-0)" },
              { title: "Industrial pollution control technologies", "credits": "3 (2-1)" },
              { title: "Final Year Project/Internship", credits: "3" }
            ]
          }
        ]
      },
      {
        name: "BS Agriculture",
        description: "Duration: 4 years\nSemester duration: 16-18 weeks\nCourse Load per Semester: 13-18 credit hours",
        scheme: [
          {
            name: "Semester 1", totalCredits: 18, courses: [
              { title: "Basic Agriculture", credits: "3(3-0)" },
              { title: "English – I", credits: "3(3-0)" },
              { title: "Introduction to Soil Science", credits: "3(3-0)" },
              { title: "Introduction to Biology /Mathematics", credits: "3(3-0)" },
              { title: "Introductory Horticulture", credits: "3(3-0)" },
              { title: "Islamic Studies/ Ethics", credits: "3(3-0)" }
            ]
          },
          {
            name: "Semester 2", totalCredits: 18, courses: [
              { title: "Introduction to Agricultural Extension Education", credits: "3(3-0)" },
              { title: "Introduction to Agriculture Engineering", credits: "3(3-0)" },
              { title: "Introductory Entomology", credits: "3(3-0)" },
              { title: "Introductions to Computing", credits: "3(3-0)" },
              { title: "English –II", credits: "3(3-0)" },
              { title: "Statistics", "credits": "3(3-0)" }
            ]
          },
          {
            name: "Semester 3", totalCredits: 18, courses: [
              { title: "General Crop Production", credits: "3(3-0)" },
              { title: "Introductory Genetics", "credits": "3(3-0)" },
              { title: "Introductory Plant Pathology", "credits": "3(3-0)" },
              { title: "Agribusiness Management", "credits": "3(3-0)" },
              { title: "Applied Entomology", "credits": "3(3-0)" },
              { title: "Pakistan Studies", "credits": "3(3-0)" }
            ]
          },
          {
            name: "Semester 4", totalCredits: 18, courses: [
              { title: "Introduction to Agricultural Economics", credits: "3(3-0)" },
              { title: "Horticulture Crop Production", "credits": "3(3-0)" },
              { title: "Introduction to Food Science and Technology", "credits": "3(3-0)" },
              { title: "Research Methods in Agriculture", "credits": "3(0-3)" },
              { title: "Introductory Plant Breeding", "credits": "3(3-0)" },
              { title: "Introduction to Forest and Watershed Management", "credits": "3(3-0)" }
            ]
          },
          {
            name: "Semester 5 (Biological control/Entomology Major)", totalCredits: 18, "courses": [
              { title: "Insect Morphology", "credits": "3(2-1)" },
              { title: "Principles of Insect Taxonomy", "credits": "3(2-1)" },
              { title: "Insect Ecology", "credits": "3(2-1)" },
              { title: "Insect Pests of Household, man and animals", "credits": "3(2-1)" },
              { title: "Insect Behavior", "credits": "3(2-1)" },
              { title: "Designs of Experiment", "credits": "3(3-0)" }
            ]
          },
          {
            name: "Semester 6 (Biological control/Entomology Major)", totalCredits: 16, "courses": [
              { title: "Insect Physiology", "credits": "3(2-1)" },
              { title: "Insect Classification and Biodiversity", "credits": "3(2-1)" },
              { title: "Agricultural Pests and their Management", "credits": "4(3-1)" },
              { title: "Stored Products Pest and their Management", "credits": "3(2-1)" },
              { title: "Beneficial Insects", "credits": "3(2-1)" }
            ]
          },
          {
            name: "Semester 7 (Biological control/Entomology Major)", totalCredits: 16, "courses": [
              { title: "Integrated Pest Management (IPM)", "credits": "4(3-1)" },
              { title: "Plant Resistance to Insect Pests", "credits": "3(2-1)" },
              { title: "Insecticides and their Application", "credits": "3(2-1)" },
              { title: "Range and Forest Entomology", "credits": "3(2-1)" },
              { title: "Agriculture and Environmental Pollution", "credits": "3(2-1)" }
            ]
          },
          {
            name: "Semester 8 (Biological control/Entomology Major)", totalCredits: 13, "courses": [
              { title: "Scientific Writing and Presentation", "credits": "3(2-1)" },
              { title: "Apiculture", "credits": "3(2-1)" },
              { title: "Biological Control of Insect Pests", "credits": "3(2-1)" },
              { title: "Internship/Research/ Survey Report and Presentation", "credits": "4(0-4)" }
            ]
          }
        ]
      }
    ]
  }
];
