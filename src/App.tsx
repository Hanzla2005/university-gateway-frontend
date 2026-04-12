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
import News from "./pages/News";
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
import JobsDPL2025 from "./pages/JobsDPL2025";
import JobsVisitingFaculty from "./pages/JobsVisitingFaculty";
import JobsAdminPosts from "./pages/JobsAdminPosts";
import JobsInternship from "./pages/JobsInternship";
import OnlineAdmissions from "./pages/OnlineAdmissions";
import MeritLists from "./pages/MeritLists";
import GuestHouse from "./pages/GuestHouse";
import Downloads from "./pages/Downloads";
import Layout from "./components/Layout";

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
            
            {/* Faculties Routes */}
            <Route path="/faculties" element={<Faculties />} />
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
            <Route path="/news" element={<News />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/societies" element={<Societies />} />
            <Route path="/hostel" element={<Hostel />} />
            
            {/* Scholarships */}
            <Route path="/scholarships" element={<Scholarships />} />

            {/* Admissions */}
            <Route path="/online-admissions" element={<OnlineAdmissions />} />
            <Route path="/merit-lists" element={<MeritLists />} />
            
            {/* Guest House */}
            <Route path="/guest-house" element={<GuestHouse />} />

            {/* Downloads */}
            <Route path="/downloads" element={<Downloads />} />

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
            <Route path="/jobs-dpl-2025" element={<JobsDPL2025 />} />
            <Route path="/jobs-visiting-faculty" element={<JobsVisitingFaculty />} />
            <Route path="/jobs-admin-posts" element={<JobsAdminPosts />} />
            <Route path="/jobs-internship" element={<JobsInternship />} />
            
            {/* Other Routes */}
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/institutions/:id" element={<InstitutionDetail />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/announcements/:slug" element={<AnnouncementDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
