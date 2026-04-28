export interface Publication {
  id: string;
  author: string;
  department: string;
  faculty: string;
  title: string;
  url: string;
  position: string;
  journal: string;
  hjrs: string;
  doi: string;
  impactFactor: string;
  date: string;
  sdg?: string;
}

export const publicationData: Publication[] = [
  // Faculty of Biological, Health & Life Sciences
  {
    id: "BHL-1",
    author: "Dr. Sumaira Maqsood",
    department: "Environmental Science",
    faculty: "Biological, Health & Life Sciences",
    title: "Climate Change Impact on Soil Systems and Agriculture Resilience",
    url: "https://www.researchgate.net/publication/394840956_Climate_Change_Impact_on_Soil_Systems_and_Agriculture_Resilience",
    position: "0",
    journal: "Soils and Sustainable Agriculture",
    hjrs: "Nil",
    doi: "10.1007/978-3-031-91114-9_15",
    impactFactor: "Nil",
    date: "30-Aug-2025"
  },
  {
    id: "BHL-2",
    author: "Dr. Sumaira Maqsood",
    department: "Environmental Science",
    faculty: "Biological, Health & Life Sciences",
    title: "Impact of Climate Change on Cereal Crop Production: Challenges and Adaptive Strategies",
    url: "https://www.researchgate.net/publication/394837465_Impact_of_Climate_Change_on_Cereal_Crop_Production_Challenges_and_Adaptive_Strategies",
    position: "2",
    journal: "Soils and Sustainable Agriculture",
    hjrs: "Nil",
    doi: "10.1007/978-3-031-91114-9_25",
    impactFactor: "Nil",
    date: "30-Aug-2025"
  },
  {
    id: "BHL-3",
    author: "Dr. Sumaira Maqsood",
    department: "Environmental Science",
    faculty: "Biological, Health & Life Sciences",
    title: "Toxicity of Commonly Used Insecticides against Apis dorsata (Hymenoptera: Apidae) in South Punjab, Pakistan",
    url: "https://researcherslinks.com/current-issues/Toxicity-of-Commonly-Used-Insecticides/20/1/11740",
    position: "5",
    journal: "Pakistan Journal of Zoology",
    hjrs: "Nil",
    doi: "https://researcherslinks.com/current-issues/Toxicity-of-Commonly-Used-Insecticides/20/1/11740",
    impactFactor: "Nil",
    date: "26-Sep-2025"
  },
  {
    id: "BHL-4",
    author: "Dr. Sumaira Maqsood",
    department: "Environmental Science",
    faculty: "Biological, Health & Life Sciences",
    title: "ASSESSING THE SYSTEMIC IMPACTS OF COVID-19 ON ENVIRONMENT, ECONOMY, AND PUBLIC HEALTH: A GLOBAL REVIEW TOWARD RESILIENCE AND SUSTAINABILITY",
    url: "https://www.researchgate.net/publication/394123814_Assessing_the_systemic_impacts_of_covid-19_on_environment_economy_and_public_health_a_global_review_toward_resilience_and_sustainability",
    position: "4",
    journal: "International Journal of Biology and Biotechnology",
    hjrs: "Nil",
    doi: "10.394123814",
    impactFactor: "Nil",
    date: "30-Jul-2025"
  },
  {
    id: "BHL-5",
    author: "Dr. Sumaira Maqsood",
    department: "Environmental Science",
    faculty: "Biological, Health & Life Sciences",
    title: "POPULATION DYNAMICS OF WHEAT APHIDS IN RESPONSE TO DIFFERENT DOSES OF NITROGEN APPLICATION",
    url: "https://www.ijbbku.com/assets/custom/journals/2025/1/Population%20dynamics%20of%20wheat%20aphids%20in%20response%20to%20different%20doses%20of%20nitrogen%20applications.pdf",
    position: "3",
    journal: "International Journal of Biology and Biotechnology",
    hjrs: "Nil",
    doi: "Nil",
    impactFactor: "Nil",
    date: "30-Jan-2025"
  },
  {
    id: "BHL-6",
    author: "Dr. Sumaira Maqsood",
    department: "Environmental Science",
    faculty: "Biological, Health & Life Sciences",
    title: "Effect of Foliar Sprays of KNO3 on the Yield and Fruit Quality of Kinnow",
    url: "https://www.researchgate.net/publication/391730351_EFFECT_OF_FOLIAR_SPRAYS_OF_KNO3_ON_THE_YIELD_AND_FRUIT_QUALITY_OF_KINNOW",
    position: "11",
    journal: "Jammu Kashmir Journal of Agriculture",
    hjrs: "Nil",
    doi: "10.56810/jkjagri.005.01.0193",
    impactFactor: "Nil",
    date: "25-Apr-2025"
  },
  {
    id: "BHL-7",
    author: "Dr. M. Imran Khan",
    department: "Biotechnology",
    faculty: "Biological, Health & Life Sciences",
    title: "The therapeutic potential of beta-carotene against neuroinflammation and amyloid beta in SH-SY5Y cells",
    url: "https://www.nature.com/articles/s41598-025-00964-w",
    position: "1",
    journal: "Scientific Reports",
    hjrs: "W",
    doi: "10.1038/s41598-025-00964-w",
    impactFactor: "3.9",
    date: "30-Sep-2025"
  },
  {
    id: "BHL-8",
    author: "Dr. M. Imran Khan",
    department: "Biotechnology",
    faculty: "Biological, Health & Life Sciences",
    title: "Toxoplasmosis awareness among women: a cross-sectional study on knowledge, attitudes, perceptions, and risk factors",
    url: "https://pubmed.ncbi.nlm.nih.gov/41286716/",
    position: "4",
    journal: "BMC PUBLIC HEALTH",
    hjrs: "W",
    doi: "10.1186/s12889-025-25286-4",
    impactFactor: "3.6",
    date: "24-Nov-2025"
  },
  {
    id: "BHL-9",
    author: "Dr. M. Imran Khan",
    department: "Biotechnology",
    faculty: "Biological, Health & Life Sciences",
    title: "Decoding the functional plasticity of milk-derived exosomes: implications for nutrition, immunity, and therapy",
    url: "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2025.1645355/full",
    position: "1",
    journal: "Frontiers in Immunology",
    hjrs: "W",
    doi: "10.3389/fimmu.2025.1645355",
    impactFactor: "5.9",
    date: "14-Oct-2025"
  },
  {
    id: "BHL-10",
    author: "Dr. M. Imran Khan",
    department: "Biotechnology",
    faculty: "Biological, Health & Life Sciences",
    title: "Knowledge of HIV Transmission and Prevention among University Students in Pakistan: A Cross-Sectional Study",
    url: "https://corescholar.libraries.wright.edu/cgi/viewcontent.cgi?article=1790&context=jbm",
    position: "3",
    journal: "Journal of Bioresource Management",
    hjrs: "Nil",
    doi: "Nil",
    impactFactor: "Nil",
    date: "30-Jun-2025"
  },
  {
    id: "BHL-11",
    author: "Dr. M. Imran Khan",
    department: "Biotechnology",
    faculty: "Biological, Health & Life Sciences",
    title: "The emerging role of extracellular vesicles in viral transmission and immune evasion",
    url: "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2025.1634758/full",
    position: "1",
    journal: "Frontiers in Immunology",
    hjrs: "W",
    doi: "10.3389/fimmu.2025.1634758",
    impactFactor: "5.9",
    date: "1-Sep-2025"
  },
  {
    id: "BHL-12",
    author: "Mr. Saeed",
    department: "Biotechnology",
    faculty: "Biological, Health & Life Sciences",
    title: "First Report of Phenotype Prevalence of five major Rh Blood Group antigen in the blood Donor Population of Peshawar, Pakistan",
    url: "https://jimdc.org.pk/index.php/JIMDC/article/view/1093",
    position: "4",
    journal: "Vox Sanguinis",
    hjrs: "Nil",
    doi: "10.35787/jimdc.v12i4.1093",
    impactFactor: "Nil",
    date: "12-Jan-2025"
  },
  {
    id: "BHL-13",
    author: "Mr. Saeed & Mr. Ansar",
    department: "Biotechnology",
    faculty: "Biological, Health & Life Sciences",
    title: "Comparative Study of Qualitative Phytochemical Constituents of Calotropis procera Leaves, Latex, and Flowers",
    url: "https://www.researchgate.net/publication/393445063_Comparative_Study_of_Qualitative_Phytochemical_Constituents_of_Calotropis_procera_Leaves_Latex_and_Flowers",
    position: "2, 5",
    journal: "Annals of PIMS",
    hjrs: "Nil",
    doi: "10.48036/apims.v20i4.930",
    impactFactor: "Nil",
    date: "6-Aug-2025"
  },
  {
    id: "BHL-14",
    author: "Mr. Saeed & Mr. Ansar",
    department: "Biotechnology",
    faculty: "Biological, Health & Life Sciences",
    title: "Antioxidant Potential Calotropis Procera leaves, flowers, and latex",
    url: "https://www.researchgate.net/publication/393445063_Comparative_Study_of_Qualitative_Phytochemical_Constituents_of_Calotropis_procera_Leaves_Latex_and_Flowers",
    position: "2, 3",
    journal: "Annals of PIMS",
    hjrs: "Nil",
    doi: "10.48036/apims.v20i4.930",
    impactFactor: "Nil",
    date: "2-Jan-2025"
  },
  {
    id: "BHL-15",
    author: "Dr. Muhammad Ilyas",
    department: "Botany",
    faculty: "Biological, Health & Life Sciences",
    title: "Molecular mechanisms and breeding strategies for enhancing wheat resilience to environmental stresses",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S014181302503020X",
    position: "2",
    journal: "International Journal of Biological Macromolecules",
    hjrs: "W",
    doi: "10.1016/j.ijbiomac.2025.142468",
    impactFactor: "8.5",
    date: "22-Mar-2025"
  },
  {
    id: "BHL-16",
    author: "Dr. Riffat Batool",
    department: "Botany",
    faculty: "Biological, Health & Life Sciences",
    title: "Synthetic, biological and physiological identity of green cobalt oxide nanosponges engineered for multidrug-resistant pathogenic bacteria",
    url: "https://pubs.rsc.org/en/content/articlelanding/2025/nj/d5nj00815h",
    position: "5",
    journal: "New Journal of Chemistry",
    hjrs: "W",
    doi: "10.1039/D5NJ00815H",
    impactFactor: "2.5",
    date: "14-May-2025"
  },

  // Faculty of Applied Sciences & Computing
  {
    id: "ASC-1",
    author: "Dr. Raheem Shah",
    department: "Mathematics",
    faculty: "Applied Sciences & Computing",
    title: "On the Hyers–Ulam Stability of Bernoulli’s Differential Equation",
    url: "https://link.springer.com/article/10.3103/S1066369X23600637",
    position: "1",
    journal: "Russian Mathematics",
    hjrs: "X",
    doi: "10.3103/S1066369X23600637",
    impactFactor: "0.6",
    date: "6-Mar-2025"
  },
  {
    id: "ASC-2",
    author: "Dr. Raheem Shah",
    department: "Mathematics",
    faculty: "Applied Sciences & Computing",
    title: "Ulam–type stability results for fractional differential equations with uncertainty",
    url: "https://link.springer.com/article/10.1007/s11868-025-00755-x",
    position: "1",
    journal: "Journal of Pseudo-Differential Operators and Applications",
    hjrs: "W",
    doi: "10.1007/s11868-025-00755-x",
    impactFactor: "1.3",
    date: "20-Dec-2025"
  },
  {
    id: "ASC-3",
    author: "Dr. Raheem Shah",
    department: "Mathematics",
    faculty: "Applied Sciences & Computing",
    title: "Stability Analysis of Solutions to the Time–Fractional Nonlinear Schrödinger Equations",
    url: "https://link.springer.com/article/10.1007/s10773-025-05998-4",
    position: "2",
    journal: "International Journal of Theoretical Physics",
    hjrs: "W",
    doi: "10.1007/s10773-025-05998-4",
    impactFactor: "1.7",
    date: "2-May-2025"
  },
  {
    id: "ASC-4",
    author: "Ms. Asma Bibi & Dr. Faran Majeed",
    department: "Computer Science",
    faculty: "Applied Sciences & Computing",
    title: "Holistic Digital Doctor for X-Ray Reading Using VR-Enhanced 3D Touch Bone Model User Interface",
    url: "https://ieeexplore.ieee.org/document/10964210",
    position: "1, 2",
    journal: "IEEE Access",
    hjrs: "W",
    doi: "10.1109/ACCESS.2025.3560565",
    impactFactor: "3.6",
    date: "15-Apr-2025"
  },
  {
    id: "ASC-5",
    author: "Dr. Waqas Haider Bangyal",
    department: "Computer Science",
    faculty: "Applied Sciences & Computing",
    title: "Trustworthy Load Forecasting With Generative AI: A Dual-Attention ConvLSTM and VAE-Based Approach",
    url: "https://ieeexplore.ieee.org/document/11152601",
    position: "4",
    journal: "IEEE Transactions on Consumer Electronics",
    hjrs: "W",
    doi: "10.1109/TCE.2025.3606753",
    impactFactor: "10.8",
    date: "8-Sep-2025"
  },
  {
    id: "ASC-6",
    author: "Dr. Muhammad Sultan",
    department: "Physics",
    faculty: "Applied Sciences & Computing",
    title: "Dual-modification strategy for efficient inverted perovskite solar cells via thermally induced liquid crystals",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1385894725047539",
    position: "10",
    journal: "Chemical Engineering Journal",
    hjrs: "W",
    doi: "10.1016/j.cej.2025.163918",
    impactFactor: "13.2",
    date: "23-May-2025"
  },

  // Faculty of Management, Humanities & Social Sciences
  {
    id: "MHS-1",
    author: "Dr. Syed Hussain Mustafa Gillani",
    department: "Management Sciences",
    faculty: "Management, Humanities & Social Sciences",
    title: "Assessing The Impact Of Occupational Risks And Firm Commitments On Worker Health Safety In Textile Industry",
    url: "https://rjmssjournal.com/index.php/7/article/view/103",
    position: "1",
    journal: "Journal of Management & Social Science",
    hjrs: "Y",
    doi: "10.63075/g4sqvx14",
    impactFactor: "Nil",
    date: "15-Jan-2025"
  },
  {
    id: "MHS-2",
    author: "Dr. Naila Batool",
    department: "Psychology",
    faculty: "Management, Humanities & Social Sciences",
    title: "PREDICTORS OF ARTIFICIAL INTELLIGENCE ANXIETY AMONG UNIVERSITY STUDENTS",
    url: "https://ijssbulletin.com/index.php/IJSSB/article/view/326",
    position: "2",
    journal: "International Journal of Social Sciences Bulletin",
    hjrs: "Nil",
    doi: "Nil",
    impactFactor: "Nil",
    date: "6-Jan-2025"
  },
  {
    id: "MHS-3",
    author: "Dr. Owais & Ms. Zunaira Mumtaz",
    department: "Tourism & Hospitality Management",
    faculty: "Management, Humanities & Social Sciences",
    title: "Religious Tourism in Taxila Valley: Assessing Tourist Impact and Strategies for Heritage Management",
    url: "https://qjssh.com.pk/index.php/qjssh/article/view/321",
    position: "1, 2, 3",
    journal: "Qlantic Journal of Social Sciences and Humanities",
    hjrs: "Nil",
    doi: "10.55737/qjssh.vi-i.25321",
    impactFactor: "Nil",
    date: "30-Mar-2025"
  }
];
