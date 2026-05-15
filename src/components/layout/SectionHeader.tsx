interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
}

export default function SectionHeader({
  title,
  description,
  align = "center",
  inverted = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mx-auto mb-12 max-w-3xl ${isCenter ? "text-center" : "text-left"}`}
    >
      <h2
        className={`text-balance font-work-sans text-3xl font-black leading-tight tracking-tight md:text-5xl ${
          inverted ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-sm leading-7 md:text-base ${
            inverted ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
