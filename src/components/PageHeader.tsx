import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  breadcrumbs?: Breadcrumb[];
}

const PageHeader = ({ title, subtitle, children, breadcrumbs }: PageHeaderProps) => {
  return (
    <header className="bg-primary text-primary-foreground py-10">
      <div className="container-main">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center text-sm text-primary-foreground/70 mb-2">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center">
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-primary-foreground/90">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-4 w-4 mx-1" />
                )}
              </div>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl font-serif text-white">{title}</h1>
        {subtitle && <p className="mt-2 text-lg text-primary-foreground/80">{subtitle}</p>}
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
