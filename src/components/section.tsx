interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className,
}: SectionProps) {
  const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;
  return (
    <section id={id || sectionId} className="py-20">
      <div className={className}>
        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-6 pb-12 mx-auto">
            {title && (
              <h2 className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-6 max-w-3xl text-xl font-medium text-secondary sm:text-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
            {description && (
              <p className="mt-8 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
