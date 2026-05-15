import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { FileText, Download, Eye } from "lucide-react";
import advertisementPdf from "@/assets/pdfs/KUM Statutory Positions Advertisement Final.pdf";
import applicationFormPdf from "@/assets/pdfs/Administrative postions application form for  KUM Statutory Posiitons.pdf";

const jobListings = [
	{
		title: "SITUATIONS VACANT (Advertisement No. 01/2026)",
		pdf: advertisementPdf,
	},
	{
		title: "APPLICATION FORM FOR STATUTORY POSITIONS",
		pdf: applicationFormPdf,
	},
];

const Jobs = () => {
	const handlePdfView = (pdfPath: string) => {
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
					<div className="mb-10">
						<p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
							Kohsar University Murree is looking for talented and dedicated
							individuals to join our team. Below are the current job openings
							and opportunities available at our university. You can view the
							detailed advertisement and download the application forms below.
						</p>
					</div>

					{jobListings.length > 0 ? (
						<div className="grid md:grid-cols-2 gap-8">
							{jobListings.map((job) => (
								<div
									key={job.title}
									className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
								>
									<div className="p-8">
										<div className="flex items-start gap-5 mb-8">
											<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
												<FileText className="h-7 w-7 text-primary" />
											</div>
											<h3 className="text-xl font-bold text-foreground leading-tight pt-1">
												{job.title}
											</h3>
										</div>
										<div className="flex flex-col sm:flex-row gap-4">
											<button
												onClick={() => handlePdfView(job.pdf)}
												className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold shadow-sm"
											>
												<Eye className="h-4 w-4" />
												View PDF
											</button>
											<a
												href={job.pdf}
												download
												className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary/20 text-primary rounded-lg hover:bg-primary/5 hover:border-primary transition-all font-semibold"
											>
												<Download className="h-4 w-4" />
												Download
											</a>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="bg-muted/30 border border-dashed border-muted-foreground/20 rounded-xl p-12 text-center">
							<FileText className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
							<h3 className="text-xl font-medium text-foreground mb-2">No Active Openings</h3>
							<p className="text-muted-foreground">
								New advertisements will be uploaded soon. Please check back later for exciting career opportunities at Kohsar University Murree.
							</p>
						</div>
					)}

					{jobListings.length > 0 && (
						<div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10">
							<h2 className="text-2xl font-serif text-foreground mb-6 flex items-center gap-3">
								<span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-sans">!</span>
								How to Apply
							</h2>
							<div className="max-w-4xl">
								<p className="text-muted-foreground text-lg leading-relaxed mb-8">
									Follow these steps to submit your application for the statutory positions:
								</p>
								<ol className="space-y-6 text-muted-foreground list-decimal list-inside text-lg">
									<li className="pl-2">Download and carefully read the <span className="font-semibold text-foreground">Detailed Advertisement</span></li>
									<li className="pl-2">Download the <span className="font-semibold text-foreground">Application Form</span> relevant to your position</li>
									<li className="pl-2">Fill out the form completely and attach all required documents</li>
									<li className="pl-2">Submit your application through the specified channels mentioned in the advertisement</li>
								</ol>
							</div>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Jobs;
