import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Phone, Mail } from "lucide-react";

import guestHouse1 from "@/assets/guestHouse/1.png";
import guestHouse2 from "@/assets/guestHouse/2.png";
import guestHouse3 from "@/assets/guestHouse/3.png";
import guestHouse4 from "@/assets/guestHouse/4.png";
import room1 from "@/assets/guestHouse/room1.png";
import room2 from "@/assets/guestHouse/room2.png";

const AccomodationForm = "/src/assets/pdfs/Accomodation-Form-Guest-House-KUM-updated.pdf";

const GuestHouse = () => {
  const images = [guestHouse1, guestHouse2, guestHouse3, guestHouse4, room1, room2];

  return (
    <div className="bg-gray-50">
      <Navbar />
      <PageHeader 
        title="Kohsar Guest House" 
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Guest House" }]}
        subtitle="Your home away from home in the serene hills of Murree."
      />

      <main className="container-main py-16">
        {/* Image Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-primary text-center mb-8">A Glimpse of Our Guest House</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={images[0]} alt="Featured Guest House view" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            {images.slice(1, 5).map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={src} alt={`Guest House room or view ${index + 1}`} className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* About & Location Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-primary">Welcome to Kohsar Guest House</h2>
            <p className="text-gray-600 leading-relaxed">
              Experience comfort and tranquility at the Kohsar University Guest House. Nestled near the picturesque Firhill Hotel, our guest house offers a serene retreat with modern amenities. Whether you are visiting for academic purposes, leisure, or a special event, we provide a welcoming environment to make your stay memorable.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For more information or to make a booking, please visit our website or contact us directly. We look forward to welcoming you to your home away from home.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRmuZpYbncskG844edkbg4B8465Tj-vQfq1k-CCnKq5bZzpw/viewform" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Online Reservation
                </Button>
              </a>
              <a href={AccomodationForm} download="Accomodation-Form-Guest-House.pdf">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  <Download className="mr-2 h-5 w-5" />
                  Download Application
                </Button>
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.464892392411!2d73.4027499152119!3d33.91528068063968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfd7af70ae0c9f%3A0xc01b8b5597e7bf89!2sKohsar%20University%20Murree!5e0!3m2!1sen!2s!4v1678886425639!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kohsar University Murree Location"
            ></iframe>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-serif text-center text-primary mb-6">Contact Us</h3>
            <div className="flex flex-wrap justify-center gap-8 text-center">
                <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary/80"/>
                    <a href="tel:+923347826271" className="text-gray-700 hover:text-primary text-lg">+92334-7826271</a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-primary/80"/>
                    <a href="tel:+923125860123" className="text-gray-700 hover:text-primary text-lg">+92312-5860123</a>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary/80"/>
                    <a href="https://kum.edu.pk/GuestHouse" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary text-lg">kum.edu.pk/GuestHouse</a>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuestHouse;
