import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="bg-primary pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="container-main">
        <h1 className="text-3xl md:text-4xl font-serif text-primary-foreground">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-primary-foreground/70 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
