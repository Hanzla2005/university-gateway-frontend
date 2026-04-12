import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
              <div className="text-6xl">🚀</div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-serif text-foreground mb-4">
            Coming Soon
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            This page is currently under development. We're working hard to bring you amazing content and features. Please check back later!
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <p className="text-sm text-muted-foreground">
              In the meantime, explore other sections of our website to learn more about Kohsar University Murree.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all"
          >
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComingSoon;
