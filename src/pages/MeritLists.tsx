import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const MeritLists = () => {
  return (
    <div>
      <Navbar />
      <PageHeader title="Merit Lists" />
      <div className="container-main py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
        <p className="text-gray-600">
          This page is under construction. Please check back later for updates.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MeritLists;
