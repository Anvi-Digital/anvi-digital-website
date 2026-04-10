interface PageContainerProps {
  children: React.ReactNode;
  as?: "div" | "section" | "article";
  id?: string;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

const paddingMap = {
  sm: "py-12",
  md: "py-16",
  lg: "py-24",
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
      <div className="max-w-screen-2xl mx-auto w-full px-8">{children}</div>
    </Tag>
  );
}
