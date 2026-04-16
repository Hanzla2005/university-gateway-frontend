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
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, children, breadcrumbs, backgroundImage }: PageHeaderProps) => {
  return (
    <header className="relative text-primary-foreground py-10 overflow-hidden">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${backgroundImage})` }} 
        />
      )}
      <div className={`absolute inset-0 z-0 ${backgroundImage ? "bg-primary/85" : "bg-primary"}`} />
      
      <div className="container-main relative z-10">
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
