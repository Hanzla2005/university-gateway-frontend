import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { FileText, Download, Eye, Building2 } from "lucide-react";

// Admin 17 & above folder PDFs
import pdf_add_registrar from "@/assets/pdfs/Admin 17 & above/Additional Registrar (BS-19).pdf";
import pdf_asst_controller from "@/assets/pdfs/Admin 17 & above/Assistant Controller of Examinations (BS-17).pdf";
import pdf_asst_dir_it from "@/assets/pdfs/Admin 17 & above/Assistant Director Information Technology Services (BS-17).pdf";
import pdf_asst_registrar from "@/assets/pdfs/Admin 17 & above/Assistant Registrar (BS-17).pdf";
import pdf_asst_treasurer from "@/assets/pdfs/Admin 17 & above/Assistant Treasurer (BS-17).pdf";
import pdf_dep_controller from "@/assets/pdfs/Admin 17 & above/Deputy Controller of Examinations (BS-18).pdf";
import pdf_dep_dir_purchase from "@/assets/pdfs/Admin 17 & above/Deputy Director Purchase & Store (BS-18).pdf";
import pdf_dep_dir_qec from "@/assets/pdfs/Admin 17 & above/Deputy Director, Quality Enhancement Cell (QEC) (BS-18).pdf";
import pdf_dep_provost from "@/assets/pdfs/Admin 17 & above/Deputy Provost (BS-18).pdf";
import pdf_personal_sec from "@/assets/pdfs/Admin 17 & above/Personal Secretary (BS-17).pdf";
import pdf_project_dir from "@/assets/pdfs/Admin 17 & above/Project Director (BS-19).pdf";
import pdf_senior_eng_elec from "@/assets/pdfs/Admin 17 & above/Senior EngiSenior Engineer  XEN (Electrical) (BS-18).pdf";
import pdf_senior_eng_civil from "@/assets/pdfs/Admin 17 & above/Senior Engineer (Civil)  XEN (Civil) (BS-18).pdf";
import pdf_senior_medical from "@/assets/pdfs/Admin 17 & above/Senior Medical Officer (BS-18).pdf";

interface PositionItem {
	title: string;
	file: string;
	grade: string;
}

const positions: PositionItem[] = [
	{ title: "Additional Registrar", file: pdf_add_registrar, grade: "BS-19" },
	{ title: "Project Director", file: pdf_project_dir, grade: "BS-19" },
	{ title: "Deputy Controller of Examinations", file: pdf_dep_controller, grade: "BS-18" },
	{ title: "Deputy Director, Purchase & Store", file: pdf_dep_dir_purchase, grade: "BS-18" },
	{ title: "Deputy Director, Quality Enhancement Cell (QEC)", file: pdf_dep_dir_qec, grade: "BS-18" },
	{ title: "Deputy Provost", file: pdf_dep_provost, grade: "BS-18" },
	{ title: "Senior Engineer – XEN (Electrical)", file: pdf_senior_eng_elec, grade: "BS-18" },
	{ title: "Senior Engineer (Civil) – XEN (Civil)", file: pdf_senior_eng_civil, grade: "BS-18" },
	{ title: "Senior Medical Officer", file: pdf_senior_medical, grade: "BS-18" },
	{ title: "Assistant Controller of Examinations", file: pdf_asst_controller, grade: "BS-17" },
	{ title: "Assistant Director, Information Technology Services", file: pdf_asst_dir_it, grade: "BS-17" },
	{ title: "Assistant Registrar", file: pdf_asst_registrar, grade: "BS-17" },
	{ title: "Assistant Treasurer", file: pdf_asst_treasurer, grade: "BS-17" },
	{ title: "Personal Secretary", file: pdf_personal_sec, grade: "BS-17" },
];

const gradeColor = (grade: string) => {
	if (grade === "BS-19") return "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300";
	if (grade === "BS-18") return "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300";
	return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
};

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

					<div className="mb-10">
						<div className="flex items-center gap-3 mb-3">
							<div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center">
								<Building2 className="h-5 w-5" />
							</div>
							<h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
								Administrative &amp; Statutory Lists
							</h1>
						</div>
						<p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
							Kohsar University Murree invites applications from qualified, dynamic, and dedicated
							individuals for the following administrative and statutory positions (BPS 17 &amp; above).
							Click on any position to view or download the detailed requirements.
						</p>
					</div>

					{/* Summary Stats */}
					<div className="grid grid-cols-3 gap-4 mb-10">
						{[
							{ grade: "BS-19", color: "bg-purple-50 border-purple-200 text-purple-700 dark:bg-purple-950/30 dark:border-purple-800 dark:text-purple-300" },
							{ grade: "BS-18", color: "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-300" },
							{ grade: "BS-17", color: "bg-slate-50 border-slate-200 text-slate-700 dark:bg-slate-900/30 dark:border-slate-700 dark:text-slate-300" },
						].map((stat) => (
							<div key={stat.grade} className={`border rounded-lg p-4 text-center ${stat.color}`}>
								<div className="text-3xl font-bold">{positions.filter(p => p.grade === stat.grade).length}</div>
								<div className="text-sm font-medium mt-1">{stat.grade} Positions</div>
							</div>
						))}
					</div>

					{/* Summary header */}
					<div className="mb-8 flex items-center gap-3">
						<span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
							Administrative Staff (BPS 17 &amp; above)
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
											<span className={`inline-block mt-1.5 text-xs font-bold px-2 py-0.5 rounded ${gradeColor(pos.grade)}`}>
												{pos.grade}
											</span>
										</div>
									</div>
								</div>
								<div className="px-5 pb-5 flex gap-2">
									<button
										onClick={() => handleFileView(pos.file)}
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

export default AdministrativePositions;
