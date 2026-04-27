import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, User } from "lucide-react";

const managementData = [
  {
    office: "Registrar Office",
    staff: [
      { designation: "Registrar", name: "-", email: "-", phone: "-" },
      { designation: "Additional Registrar", name: "Dr. Talat Mehmood", email: "Additionalregistrar@kum.edu.pk", phone: "0300-9852130" },
      { designation: "Deputy Registrar HR", name: "Dr. Muhammad Saffder Hussain", email: "DRHR@kum.edu.pk", phone: "0333-6394250" },
      { designation: "Deputy Registrar EST", name: "Dr Muhammad Qasim", email: "mqasim@kum.edu.pk", phone: "0334-7826271" },
      { designation: "Assistant Registrar", name: "-", email: "-", phone: "-" },
    ]
  },
  {
    office: "Treasurer Office",
    staff: [
      { designation: "Treasurer", name: "-", email: "-", phone: "-" },
      { designation: "Additional Treasurer", name: "Dr Syed Mustafa Gillani", email: "-", phone: "-" },
      { designation: "Deputy Treasurer", name: "Dr Syed Tahir Amin", email: "-", phone: "-" },
      { designation: "Assistant Treasurer", name: "-", email: "-", phone: "-" },
    ]
  },
  {
    office: "Controller of Examination",
    staff: [
      { designation: "Controller", name: "Dr Shaheed ullah", email: "-", phone: "-" },
      { designation: "Additional Controller", name: "-", email: "-", phone: "-" },
      { designation: "Deputy Controller", name: "Dr Rahim Shah", email: "-", phone: "-" },
      { designation: "Assistant Controller", name: "Ansar Mehmood", email: "-", phone: "-" },
    ]
  },
  {
    office: "ORIC",
    staff: [
      { designation: "Director ORIC", name: "Prof Dr Ramla", email: "-", phone: "-" },
      { designation: "Deputy Director ORIC", name: "Qazi Raheel", email: "-", phone: "-" },
      { designation: "Ass Director ORIC", name: "-", email: "-", phone: "-" },
    ]
  },
  {
    office: "Planning & Development",
    staff: [
      { designation: "Director P&D", name: "Dr Aftab Ahmed", email: "-", phone: "-" },
      { designation: "Deputy Director P&D", name: "-", email: "-", phone: "-" },
      { designation: "Ass Director P&D", name: "-", email: "-", phone: "-" },
    ]
  },
  {
    office: "QEC",
    staff: [
      { designation: "Director QEC", name: "Dr Syed Mustafa Gillani", email: "-", phone: "-" },
      { designation: "Deputy Director QEC", name: "Qazi Raheel", email: "-", phone: "-" },
      { designation: "Ass Director QEC", name: "Saddam Hussain Abbasi", email: "-", phone: "-" },
    ]
  },
  {
    office: "IT",
    staff: [
      { designation: "Director IT", name: "Dr Waqas Bangyal", email: "-", phone: "-" },
      { designation: "Deputy Director IT", name: "Ms Sehrish Batool", email: "-", phone: "-" },
      { designation: "Ass Director IT", name: "Mr Sohrab Sattar", email: "-", phone: "-" },
    ]
  },
  {
    office: "Store & Purchase",
    staff: [
      { designation: "Director Store & Purchase", name: "Dr Adnan Dogar", email: "adnan.dogar@kum.edu.pk", phone: "0333-4033726" },
      { designation: "Deputy Director Store & Purchase", name: "Mr Waqas Abbasi", email: "dr.muhammad.waqas@kum.edu.pk", phone: "0334-8515499" },
      { designation: "Ass Director Store & Purchase", name: "Zeeshan Tariq", email: "zeeshantariq@kum.edu.pk", phone: "0315-5372565" },
    ]
  },
  {
    office: "PD",
    staff: [
      { designation: "Project Director", name: "Tahir Ali", email: "-", phone: "0300-5519650" },
      { designation: "Executive Engineer", name: "Muhammad Touseef", email: "-", phone: "0333-6008042" },
      { designation: "Engineer", name: "Hafaz Ubaid", email: "-", phone: "0312-6974590" },
    ]
  }
];

const Management = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <PageHeader title="University Management" />
      
      <main className="flex-1 py-16">
        <div className="container-main px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {managementData.map((section, idx) => (
              <section key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <h2 className="text-xl font-serif text-white">{section.office}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">Designation</th>
                        <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-4 text-sm font-semibold text-slate-700 uppercase tracking-wider">Contact Info</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {section.staff.map((person, pIdx) => (
                        <tr key={pIdx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4">
                            <span className="text-sm font-medium text-slate-900">{person.designation}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-slate-400" />
                              <span className="text-sm text-slate-600">{person.name !== "-" ? person.name : "To be appointed"}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              {person.email !== "-" && (
                                <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                                  <Mail className="h-3.5 w-3.5" />
                                  {person.email}
                                </a>
                              )}
                              {person.phone !== "-" && (
                                <a href={`tel:${person.phone}`} className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary">
                                  <Phone className="h-3.5 w-3.5" />
                                  {person.phone}
                                </a>
                              )}
                              {person.email === "-" && person.phone === "-" && (
                                <span className="text-xs text-slate-400 italic">Not available</span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Management;
