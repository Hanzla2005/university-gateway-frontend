import { motion } from "framer-motion";
import admissionBanner2 from "@/assets/admissionBanner-2.png";
import admissionBanner from "@/assets/admissionBanner.png";
import Footer from "@/components/Footer";
import { Phone, PhoneCall } from "lucide-react";

const helplines = [
  { number: "(051) 9269171", tel: "+92519269171", label: "Line 1" },
  { number: "(051) 9269172", tel: "+92519269172", label: "Line 2" },
  { number: "(051) 9269174", tel: "+92519269174", label: "Line 3" },
  { number: "(051) 9269270", tel: "+92519269270", label: "Line 4" },
  { number: "(051) 9265195", tel: "+92519265195", label: "Line 5" },
];

const IntermediateAdmission = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
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
              <div className="flex flex-col gap-8 items-center">
                <div className="relative rounded-xl overflow-hidden shadow-lg max-w-md w-full border border-border">
                  <img 
                    src={admissionBanner} 
                    alt="Intermediate Admissions Banner" 
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg w-full border border-border">
                  <img 
                    src={admissionBanner2} 
                    alt="Intermediate Admissions Banner 2" 
                    className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>
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

              {/* Admission Helplines Card */}
              <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-primary px-6 py-3 text-white flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <h4 className="font-serif font-semibold text-white">Admission Desk Inquiries</h4>
                    <p className="text-xs text-primary-foreground/80">For queries and assistance regarding intermediate admissions:</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {helplines.map((item, idx) => (
                      <a
                        key={idx}
                        href={`tel:${item.tel}`}
                        className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 bg-gray-50/70 hover:bg-primary/5 hover:border-primary/50 transition-all text-center group"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary mb-0.5">
                          {item.label}
                        </span>
                        <span className="font-bold text-primary text-xs sm:text-sm group-hover:underline flex items-center gap-1">
                          <Phone className="w-3 h-3 text-accent" />
                          {item.number}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default IntermediateAdmission;
