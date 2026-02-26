interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-[#2DBEFF] ${className}`}>
      {title}
    </h2>
  );
}
