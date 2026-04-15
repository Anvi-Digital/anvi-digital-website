interface PageContainerProps {
  children: React.ReactNode;
  as?: "div" | "section" | "article";
  id?: string;
  className?: string;
  suppressHydrationWarning?: boolean;
}

export default function PageContainer({
  children,
  as: Tag = "section",
  id,
  className = "",
  suppressHydrationWarning,
}: PageContainerProps) {
  return (
    <Tag
      id={id}
      className={`py-14 ${className}`}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      <div className="max-w-screen-2xl mx-auto w-full px-8">{children}</div>
    </Tag>
  );
}
