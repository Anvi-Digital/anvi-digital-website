interface PageContainerProps {
  children: React.ReactNode;
  as?: "div" | "section" | "article";
  id?: string;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingMap = {
  none: "",
  sm: "py-12 px-4 md:px-8",
  md: "py-20 px-4 md:px-8",
  lg: "py-32 px-4 md:px-8",
};

export default function PageContainer({
  children,
  as: Tag = "section",
  id,
  className = "",
  padding = "lg",
}: PageContainerProps) {
  return (
    <Tag id={id} className={`${paddingMap[padding]} ${className}`}>
      <div className="max-w-screen-2xl mx-auto w-full">{children}</div>
    </Tag>
  );
}
