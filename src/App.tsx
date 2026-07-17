import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Institutions from "./pages/Institutions";
import InstitutionDetail from "./pages/InstitutionDetail";
import Academics from "./pages/Academics";
import CampusLife from "./pages/CampusLife";
import Announcements from "./pages/Announcements";
import AnnouncementDetail from "./pages/AnnouncementDetail";
import ViceChancellor from "./pages/ViceChancellor";
import StudyAtKUM from "./pages/StudyAtKUM";
import CampusStudentAffairs from "./pages/CampusStudentAffairs";
import UniversityAct from "./pages/UniversityAct";
import Faculties from "./pages/Faculties";
import DepartmentDetail from "./pages/DepartmentDetail";
import AllFacultyMembers from "./pages/AllFacultyMembers";
import FacultyAppliedSciences from "./pages/FacultyAppliedSciences";
import FacultyBiomedical from "./pages/FacultyBiomedical";
import FacultyManagement from "./pages/FacultyManagement";
import FacultyInternational from "./pages/FacultyInternational";
import Management from "./pages/Management";
import UniversityManagement from "./pages/UniversityManagement";
import Media from "./pages/Media";
import Gallery from "./pages/Gallery";
import Conferences from "./pages/Conferences";
import DiplomaCertification from "./pages/DiplomaCertification";
import Events from "./pages/Events";
import MOUs from "./pages/MOUs";
import Achievements from "./pages/Achievements";
import Societies from "./pages/Societies";
import Hostel from "./pages/Hostel";
import Scholarships from "./pages/Scholarships";
import Policies from "./pages/Policies";
import PolicyProcurement from "./pages/PolicyProcurement";
import PolicyHecDisabilities from "./pages/PolicyHecDisabilities";
import PolicyComplaintsDisabilities from "./pages/PolicyComplaintsDisabilities";
import PolicyLabs from "./pages/PolicyLabs";
import PolicyAcademicRules from "./pages/PolicyAcademicRules";
import PolicyHarassmentNotification from "./pages/PolicyHarassmentNotification";
import PolicyHarassmentKum from "./pages/PolicyHarassmentKum";
import PolicyRecruitmentComplaints from "./pages/PolicyRecruitmentComplaints";
import PolicyAct2010 from "./pages/PolicyAct2010";
import PolicySexualHarassment from "./pages/PolicySexualHarassment";
import PolicyDrugTobacco from "./pages/PolicyDrugTobacco";
import PolicyProtectionHarassment from "./pages/PolicyProtectionHarassment";
import Jobs from "./pages/Jobs";
import OnlineAdmissions from "./pages/OnlineAdmissions";
import MeritLists from "./pages/MeritLists";
import GuestHouse from "./pages/GuestHouse";
import Downloads from "./pages/Downloads";
import Library from "./pages/Library";
import Layout from "./components/Layout";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import FacultyProfile from "./pages/FacultyProfile";
import ApplicationPortal from "./pages/ApplicationPortal";
import IntermediateAdmission from "./pages/IntermediateAdmission";

import ORIC from "./pages/ORIC";
import QEC from "./pages/QEC";
import RDProjects from "./pages/RDProjects";
import ResearchPublications from "./pages/ResearchPublications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/vice-chancellor" element={<ViceChancellor />} />
            <Route path="/university-act" element={<UniversityAct />} />
            <Route path="/study-at-kum" element={<StudyAtKUM />} />
            <Route path="/campus-student-affairs" element={<CampusStudentAffairs />} />

            {/* ORIC Routes */}
            <Route path="/oric" element={<ORIC />} />
            <Route path="/qec" element={<QEC />} />
            <Route path="/rd-projects" element={<RDProjects />} />
            <Route path="/research-publications" element={<ResearchPublications />} />

            {/* Faculties Routes */}
            <Route path="/faculties" element={<Faculties />} />
            <Route path="/departments/:id" element={<DepartmentDetail />} />
            <Route path="/faculty/:id" element={<FacultyProfile />} />
            <Route path="/all-faculty-members" element={<AllFacultyMembers />} />
            <Route path="/faculty-applied-sciences" element={<FacultyAppliedSciences />} />
            <Route path="/faculty-biomedical" element={<FacultyBiomedical />} />
            <Route path="/faculty-management" element={<FacultyManagement />} />
            <Route path="/faculty-international" element={<FacultyInternational />} />

            {/* Management Routes */}
            <Route path="/management" element={<Management />} />
            <Route path="/university-management" element={<UniversityManagement />} />

            {/* Media Routes */}
            <Route path="/media" element={<Media />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/diploma-certification" element={<DiplomaCertification />} />
            <Route path="/events" element={<Events />} />
            <Route path="/mous" element={<MOUs />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/societies" element={<Societies />} />
            <Route path="/hostel" element={<Hostel />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:id" element={<StoryDetail />} />

            {/* Other Pages */}
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/guest-house" element={<GuestHouse />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/library" element={<Library />} />
            <Route path="/online-admissions" element={<OnlineAdmissions />} />
            <Route path="/application-portal" element={<ApplicationPortal />} />
            <Route path="/intermediate-admission" element={<IntermediateAdmission />} />

            {/* Policies */}
            <Route path="/policies" element={<Policies />} />
            <Route path="/policy-procurement-rules" element={<PolicyProcurement />} />
            <Route path="/policy-hec-disabilities" element={<PolicyHecDisabilities />} />
            <Route path="/policy-complaints-disabilities" element={<PolicyComplaintsDisabilities />} />
            <Route path="/policy-labs" element={<PolicyLabs />} />
            <Route path="/policy-academic-rules" element={<PolicyAcademicRules />} />
            <Route path="/policy-harassment-notification" element={<PolicyHarassmentNotification />} />
            <Route path="/policy-harassment-kum" element={<PolicyHarassmentKum />} />
            <Route path="/policy-recruitment-complaints" element={<PolicyRecruitmentComplaints />} />
            <Route path="/policy-act-2010" element={<PolicyAct2010 />} />
            <Route path="/policy-sexual-harassment" element={<PolicySexualHarassment />} />
            <Route path="/policy-drug-tobacco" element={<PolicyDrugTobacco />} />
            <Route path="/policy-protection-harassment" element={<PolicyProtectionHarassment />} />

            {/* Jobs Routes */}
            <Route path="/jobs" element={<Jobs />} />

            {/* Other Routes */}
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/institutions/:id" element={<InstitutionDetail />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/announcements/:slug" element={<AnnouncementDetail />} />
            <Route path="/merit-lists" element={<MeritLists />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
