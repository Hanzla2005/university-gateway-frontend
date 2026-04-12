import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Award, Users, DollarSign, BookOpen, Calendar, FileText, CheckCircle2 } from "lucide-react";
import scholarshipBanner from "@/assets/scholarship/banner.png";

const Scholarships = () => {
  const scholarshipTypes = [
    {
      title: "Merit Based Scholarship by KUM",
      students: 55,
      amount: "576,000",
      description: "Rewards students for their hard work and encourages excellence in academics.",
      icon: Award,
    },
    {
      title: "Need Based Scholarship by KUM",
      students: 7,
      amount: "195,000",
      description: "Empowers talented but financially deprived students to acquire quality education.",
      icon: Users,
    },
    {
      title: "PEEF Scholarship by Government of Punjab",
      students: 6,
      amount: "110,340",
      description: "For intermediate and graduation-level studies in 2023.",
      icon: BookOpen,
    },
    {
      title: "Flood Affected Student Fee Waver by KUM",
      students: 17,
      amount: "340,490",
      description: "Supports enrolled students from flood-affected areas for one semester.",
      icon: Users,
    },
    {
      title: "EUSP Scholarship by HEC",
      students: 15,
      amount: "1,693,760",
      description: "Elevates socio-economic status through modern education and career opportunities.",
      icon: DollarSign,
    },
    {
      title: "Momina Cheema Foundation Scholarship",
      students: 5,
      amount: "154,000",
      description: "Supports healthcare, education, and empowerment of deserving students.",
      icon: Award,
    },
    {
      title: "MORA Scholarship",
      students: 101,
      amount: "1,220,000",
      description: "Supports talented students with strong ethical standards and leadership.",
      icon: Users,
    },
  ];

  const meritScholarships = [
    { id: 1, registrationNo: "S22-KUM-BCS-0562", name: "Sherjeel Abbasi", cgpa: 3.94 },
    { id: 2, registrationNo: "S22-KUM-BCS-0549", name: "Iqra Shahid", cgpa: 3.89 },
    { id: 3, registrationNo: "S22-KUM-BCS-0551", name: "Khayam Abbasi", cgpa: 3.76 },
    { id: 4, registrationNo: "S22-KUM-BEN-0527", name: "Laiba Latif Shekih", cgpa: 3.86 },
    { id: 5, registrationNo: "S22-KUM-BEN-0509", name: "Naseem e Saher", cgpa: 3.84 },
    { id: 6, registrationNo: "S22-KUM-BEN-0516", name: "Haider Ali", cgpa: 3.84 },
    { id: 7, registrationNo: "S22-KUM-BCS-0485", name: "Nayab Khalid", cgpa: 3.93 },
    { id: 8, registrationNo: "S22-KUM-BCS-0440", name: "Ayesha Akabar", cgpa: 3.90 },
    { id: 9, registrationNo: "S22-KUM-BCS-0466", name: "Shahhayar", cgpa: 3.86 },
    { id: 10, registrationNo: "S22-KUM-BMC-0376", name: "Noor E Seher Waseem", cgpa: 3.95 },
  ];

  const needBasedScholarships = [
    { id: 1, name: "Hania Shabir", department: "Microbiology", amount: 20000 },
    { id: 2, name: "Amna Bibi", department: "CS", amount: 30000 },
    { id: 3, name: "Asfand Shahzad", department: "T&H", amount: 20000 },
    { id: 4, name: "Hira Ehsan", department: "General", amount: 20000 },
    { id: 5, name: "Meerab Yasir", department: "MLT", amount: 32000 },
    { id: 6, name: "Rimsha Aftabar", department: "Microbiology", amount: 34000 },
    { id: 7, name: "Eman Javed", department: "Microbiology", amount: 39000 },
  ];

  const peefScholarships = [
    { id: 1, name: "Muhammad Adnan", department: "English", amount: 18350 },
    { id: 2, name: "Hadiqa Saeed", department: "Urdu", amount: 18350 },
    { id: 3, name: "Saman Munir", department: "Statistic", amount: 18590 },
    { id: 4, name: "Andleeb Akhter", department: "Math", amount: 18350 },
    { id: 5, name: "Rabia Bibi", department: "Sociology", amount: 18350 },
    { id: 6, name: "Laiba Sadiq", department: "Pol.Science", amount: 18350 },
  ];

  const euspScholarships = [
    { id: 1, name: "Moawaz Munir", department: "Computer Science", amount: 179200 },
    { id: 2, name: "Malik Muhammad Ali Hassan", department: "Computer Science", amount: 179200 },
    { id: 3, name: "Irfan Ullah", department: "Psychology", amount: 102720 },
    { id: 4, name: "Maryam Zafar", department: "Psychology", amount: 102720 },
    { id: 5, name: "Kainat Sabir", department: "Psychology", amount: 102720 },
    { id: 6, name: "Zamama Sajid", department: "Statistics", amount: 102720 },
    { id: 7, name: "Umm e Habiba", department: "Sociology", amount: 102720 },
    { id: 8, name: "Momal Wajid", department: "Sociology", amount: 102720 },
    { id: 9, name: "Faryal Gul", department: "English", amount: 102720 },
    { id: 10, name: "Sayyam Ahmad Qureshi", department: "English", amount: 102720 },
  ];

  const mominaScholarships = [
    { id: 1, name: "Maryam Bibi", department: "BS MLT", amount: 30000 },
    { id: 2, name: "Aiman", department: "BS PHYSICS", amount: 30000 },
    { id: 3, name: "Sana Bibi", department: "Bs CS", amount: 30000 },
    { id: 4, name: "Atiqa Wajid", department: "BS ENV", amount: 34000 },
    { id: 5, name: "Aymen Javed", department: "BS MIC", amount: 30000 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader 
        title="Scholarships at Kohsar University" 
        subtitle="Supporting talented and deserving students through various scholarship programs"
      />

      <div className="container-main px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Banner Image */}
        <section className="">
          <div className="w-full">
            <img 
              src={scholarshipBanner} 
              alt="Scholarships at Kohsar University" 
              className="w-full h-auto block max-h-80 sm:max-h-96 md:max-h-[450px] lg:max-h-[500px] object-contain mx-auto"
              loading="lazy"
            />
          </div>
        </section>

        {/* HONHAAR Scholarship Announcement */}
        <section className="bg-gradient-to-r from-primary/10 via-blue-50 to-primary/10 border border-primary/20 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-serif text-foreground">HONHAAR Undergraduate Scholarship Program 2025</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are pleased to announce that applications are now open for the <strong className="text-foreground">HONHAAR Scholarships – Undergraduate Program for the Winter Semester 2024-2025</strong>. These scholarships aim to support talented and deserving students who meet the following eligibility criteria:
          </p>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <h3 className="text-lg font-semibold text-foreground">Eligibility Criteria:</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Must have a domicile from any district in Punjab.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Must not be older than 22 years of age as of the closing date.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Family monthly income should be less than Rs 300,000 (Affidavit required – <a href="#" className="text-primary hover:underline">Download Sample Affidavit</a>).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Must be enrolled in selected disciplines at selected universities/colleges for the Fall 2024 session.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Minimum marks in FSc./Intermediate:</span>
                </li>
              </ul>
              <div className="ml-6 mt-2 space-y-1 text-muted-foreground">
                <p>• Public Sector Universities: &gt;75% for Sciences and &gt;70% for Arts and Social Sciences.</p>
              </div>
            </div>

            <div className="bg-white rounded p-4 border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-primary" />
                <p className="text-foreground font-semibold">Application Deadline:</p>
              </div>
              <p className="text-muted-foreground mb-4">
                The deadline for submitting online applications is <strong className="text-foreground">October 15, 2024</strong>.
              </p>
              <a 
                href="https://honhaarscholarship.punjabhec.gov.pk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors font-medium"
              >
                Apply Now →
              </a>
            </div>

            <p className="text-sm text-muted-foreground italic mt-4 flex items-start gap-2">
              <FileText className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Note:</strong> This opportunity is available exclusively for 1st-semester undergraduate students. Kindly ensure this information is disseminated widely among eligible candidates.</span>
            </p>
          </div>
        </section>

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-4">Scholarship Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Kohsar University Murree is committed to supporting talented and deserving students through various scholarship programs. We aim to provide equal opportunities for excellence and ensure that financial constraints do not hinder academic aspirations.
          </p>

          {/* Scholarship Summary Table */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Type of Scholarship</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Total Students</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Total Amount (PKR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {scholarshipTypes.map((scholarship, index) => (
                    <tr key={index} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{scholarship.title}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground text-center">{scholarship.students}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground text-right">{scholarship.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Scholarship Cards */}
        <section>
          <h2 className="text-2xl font-serif text-foreground mb-6">Scholarship Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipTypes.map((scholarship, index) => {
              const Icon = scholarship.icon;
              return (
                <div key={index} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-serif text-foreground mb-2">{scholarship.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{scholarship.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">
                      <strong>{scholarship.students}</strong> students
                    </span>
                    <span className="font-semibold text-primary">PKR {scholarship.amount}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Merit Based Scholarship */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-serif text-foreground mb-2">1. Merit Based Scholarship by KUM</h2>
            <p className="text-muted-foreground">
              Rewards students for their hard work and encourages them to continue their pursuit of excellence. Total Disbursement: <strong>PKR 576,000</strong> | Total Students: <strong>55</strong>
            </p>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Sr No</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Registration No</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">CGPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {meritScholarships.map((scholar) => (
                    <tr key={scholar.id} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.id}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.registrationNo}</td>
                      <td className="px-6 py-3 text-sm text-foreground font-medium">{scholar.name}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.cgpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Need Based Scholarship */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-serif text-foreground mb-2">2. Need Based Scholarship by KUM</h2>
            <p className="text-muted-foreground">
              Empowers talented but financially deprived students to acquire high-quality education. Total Disbursement: <strong>PKR 195,000</strong> | Total Students: <strong>7</strong>
            </p>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Sr No</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Department</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount (PKR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {needBasedScholarships.map((scholar) => (
                    <tr key={scholar.id} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.id}</td>
                      <td className="px-6 py-3 text-sm text-foreground font-medium">{scholar.name}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.department}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground text-right">{scholar.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PEEF Scholarship */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-serif text-foreground mb-2">3. PEEF Scholarship by Government of Punjab</h2>
            <p className="text-muted-foreground">
              For intermediate and graduation-level studies. Total Disbursement: <strong>PKR 110,340</strong> | Total Students: <strong>6</strong>
            </p>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Sr No</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Department</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount (PKR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {peefScholarships.map((scholar) => (
                    <tr key={scholar.id} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.id}</td>
                      <td className="px-6 py-3 text-sm text-foreground font-medium">{scholar.name}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.department}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground text-right">{scholar.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* EUSP Scholarship */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-serif text-foreground mb-2">4. EUSP Scholarship by HEC</h2>
            <p className="text-muted-foreground">
              Elevates socio-economic status by enabling chances to get modern education and career opportunities. Total Disbursement: <strong>PKR 1,693,760</strong> | Total Students: <strong>15</strong>
            </p>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Sr No</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Department</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount (PKR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {euspScholarships.map((scholar) => (
                    <tr key={scholar.id} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.id}</td>
                      <td className="px-6 py-3 text-sm text-foreground font-medium">{scholar.name}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.department}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground text-right">{scholar.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Momina Cheema Foundation Scholarship */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-serif text-foreground mb-2">5. Momina Cheema Foundation Scholarship</h2>
            <p className="text-muted-foreground">
              Supports healthcare, education, and empowerment of deserving students. Total Disbursement: <strong>PKR 154,000</strong> | Total Students: <strong>5</strong>
            </p>
          </div>

          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary/10 border-b border-border">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Sr No</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Department</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount (PKR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {mominaScholarships.map((scholar) => (
                    <tr key={scholar.id} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.id}</td>
                      <td className="px-6 py-3 text-sm text-foreground font-medium">{scholar.name}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground">{scholar.department}</td>
                      <td className="px-6 py-3 text-sm text-muted-foreground text-right">{scholar.amount.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* MORA Scholarship */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-serif text-foreground mb-2">6. MORA Scholarship</h2>
            <p className="text-muted-foreground">
              Supports talented and deserving students with strong foundation of ethical standards and inspiring leadership. Total Disbursement: <strong>PKR 1,220,000</strong> | Total Students: <strong>101</strong>
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="text-muted-foreground leading-relaxed">
              The MORA scholarship program is designed to support students who demonstrate exceptional talent, ethical standards, and leadership potential. Recipients are selected based on their academic performance, character, and commitment to contributing to social, economic, cultural, technological, and entrepreneurial development for an inclusive and prosperous future.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif text-foreground mb-4">Interested in Our Scholarships?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kohsar University is committed to supporting talented students. For more information about scholarship eligibility and application procedures, please contact the Student Financial Aid Office.
          </p>
          <a 
            href="mailto:scholarships@kohsaruniversity.edu.pk"
            className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Scholarships;
