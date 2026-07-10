import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Clock } from "lucide-react";

const ApplicationPortal = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <PageHeader title="Online Application Portal" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Admissions", path: "/online-admissions" }, { label: "Application Portal" }]} />
      
      <main className="flex-1 flex items-center justify-center container-main py-20">
        <div className="max-w-2xl mx-auto text-center px-4 bg-white p-12 rounded-xl shadow-sm border border-gray-100">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary relative">
              <Clock className="w-12 h-12 absolute z-10" />
              <div className="w-24 h-24 bg-primary/20 rounded-full animate-ping absolute"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Available Soon
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed font-light">
            We are currently preparing the online application portal for the upcoming admission session. Please check back later.
          </p>
          <div className="inline-block bg-primary/5 border border-primary/20 rounded-lg px-8 py-4">
            <p className="font-medium text-primary text-lg">
              Expected Availability: <strong>Upcoming Session</strong>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplicationPortal;
