import { motion } from "framer-motion";
import admissionBanner2 from "@/assets/admissionBanner-2.png";

const IntermediateAdmission = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-main py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border">
            <div className="p-6 md:p-8 border-b border-border bg-primary/5">
              <h1 className="text-3xl md:text-4xl font-serif text-primary text-center">
                Intermediate Admissions
              </h1>
              <p className="mt-4 text-center text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Welcome to Kohsar University Murree's Intermediate Admission page. 
                Please note that for intermediate programs, you must apply in person 
                at our campus. We look forward to welcoming you to our institution.
              </p>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="relative rounded-lg overflow-hidden shadow-md">
                <img 
                  src={admissionBanner2} 
                  alt="Intermediate Admissions Banner" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-8 bg-accent/10 border border-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  How to Apply On-Campus
                </h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    Visit the Kohsar University Murree campus admissions office during working hours.
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    Obtain the physical admission form and prospectus.
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    Fill out the form completely and attach all required documents (matriculation result, CNIC/B-form, domicile, photos, etc.).
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 font-bold">•</span>
                    Submit the form along with the required processing fee at the designated bank or fee counter.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntermediateAdmission;
