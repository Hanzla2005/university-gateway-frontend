import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import dplAdvertisementPdf from "@/assets/pdfs/Advertisment-DPL.pdf";
import visitingFacultyPdf from "@/assets/pdfs/Visiting-Advertisment.pdf";
import adminPostFormPdf from "@/assets/pdfs/Job-Application-Form-Administrative-Post-KUM-1.pdf";
import internshipPdf from "@/assets/pdfs/WhatsApp-Image-2025-08-11-at-5.33.58-PM.pdf";
import { FileText } from "lucide-react";

const jobListings = [
	{
		title: "Advertisement DPL 2025",
		pdf: dplAdvertisementPdf,
	},
	{
		title: "Visiting Faculty Advertisement Fall 2025",
		pdf: visitingFacultyPdf,
	},
	{
		title: "Application Form for Administrative Posts",
		pdf: adminPostFormPdf,
	},
	{
		title: "Advertisement for paid Internship",
		pdf: internshipPdf,
	},
];

const Jobs = () => {
	const handlePdfClick = (pdfPath: string) => {
		window.open(pdfPath, "_blank");
	};

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<PageHeader
				title="Jobs & Career Opportunities"
				subtitle="Join Kohsar University Murree"
			/>
			<div className="flex-1">
				<div className="container-main px-4 sm:px-6 lg:px-8 py-14">
					<div className="mb-8">
						<p className="text-muted-foreground leading-relaxed mb-6">
							Kohsar University Murree is looking for talented and dedicated
							individuals to join our team. Below are the current job openings
							and opportunities available at our university. Click on any position
							to view the detailed advertisement or application form.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						{jobListings.map((job) => (
							<button
								key={job.title}
								onClick={() => handlePdfClick(job.pdf)}
								className="w-full text-left px-6 py-4 flex items-center gap-4 bg-muted/50 hover:bg-muted transition-colors rounded-lg"
							>
								<FileText className="h-6 w-6 text-primary flex-shrink-0" />
								<span className="text-lg text-foreground">{job.title}</span>
							</button>
						))}
					</div>

					<div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8">
						<h2 className="text-xl font-serif text-foreground mb-4">
							How to Apply
						</h2>
						<p className="text-muted-foreground leading-relaxed mb-4">
							To apply for any of the above positions:
						</p>
						<ol className="space-y-3 text-muted-foreground list-decimal list-inside">
							<li>
								Select the position from the "Jobs" dropdown menu in the navigation
								bar
							</li>
							<li>Download the relevant advertisement or application form</li>
							<li>Follow the instructions provided in the document</li>
							<li>Submit your application through the specified channels</li>
						</ol>
						<p className="text-sm text-muted-foreground italic mt-6">
							For any queries regarding job applications, please contact the HR
							Department at hr@kohsaruniversity.edu.pk
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Jobs;
