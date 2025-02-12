export default function MemberLayout({
  profile,
  gallery,
  social,
  funfact,
}: {
  profile: React.ReactNode;
  gallery: React.ReactNode;
  social: React.ReactNode;
  funfact: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      {profile}
      {social}
      {gallery}
      {funfact}
    </div>
  );
}
