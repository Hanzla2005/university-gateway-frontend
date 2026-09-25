import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { FileText, Download, Eye, Briefcase } from "lucide-react";

// Admin 16 and Below folder PDFs
import pdf_cctv from "@/assets/pdfs/Admin 16 and Below/CCTV Technician , BS-11.pdf";
import pdf_computer_op from "@/assets/pdfs/Admin 16 and Below/Computer Operator (BS-15).pdf";
import pdf_cook from "@/assets/pdfs/Admin 16 and Below/Cook, BS-05.pdf";
import pdf_hostel_warden from "@/assets/pdfs/Admin 16 and Below/Hostel Warden (BS-14).pdf";
import pdf_junior_clerk from "@/assets/pdfs/Admin 16 and Below/Junior Clerk , BS-11.pdf";
import pdf_pa from "@/assets/pdfs/Admin 16 and Below/Personal Assistant (BS-16).pdf";
import pdf_storekeeper from "@/assets/pdfs/Admin 16 and Below/Senior Storekeeper (BS-14).pdf";

interface PositionItem {
	title: string;
	file: string;
	grade: string;
}

const positions: PositionItem[] = [
	{ title: "Personal Assistant", file: pdf_pa, grade: "BS-16" },
	{ title: "Computer Operator", file: pdf_computer_op, grade: "BS-15" },
	{ title: "Hostel Warden", file: pdf_hostel_warden, grade: "BS-14" },
	{ title: "Senior Storekeeper", file: pdf_storekeeper, grade: "BS-14" },
	{ title: "CCTV Technician", file: pdf_cctv, grade: "BS-11" },
	{ title: "Junior Clerk", file: pdf_junior_clerk, grade: "BS-11" },
	{ title: "Cook", file: pdf_cook, grade: "BS-05" },
];

const NonTeachingPositions = () => {
	const handlePdfView = (pdfPath: string) => {
		window.open(pdfPath, "_blank");
	};

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<PageHeader
				title="Non Teaching Positions (1 to 16)"
				subtitle="Staff Career Opportunities (BPS 01 - 16) at Kohsar University Murree"
			/>
			<div className="flex-1">
				<div className="container-main px-4 sm:px-6 lg:px-8 py-12">

					<div className="mb-10">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center">
								<Briefcase className="h-5 w-5" />
							</div>
							<h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
								Non Teaching Positions &amp; List (BPS 1 to 16)
							</h1>
						</div>
					</div>

					{/* Summary */}
					<div className="mb-8 flex items-center gap-3">
						<span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300">
							Non-Teaching Staff
						</span>
						<div className="flex-1 h-px bg-border" />
						<span className="text-sm text-muted-foreground">{positions.length} positions available</span>
					</div>

					{/* Positions List */}
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
						{positions.map((pos) => (
							<div
								key={pos.title}
								className="bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col"
							>
								<div className="p-5 flex-1">
									<div className="flex items-start gap-3">
										<div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
											<FileText className="h-5 w-5" />
										</div>
										<div className="flex-1 min-w-0">
											<h3 className="text-sm font-semibold text-foreground leading-snug">
												{pos.title}
											</h3>
											<span className="inline-block mt-1.5 text-xs font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300">
												{pos.grade}
											</span>
										</div>
									</div>
								</div>
								<div className="px-5 pb-5 flex gap-2">
									<button
										onClick={() => handlePdfView(pos.file)}
										className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs font-medium"
									>
										<Eye className="h-3.5 w-3.5" />
										View
									</button>
									<a
										href={pos.file}
										download
										className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-border text-foreground hover:bg-muted transition-colors text-xs font-medium text-center"
									>
										<Download className="h-3.5 w-3.5" />
										Download
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default NonTeachingPositions;
