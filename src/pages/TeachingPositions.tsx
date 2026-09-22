import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { FileText, Download, Eye, ArrowLeft, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

// Teaching folder PDFs
import pdf_asst_biotech from "@/assets/pdfs/Teaching/Assiatant Professor,  Biotechnology  (BS-19).pdf";
import pdf_asst_forestry from "@/assets/pdfs/Teaching/Assiatant Professor,  Forestry & Range Management (BS-19).pdf";
import pdf_asst_zoology from "@/assets/pdfs/Teaching/Assiatant Professor,  Zoology (BS-19).pdf";
import pdf_asst_cs from "@/assets/pdfs/Teaching/Assiatant Professor, Computer Science (BS-19).pdf";
import pdf_asst_english from "@/assets/pdfs/Teaching/Assiatant Professor, English  (BS-19).pdf";
import pdf_asst_se from "@/assets/pdfs/Teaching/Assistant Professor,  Software Engineering (BS-19).pdf";
import pdf_asst_chem from "@/assets/pdfs/Teaching/Assistant Professor, Chemistry (BS-19).pdf";
import pdf_asst_env from "@/assets/pdfs/Teaching/Assistant Professor, Environmental Sciences (BS-19).pdf";
import pdf_asst_mgmt from "@/assets/pdfs/Teaching/Assistant Professor, Management Sciences (BS-19).pdf";
import pdf_asst_micro from "@/assets/pdfs/Teaching/Assistant Professor, Microbiology (BS-19).pdf";
import pdf_asst_tourism from "@/assets/pdfs/Teaching/Assistant Professor, Tourism and Hospitality (BS-19).pdf";
import pdf_lec_botany from "@/assets/pdfs/Teaching/Lecturer, Botany  (BS-18).pdf";
import pdf_lec_cs from "@/assets/pdfs/Teaching/Lecturer, Computer Science (BS-18).pdf";
import pdf_lec_english from "@/assets/pdfs/Teaching/Lecturer, English (BS-18).pdf";
import pdf_lec_env from "@/assets/pdfs/Teaching/Lecturer, Environmental Sciences (BS-18).pdf";
import pdf_lec_forestry from "@/assets/pdfs/Teaching/Lecturer, Forestry & Range Management (BS-18).pdf";
import pdf_lec_history from "@/assets/pdfs/Teaching/Lecturer, History (BS-18).pdf";
import pdf_lec_islamic from "@/assets/pdfs/Teaching/Lecturer, Islamic Studies   (BS-18).pdf";
import pdf_lec_math from "@/assets/pdfs/Teaching/Lecturer, Mathematics (BS-18).pdf";
import pdf_lec_micro from "@/assets/pdfs/Teaching/Lecturer, Microbiology (BS-18).pdf";
import pdf_lec_psych from "@/assets/pdfs/Teaching/Lecturer, Psychology  (BS-18).pdf";
import pdf_lec_se from "@/assets/pdfs/Teaching/Lecturer, Software Engineering (BS-18).pdf";
import pdf_prof_cs from "@/assets/pdfs/Teaching/Professor, Computer Science (BS-21).pdf";
import pdf_prof_mgmt from "@/assets/pdfs/Teaching/Professor, Management Sciences (BS-21).pdf";

interface PositionItem {
	title: string;
	file: string;
	grade: string;
	category: "Professor" | "Assistant Professor" | "Lecturer";
}

const positions: PositionItem[] = [
	// Professors
	{ title: "Professor, Computer Science", file: pdf_prof_cs, grade: "BS-21", category: "Professor" },
	{ title: "Professor, Management Sciences", file: pdf_prof_mgmt, grade: "BS-21", category: "Professor" },
	// Assistant Professors
	{ title: "Assistant Professor, Biotechnology", file: pdf_asst_biotech, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, Forestry & Range Management", file: pdf_asst_forestry, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, Zoology", file: pdf_asst_zoology, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, Computer Science", file: pdf_asst_cs, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, English", file: pdf_asst_english, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, Software Engineering", file: pdf_asst_se, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, Chemistry", file: pdf_asst_chem, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, Environmental Sciences", file: pdf_asst_env, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, Management Sciences", file: pdf_asst_mgmt, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, Microbiology", file: pdf_asst_micro, grade: "BS-19", category: "Assistant Professor" },
	{ title: "Assistant Professor, Tourism and Hospitality", file: pdf_asst_tourism, grade: "BS-19", category: "Assistant Professor" },
	// Lecturers
	{ title: "Lecturer, Botany", file: pdf_lec_botany, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, Computer Science", file: pdf_lec_cs, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, English", file: pdf_lec_english, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, Environmental Sciences", file: pdf_lec_env, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, Forestry & Range Management", file: pdf_lec_forestry, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, History", file: pdf_lec_history, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, Islamic Studies", file: pdf_lec_islamic, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, Mathematics", file: pdf_lec_math, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, Microbiology", file: pdf_lec_micro, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, Psychology", file: pdf_lec_psych, grade: "BS-18", category: "Lecturer" },
	{ title: "Lecturer, Software Engineering", file: pdf_lec_se, grade: "BS-18", category: "Lecturer" },
];

const categoryBadgeClass: Record<PositionItem["category"], string> = {
	"Professor": "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
	"Assistant Professor": "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
	"Lecturer": "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
};

const TeachingPositions = () => {
	const handlePdfView = (pdfPath: string) => {
		window.open(pdfPath, "_blank");
	};

	const grouped = (["Professor", "Assistant Professor", "Lecturer"] as PositionItem["category"][]).map((cat) => ({
		category: cat,
		items: positions.filter((p) => p.category === cat),
	}));

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<PageHeader
				title="Teaching Positions"
				subtitle="Faculty Career Opportunities at Kohsar University Murree"
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
							Back to All Jobs &amp; Career Opportunities
						</Link>
					</div>

					<div className="mb-10">
						<div className="flex items-center gap-3 mb-3">
							<div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center">
								<GraduationCap className="h-5 w-5" />
							</div>
							<h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
								Teaching Positions
							</h1>
						</div>
						<p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
							Kohsar University Murree invites applications from qualified, dynamic, and dedicated
							individuals for the following faculty positions. Click on any position to view or download
							the detailed requirements.
						</p>
					</div>

					{/* Summary Stats */}
					<div className="grid grid-cols-3 gap-4 mb-10">
						{[
							{ label: "Professor", count: positions.filter(p => p.category === "Professor").length, color: "bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/30 dark:border-purple-800 dark:text-purple-300" },
							{ label: "Asst. Professor", count: positions.filter(p => p.category === "Assistant Professor").length, color: "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-300" },
							{ label: "Lecturer", count: positions.filter(p => p.category === "Lecturer").length, color: "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-300" },
						].map((stat) => (
							<div key={stat.label} className={`border rounded-lg p-4 text-center ${stat.color}`}>
								<div className="text-3xl font-bold">{stat.count}</div>
								<div className="text-sm font-medium mt-1">{stat.label}</div>
							</div>
						))}
					</div>

					{/* Positions grouped by category */}
					{grouped.map(({ category, items }) => (
						<div key={category} className="mb-12">
							<div className="flex items-center gap-3 mb-5">
								<span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded ${categoryBadgeClass[category]}`}>
									{category}
								</span>
								<div className="flex-1 h-px bg-border" />
								<span className="text-sm text-muted-foreground">{items.length} position{items.length !== 1 ? "s" : ""}</span>
							</div>

							<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{items.map((pos) => (
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
													<span className={`inline-block mt-1.5 text-xs font-bold px-2 py-0.5 rounded ${categoryBadgeClass[category]}`}>
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
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default TeachingPositions;
