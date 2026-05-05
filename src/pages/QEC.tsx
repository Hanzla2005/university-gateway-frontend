import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  Users,
  Mail,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Target,
  BookOpen,
  Globe,
  Lightbulb,
  Trophy,
  FileText
} from "lucide-react";

// Team Images
import hussainImg from "@/assets/QEC/QEC Team/Hussain Mustafa.jpg";
import ibrahimImg from "@/assets/QEC/QEC Team/Dr Ibrahim.jpeg";
import raheelImg from "@/assets/QEC/QEC Team/DD QEC.jpeg";
import sehrishImg from "@/assets/QEC/QEC Team/Sehrish.jpg";
import aroobaImg from "@/assets/QEC/QEC Team/Arooba.jpg";
import sadamImg from "@/assets/QEC/QEC Team/sadamHussain.png";

// Intro Images
import intro1 from "@/assets/QEC/Introduction/1.png";
import intro2 from "@/assets/QEC/Introduction/2.png";

const teamMembers = [
  {
    name: "Dr. Syed Hussain Mustafa Gillani",
    title: "Director QEC",
    qualification: "PhD (Management Sciences)",
    institute: "NUML, Islamabad, Pakistan",
    email: "director.qec@kumedu.pk",
    image: hussainImg
  },
  {
    name: "Dr. Muhammad Ibrahim",
    title: "Deputy Director QEC",
    qualification: "PhD (Sociology)",
    institute: "GCUF Faisalabad, Pakistan",
    email: "dr.muhammad.ibrahim@kum.edu.pk",
    image: ibrahimImg
  },
  {
    name: "Mr. Qazi Muhammad Raheel Anjum",
    title: "Deputy Director QEC",
    qualification: "MS (Materials & Surface Engineering)",
    institute: "SCME, NUST, Islamabad, Pakistan",
    email: "qazi.raheel@kum.edu.pk",
    image: raheelImg
  },
  {
    name: "Mr. Sadam Hussain Abbasi",
    title: "Deputy Director QEC",
    qualification: "MS (Computer Science)",
    institute: "Kohsar University Murree, Pakistan",
    email: "Saddam.abbasi@kum.edu.pk",
    image: sadamImg
  },
  {
    name: "Ms. Sehrish Batool",
    title: "Assistant Director QEC",
    qualification: "MS (Computer Science)",
    institute: "UET Taxila, Pakistan",
    email: "sehrish.batool@kum.edu.pk",
    image: sehrishImg
  },
  {
    name: "Ms. Arooba Khurshid",
    title: "Assistant Director QEC",
    qualification: "MS (Clinical Psychology)",
    institute: "International Islamic University, Islamabad, Pakistan",
    email: "arooba.khurshid@kum.edu.pk",
    image: aroobaImg
  }
];

const activitiesCalendar = [
  { month: "July 2025", activities: ["Implementation Plans of RIPE (2024-25) of QEC, Human Resource and IT Departments", "Finalization of Implementation Plans", "Implementation Plans of RIPE (2024-25) form Registrar, Human Resource and Academics Departments", "Finalization of Implementation Plans of RIPE (2024-25)", "Implementation Plans of RIPE (2024-25) form Exams and Student Affairs Departments", "Finalization of Implementation Plans", "Data Collection from Departments for YPR 2024-25", "Institutional Quality Circle Meeting on QEC Evaluation Visits"] },
  { month: "Aug 2025", activities: ["Filing, Documentation and Data Verification for YPR 2024-25", "YPR (2024-25) Submission to HEC", "Dossier Preparation for MS/MPhil Programs"] },
  { month: "Sep 2025", activities: ["Dossier Preparation for MS/MPhil Programs", "QEC Internal Verification and Examination of Dossiers"] },
  { month: "Oct 2025", activities: ["Internal Training of PREE and GPR Program Teams as per PSG-2023", "RIPE (2024-25) Action Taken/Compliance Reports", "Working on KUM Plagiarism Policy"] },
  { month: "Nov 2025", activities: ["PREE (2024-25) Action Taken/Compliance Reports", "GPR (2024-25) Action Taken/Compliance Reports", "Online Feedback Surveys & Evaluation (Phase-1)", "Notification of Program Teams for PREE"] },
  { month: "Dec 2025", activities: ["Review of Online Feedback Surveys & Evaluation Reports (Phase-1)", "Training of Faculty on RIPE (External Resource Person)", "Awareness Seminar/Conference/Workshop on QA", "Implementation Plans of GPRs (2025-26)", "Institutional Quality Circle Meeting on Progress/Action Taken Reports"] },
  { month: "Jan 2026", activities: ["Online Feedback Surveys (Phase-II)", "Review of PREE Program Team Reports (2025-26) by QEC", "Feedback and Revision of PREE Reports", "Reports of Online Feedback Surveys (Phase-II)", "Notification of Assessment Team (AT) for 1st cycle of PREE (2025-26)", "Conductance of 1st cycle PREE (2025-26)"] },
  { month: "Feb 2026", activities: ["Working on Membership of some International QA body", "Implementation Plans and Executive Summaries of PREE (2025-26)", "Awareness Seminars/Conferences/Workshops on QA", "Action Taken/Compliance Report of PREE conducted in 2024-25"] },
  { month: "March 2026", activities: ["Conductance of GPR (2025-26)", "Collection and Review of Examiners Reports of GPR (2025-26)", "Notification of Assessment Team (AT) for 2nd Cycle of PREE (2025-26)", "Joint Meeting with Academics Department and QEC about Curriculum Review and Revision", "Institutional Quality Circle Meeting on Implementation Plans", "Conductance of 2nd cycle of PREE (2025-26)"] },
  { month: "April 2026", activities: ["Implementation Plans & Executive Summaries of 2nd cycle of PREE (2025-26)", "Action Taken/Compliance Reports of GPR conducted in 2024-25", "Action Taken/Compliance Reports of RIPE conducted in 2024-25"] },
  { month: "May 2026", activities: ["Notification of Assessment Team (AT) for PREE (2025-26)", "Conductance of PREE of 3rd Cycle of PREE (2025-26)", "Examiners Reports of 3rd cycle of PREE (2025-26) and discussion with Vice Chancellor/Chair IQC"] },
  { month: "June 2026", activities: ["Implementation Plans and Executive Summaries of 3rd cycle of PREE (2025-26)", "Joint Meeting with Academics Department and QEC about Curriculum Review and Revision", "Online Feedback Surveys & Evaluation (Phase-III)", "Reports of Online Feedback Surveys & Evaluation (Phase-III)", "Institutional Quality Circle on YPR"] },
];

const qaEventsContribution = [
  { sr: 1, title: "HEC Annual Progress Review Meeting", participants: "Dr. Syed Hussain Mustafa Gillani, Mr. Qazi M. Raheel Anjum", dominion: "National", date: "05th -07th January 2026" },
];

const qaEventsParticipation = [
  { title: "6th International Conference of PNQAHE", participants: "All QEC Team members", dominion: "International", date: "14th -15th April 2026" },
  { title: "Transforming Higher Education: Shaping the Future of Online Distance Learning", participants: "Mr. Qazi M. Raheel Anjum, Ms. Sehrish Batool", dominion: "National", date: "29th September 2025" },
  { title: "RIPE Framework for Quality Assurance in Higher Education", participants: "Mr. Qazi M. Raheel Anjum", dominion: "National", date: "10th November 2025" },
];

const qaEventsOrganization = [
  { title: "Preparation of Self-Assessment Reports (SARs) for Program Review for Effectiveness and Enhancement (PREE)", participants: "Program Team members", dominion: "National", date: "26th February 2026" },
];

const graduatePrograms = [
  { sr: 1, title: "MS (Food Sciences & Technology)", status: "Issued" },
  { sr: 2, title: "MS (Microbiology)", status: "Dossier submitted" },
  { sr: 3, title: "MS (Chemistry)", status: "Dossier submitted" },
  { sr: 4, title: "MS (Biotechnology)", status: "Dossier submitted" },
  { sr: 5, title: "MS (Botany)", status: "Dossier Prepared" },
  { sr: 6, title: "MS (Physics)", status: "Dossier Prepared" },
];

const QEC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHeader
        title="Quality Enhancement Cell"
        subtitle="Kohsar University Murree"
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Introduction Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-start border-b border-gray-100 pb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-primary border-l-4 border-accent pl-4">
              Introduction
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>
                Quality Enhancement Cell- KUM was established, with a mandate to implement Quality standards and processes of HEC, ensuring academic standards through the conduct of different surveys /assessments and providing feedback to the institutional departments for their future actions.
              </p>
              <p>
                QEC, on the basis of Quality processes, receives feedback and suggests certain suggestions/recommendations to institutional management for consideration and action.
              </p>
              <p>
                Kohsar University Murree (KUM), through implementation of these set QA standards/guidelines, develop professional knowledge, competencies and employable skills of its graduates, enabling them to contribute effectively in the job market.
              </p>
              <p>
                QEC, through quality interventions, extends its support to the departments in improving standard of their teaching‐learning and research enabling its compatibility with other national and international HEIs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <img src={intro1} alt="QEC Activity 1" className="w-full rounded-lg shadow-sm border border-gray-100" />
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
                <p className="text-primary font-semibold text-xs uppercase tracking-wider">Quality Standards</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
                <p className="text-primary font-semibold text-xs uppercase tracking-wider">HEC Guidelines</p>
              </div>
              <img src={intro2} alt="QEC Activity 2" className="w-full rounded-lg shadow-sm border border-gray-100" />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-serif text-primary">QEC Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "To establish Kohsar University Murree as a globally recognized, top-ranking institution by developing an agile and efficient environment that promotes global best practices. Our goal is to create a collaborative network where every stakeholder is empowered to achieve excellence."
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-serif text-primary">QEC Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              To provide exceptional education by continuously improving a supportive and dynamic learning environment through:
            </p>
            <ul className="space-y-3">
              {[
                "Facilitating coordination and collaboration among all stakeholders.",
                "Integrating and applying best practices to create meaningful value.",
                "Ensuring fairness and consistency through ongoing monitoring and assessment."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Activities Calendar */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-3xl font-serif text-primary">Activities Calendar</h2>
            <p className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-widest">Academic Year 2025-26</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider border-b border-primary/10 w-48">Month</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider border-b border-primary/10">Activity / Event / Task</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {activitiesCalendar.map((row) => (
                    <tr key={row.month} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-6 align-top">
                        <span className="font-bold text-primary text-base">{row.month}</span>
                      </td>
                      <td className="px-6 py-6">
                        <ul className="space-y-2">
                          {row.activities.map((act, i) => (
                            <li key={i} className="flex gap-2 items-start text-gray-700 text-sm">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {act}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Capacity Development */}
        <section className="space-y-12">
          <h2 className="text-3xl font-serif text-primary border-b border-gray-200 pb-4">Capacity Development</h2>

          <div className="space-y-10">
            {/* QA Events Contribution */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                QA Events Contribution
              </h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Sr.</th>
                      <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Event Title</th>
                      <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Participation/Contribution</th>
                      <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Dominion</th>
                      <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {qaEventsContribution.map((ev) => (
                      <tr key={ev.sr} className="text-sm">
                        <td className="px-4 py-3">{ev.sr}</td>
                        <td className="px-4 py-3 font-semibold text-gray-900">{ev.title}</td>
                        <td className="px-4 py-3 text-gray-600">{ev.participants}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded border border-gray-200 text-[10px] font-bold uppercase">{ev.dominion}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{ev.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Participation & Organization */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-accent" />
                  QA Events Participation
                </h3>
                <div className="space-y-3">
                  {qaEventsParticipation.map((ev, i) => (
                    <div key={i} className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-bold text-gray-900 leading-tight">{ev.title}</h4>
                        <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-gray-100 border border-gray-200 flex-shrink-0">{ev.dominion}</span>
                      </div>
                      <p className="text-xs text-primary font-medium mb-2">{ev.participants}</p>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold">
                        <Calendar className="h-3 w-3" />
                        {ev.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  QA Events Organization
                </h3>
                <div className="space-y-3">
                  {qaEventsOrganization.map((ev, i) => (
                    <div key={i} className="p-5 border border-gray-200 rounded-lg bg-white shadow-sm hover:border-primary/30 transition-colors">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-bold text-gray-900 leading-tight">{ev.title}</h4>
                        <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-gray-100 border border-gray-200 flex-shrink-0">{ev.dominion}</span>
                      </div>
                      <p className="text-xs text-primary font-medium mb-2">{ev.participants}</p>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold">
                        <Calendar className="h-3 w-3" />
                        {ev.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QEC Team */}
        <section className="space-y-12">
          <h2 className="text-3xl font-serif text-primary border-b border-gray-200 pb-4">QEC Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-inner">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-1">{member.name}</h3>
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">{member.title}</p>
                
                <div className="space-y-3 w-full pt-4 border-t border-gray-100 text-sm">
                  <div className="flex items-start justify-center gap-2">
                    <GraduationCap className="h-4 w-4 text-gray-400 mt-0.5" />
                    <p className="text-gray-600 leading-snug">
                      {member.qualification} <br />
                      <span className="text-gray-900 font-medium">{member.institute}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <a href={`mailto:${member.email}`} className="text-primary hover:underline transition-colors">{member.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Graduate Programs */}
        <section className="space-y-8 bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <div>
            <h2 className="text-3xl font-serif text-primary">Graduate Programs</h2>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Status of current MS/MPhil Programs</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Sr.</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Degree Title</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Status of NOC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {graduatePrograms.map((prog) => (
                  <tr key={prog.title} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-500">{prog.sr}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{prog.title}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase ${prog.status === 'Issued' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-blue-50 text-blue-700 border border-blue-100'}`}>
                        {prog.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default QEC;
