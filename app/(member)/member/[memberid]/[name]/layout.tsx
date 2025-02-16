export default function MemberLayout({
  gallery,
  social,
  funfact,
  children,
}: {
  children: React.ReactNode;
  gallery: React.ReactNode;
  social: React.ReactNode;
  funfact: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col gap-2">
      {children}
      {social}
      {funfact}
      {gallery}
    </div>
  );
}
