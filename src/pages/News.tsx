import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-20">
        <div className="container-main px-4 py-16 text-center">
          <div className="flex flex-col items-center justify-center min-h-96">
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-3xl font-bold text-primary mb-4">Coming Soon</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              We're working on this page. Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
