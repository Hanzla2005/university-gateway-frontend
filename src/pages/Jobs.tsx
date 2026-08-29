import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { GraduationCap, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

interface JobCategory {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	path: string;
	icon: typeof GraduationCap;
	status: string;
	statusType: "active" | "upcoming" | "closed";
}

const jobCategories: JobCategory[] = [
	{
		id: "teaching-positions",
		title: "Teaching Positions",
		subtitle: "Faculty Opportunities (Advertisement No. 02/2026)",
		description:
			"Explore current faculty openings across various departments. View the official advertisement and download the application form in PDF or Word (.docx) format.",
		path: "/jobs/teaching-positions",
		icon: GraduationCap,
		status: "Applications Open",
		statusType: "active",
	},
];

const Jobs = () => {
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
						<div className="flex items-center gap-3 mb-3">
							<div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center">
								<Briefcase className="h-5 w-5" />
							</div>
							<h1 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
								Career Opportunities
							</h1>
						</div>
						<p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
							Kohsar University Murree is seeking talented, qualified, and motivated individuals to join our academic and administrative team. Select a category below to view active vacancies, eligibility requirements, and application forms.
						</p>
					</div>

					{/* Job Categories List */}
					<div className="grid md:grid-cols-2 gap-8 mb-14">
						{jobCategories.map((category) => {
							const Icon = category.icon;
							return (
								<Link
									key={category.id}
									to={category.path}
									className="group bg-card border border-border overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300 flex flex-col justify-between"
								>
									<div className="p-6 sm:p-8">
										<div className="flex items-center justify-between mb-4">
											<span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300">
												{category.status}
											</span>
											<span className="text-xs text-muted-foreground">KUM Recruitment</span>
										</div>

										<div className="flex items-start gap-4 mb-4">
											<div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
												<Icon className="h-6 w-6" />
											</div>
											<div>
												<h2 className="text-xl sm:text-2xl font-bold font-serif text-foreground group-hover:text-primary transition-colors leading-tight">
													{category.title}
												</h2>
												<p className="text-xs text-accent font-medium mt-1">
													{category.subtitle}
												</p>
											</div>
										</div>

										<p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
											{category.description}
										</p>

										<div className="pt-4 border-t border-border/60 flex items-center justify-between text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
											<span>View Details & Application Forms</span>
											<ArrowRight className="h-4 w-4" />
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Jobs;
