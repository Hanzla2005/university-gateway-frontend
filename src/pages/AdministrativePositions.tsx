import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { FileText, Download, Eye, ExternalLink, ArrowLeft, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import adminPositionsImage from "@/assets/pdfs/administrative-positions.jpeg";
import adminFormDocx from "@/assets/pdfs/Revised Administrative postions application form for  KUM Statutory Posiitons.docx";
import adminFormPdf from "@/assets/pdfs/Revised Administrative postions application form for  KUM Statutory Posiitons.pdf";

interface FormItem {
	title: string;
	file: string;
	type: "pdf" | "docx";
	badge?: string;
}

const formListings: FormItem[] = [
	{
		title: "Revised Administrative postions application form for  KUM Statutory Posiitons.pdf",
		file: adminFormPdf,
		type: "pdf",
		badge: "PDF Document",
	},
	{
		title: "Revised Administrative postions application form for  KUM Statutory Posiitons.docx",
		file: adminFormDocx,
		type: "docx",
		badge: "Word Document",
	},
];

const AdministrativePositions = () => {
	const handleFileView = (filePath: string) => {
		window.open(filePath, "_blank");
	};

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<PageHeader
				title="Administrative Positions"
				subtitle="Statutory & Administrative Career Opportunities at Kohsar University Murree"
			/>
			<div className="flex-1">
				<div className="container-main px-4 sm:px-6 lg:px-8 py-12">
					{/* Back Link */}
					<div className="mb-8">
						<Link
							to="/jobs"
							className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to All Jobs & Career Opportunities
						</Link>
					</div>

					<div className="mb-10">
						<div className="flex items-center gap-3 mb-3">
							<div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center">
								<Building2 className="h-5 w-5" />
							</div>
							<h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
								Administrative & Statutory Positions
							</h1>
						</div>
						<p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
							Kohsar University Murree invites applications from qualified, dynamic, and dedicated
							individuals for various administrative and statutory positions. Please review the official advertisement below and
							download the revised application form to apply.
						</p>
					</div>

					{/* Job Advertisement Image Section */}
					<div className="mb-14 bg-card border border-border shadow-md">
						<div className="p-4 sm:p-5 border-b border-border bg-primary/5 flex flex-wrap items-center justify-between gap-4">
							<div>
								<span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1">
									Official Advertisement
								</span>
								<h2 className="text-lg sm:text-xl font-serif text-foreground mt-1.5 font-bold">
									Job Vacancies & Administrative Positions
								</h2>
							</div>
							<div className="flex items-center gap-2.5">
								<button
									onClick={() => handleFileView(adminPositionsImage)}
									className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors"
								>
									<ExternalLink className="h-3.5 w-3.5" />
									View Full Size
								</button>
								<a
									href={adminPositionsImage}
									download="administrative-positions.jpeg"
									className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-primary/30 text-primary text-xs sm:text-sm font-medium hover:bg-primary/5 transition-colors"
								>
									<Download className="h-3.5 w-3.5" />
									Download Image
								</a>
							</div>
						</div>
						<div className="p-4 sm:p-6 bg-muted/10 flex flex-col items-center">
							<div className="w-full max-w-4xl border border-border bg-white shadow-sm overflow-hidden flex justify-center p-2 sm:p-4">
								<img
									src={adminPositionsImage}
									alt="Administrative and Statutory Positions Advertisement"
									className="w-full h-auto max-h-[900px] object-contain cursor-pointer hover:opacity-95 transition-opacity"
									onClick={() => handleFileView(adminPositionsImage)}
								/>
							</div>
							<p className="text-xs text-muted-foreground mt-2.5 flex items-center gap-1.5">
								<Eye className="h-3.5 w-3.5 text-accent" />
								<span>Click the advertisement image or &quot;View Full Size&quot; to open the high-resolution advertisement in a new tab.</span>
							</p>
						</div>
					</div>

					{/* Application Forms Section */}
					<div className="mb-14">
						<div className="mb-6">
							<span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
								Downloads
							</span>
							<h2 className="text-2xl font-serif text-foreground font-bold mt-1">
								Application Form for Administrative Positions
							</h2>
							<p className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-3 max-w-3xl">
								Please click the Download button to download the application form and complete the form carefully. After filling in all the required information, submit your application as per the instructions provided in the advertisement.
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							{formListings.map((job) => {
								const isDocx = job.type === "docx";
								return (
									<div
										key={job.title}
										className="bg-card border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all flex flex-col justify-between"
									>
										<div className="p-6 sm:p-8">
											<div className="flex items-center justify-between mb-4">
												<span
													className={`text-xs font-bold uppercase tracking-wider px-3 py-1 ${
														isDocx
															? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
															: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300"
													}`}
												>
													{job.badge || (isDocx ? "DOCX Form" : "PDF Document")}
												</span>
											</div>
											<div className="flex items-start gap-4 mb-8">
												<div
													className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${
														isDocx
															? "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
															: "bg-primary/10 text-primary"
													}`}
												>
													<FileText className="h-6 w-6" />
												</div>
												<h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug pt-1 break-words">
													{job.title}
												</h3>
											</div>
											<div className="flex flex-col sm:flex-row gap-3 pt-2">
												{isDocx ? (
													<a
														href={job.file}
														download={job.title}
														className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm text-center"
													>
														<Download className="h-4 w-4" />
														Download Form (.docx)
													</a>
												) : (
													<>
														<button
															onClick={() => handleFileView(job.file)}
															className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-sm"
														>
															<Eye className="h-4 w-4" />
															View PDF
														</button>
														<a
															href={job.file}
															download={job.title}
															className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-foreground hover:bg-muted transition-colors font-medium text-sm text-center"
														>
															<Download className="h-4 w-4" />
															Download
														</a>
													</>
												)}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AdministrativePositions;
