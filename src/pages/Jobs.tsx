import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { FileText, Briefcase } from "lucide-react";

const Jobs = () => {
  const jobOpenings = [
    {
      title: "Advertisement DPL 2025",
      description: "View the latest DPL position advertisements",
      icon: Briefcase,
    },
    {
      title: "Visiting Faculty Advertisement Fall 2025",
      description: "Visiting faculty positions for Fall 2025 semester",
      icon: Briefcase,
    },
    {
      title: "Application Form for Administrative Posts",
      description: "Apply for administrative positions at KUM",
      icon: FileText,
    },
    {
      title: "Advertisement for Paid Internship",
      description: "Paid internship opportunities",
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader title="Jobs & Career Opportunities" subtitle="Join Kohsar University Murree" />
      <div className="flex-1">
        <div className="container-main px-4 sm:px-6 lg:px-8 py-14">
          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kohsar University Murree is looking for talented and dedicated individuals to join our team. Below are the current job openings and opportunities available at our university. Click on any position to view the detailed advertisement or application form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => {
              const Icon = job.icon;
              return (
                <div key={index} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-serif text-foreground mb-2">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                      <p className="text-xs text-primary mt-3">Click on the item in the menu to view details →</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h2 className="text-xl font-serif text-foreground mb-4">How to Apply</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To apply for any of the above positions:
            </p>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Select the position from the "Jobs" dropdown menu in the navigation bar</li>
              <li>Download the relevant advertisement or application form</li>
              <li>Follow the instructions provided in the document</li>
              <li>Submit your application through the specified channels</li>
            </ol>
            <p className="text-sm text-muted-foreground italic mt-6">
              For any queries regarding job applications, please contact the HR Department at hr@kohsaruniversity.edu.pk
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
