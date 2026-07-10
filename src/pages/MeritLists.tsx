import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
const MeritLists = () => {
  return (
    <div>
      <Navbar />
      <PageHeader title="Merit List of BS and MS Programs" />
      <div className="container-main px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center py-16">
          <h2 className="text-3xl font-serif text-foreground mb-4">
            Merit Lists
          </h2>
          <p className="text-lg text-muted-foreground">
            Will be updated soon.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MeritLists;
