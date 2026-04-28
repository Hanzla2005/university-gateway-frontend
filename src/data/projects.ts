export interface Project {
  id: string;
  title: string;
  fundingSource: string;
  cost?: string; // Million Rs.
  duration?: string;
  startDate?: string;
  completionDate?: string;
  status: 'Ongoing' | 'Completed' | 'Approved' | 'Proposed';
  department?: string;
  submittedTo?: string;
}

export const projectData: Project[] = [
  // Ongoing Projects
  {
    id: "OG-1",
    title: "Integrated Forest Monitoring System via Digital Apps",
    fundingSource: "PAS",
    cost: "4.98",
    duration: "03 Months",
    startDate: "19-01-2026",
    completionDate: "31-04-2026",
    status: "Ongoing"
  },
  // Completed Projects
  {
    id: "CP-1",
    title: "Employment Injury Protection Scheme for Workers in the Textile Sector of Pakistan and Compliance of COVID-19 SOPs",
    fundingSource: "HEC-NRPU",
    cost: "9.95",
    duration: "24 Months",
    startDate: "09-01-2023",
    completionDate: "09-01-2025",
    status: "Completed"
  },
  {
    id: "CP-2",
    title: "Production of Novel Bio active Peptides through revalorization of Apricot Kernel Cakes",
    fundingSource: "HEC-SRGP",
    cost: "01",
    duration: "01 Year",
    startDate: "20-06-2021",
    completionDate: "18-10-2023",
    status: "Completed"
  },
  {
    id: "CP-3",
    title: "Biodiversity of Wasps (Hymenoptera: Vespidae) from Murree Hills and its surrounding area",
    fundingSource: "HEC-SRGP",
    cost: "01",
    duration: "01 Year",
    startDate: "01-01-2022",
    completionDate: "31-01-2024",
    status: "Completed"
  },
  // Approved Projects
  {
    id: "AP-1",
    title: "Impact of Pesticides to foraging and nesting behavior of solitary Masan bees (Hymenoptera: Megachilidae) under field and laboratory condition (As CO-PI)",
    fundingSource: "ALP, PARC",
    cost: "6.8",
    duration: "02 Years",
    status: "Approved"
  },
  // Proposed Projects
  {
    id: "PP-1",
    title: "AI-Enabled Biodiversity Intelligence for Climate- Resilient Agriculture: Integrating Multi-Sensor Data with Pollinator and Pest Ecology",
    submittedTo: "HEC-NRPU",
    department: "Environment Sciences",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-2",
    title: "Exploring Language Endangerment and Revival: A Comprehensive Framework for Preserving Saraiki in Pakistan",
    submittedTo: "HEC-NRPU",
    department: "English",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-3",
    title: "Establishment of apple vinegar production unit in Murree for rural economic development",
    submittedTo: "HEC-NRPU",
    department: "Food Science and Technology",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-4",
    title: "Development of probiotic fruit-based functional drink and powder from Murree for enhanced gut microbiota and public health",
    submittedTo: "HEC-NRPU",
    department: "Food Science and Technology",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-5",
    title: "Establishment of Herbarium and Seed bank facilities at the Department of Botany, KUM",
    submittedTo: "HEC-NRPU",
    department: "Botany",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-6",
    title: "Assessment and mitigation of malnutrition among women and children in Murree through the development of nutrient-enriched dietary supplements from locally available foods",
    submittedTo: "HEC-NRPU",
    department: "Food Science and Technology",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-7",
    title: "Development of Cost-Effective Stem Cell-Derived Exosomes for Hair Regeneration: A Localized Approach to Reduce Dependence on Imported Exosomes in Pakistan",
    submittedTo: "HEC-NRPU",
    department: "Biotechnology",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-8",
    title: "Murree Forest Residues- Based Carbon Integrated with Metal-Organic Framework for Hydrogen Evolution Reaction",
    submittedTo: "HEC-NRPU",
    department: "Chemistry",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-9",
    title: "Dengue Outbreak in Murree: Taxonomic and Ecological Approach on Mosquito Fauna of Murree Hills",
    submittedTo: "HEC-NRPU",
    department: "Forestry",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-10",
    title: "Discovery of novel plastic-degrading enzymes through data-driven AI and a metagenomic approach for sustainable development of PET waste upcycling",
    submittedTo: "HEC-NRPU",
    department: "Microbiology",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-11",
    title: "Development of Adipose-Derived Stem Cell Technology for Affordable Regenerative Healthcare Solutions in Pakistan",
    submittedTo: "HEC-NRPU",
    department: "Biotechnology",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-12",
    title: "Development and Interfacial Modifications of Scalable Perovskite Solar Cells",
    submittedTo: "HEC-NRPU",
    department: "Physics",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-13",
    title: "Temperature Dependence of Topological Invariants in Topological Phases of Matter",
    submittedTo: "HEC-NRPU",
    department: "Physics",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-14",
    title: "Leveraging Advanced Technologies for Groundwater Management: Addressing Land Subsidence and Predicting Drought in Southern Punjab, Pakistan, using Geospatial & Deep Learning Approaches",
    submittedTo: "HEC-NRPU",
    department: "Forestry & Range Management",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-15",
    title: "Information Technology for Promotion of Heritage Tourism: Studying the Potential and Developing Prototype for Promotion of Virtual Tourism in Taxila Pakistan",
    submittedTo: "HEC-NRPU",
    department: "Tourism & Hospitality Management",
    status: "Proposed",
    fundingSource: "HEC-NRPU"
  },
  {
    id: "PP-16",
    title: "Conserving Biodiversity: Investigating the Insect Fauna in Murree and Surroundings (HEC/R&D/RGA/NRPU/2025/87715)",
    submittedTo: "NRPU (HEC)",
    department: "Forestry & Range Management",
    status: "Proposed",
    fundingSource: "NRPU (HEC)"
  },
  {
    id: "PP-17",
    title: "Dengue Outbreak in Murree: Taxonomic and Ecological Approach on Mosquito Fauna of Murree Hills",
    submittedTo: "NRPU (HEC)",
    department: "Forestry & Range Management",
    status: "Proposed",
    fundingSource: "NRPU (HEC)"
  },
  {
    id: "PP-18",
    title: "Murree Forest Residues-Based Carbon Integrated with Metal-Organic Framework for electrocatalysis",
    submittedTo: "NRPU (HEC)",
    department: "Chemistry",
    status: "Proposed",
    fundingSource: "NRPU (HEC)"
  },
  {
    id: "PP-19",
    title: "Preparation of starch based biodegradable materials for the adsorption of heavy metals and water filtration",
    submittedTo: "NRPU (HEC)",
    department: "Chemistry",
    status: "Proposed",
    fundingSource: "NRPU (HEC)"
  },
  {
    id: "PP-20",
    title: "Design and Indigenous Development of AI-IoT Based Experiments for Undergrad Physics",
    submittedTo: "NRPU (HEC)",
    department: "Physics",
    status: "Proposed",
    fundingSource: "NRPU (HEC)"
  },
  {
    id: "PP-21",
    title: "Optimization of light and stress in perovskite/silicon tandem solar cells for their operation in a practical environment",
    submittedTo: "SCO Pak-China, PSF",
    department: "Physics",
    status: "Proposed",
    fundingSource: "SCO Pak-China, PSF"
  },
  {
    id: "PP-22",
    title: "Sustained Release of Single and Dual Drugs via Smart Nano Carriers for Cancer and Infectious Disease Therapy",
    submittedTo: "Pakistan Science Foundation (PSF)",
    department: "Chemistry",
    status: "Proposed",
    fundingSource: "Pakistan Science Foundation (PSF)"
  },
  {
    id: "PP-23",
    title: "Pure Flow AI: AI-Powered IoT Solution for Sustainable Rainwater-to-Drinking Water Conversion",
    submittedTo: "Pakistan Science Foundation (PSF)",
    department: "Chemistry",
    status: "Proposed",
    fundingSource: "Pakistan Science Foundation (PSF)"
  },
  {
    id: "PP-24",
    title: "Establishing a Lincoln Corner in the library at Kohsar University, Murree, to the Public Affairs Section",
    submittedTo: "US Embassy Islamabd",
    department: "English",
    status: "Proposed",
    fundingSource: "US Embassy Islamabd"
  },
  {
    id: "PP-25",
    title: "Molecular Genetic Diversity of Apis mellifera across Northern Areas of Pakistan",
    submittedTo: "Pakistan Science Foundation",
    department: "Environmental Sciences",
    status: "Proposed",
    fundingSource: "Pakistan Science Foundation"
  },
  {
    id: "PP-26",
    title: "Assessing the Adaptability and Yield Potential of Various Cut Flowers (Gladiolus, Lilies, and Lavender) in the Murree",
    submittedTo: "Pakistan Science Foundation (PSF)",
    department: "Forestry & Range Management",
    status: "Proposed",
    fundingSource: "Pakistan Science Foundation (PSF)"
  },
  {
    id: "PP-27",
    title: "Assessing Butterfly Diversity and Conservation Strategies in Murree Hills, Punjab",
    submittedTo: "Pakistan Science Foundation (PSF)",
    department: "Forestry & Range Management",
    status: "Proposed",
    fundingSource: "Pakistan Science Foundation (PSF)"
  },
  {
    id: "PP-28",
    title: "Impact of Pesticides to foraging and nesting behavior of solitary Masan bees (Hymenoptera: Megachilidae) under field and laboratory condition (NRO-186)",
    submittedTo: "Agriculture Linkage Program (ALP), PARC",
    department: "Forestry & Range Management",
    status: "Proposed",
    fundingSource: "Agriculture Linkage Program (ALP), PARC"
  },
  {
    id: "PP-29",
    title: "Circular Economy Approaches to Solid Waste Management: A Pathway to Climate-Smart Agriculture (Concept Paper No: CP-3-2025-2601-3F6U)",
    submittedTo: "Pakistan Science Foundation (PSF)",
    department: "Forestry & Range Management",
    status: "Proposed",
    fundingSource: "Pakistan Science Foundation (PSF)"
  },
  {
    id: "PP-30",
    title: "Assessing Butterfly Diversity and Conservation Strategies in Murree Hills, Punjab (Concept Paper NO. # CP-1-2025-2901-GDQA)",
    submittedTo: "Pakistan Science Foundation (PSF)",
    department: "Forestry & Range Management",
    status: "Proposed",
    fundingSource: "Pakistan Science Foundation (PSF)"
  }
];
